import React from "react";
import {createGlobalStyle} from "styled-components";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
export default App