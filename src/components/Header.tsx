import { Box, Flex } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      bg={'gray.50'}
      p={3}
      position={'fixed'}
      top='0'
      w={'100vw'}
      boxShadow='md'
    >
      <Box as='a' href='./' fontSize={'2rem'}>
        OP-Tool
      </Box>
    </Flex>
  )
}
