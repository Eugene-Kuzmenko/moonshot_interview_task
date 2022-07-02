import styled, { css } from 'styled-components';

const ALIGN_STYLES = {
  'top': css`align-items: flex-start`,
  'bottom': css`align-items: flex-end`,
  'center': css`align-items: center`,
} as const;

type AlignVariant = keyof (typeof ALIGN_STYLES);

interface ContentProps {
  align?: AlignVariant,
}

const Content = styled.div<ContentProps>`
  display: flex;
  
  ${({ align = 'center' }) => ALIGN_STYLES[align] }
`;

export default Content;
