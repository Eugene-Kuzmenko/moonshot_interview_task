import styled, { css } from 'styled-components';

interface SubTitleProps {
  withUnderline?: boolean,
}

const SubTitle = styled.div<SubTitleProps>`
  margin-top: 8px;
  
  ${props => props.withUnderline && css`
    text-decoration: underline;
  `}
`;

export default SubTitle;
