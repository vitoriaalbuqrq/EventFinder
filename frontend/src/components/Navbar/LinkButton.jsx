import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLinkButton = styled(Link)`
  text-decoration: none;
  color:  ${props => props.textColor || '#000'};
  font-weight: bold;
  font-size: .9em;
  white-space: nowrap;
  background-color: ${props => props.bgColor};
  padding: 8px 16px; 
  border-radius: 20px; 
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const LinkButton = ({ to, text, bgColor, textColor}) => {
  return <StyledLinkButton to={to} bgColor={bgColor} textColor={textColor}>{text}</StyledLinkButton>;
};

export default LinkButton;