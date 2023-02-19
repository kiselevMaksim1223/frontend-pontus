import React from 'react';
import HomePgImg from "../../../images/back-yard2.jpg"
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledHomePgImg} from "../../../styled-components/MainBlock/HomePgImg";



export const HomePage: React.FC = () => {
    return (
        <StyledWrapper>
            <StyledHomePgImg img={HomePgImg}/>
        </StyledWrapper>
    );
};

