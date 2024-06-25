import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLinkButton = styled(Link)`
  text-decoration: none;
  color:  ${props => props.textcolor || '#000'};
  font-weight: 600;
  font-size: .9em;
  white-space: nowrap;
  background-color: ${props => props.backgroundcolor};
  padding: 8px 16px; 
  border-radius: 20px; 
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  ${props => props.islogo && `
    font-size: 1.1em;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  `}
`;

const LinkButton = ({ to, text, backgroundcolor, textcolor, islogo }) => {
  const isLogoString = islogo ? 'true' : undefined;
  return <StyledLinkButton to={to} backgroundcolor={backgroundcolor} textcolor={textcolor} islogo={isLogoString}>{text}</StyledLinkButton>;
};

export default LinkButton;