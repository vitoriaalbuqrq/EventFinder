import React from 'react';
import styled from 'styled-components';
import CardEvent from './CardEvent';
import theme from '../theme';

const CardActions = styled.div`
    display: flex;
    width: 100%;
    border-left: 1px solid ${theme.colors.main_color};
    border-right: 1px solid ${theme.colors.main_color};
    border-bottom: 1px solid ${theme.colors.main_color};
    border-radius: 0 0 20px 20px;
`;

const ActionButton = styled.button`
    width: 50%;
    padding: 10px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;

    &:nth-child(1) {
        color: ${theme.colors.main_color};
        background-color: #fff;
        border-radius: 0 0 0 20px;
    }
    &:nth-child(2) {
        background-color: ${theme.colors.red};
        color: #fff;
        border-radius: 0 0 20px 0;
    }
    &:hover {
        opacity: 1.5;
    }
`;

const CardEventActions = ({ event, onClick, onEdit, onDelete}) => (
    <CardEvent 
        event={event} 
        onClick={onClick} 
        noborderradius={true}
    >
        <CardActions>
            <ActionButton onClick={onEdit}>Editar</ActionButton>
            <ActionButton onClick={onDelete}>Excluir</ActionButton>
        </CardActions>
    </CardEvent>
);

export default CardEventActions;
