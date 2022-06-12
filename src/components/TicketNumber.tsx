import { HStack, PinInput, PinInputField, Box, Text } from '@chakra-ui/react'

export const TicketNumber = () => {
  return (
   <Box>
   <Text fontSize={'xl'} m={6}>接種券番号</Text>
    <HStack mx={6}>
      <PinInput size={'lg'} placeholder={'-'}>
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

   </Box>
  )
}
