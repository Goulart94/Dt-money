
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../transactionsContext";
import { Container } from "./style";




export default function TransactionsTable() {


const {transactions} = useContext(TransactionsContext);

console.log(transactions);


 
   
    return (
 

       <Container>
           <table>
               <thead>
                   <tr>
                      <th>Título</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                   </tr>
               </thead>

               <tbody>
                   {transactions.map(transaction=> {
                       return(
                    <tr key={transaction.id}>
                       <td >{transaction.title}</td>
                       <td className={transaction.type}>
                        {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'EUR'
                       }).format(transaction.amount)}
                       </td>
                       <td>{transaction.category}</td>
                       <td>{new Intl.DateTimeFormat('pt-br')
                       .format(new Date(transaction.createAt))}
                       </td>
                    </tr>)
                   })}
               </tbody>
           </table>
       </Container>
    )
}
