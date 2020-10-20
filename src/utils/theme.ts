import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    font-family: "Segoe UI", "Segoe UI Web (West European)", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif;
		color: #96b4c2;
	font-size:20px;
  }
`;

const breakpoints = {
  mobile: "600px",
  tablet: "900px",
  desktop: "1200px"
};

export { GlobalStyle, breakpoints };
