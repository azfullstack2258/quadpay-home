import React from 'react';
import styled from 'styled-components';

import Icons from '../Icons';

const IconWrapper = styled.span`
  ${(props) =>
    props.size &&
    `
    svg {
      width: ${props.size}px;
      height: ${props.size}px;
    }
  `}
  ${(props) =>
    props.width &&
    `
      svg {
        width: ${props.width}px;
      }
    `}
    ${(props) =>
    props.height &&
    `
        svg {
          height: ${props.height}px;
        }
      `}
  ${(props) =>
    props.color &&
    `
    svg > path,
    svg > circle {
      fill: ${props.color};
    }
  `}
  ${(props) =>
    props.stroke &&
    `
    svg > path,
    svg > circle {
      stroke: ${props.stroke}
    }
  `}
`;

const Icon = ({ className = '', name, ...rest }) => {
  const IC = Icons[name];

  return (
    <IconWrapper className={className} {...rest}>
      {IC ? <IC /> : <svg />}
    </IconWrapper>
  );
};

export default Icon;
