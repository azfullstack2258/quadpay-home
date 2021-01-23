import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const alignTypes = {
  FILL: 'fill',
  LEFT: 'left',
  RIGHT: 'right',
  SPACE_BETWEEN: 'space-between',
};
const verticalAlignTypes = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
};

const alignItems = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

const justifyContent = {
  fill: 'space-between',
  'space-between': 'space-between',
  left: 'flex-start',
  right: 'flex-end',
};

const StackedItem = styled.div`
  flex-basis: ${(props) => props.width}%;
  line-height: inherit;
`;

const StyledStack = styled.div.attrs({
  className: 'flex flex-row flex-no-wrap max-w-6xl',
})`
  align-items: ${(props) => alignItems[props.alignVertical]};
  justify-content: ${(props) => justifyContent[props.align]};

  > * {
    flex: ${(props) => (props.align === 'fill' ? 1 : 'none')};
    margin-right: ${(props) => (props.align === 'fill' ? '1em' : 0)};
  }
  > *:last-child {
    margin-right: 0;
  }
`;

const Stack = ({ align, alignVertical, widths, children, ...rest }) => {
  let newChildren;
  if (align === alignTypes.FILL || align === alignTypes.SPACE_BETWEEN) {
    newChildren = React.Children.map(children, (child, index) => {
      let width = 0;
      if (widths) {
        width = `${widths[index]}` || 0;
      }

      return <StackedItem width={width}>{child}</StackedItem>;
    });
  } else {
    newChildren = children;
  }

  return (
    <StyledStack align={align} alignVertical={alignVertical} {...rest}>
      {newChildren}
    </StyledStack>
  );
};

Stack.propTypes = {
  align: PropTypes.string,
  alignVertical: PropTypes.string,
  widths: PropTypes.arrayOf(PropTypes.number),
  children: PropTypes.node,
  style: PropTypes.object,
};

Stack.defaultProps = {
  align: alignTypes.FILL,
  alignVertical: verticalAlignTypes.CENTER,
  widths: [],
  children: null,
  style: null,
};

export default Stack;
