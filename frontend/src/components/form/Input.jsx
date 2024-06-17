import styled from "styled-components"

const InputContainer = styled.div`
    margin: 15px 0;
`
const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
`
const StyledInput = styled.input`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    &:focus {
        outline: none;
    }
`

const Input = ({ type, text, name, placeholder, onChange, onBlur, value, required}) => {
  return (
    <InputContainer>
        <StyledLabel htmlFor={name}>{text}</StyledLabel>
        <StyledInput
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            value={value}
            onBlur={onBlur}
        />
    </InputContainer>
  )
}

export default Input