import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Example from '../../../utils/storybook-wrapper';
import Stack from '../../../utils/storybook';

import Icon from './Icon';

const IconsContainer = styled.div.attrs({
  className: 'flex items-center flex-wrap',
})`
  svg {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

storiesOf('Components/Icons', module).add('appearance', () => (
  <Example title="Icons appearance">
    <Stack>
      <IconsContainer>
        <Icon name="arrow-down" />
        <Icon name="arrow-left" />
        <Icon name="arrow-right" />
        <Icon name="arrow-up" />
        <Icon name="attention" />
        <Icon name="card" />
        <Icon name="chart" />
        <Icon name="check" />
        <Icon name="check-mark" />
        <Icon name="chevron-right" />
        <Icon name="coming-soon" />
        <Icon name="dashboard" />
        <Icon name="disputes" />
        <Icon name="document" />
        <Icon name="file" />
        <Icon name="layout" />
        <Icon name="lock" />
        <Icon name="logo" />
        <Icon name="mail" />
        <Icon name="notification" />
        <Icon name="offer" />
        <Icon name="outlined-help" />
        <Icon name="paypal" />
        <Icon name="repeat" />
        <Icon name="settings" />
        <Icon name="shopify" />
        <Icon name="star" />
        <Icon name="store" />
        <Icon name="stripe" />
        <Icon name="sync" />
        <Icon name="tracking-info" />
        <Icon name="user" />
      </IconsContainer>
    </Stack>
  </Example>
));
