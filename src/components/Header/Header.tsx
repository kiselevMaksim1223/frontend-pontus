import React, {FC, useEffect} from 'react';
import {HeaderDesktop} from "./HeaderDesktop/HeaderDesktop";
import {HeaderMobile} from "./HeaderMobile/HeaderMobile";

type stateType = {
    ui:{
        width: number | null
    }
}
//
// type breakPointsType = {
//     mobile:number
// }
//
// const breakPoints:breakPointsType = {
//     mobile: 600
// }
//
// export const state:stateType = {
//     ui:{
//         width:null
//     }
// }
//
// const handleSubscribe = () => {
//     state.ui.width = window.innerWidth
//     console.log(window.innerWidth)
// }
//
// export const onSubscribe = () => {
//     window.addEventListener('resize', handleSubscribe)
//
// }
//
// export const offSubscribe = () => {
//     window.removeEventListener('resize', handleSubscribe)
// }
//
// export const getIsMobile = (state: stateType) => {
//     if (state.ui.width && state.ui.width <= breakPoints.mobile) {
//         return true
//     }
//     return false
// }
// useEffect(() => {
//     onSubscribe()
//
//     return () => {
//         offSubscribe()
//     }
// }, [])
type HeaderPropsType = {
    state:stateType
}

export const Header:FC<any> = () => {

    const isMobile = false

    return (
        <>
            {isMobile ? <HeaderMobile/> : <HeaderDesktop/>}
        </>
    );
};

