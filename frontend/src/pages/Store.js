import React from "react";
import {legacy_createStore as createStore,combineReducers} from 'redux'
import Event from "./Event";
import Tasks from "./Tasks";
import Home from "./home1";
import Cart from "./cart";

const Page_Reducer = (state=<Home/>, action) =>
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

const Login_Reducer =(state=false,action)=>
{
    switch(action.type)
    {
        case 'Login':
            return true
        case 'Logout':
            return false
        default:
            return state
    }
}

const store = createStore(combineReducers({page: Page_Reducer,login: Login_Reducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
