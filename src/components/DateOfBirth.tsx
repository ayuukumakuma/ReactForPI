import {
  Box,
  HStack,
  PinInput,
  PinInputField,
  Button,
  Text,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Spacer,
} from '@chakra-ui/react'
import { useState } from 'react'

export const DateOfBirth = () => {
  type Era = 'ChristianEra' | 'Taisho' | 'Showa' | 'Heisei' | 'Reiwa'
  const [date, setDate] = useState<string>('')
  // const [era, setEra] = useState<Era>('ChristianEra')

  const handleOnChange = (value: string) => {
    setDate(value)
  }
  const handleOnClear = () => {
    setDate('')
  }
  const handleOnCopy = (onlyNumber: boolean) => {
    if (onlyNumber) {
      navigator.clipboard.writeText(date).then(() => console.log('成功'))
    } else {
      const entryTicket = '■生年月日：' + date
      navigator.clipboard.writeText(entryTicket).then(() => console.log('成功'))
    }
  }
  return (
    <Box>
      <Text fontSize={'2xl'} mx={6} mt={6}>
        生年月日
      </Text>

      <ButtonGroup
        m={6}
        p={3}
        rounded={'md'}
        size={'md'}
        variant={'outline'}
        colorScheme={'cyan'}
        border={'2px'}
        borderColor={'gray.200'}
      >
        <Button _hover={{ bg: 'cyan.100' }}>西暦</Button>
        <Spacer mx={3} />
        <Button _hover={{ bg: 'cyan.100' }}>大正</Button>
        <Button _hover={{ bg: 'cyan.100' }}>昭和</Button>
        <Button _hover={{ bg: 'cyan.100' }}>平成</Button>
        <Button _hover={{ bg: 'cyan.100' }}>令和</Button>
      </ButtonGroup>

      <HStack mx={6}>
        <PinInput
          size={'lg'}
          focusBorderColor={'cyan.500'}
          value={date}
          placeholder={'-'}
          onChange={(e) => handleOnChange(e)}
        >
          <PinInputField />
          <PinInputField />
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
          {date === ''
            ? '- - - - - - - -'
            : date.slice(0, 4) +
              '-' +
              date.slice(4, 6) +
              '-' +
              date.slice(6, 8)}
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
        <ButtonGroup variant={'outline'} colorScheme={'cyan'} mx={6}>
          <Popover closeDelay={2000}>
            <PopoverTrigger>
              <Button
                _hover={{ bg: 'cyan.100' }}
                onClick={() => handleOnCopy(true)}
              >
                数字だけコピー
              </Button>
            </PopoverTrigger>
            <PopoverContent w={'150px'}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>コピー完了</PopoverHeader>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button
                _hover={{ bg: 'cyan.100' }}
                onClick={() => handleOnCopy(false)}
              >
                記述形式でコピー
              </Button>
            </PopoverTrigger>
            <PopoverContent w={'150px'}>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>コピー完了</PopoverBody>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      ) : (
        ''
      )}
    </Box>
  )
}
