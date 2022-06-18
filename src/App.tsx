import { Header } from './components/Header'
import { Box } from '@chakra-ui/react'
import { TicketNumber } from './components/TicketNumber'
import { DateOfBirth } from './components/DateOfBirth'

const App = () => {
  return (
    <Box className="App" h={'100vh'} w={'100vw'} bg={'gray.50'} pt={'76.5px'}>
      <Header />
      <TicketNumber />
      <DateOfBirth />
    </Box>
  )
}

export default App
