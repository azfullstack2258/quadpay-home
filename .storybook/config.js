import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import '!style-loader!css-loader!../src/css/index.css';
import '!style-loader!css-loader!../src/css/tailwind.output.css';

const ThemeDecorator = storyFn => (
  <Router>
    <>{storyFn()}</>
  </Router>
);

addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>);
addDecorator(ThemeDecorator);
addDecorator(withA11y);
addDecorator(withKnobs);

/* This line loads all the .story files from the components */
const components = require.context(
  '../src/',
  true,
  /stor(ies|y)\.(jsx|js)$/
);

const load = () => {
  components.keys().forEach(components);
};

configure(load, module);
