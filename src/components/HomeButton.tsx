import React from "react";
import styled from "styled-components";
import { Arrow, Home } from "../assets/icons";

const HomeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  margin-bottom: 15px;
  padding-top: 30px;
  color: white;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const HomeIcon = styled.div`
  margin-right: 10px;
`;

const ArrowIcon = styled.div`
  width: 25px;
  height: 25px;
  svg {
    stroke-width: 5;
  }
`;

class HomeButton extends React.Component {
  public render() {
    return (
      <div>
        <HomeButtonWrapper className="HomeButtonWrapper">
          <HomeIcon>
            <Home />
          </HomeIcon>
          Hjem
          <ArrowIcon>
            <Arrow />
          </ArrowIcon>
        </HomeButtonWrapper>
      </div>
    );
  }
}

export default HomeButton;
