import * as React from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
  <NavBar></NavBar>
  <SideBar></SideBar>
  {children}
  </>;
} 