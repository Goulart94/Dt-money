import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transaction{
    id:number,
    title:string,
    type:string, 
    amount: number,
    category:string,
    createAt:string,

}

type TransactionInput = Omit<Transaction, 'id'|'createAt'>;

interface TransactionProps{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({children}:TransactionProps){

const [transactions, setTransactions]= useState<Transaction[]>([])   
    
    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
 
    }, []);
   async function createTransaction(transactionInput:TransactionInput){

    const response = await api.post('/transactions', { ...transactionInput,
        createAt:new Date(), 
    })
     const {transaction} = response.data;

     setTransactions([
         ...transactions,
         transaction
     ])
    }
    return(

        <TransactionsContext.Provider value={{transactions, createTransaction}}>

            {children}

        </TransactionsContext.Provider>

    );
    
    
}