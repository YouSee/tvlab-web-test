import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
  readonly bgImage?: string;
};

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html,
  body {
    height: 100%;
    position: relative;
  }

  body {
    background-color: #eee;
    background-image: ${props => (props.bgImage ? `url(${props.bgImage})` : 'none')};
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  * {
    outline: none;
  }
`;
