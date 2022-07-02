import styled from 'styled-components';

import BlankLink from 'components/BlankLink';

const ButtonLink = styled(BlankLink)`
  color: ${({ theme }) => theme.colors.textWhite};
  
  
  &:visited {
    color: ${({ theme }) => theme.colors.textWhite};
  }
  
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  white-space: nowrap;
  
  font-size: 16px;
  line-height: 20px;
  
  border-radius: 40px;
  padding: 12px 18px;
`;

export default ButtonLink;
