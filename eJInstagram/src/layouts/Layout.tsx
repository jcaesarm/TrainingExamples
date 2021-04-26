import React from 'react';

interface Props {
  children:any;
}

const Layout = (props: Props) => {

  return (
    <h1>{props.children}</h1>
  );
}

export default Layout;