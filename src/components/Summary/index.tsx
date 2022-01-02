import {Container} from './style';
import entradaImg from '../../ads/Entradas.svg';
import saidasImg from '../../ads/Saídas.svg';
import totalImg from '../../ads/Total.svg';
import { TransactionsContext } from '../../transactionsContext';
import { useContext } from 'react';

export default function Summary() {
const {transactions} = useContext(TransactionsContext);

const summary = transactions.reduce((acc, transaction) => {
  if(transaction.type === 'deposit'){
         
    acc.deposits += transaction.amount;
    acc.total += transaction.amount;

  }else{
    acc.withdraws += transaction.amount;
    acc.total -= transaction.amount;
  }

  return acc;
}, {
  deposits: 0,
  withdraws: 0, 
  total: 0,
});





    return (

      
    <Container>   
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradaImg} alt="Entradas" />
           
          </header> <strong> {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'EUR'
                       }).format(summary.deposits)}</strong>
        </div>

        <div>
          <header>
            <p>Saidas</p>
            <img src={saidasImg} alt="Saidas" />
           
          </header> <strong>- {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'EUR'
                       }).format(summary.withdraws)}</strong>
        </div>

        <div className="highlight-background">
          <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
          
          </header>
          <strong> {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'EUR'
                       }).format(summary.total)}</strong>
        </div>
       
    </Container>    
    )
}
