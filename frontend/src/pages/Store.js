import React from "react";
import {legacy_createStore as createStore} from 'redux'
import Event from "./Event";
import Tasks from "./Tasks";
import Home from "./home1";
import Cart from "./cart";

const Reducer = (state=<h1>Welcome Dude!!</h1> , action) =>
{
    switch(action.type)
    {
        case 'Event':
            return <Event/>       
        case 'Tasks':
            return <Tasks/>
        case 'Home':
            return <Home/>
        case 'Cart':
            return <Cart/>
        default:
            return state
    }
}

const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
