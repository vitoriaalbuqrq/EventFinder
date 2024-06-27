import styled, { css } from "styled-components";
import { useState } from 'react';

const InputContainer = styled.div`
  margin: 15px 0;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  ${(props) => props.$error && css`
    border: 1px solid red;
  `}

  &:focus {
    outline: none;
  }
`;

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePhone = (phone) => {
    const regex = /^(\(\d{2}\)\s?)?(\d{2})?\s?\d{4,5}-?\d{4}$/;
    return regex.test(phone);
};

const Input = ({ type, text, name, placeholder, onChange, value, required, customOnBlur }) => {
    const [error, setError] = useState(false);

    const handleBlur = (e) => {
        if (required && !value) {
            setError(true);
        } else if (type === 'email' && !validateEmail(value)) {
            setError(true);
        } else if (type === 'tel' && !validatePhone(value)) {
            setError(true);
        } else {
            setError(false);
        }
        
        if (customOnBlur) {
            customOnBlur(e);
        }
    };

    return (
        <InputContainer>
            <StyledLabel htmlFor={name}>{text}</StyledLabel>
            <StyledInput
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required={required}
                onBlur={handleBlur}
                $error={error}
            />
        </InputContainer>
    );
};

export default Input;
