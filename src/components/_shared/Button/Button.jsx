import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { noop } from 'utils/helper';
import Icons from '../Icons';

const Btn = styled.button`
  svg {
    margin-right: 10px;
  }
`;

const Button = ({ className: cls, caption, type, disabled, icon, onClick }) => {
  const className = useMemo(
    () => `rounded px-6 py-3 flex items-center bg-white text-blue font-bold ${disabled ? 'btn-disabled' : `btn-${type}`} ${cls}`,
    [type, disabled, cls]
  );
  const Icon = icon !== '' ? Icons[icon] : null;

  return (
    <Btn className={className} onClick={onClick}>
      {Icon && <Icon />}
      {caption}
    </Btn>
  );
};

Button.propTypes = {
  caption: PropTypes.string,
  type: PropTypes.string, // primary, secondary, neutral, flat
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  caption: '',
  type: 'primary',
  disabled: false,
  icon: '',
  onClick: noop,
};

export default Button;
