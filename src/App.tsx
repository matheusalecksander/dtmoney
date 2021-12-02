import { useState } from 'react'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true)
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header
        onNewTransactionModalOpen={handleNewTransactionModalOpen}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      />
    </TransactionsProvider>
  );
}
