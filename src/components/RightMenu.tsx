import React from "react";
import styled from "styled-components";

import { Profile, Search } from "../assets/icons";

const RightMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
  top: 0px;
  height: 99px;
`;

const MenuItem = styled.div`
  margin-right: 10px;
  padding-left: 10px;
  height: 55px;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    color: white;
    transition: 0.2s;
  }
`;

class RightMenu extends React.Component {
  public render() {
    return (
      <RightMenuWrapper className={"RightMenu"}>
        <MenuItem>
          <Search />
        </MenuItem>
        <MenuItem>
          <Profile />
        </MenuItem>
      </RightMenuWrapper>
    );
  }
}

export default RightMenu;
