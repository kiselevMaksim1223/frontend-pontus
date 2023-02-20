import React from 'react';
import HomePgImg from "./images/back-yard2.jpg"
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledHomePgImg} from "../../../styled-components/MainBlock/HomePage/HomePgImg";
import {StyledTitle} from "../../../styled-components/Title";
import {HomePageForm} from "../../../styled-components/MainBlock/HomePage/HomePageForm";
import {ButtonLink} from "../../../styled-components/MainBlock/HomePage/HomePageButtonNavLink";


export const HomePage: React.FC = () => {
    return (
        <StyledWrapper blackout>
            <StyledHomePgImg img={HomePgImg}>
                <HomePageForm>
                    <StyledTitle as={"h2"} color={"white"} position={"relative"} margin={"0 0 1.5em 0"}>OUR HOME IS YOUR HOME</StyledTitle>
                    <ButtonLink to={"/contacts"}>Book now</ButtonLink>
                </HomePageForm>
            </StyledHomePgImg>
        </StyledWrapper>
    );
};

