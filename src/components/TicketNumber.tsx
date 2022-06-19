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
import { CopyButtonGroup } from './CopyButtonGroup'

export const TicketNumber = () => {
  const [ticket, setTicket] = useState<string>('')

  const handleOnChange = (number: string) => {
    setTicket(number)
  }
  const handleOnClear = () => {
    setTicket('')
  }

  return (
    <Box>
      <Text fontSize={'2xl'} m={6}>
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
        <CopyButtonGroup content={ticket} text={'接種券番号'} />
      ) : (
        ''
      )}
    </Box>
  )
}
