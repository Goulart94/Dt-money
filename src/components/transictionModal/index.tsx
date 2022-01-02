import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import closeModal from '../../ads/close.svg';
import addImg from '../../ads/Entradas.svg';
import outImg from '../../ads/Saídas.svg';
import { api } from '../../services/api';
import { TransactionsContext } from '../../transactionsContext';
import { Container, RadioBox, TrasinctionTypeContainer } from './style';



interface NewTransictionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}


export default function TrasinctionModal({isOpen, onRequestClose}:NewTransictionModalProps) {

const {createTransaction} = useContext(TransactionsContext);

const[type, setType]= useState('deposit');

const[title, setTitle] = useState('');

const[amount, setAmount] = useState(0);

const[category, setCategory] = useState('');


async function handleTransiction(event: FormEvent){
event.preventDefault();

 await createTransaction(
  {
    title,
    amount,
    category,
    type,

  })


setTitle('');
setAmount(0);
setCategory('');
setType('deposit');
onRequestClose();

}
    return ( 
       <Modal isOpen={isOpen} onRequestClose={onRequestClose} 
       overlayClassName="react-modal-overLay" className="react-modal"
       >
        <button onClick={onRequestClose} className="close-modal"><img src={closeModal} alt='fecha'></img></button>
             
          <Container onSubmit={handleTransiction} >
            <h2>Cadastra nova transação</h2>

            <input placeholder="Título" 
            className='input-modal' 
            value={title}
            onChange={event =>setTitle(event.target.value)}
            />
        

            <input placeholder="Valor"
             className='input-modal'
              type='number'
              value={amount}
              onChange={event =>setAmount(Number(event.target.value))}
              />

         
            <TrasinctionTypeContainer>
              <RadioBox
              type='button'
              onClick={()=>{setType('deposit')}}
              isActive={type==='deposit'}
              colorActive={'green'}
              >
               <img src={addImg} alt='Entrada'></img>
               <span>Entrada</span>

              </RadioBox>
              <RadioBox
               type='button'
               onClick={()=>{setType('whitdrawer')}}
               isActive={type==='whitdrawer'}
               colorActive={'red'}
               >
               <img src={outImg} alt='Entrada'></img>
               <span>Saída</span>

              </RadioBox>
            </TrasinctionTypeContainer>
            


            <input placeholder="Categoria"
             className='input-modal'
             value={category}
             onChange={event =>setCategory(event.target.value)}
             /> 
            <button type="submit">Cadastra</button>
           

          </Container> 
           
        </Modal>
    )
}
