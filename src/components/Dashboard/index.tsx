import Summary from '../Summary';
import TransactionsTable from '../TransactionsTable/intex';
import {Container}  from './style';


export default function 
Dashboard() {
    return (
        <Container>
             <Summary/>
             <TransactionsTable></TransactionsTable>
        </Container>
    )
}
