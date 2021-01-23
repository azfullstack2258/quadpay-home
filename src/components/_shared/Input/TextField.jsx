import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Icons from '../Icons';

const Prefix = styled.span.attrs({
  className: 'field-prefix',
})`
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
`;
const Suffix = styled.span.attrs({
  className: 'field-suffix',
})`
  right: ${(props) => (props.hasIcon ? '34px' : '8px')};
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
`;
const Input = styled.input`
  &.has-prefix {
    padding-left: 46px;
  }
  &.has-suffix.has-icon {
    padding-right: 72px;
  }
  &.has-suffix:not(.has-icon) {
    padding-right: 46px;
  }
  &.has-icon:not(.has-suffix) {
    padding-right: 34px;
  }
`;

const TextField = ({ hasErrors, disabled, prefix, suffix, icon, ...rest }) => {
  const Icon = icon ? Icons[icon] : null;

  return (
    <div className="relative">
      {prefix && <Prefix>{prefix}</Prefix>}
      <Input
        className={classNames(
          'field',
          (disabled && 'field-disabled') || '',
          (prefix && 'has-prefix') || '',
          (suffix && 'has-suffix') || '',
          (icon && 'has-icon') || '',
          (hasErrors && 'has-errors') || ''
        )}
        {...rest}
      />
      {suffix && <Suffix hasIcon={Boolean(Icon)}>{suffix}</Suffix>}
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
    </div>
  );
};

export default TextField;
