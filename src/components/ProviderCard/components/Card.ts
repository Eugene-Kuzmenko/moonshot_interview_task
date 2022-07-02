import styled from 'styled-components';

const Card = styled.div`
  padding: 16px 0 12px 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-radius: 12px;
`;

export default Card;
