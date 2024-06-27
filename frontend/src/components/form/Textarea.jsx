import { useState } from "react"
import styled from "styled-components"

const TextareaContainer = styled.div`
    margin: 15px 0;

`
const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
`
const StyledTextarea = styled.textarea`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    height: 120px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    ${(props) => props.$error && css`
        border: 1px solid red;
    `}
    &:focus {
        outline: none;
    }
`

const Textarea = ({ type, text, name, placeholder, onChange, value, required }) => {
    const [error, setError] = useState(false);

    const handleBlur = () => {
        if (required && !value) {
            setError(true);
        } else {
            setError(false);
        }
    };
    return (
        <TextareaContainer>
            <StyledLabel htmlFor={name}>{text}</StyledLabel>
            <StyledTextarea
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
        </TextareaContainer>
    )
}

export default Textarea