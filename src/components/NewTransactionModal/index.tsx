import Modal from 'react-modal'
import { Container } from './styles'

import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Adicione uma nova transação</h2>

        <input
          placeholder="Transação"
        />

        <input
          type="number"
          placeholder="Valor"
        />
        <input
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar transação
        </button>

      </Container>

    </Modal>
  );
}