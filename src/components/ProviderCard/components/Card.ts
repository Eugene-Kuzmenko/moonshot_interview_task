import styled from 'styled-components';

const Card = styled.div`
  padding: 16px 0 12px;
  margin: 24px 16px 22px;
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.stroke2};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  
  &:hover {
    box-shadow: 0 2px 6px 0 #00000033;
  }
`;

export default Card;
