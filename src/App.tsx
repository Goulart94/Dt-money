import { useState } from 'react';


import Dashboard from './components/Dashboard';
import { Header } from './components/Header/intex';
import TrasinctionModal from './components/transictionModal';
import { GlobalStyle } from './style/global';
import { TransactionsContext, TransactionsProvider } from './transactionsContext';



export function App() {

  const [isNewTrasictionOpen, setisNewTrasictionOpen ] = useState(false);

  function handleOpenTransictionModal(){
      setisNewTrasictionOpen(true);
  }

  function  handleCloseTransictionModal(){
      setisNewTrasictionOpen(false);
  }


  return (
    <TransactionsProvider >
     
      <Header onOpenNewTransictionModal={handleOpenTransictionModal} />
      <Dashboard/>
      <TrasinctionModal isOpen={isNewTrasictionOpen} onRequestClose={ handleCloseTransictionModal}></TrasinctionModal>
      <GlobalStyle />
      
     
    </TransactionsProvider>
  );
}


