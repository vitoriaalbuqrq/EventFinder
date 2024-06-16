import styled from "styled-components"

const InputContainer = styled.div`
    margin: 15px 0;
`
const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
`
const StyledSelect = styled.select`
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Select = ({ text, name, options, onChange, value, required }) => {
    return (
        <InputContainer>
            <StyledLabel htmlFor={name}>{text}</StyledLabel>
            <StyledSelect
                name={name}
                id={name}
                onChange={onChange}
                value={value}
            >
                <option>Selecione uma categoria</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </StyledSelect>
        </InputContainer>
    )
}

export default Select