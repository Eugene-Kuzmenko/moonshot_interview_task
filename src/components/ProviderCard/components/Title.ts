import styled from 'styled-components';

const Title = styled.h3`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.textBlack};
`;

export default Title;
