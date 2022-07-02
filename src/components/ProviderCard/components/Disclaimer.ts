import styled from 'styled-components';

import { marginVertical, onMaxScreenWidth } from 'utils/styles';

const Disclaimer = styled.footer`
  text-align: center;
  margin: 16px 96px 0;
  color: ${({ theme }) => theme.colors.stroke1};
  
  ${onMaxScreenWidth('md')} {
    ${marginVertical('40px')}
  }
`;

export default Disclaimer;
