import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {AppWrapper} from "./styled-components/AppWrapper";
import {MainSection} from "./components/MainSection/MainSection";


function App() {
    return (
        <AppWrapper>
            <Header />
            <MainSection/>
        </AppWrapper>
    );
}

export default App;

