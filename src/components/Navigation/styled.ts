import styled from "styled-components";

interface NavProps {
  readonly open: boolean;
}

export const NavWrapper = styled.div<NavProps>`
  @media(max-width: 767px) {
    height: 100%;
    max-width: 300px;
    position: fixed;
    width: 80vw;

    &:before {
      background-color: #03021e;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      right: ${props => props.open ? '0' : '100%' };
      transition: right 500ms;
      width: 100%;
    }
  }

  @media(min-width: 768px) {
    padding: 20px 0 0 60px;
  }
`;

export const NavButtonClose = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  left: 20px;
  position: absolute;
  top: 30px;
  z-index: 10;

  @media(min-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: #eee;
  cursor: pointer;
  display: flex;
  justify-content: left;
  position: relative;
`;

export const NavDesktopButton = styled(NavButton)`
   @media(max-width: 767px) {
    display: none;
  }
`;

export const NavMobileButton = styled(NavButton)`
  margin: 100px 0 0;
  padding: 0 20px;
  width: 100%;

  @media(min-width: 768px) {
    display: none;
  }
`;
 
export const NavTitle = styled.h3`
  flex: 1 0 auto;
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0 10px;
  padding: 0;
  text-align: left;
`;

export const NavItemList = styled.nav<NavProps>`
  margin-top: 10px;

  @media(max-width: 767px) {
    margin-left: ${props => props.open ? '0' : '-100%' };
    transition: margin-left 500ms;
    width: 100%;
  }

  @media(min-width: 768px) {
    background-color: #03021e;
    border-radius: 10px;
    display: ${props => props.open ? 'block' : 'none' };
    overflow: hidden;
    padding: 10px 0;
    width: 200px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavItemLink = styled.a`
  align-items: center;
  color: #95b3c1;
  display: flex;
  padding: 10px 20px 10px 25px;
  text-align: left;
  text-decoration: none;
  transition: padding-left 500ms;

  &:hover {
    background-color: #18223a;
    padding-left: 30px;
  }
`;

export const NavItemTitle = styled.span`
  flex: 1 0 auto;
  margin: 0 0 0 20px;
`;
