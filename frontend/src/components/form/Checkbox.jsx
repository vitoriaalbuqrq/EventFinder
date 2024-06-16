import styled from "styled-components"
import theme from "../../theme";

const InputContainer = styled.div`
    margin: 15px 0;
    display: flex;
    align-items: center;
    gap: 10px;
`
const StyledLabel = styled.label`
    display: block;
    font-size: 14px;
`
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px; 
  height: 18px; 
  cursor: pointer;
  accent-color: ${theme.colors.main_color}; 
`;

const StyledInput = styled.input`
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`

const Checkbox = ({ text, name, onChange, checked }) => {
  return (
    <InputContainer>
      <StyledCheckbox
        name={name}
        id={name}
        onChange={onChange}
        checked={checked}
      />
      <StyledLabel htmlFor={name}>{text}</StyledLabel>
    </InputContainer>
  );
};

export default Checkbox