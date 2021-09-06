import React from 'react';

import Layout from './components/Layout';

import GlobalStyles from './styles/GlobalStyles';

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>

      <Layout/>
      <GlobalStyles/>
      
    </ChakraProvider>
  );
}

export default App;
