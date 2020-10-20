import React from 'react';
import {
  NavItem,
  NavItemLink,
  NavItemTitle
} from './styled';
import Icon from '../Icon';

export type NavigationItemProps = {
  label: string,
  iconType: string,
  url: string
};

const NavigationItem = ({
  label,
  iconType,
  url
}: NavigationItemProps ) => (
  <NavItem>
    <NavItemLink href={url}>
      <Icon type={iconType} fill="teal" />
      <NavItemTitle>{ label }</NavItemTitle>
      <Icon type="ARROW_DOWN" rotate={270} fill="white" bp={'mobile'} />
    </NavItemLink>
  </NavItem>
);

export default NavigationItem;
