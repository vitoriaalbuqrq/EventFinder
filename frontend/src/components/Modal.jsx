import React from 'react'
import styled from 'styled-components';
import theme from '../theme'
import { IoClose } from "react-icons/io5";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px 20px 20px;
    background-color: #fff;
    border-radius: 20px;
    
    div{
      display: flex;
      align-items: center;
      margin-block: 10px;
    }
    hr {
      margin-bottom: 20px;
    }
`
const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:nth-child(1){
    background-color: #dddddd;
  }
  &:nth-child(2){
    background-color: ${theme.colors.red};
    color: #fff;
  }
`
const Actions = styled.div`
  display: flex;
  justify-content: end;
  gap: 15px;
  padding-top: 20px;
`
const Icon = styled.div`
  text-align: end;
  font-size: 24px;
  color: #686868;
  margin-left: auto;
  cursor: pointer;
`

const Modal = ({ isOpen, children, OnConfirm, OnCancel }) => {

  if (isOpen) {
    return (
      <Overlay>
        <Container>
          <div>
            <h2>Excluir Evento</h2>
            <Icon><IoClose onClick={OnCancel} /></Icon>
          </div>
            <hr />
          <p>Você tem certeza que deseja deletar este evento?</p>
          <Actions>
            <Button onClick={OnCancel}>Cancelar</Button>
            <Button onClick={OnConfirm}>Confirmar</Button>
          </Actions>
        </Container>
      </Overlay>
    );

  }
  return null

}
export default Modal