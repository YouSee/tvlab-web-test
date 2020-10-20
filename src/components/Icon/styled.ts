import styled from "styled-components";

interface IconWrapperProps {
  readonly large: boolean;
};

interface IconImgProps {
  readonly rotate: number;
  readonly fill: string;
};


export const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-block;
  width: ${props => props.large ? '41px' : '28px' };
`;

export const IconWrapperDesktop = styled(IconWrapper)`
  @media(max-width: 767px) {
    display: none;
  }
`;

export const IconWrapperMobile = styled(IconWrapper)`
  @media(min-width: 768px) {
    display: none;
  }
`;

export const IconImg = styled.img<IconImgProps>`
  display: block;
  max-width: 100%;
  ${props => props.fill === 'white' && (
    'filter: invert(100%) sepia(0%) saturate(348%) hue-rotate(61deg) brightness(114%) contrast(87%);'
  )}
  ${props => props.fill === 'teal' && (
    'filter: invert(76%) sepia(6%) saturate(1108%) hue-rotate(154deg) brightness(90%) contrast(94%);'
  )}
  transform: rotate(${props => props.rotate ? `${props.rotate}deg` : '0deg'});
  transition: transform 500ms;
`;
