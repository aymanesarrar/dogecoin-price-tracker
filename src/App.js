import { useState, useEffect } from 'react';
import dogecoing from './img/dogecoin.png';
import axios from 'axios';
import {
  ChakraProvider,
  theme,
  Flex,
  Heading,
  Container,
} from '@chakra-ui/react';
import './index.css'
import PriceCard from './components/PriceCard';

function App() {
  const [ticker, setTicker] = useState({
    low: 0,
    high: 0,
    last: 0,
  });
  useEffect(() => {
    async function getDogecoinPrice() {
      const { data } = await axios.get(
        'https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt'
      );
      setTicker(data.ticker);
    }
    getDogecoinPrice();
    setInterval(() => getDogecoinPrice(), 10000);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <div className="bcg">
        <Container height="100vh">
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <img src={dogecoing} alt="doge coin" width={150} height={150} />
            <Heading as="h1" size="2xl">
              Live Dogecoin Price
            </Heading>
            <Heading p={4} as="h6" size="lg">
              Dogecoin To The Moon 🚀🌕
            </Heading>
          </Flex>
          <Flex
            p="4"
            flexDirection="column"
            justifyContent="space-between"
            maxW="1200px"
          >
            <PriceCard
              type="low"
              price={ticker.low}
              border="4px"
              borderColor="green"
            />
            <PriceCard
              type="high"
              price={ticker.high}
              border="4px"
              borderColor="red"
            />
            <PriceCard
              type="current"
              price={ticker.last}
              border="4px"
              borderColor="blue"
            />
          </Flex>
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
