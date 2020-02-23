import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import SideMenu from "../components/SideMenu";
import RightMenu from "../components/RightMenu";
import SideMenuMobile from "../components/SideMenuMobile";

import { GlobalStyle } from "../utils/theme";
import backgroundImage from "../assets/background.png";

const AppWrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  background: url(${backgroundImage}) no-repeat center top fixed;
  background-size: cover;
`;

const AppContainer = styled.div``;

class App extends React.Component {
  public render() {
    return (
      <AppWrapper className="App">
        <GlobalStyle />
        <AppContainer>
          <RightMenu />
          <MediaQuery minDeviceWidth={701} /*device={{ deviceWidth: 700 }}*/>
            <SideMenu toggleMenu={false} />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={700} /*device={{ deviceWidth: 700 }}*/>
            <SideMenuMobile toggleMenu={false} />
          </MediaQuery>
        </AppContainer>
      </AppWrapper>
    );
  }
}

export default App;
