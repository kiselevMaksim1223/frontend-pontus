import React, {useState} from 'react';
import HomePgImg from "./images/back-yard2.jpg"
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledHomePgImg} from "../../../styled-components/MainBlock/HomePage/HomePgImg";
import {StyledTitle} from "../../../styled-components/Title";
import {HomePageForm} from "../../../styled-components/MainBlock/HomePage/HomePageForm";
import {ButtonLink} from "../../../styled-components/MainBlock/HomePage/HomePageButtonNavLink";
import {Form} from "../../Form/Form";
import Modal from "../../common/Modal";


export const About: React.FC = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const onClickOpenModalHandler = () => {
        setActiveModal(true)
    }
    return (
        <>
            <Modal active={activeModal} setActive={setActiveModal}>
                <Form/>
            </Modal>
            <StyledWrapper blackout position={"relative"}>
            <StyledHomePgImg img={HomePgImg}>
                <HomePageForm>
                    <StyledTitle fontSize={"40px"} as={"h2"} color={"white"} position={"relative"}
                                 margin={"0 0 1.5em 0"}>OUR HOME IS YOUR HOME</StyledTitle>
                    <ButtonLink onClick={onClickOpenModalHandler}>Book now</ButtonLink>
                </HomePageForm>
            </StyledHomePgImg>
        </StyledWrapper>
        </>
    );
};

