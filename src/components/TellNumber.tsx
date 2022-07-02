import {
  HStack,
  PinInput,
  PinInputField,
  Box,
  Text,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CopyButtonGroup } from './CopyButtonGroup'

export const TellNumber = () => {
  const [tell, setTell] = useState<string>('')
  const [formatTell, setFormatTell] = useState<string>('')

  const handleOnChange = (number: string) => {
    setTell(number)
    setFormatTell(formatTell + number.slice(-1))
    if (tell.length === 3) {
      setFormatTell(formatTell + '-' + number.slice(-1))
    } else if (tell.length === 6) {
      if (tell.slice(0, 3) === '043') {
        setFormatTell(formatTell + '-' + number.slice(-1))
      }
    } else if (tell.length === 7) {
      if (tell.slice(0, 3) !== '043') {
        setFormatTell(formatTell + '-' + number.slice(-1))
      }
    } else {
    }
    console.log('debug：' + number.slice(-1))
  }
  const handleOnClear = () => {
    setTell('')
    setFormatTell('')
  }

  return (
    <Box>
      <Text fontSize={'2xl'} m={6}>
        電話番号
      </Text>
      <HStack mx={6}>
        <PinInput
          size={'lg'}
          value={tell}
          focusBorderColor={'cyan.500'}
          placeholder={'-'}
          onChange={(e) => handleOnChange(e)}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          {tell.substring(0, 3) !== '043' ? <PinInputField /> : ''}
        </PinInput>
      </HStack>
      <HStack>
        <Text fontSize={'4xl'} m={6} w={'300px'}>
          {tell === '' ? '- - - - - - - - - -' : formatTell}
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
      {tell.length >= 10 ? (
        <CopyButtonGroup content={formatTell} text={'電話番号'} />
      ) : (
        ''
      )}
    </Box>
  )
}
