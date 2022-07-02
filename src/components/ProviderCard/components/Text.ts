import styled, { css } from 'styled-components';

type Color = 'link' | 'danger';

export interface TextProps {
  readonly color: Color,
}

const colorStyle = {
  danger: css`color: red;`,
  link: css`color: blue;`,
}

const Text = styled.span<TextProps>`
  ${props => colorStyle[props.color]} 
`;

export default Text;
