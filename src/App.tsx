import { Header } from './components/Header'
import { Box, Divider } from '@chakra-ui/react'
import { TicketNumber } from './components/TicketNumber'
import { DateOfBirth } from './components/DateOfBirth'
import { TellNumber } from './components/TellNumber'

const App = () => {
  return (
    <Box className="App" h={'100vh'} w={'100vw'} bg={'gray.50'} pt={'76.5px'}>
      <Header />
      <TicketNumber />
      <Divider />
      <DateOfBirth />
      <Divider/>
      <TellNumber />
    </Box>
  )
}

export default App
