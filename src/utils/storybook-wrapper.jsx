import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Title = styled.div.attrs({
  className: 'absolute leading-normal top-3/2 left-2 text-tertiary',
})``;

const Wrapper = styled.div.attrs((props) => ({
  className: `p-12 pt-16 relative border-solid border-1 border-gray-dark ${
    props.background === 'dark' || props.background === 'gray'
      ? 'bg-gray text-white'
      : 'bg-white text-primary'
  }`,
}))`
  & {
    &.align-center {
      ${tw`flex flex-no-wrap content-center justify-center`}
    }
  }
`;

const Example = ({ align, title, background, children, ...rest }) => (
  <Wrapper
    background={background}
    className={align === 'center' ? 'align-center' : ''}
    {...rest}
  >
    {title ? <Title>{title}</Title> : null}
    {children}
  </Wrapper>
);

Example.propTypes = {
  align: PropTypes.string,
  title: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Example.defaultProps = {
  align: '',
  title: '',
  background: '',
};

export default Example;
