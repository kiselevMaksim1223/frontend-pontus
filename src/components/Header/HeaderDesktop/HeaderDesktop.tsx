import React, {FC} from 'react';
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import {HeaderDesktopWrapperMedia} from "../../../styled-components/Header/DesctopHeader/HeaderDesktopWrapperMedia";



export const HeaderDesktop:FC = () => {
    return (
        <HeaderDesktopWrapperMedia>
            <HeaderTop/>
            <HeaderBottom />
        </HeaderDesktopWrapperMedia>
    );
};

