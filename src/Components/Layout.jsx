import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Login from './User/Login'
import Header from './Header';

function Layout() {
  return (
    <>
    <Header/>
<Outlet/>
    </>
  );
}

export default Layout
