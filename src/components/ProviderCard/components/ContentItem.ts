import styled, { css } from 'styled-components';

interface ContentItemProps {
  shouldGrow?: boolean,
}

const ContentItem = styled.div<ContentItemProps>`
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.text3};
  
  ${({ shouldGrow }) => shouldGrow && css`
    flex-grow: 1;
  `}
  
  h3 {
    color: ${({ theme }) => theme.colors.textBlack};
  }
`;

export default ContentItem;
