import React from 'react';
import {HeaderDesktop} from "./HeaderDesktop/HeaderDesktop";
import {HeaderMobile} from "./HeaderMobile/HeaderMobile";

export const Header = () => {
    return (
        <>
            <HeaderMobile/>
            <HeaderDesktop/>
        </>
    );
};

