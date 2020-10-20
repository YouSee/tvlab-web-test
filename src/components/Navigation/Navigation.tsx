import React, { useState } from 'react';
import {
  NavWrapper,
  NavDesktopButton,
  NavMobileButton,
  NavButtonClose,
  NavTitle,
  NavItemList
} from './styled';
import Icon from '../Icon';
import NavigationItem, { NavigationItemProps } from './NavigationItem';

type NavigationProps = {
  items: Array<NavigationItemProps>,
  title: string,
  iconHome?: string,
  iconHomeMobile?: string
};

const Navigation = ({
  items,
  title,
  iconHome,
  iconHomeMobile
}: NavigationProps ) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconTypeHome = iconHome || 'HOME_ACTIVE';
  const iconTypeHomeMobile = iconHomeMobile || 'HOME_ACTIVE_RESPONSIVE';

  const navItems = items.map(item => (<NavigationItem key={item.url} {...item} />));

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavWrapper open={isOpen}>
      { isOpen && (
        <NavButtonClose onClick={handleMenuClick}>
          <Icon type="CLOSE" fill="white" />
        </NavButtonClose>
      )}
      <NavDesktopButton onClick={handleMenuClick}>
        <Icon type={iconTypeHome} large />
        <NavTitle>{ title }</NavTitle>
        <Icon type="ARROW_DOWN" rotate={isOpen ? 180 : 0} fill="white" />
      </NavDesktopButton>
      <NavMobileButton onClick={handleMenuClick}>
        { isOpen ? (
          <React.Fragment>
            <Icon type={iconTypeHome} large />
            <NavTitle>{ title }</NavTitle>
            <Icon type="ARROW_DOWN" rotate={270} fill="white" />
          </React.Fragment>
        ) : (
          <Icon type={iconTypeHomeMobile} large />
        )}
      </NavMobileButton>
      <NavItemList open={isOpen}>
        <ul>{ navItems }</ul>
      </NavItemList>
    </NavWrapper>
  );
};

export default Navigation;
