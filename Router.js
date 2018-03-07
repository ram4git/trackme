import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Contacts from './screens/Contacts';
import ContactProfile from './screens/ContactProfile';
import RandomProfile from'./screens/RandomContactProfile';
import SideBar from './screens/SideBar';

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: Contacts },
    Profile: { screen: ContactProfile },
    RandomProfile: { screen: RandomProfile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
