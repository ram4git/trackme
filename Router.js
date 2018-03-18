import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Home from './screens/Home';
import PendingRequests from './screens/PendingRequests';
import RequestDetails from './screens/RequestDetails';
import CreateRequest from './screens/CreateRequest';
import SideBar from './screens/SideBar';
import About from './screens/About';
import Feedback from './screens/Feedback';

const HomeScreenRouter = DrawerNavigator(
  {
    PendingRequests: { screen: PendingRequests },
    Home: { screen: Home },
    RequestDetails: { screen: RequestDetails },
    CreateRequest: { screen: CreateRequest },
    About: { screen: About },
    Feedback: { screen: Feedback }
  },
  {
    contentComponent: props => <SideBar {...props} />,
  }
);
export default HomeScreenRouter;
