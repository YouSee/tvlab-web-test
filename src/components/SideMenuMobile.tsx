import React from "react";
import styled from "styled-components";
import ClickAwayListener from "react-click-away-listener";

import {
  Arrow,
  Channels,
  Tv,
  Movie,
  Series,
  Parental,
  Favorites,
  Close,
  Home,
  HomeActive
} from "../assets/icons";

const CloseButton = styled.div`
  z-index: 1;
  position: absolute;
  top: 54px;
  left: 25px;
  width: 40px;
  color: white;
  cursor: pointer;
  &.cross {
    top: 20px;
    left: 20px;
  }
`;

const SideMenuWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  min-height: 100%;
`;

const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-height: 100%;
  width: 300px;
  margin-left: 0px;
  padding-top: 85px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  padding-left: 25px;
  &:hover {
    cursor: pointer;
    background-color: #18223a;
    transition: 0.2s;
    color: white;
  }
`;

const Icon = styled.div`
  margin-right: 20px;
  width: 40px;
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 20px;
  width: 30px;
  transform: rotate(270deg);
`;

const HomeActiveIcon = styled.div`
  svg {
    width: 65px;
    height: 65px;
  }
`;

interface SideMenuState {
  toggleMenu: boolean;
}

class SideMenuMobile extends React.Component<SideMenuState> {
  state = { toggleMenu: false };

  private handleClick() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }
  private clickAway() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  public render() {
    const { toggleMenu } = this.state;
    return (
      <div>
        {!toggleMenu && (
          <CloseButton className="cross" onClick={() => this.handleClick()}>
            <Close />
          </CloseButton>
        )}
        <CloseButton onClick={() => this.handleClick()}>
          {toggleMenu && (
            <HomeActiveIcon>
              <HomeActive />
            </HomeActiveIcon>
          )}
        </CloseButton>
        <SideMenuWrapper
          style={
            toggleMenu
              ? { backgroundColor: "transparent", transition: ".1s" }
              : { backgroundColor: "#000018", transition: ".1s" }
          }
        >
          {!toggleMenu && (
            <ClickAwayListener onClickAway={() => this.clickAway()}>
              <SideMenuContainer>
                <MenuItem onClick={() => this.handleClick()}>
                  <Icon>
                    <Home />
                  </Icon>
                  Hjem
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <Channels />
                  </Icon>
                  Kanaler
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <Tv />
                  </Icon>
                  Tv
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <Movie />
                  </Icon>
                  Film
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <Series />
                  </Icon>
                  Serier
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <Parental />
                  </Icon>
                  Børn
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <Favorites />
                  </Icon>
                  Min samling
                  <ArrowIcon>
                    <Arrow />
                  </ArrowIcon>
                </MenuItem>
              </SideMenuContainer>
            </ClickAwayListener>
          )}
        </SideMenuWrapper>
      </div>
    );
  }
}

export default SideMenuMobile;
