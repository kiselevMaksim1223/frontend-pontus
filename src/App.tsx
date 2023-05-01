import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {AppWrapper} from "./styled-components/AppWrapper";
import {MainSection} from "./components/MainSection/Routing/MainSection";
import {Footer} from "./components/Footter/Footer";


function App() {
    return (
        <AppWrapper>
            <Header/>
            <MainSection/>
            <Footer/>
        </AppWrapper>
    );
}

export default App;

