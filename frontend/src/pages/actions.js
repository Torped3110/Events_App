import React from "react";

export const Event = () => {
    return {
        type: 'Event'
    }
}

export const Tasks = () => {
    return{
        type: 'Tasks'
    }
}

export const Home = () => {
    return{
        type: 'Home'
    }

}
export const Cart = () => {
    return{
        type: 'Cart'
    }
}
export const login = (email,first)=>{
    return{
        type: 'Login',
        user: email,
        name:first
    }
}

export const logout = ()=>{
    return{
        type: 'Login'
    }
}
