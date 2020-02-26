import React from 'react';
import {
  IconImg,
  IconWrapper,
  IconWrapperDesktop,
  IconWrapperMobile
} from './styled';

const wrapComponents: { [key: string]: Function } = {
  base: IconWrapper,
  desktop: IconWrapperDesktop,
  mobile: IconWrapperMobile
};

type IconProps = {
  bp?: string,
  clickCallback?: Function,
  fill?: string,
  large?: boolean,
  rotate?: number,
  type: string
};

const Icon = ({
  bp,
  clickCallback,
  fill,
  large,
  rotate,
  type
}: IconProps ) => {
  const IconWrap = wrapComponents[bp || 'base'] || IconWrapper;

  const handleClick = () => {
    if (clickCallback) {
      clickCallback();
    }
  }

  return (
    <IconWrap onClick={handleClick} large={large || false}>
      <IconImg
        src={require(`../../assets/icons/${type.toUpperCase()}.svg`)}
        alt=""
        rotate={rotate || 0}
        fill={fill || ''}
      />
    </IconWrap>
  );
};

export default Icon;
