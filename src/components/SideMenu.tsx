import React from "react";
import styled from "styled-components";

import HomeButton from "../components/HomeButton";
import {
  Channels,
  Tv,
  Movie,
  Series,
  Parental,
  Favorites
} from "../assets/icons";

const SideMenuWrapper = styled.div`
  position: absolute;
  top: 0px;
  min-height: 100%;
  width: 400px;
`;

const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 350px;
  padding-top: 20px;
  margin-left: 50px;
  background-color: #000018;
  border-radius: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  padding-left: 25px;
  &:hover {
    cursor: pointer;
    background-color: #18223a;
    transition: 0.2s;
    color: white;
  }
`;

const Icon = styled.div`
  width: 40px;
  margin-right: 20px;
`;

interface SideMenuState {
  toggleMenu: boolean;
}

class SideMenu extends React.Component<SideMenuState> {
  state = { toggleMenu: false };

  private handleClick(e: any) {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  public render() {
    const { toggleMenu } = this.state;

    return (
      <SideMenuWrapper color={toggleMenu ? "#000018" : "transparent"}>
        <div onClick={(e: any) => this.handleClick(e.target)}>
          <HomeButton />
        </div>
        {!toggleMenu && (
          <SideMenuContainer>
            <MenuItem>
              <Icon>
                <Channels />
              </Icon>
              Kanaler
            </MenuItem>
            <MenuItem>
              <Icon>
                <Tv />
              </Icon>
              Tv
            </MenuItem>
            <MenuItem>
              <Icon>
                <Movie />
              </Icon>
              Film
            </MenuItem>
            <MenuItem>
              <Icon>
                <Series />
              </Icon>
              Serier
            </MenuItem>
            <MenuItem>
              <Icon>
                <Parental />
              </Icon>
              Børn
            </MenuItem>
            <MenuItem>
              <Icon>
                <Favorites />
              </Icon>
              Min samling
            </MenuItem>
          </SideMenuContainer>
        )}
      </SideMenuWrapper>
    );
  }
}

export default SideMenu;
