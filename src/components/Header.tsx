import { Box, Flex, IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export const Header = () => {
  return (
    <Flex>
      <IconButton
        color={'blue.300'}
        aria-label="back"
        icon={<ChevronLeftIcon />}
      ></IconButton>
      <Box></Box>
    </Flex>
  )
}
