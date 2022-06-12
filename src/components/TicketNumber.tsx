import {
  HStack,
  PinInput,
  PinInputField,
  Box,
  Text,
  Button,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react'
import { useState } from 'react'

export const TicketNumber = () => {
  const [ticket, setTicket] = useState<string>('')

  const handleOnChange = (number: string) => {
    setTicket(number)
  }
  const handleOnClear = () => {
    setTicket('')
  }
  const handleOnCopy = (onlyNumber: boolean) => {
    if (onlyNumber) {
      navigator.clipboard.writeText(ticket).then(() => console.log('成功'))
    } else {
      const entryTicket = '■接種券番号：' + ticket
      navigator.clipboard.writeText(entryTicket).then(() => console.log('成功'))
    }
  }
  return (
    <Box>
      <Text fontSize={'xl'} m={6}>
        接種券番号
      </Text>
      <HStack mx={6}>
        <PinInput
          size={'lg'}
          value={ticket}
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
        </PinInput>
      </HStack>
      <HStack>
        <Text fontSize={'4xl'} m={6} w={'280px'}>
          {ticket === '' ? '- - - - - - - - - -' : ticket}
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
      {ticket.length === 10 ? (
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
