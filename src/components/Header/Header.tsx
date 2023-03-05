import React, {FC, useEffect, useState} from 'react';
import {HeaderDesktop} from "./HeaderDesktop/HeaderDesktop";
import {HeaderMobile} from "./HeaderMobile/HeaderMobile";

export const Header:FC<any> = () => {
    const windowInnerWidth = 750
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        console.log(window.innerWidth)
            if(window.innerWidth < windowInnerWidth) {
                setIsMobile(true)
            } else setIsMobile(false)
    }, [])
    return (
        <>
            {isMobile ? <HeaderMobile/> : <HeaderDesktop/>}
        </>
    );
};

