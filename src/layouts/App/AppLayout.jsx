import React from 'react';
import { Helmet } from 'react-helmet';

const AppLayout = (props) => (
  <div className="w-md h-screen m-auto flex p-6 bg-gray-100">
    <Helmet defaultTitle="Relational ID" titleTemplate="Relational ID - %s" />
    {props.children}
    <footer className="fixed bottom-0 w-full text-center">
      Copyright @2020
    </footer>
  </div>
);

export default AppLayout;
