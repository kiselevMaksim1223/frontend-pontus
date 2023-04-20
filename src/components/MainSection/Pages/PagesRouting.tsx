import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Rooms} from "../Rooms/Rooms";
import {Price} from "../Price/Price";
import {Gallery} from "../Gallery/Gallery";
import {Contacts} from "../Contacts/Contacts";
import {Error404} from "../Errors/Error404";
import {About} from "../About/About";

export const PagesRouting = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/about"}/>} />

                <Route path={"/about"} element={<About/>}/>
                <Route path={"/rooms"} element={ <Rooms/> }/>
                <Route path={"/price"} element={ <Price/> }/>
                <Route path={"/gallery"} element={ <Gallery/> }/>
                <Route path={"/contacts"} element={ <Contacts/> }/>

                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

