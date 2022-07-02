import styled, { css } from 'styled-components';

type Color = 'link' | 'danger';

export interface TextProps {
  readonly color: Color,
}

const colorStyle = {
  danger: css`color: ${({ theme }) => theme.colors.textDanger};`,
  link: css`color: ${({ theme }) => theme.colors.textLink};`,
}

const Text = styled.span<TextProps>`
  ${({ color }) => colorStyle[color]} 
`;

export default Text;
