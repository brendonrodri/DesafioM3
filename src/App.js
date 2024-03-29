import React, {Component} from "react";
import HeaderComponent from "./components/header/header";
import BodyComponent from "./components/body/body";
import FooterComponent from "./components/footer/footer";
import {createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        list-style: none;
        color: #373737;
    }
    a, button{
        cursor: pointer;
    }
`;
export default class App extends Component{
    render(){
        return(
            <>
                <GlobalStyle />
                {HeaderComponent()}
                {BodyComponent()}   
                {FooterComponent()}
            </>
        );
    };
}