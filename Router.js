import React, { Component } from "react";
import Contacts from "./screens/Contacts";
import ContactProfile from "./screens/ContactProfile";
import SideBar from "./screens/SideBar";
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
