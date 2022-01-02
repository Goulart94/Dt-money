import logoImg from '../../ads/Logo.svg';
import { Container, Contet } from './style';

interface ModalProps{
    onOpenNewTransictionModal: () => void;
}


export function Header({onOpenNewTransictionModal}:ModalProps) {
 
    return (
        <Container>
          <Contet>
           <img src={logoImg} alt="mg money" />
           <button type="button" onClick={onOpenNewTransictionModal} >NOVA TRANSAÇÃO</button>
           </Contet>
          
        </Container>
    )
}
