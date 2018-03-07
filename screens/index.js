import React, { Component } from "react";
import Contacts from "./Contacts";
import ContactProfile from "./ContactProfile";
import SideBar from "./SideBar";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Contacts },
    Profile: { screen: ContactProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
