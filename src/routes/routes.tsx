import { Outlet, RouteObject } from 'react-router-dom';
import Guest from '../layouts/Guest';
import Logged from '../layouts/Logged';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import LoggedOutRoute from './LoggedOutRoute';
import LoggedInRoute from './LoggedInRoute';
import MonthlyReport from '../pages/MonthlyReport/MonthlyReport';
import EditMonthlyReport from '../pages/EditMonthlyReport/EditMonthlyReport';
import Guides from '../pages/Guides/Guides';
import AboutUs from '../pages/AboutUs/AboutUs';

export const GUEST_ROUTES: RouteObject[] = [
  {
    element: <Guest/>,
    children: [
      {
        path: '/login',
        element: <LoggedOutRoute><Login/></LoggedOutRoute>,
      }
    ]
  },
];

export const LOGGED_ROUTES: RouteObject[] = [
  {
    element: <Logged/>,
    children: [
      {
        index: true,
        path: '/',
        element: <LoggedInRoute><Home/></LoggedInRoute>,
      },
      {
        path: '/monthly-report',
        element: <Outlet/>,
        children: [
          {
            path: 'add',
            element: <LoggedInRoute><MonthlyReport/></LoggedInRoute>,
          },
          {
            path: ':id',
            element: <LoggedInRoute><EditMonthlyReport/></LoggedInRoute>,
          },
        ]
      },
      {
        path: '/guide',
        element: <LoggedInRoute><Guides/></LoggedInRoute>,
      },
      {
        path: '/about-us',
        element: <LoggedInRoute><AboutUs/></LoggedInRoute>,
      }
    ],
  },
];

export const NOT_FOUND_ROUTES: RouteObject[] = [
  {
    path: '*',
    element: <>404</>
  }
];

export const ALL_ROUTES = [...GUEST_ROUTES, ...LOGGED_ROUTES, ...NOT_FOUND_ROUTES];
