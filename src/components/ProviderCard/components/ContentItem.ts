import styled, { css } from 'styled-components';

import { onMaxScreenWidth } from 'utils/styles';

const ALIGN_STYLES = {
  'top': css`justify-content: flex-start;`,
  'bottom': css`justify-content: flex-end;`,
  'center': css`justify-content: center;`,
} as const;

type AlignVariant = keyof (typeof ALIGN_STYLES);

interface ContentItemProps {
  shouldGrow?: boolean,
  hideOnMedium?: boolean,
  align?: AlignVariant,
}

const ContentItem = styled.div<ContentItemProps>`
  display: flex;
  flex-direction: column;
  
  padding: 0 16px;
  
  ${onMaxScreenWidth('lg')} {
    padding: 0 12px;
  }
  
  color: ${({ theme }) => theme.colors.text3};
  
  ${({ shouldGrow }) => shouldGrow && css`
    flex-grow: 1;
  `}
  
  ${({ hideOnMedium }) => hideOnMedium && css`
    ${onMaxScreenWidth('lg')} {
      display: none;
    }
  `}
  
  ${({ align = 'top' }) => ALIGN_STYLES[align]}
  
`;

export default ContentItem;
