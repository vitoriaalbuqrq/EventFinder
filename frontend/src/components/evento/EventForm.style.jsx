import styled from "styled-components";

// Estilos para a aplicação
export const AppContainer = styled.div`
    padding: 2rem;
`;

// Estilos para o cabeçalho
export const Header = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    max-width: 45%;
`;

export const HeaderTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const HeaderDescription = styled.p`
    font-size: 0.9rem;
`;

// Estilos para o formulário
export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Form = styled.form`
    max-width: 480px;
    margin: 0 auto;
`;

export const InputsContainer = styled.div`
    min-height: 280px;
`;

// Estilos para as ações
export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

export const ActionButton = styled.button`
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    transition: 0.3s;
    font-weight: bold;
    background-color: ${props => props.primary ? '#404BE3' : '#8a8a8a'};
    color: #fff;

    &:hover {
        opacity: 0.9;
    }
`;
