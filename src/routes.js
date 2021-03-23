import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Products from './Components/Products';
import Login from './Components/Login';
import Allservice from './Components/Allservice';
import AreDelivered from './Components/AreDelivered';
import Delivered from './Components/delivered';
import CompletedOder from './Components/CompletedOrder';
import ListUser from './Components/listUser';
import ListUserShip from './Components/ListUserShip';
import OderBookDays from './Components/OderBookDays';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/allservice',
        exact : false,
        main : () => <Allservice />
    },
    {
        path : '/aredelivered',
        exact : false,
        main : () => <AreDelivered />
    },
    {
        path : '/delivered',
        exact : false,
        main : () => <Delivered />
    },
    {
        path : '/CompletedOder',
        exact : false,
        main : () => <CompletedOder />
    },
    {
        path : '/ListUserShip',
        exact : false,
        main : () => <ListUserShip />
    },
    {
        path : '/ListUser',
        exact : false,
        main : () => <ListUser />
    },
    {
        path : '/home',
        exact : false,
        main : () => <Home />
    },
    {
        path : '/oderday',
        exact : false,
        main : () => <OderBookDays/>
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/notfound',
        exact : false,
        main : () => <NotFound />
    },
    {
        path : '/products',
        exact : false,
        main : ({ match, location }) => <Products match={match} location={location} />
    },
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    }
];

export default routes;