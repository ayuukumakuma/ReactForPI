import {
  Box,
  HStack,
  PinInput,
  PinInputField,
  Button,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CopyButtonGroup } from './CopyButtonGroup'
import { EraRadioGroup } from './EraRadioGroup'

export const DateOfBirth = () => {
  type Era = '西暦' | '大正' | '昭和' | '平成' | '令和'
  const [date, setDate] = useState<string>('')
  const [era, setEra] = useState<Era>('西暦')
  const [formatDate, setFormatDate] = useState<string>('')

  const handleOnChange = (value: string) => {
    setDate(value)
    if (era !== '西暦') {
      if (value.length === 3) {
        switch (era) {
          case '大正':
            const year_t = date.slice(0, 2)
            const AD_t = Number(year_t) + 11 + 1900
            setFormatDate(String(AD_t) + '-')
            break
          case '昭和':
            const year_s = date.slice(0, 2)
            const AD_s = Number(year_s) + 25 + 1900
            setFormatDate(String(AD_s) + '-')
            break
          case '平成':
            const year_h = date.slice(0, 2)
            const AD_h = Number(year_h) - 12 + 2000
            setFormatDate(String(AD_h) + '-')
            break
          case '令和':
            const year_r = date.slice(0, 2)
            const AD_r = Number(year_r) + 18 + 2000
            setFormatDate(String(AD_r) + '-')
            break
        }
      } else if (value.length === 5) {
        setFormatDate(formatDate + value.slice(2, 4) + '-')
      } else if (value.length === 6) {
        if (formatDate.length < 10) {
          setFormatDate(formatDate + value.slice(4, 6))
        }
      }
    } else {
      switch (value.length) {
        case 4:
          setFormatDate(value + '-')
          break
        case 6:
          setFormatDate(formatDate + value.slice(4, 6) + '-')
          break
        case 8:
          if (formatDate.length < 10) {
            setFormatDate(formatDate + value.slice(6, 8))
          }
          break
      }
    }
  }
  const handleOnClear = () => {
    setDate('')
    setFormatDate('')
  }

  return (
    <Box>
      <Text fontSize={'2xl'} mx={6} mt={6}>
        生年月日
      </Text>
      <EraRadioGroup setEra={setEra} setDate={setDate} setFormatDate={setFormatDate} />
      <HStack mx={6}>
        <PinInput
          size={'lg'}
          focusBorderColor={'cyan.500'}
          value={date}
          placeholder={'-'}
          onChange={(e) => handleOnChange(e)}
        >
          {era === '西暦' ? (
            <PinInputField />
          ) : (
            <Text fontSize={'lg'}>{era}</Text>
          )}
          {era === '西暦' ? <PinInputField /> : ''}
          <PinInputField />
          <PinInputField />
          <Text fontSize={'lg'} pr={4}>
            年
          </Text>
          <PinInputField />
          <PinInputField />
          <Text fontSize={'lg'} pr={4}>
            月
          </Text>
          <PinInputField />
          <PinInputField />
          <Text fontSize={'lg'}>日</Text>
        </PinInput>
      </HStack>
      <HStack>
        <Text fontSize={'4xl'} m={6} w={'280px'}>
          {date == '' ? '- - - - - - - -' : formatDate}
        </Text>
        <Button
          size={'md'}
          colorScheme={'cyan'}
          variant={'outline'}
          _hover={{ bg: 'cyan.100' }}
          onClick={() => handleOnClear()}
        >
          クリア
        </Button>
      </HStack>
      {date.length === 8 ? (
        <CopyButtonGroup content={formatDate} text={'生年月日'} />
      ) : (
        ''
      )}
    </Box>
  )
}
