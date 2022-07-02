import styled from 'styled-components';
import { onMaxScreenWidth } from 'utils/styles';

const Content = styled.div`
  display: flex;
  
  ${onMaxScreenWidth('lg')} {
    padding: 4px;
  }
`;

export default Content;
