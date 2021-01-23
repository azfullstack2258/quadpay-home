import React from 'react';
import MESSAGES from '../locales';

const role = 'title';

const NotFound = () => (
  <div className="m-auto">
    <p role={role} className="text-2xl">
      {MESSAGES['pageNotFound.title']}
    </p>
  </div>
);

export default NotFound;
