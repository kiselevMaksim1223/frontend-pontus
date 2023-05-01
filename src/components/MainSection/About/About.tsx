import React, {useState} from 'react';
import HomePgImg from "./images/back-yard2.jpg"
import {WrapperStyled} from "../../../styled-components/Wrapper";
import {StyledHomePgImg} from "../../../styled-components/MainBlock/HomePage/HomePgImg";
import {TitleStyled} from "../../../styled-components/Title";
import {HomePageForm} from "../../../styled-components/MainBlock/HomePage/HomePageForm";
import {ButtonLink} from "../../../styled-components/MainBlock/HomePage/HomePageButtonNavLink";
import {Form} from "../../Form/Form";
import {Modal} from "../../common/Modal";
import {ContainerStyled} from "../../../styled-components/Container";
import styled from "styled-components";
import {TbAirConditioning, TbToolsKitchen2} from "react-icons/tb";
import {MdOutlineAirportShuttle, MdOutlineBedroomParent, MdWifi} from "react-icons/md";
import {CiMonitor} from "react-icons/ci";
import {TextStyled} from "../../../styled-components/Text";


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
            <WrapperStyled blackout position={"relative"}>
                <StyledHomePgImg img={HomePgImg}>
                    <ContainerStyled>
                        <HomePageWrapper>
                            <HomePageForm>
                                <TitleStyled fontSize={"40px"} as={"h2"} color={"white"} position={"relative"}
                                             margin={"0 0 1.5em 0"}>OUR HOME IS YOUR HOME</TitleStyled>
                                <ButtonLink onClick={onClickOpenModalHandler}>Book now</ButtonLink>
                            </HomePageForm>
                        </HomePageWrapper>
                    </ContainerStyled>
                </StyledHomePgImg>
            </WrapperStyled>
            <WrapperStyled padding={"30px"}>
                <ContainerStyled>
                    <TitleStyled as={"h2"} color={"#2a2e49"}>Room services</TitleStyled>
                    <Services>
                        <ServiceItem>
                            <TextStyled>air-cooling</TextStyled>
                            <TbAirConditioning size={22}/>
                        </ServiceItem>
                        <ServiceItem>
                            <TextStyled>Airport Pickup</TextStyled>
                            <MdOutlineAirportShuttle size={22}/>
                        </ServiceItem>
                        <ServiceItem>
                            <TextStyled>Wifi</TextStyled>
                            <MdWifi size={22}/>
                        </ServiceItem>
                        <ServiceItem>
                            <TextStyled>TV</TextStyled>
                            <CiMonitor size={22}/>
                        </ServiceItem>
                        <ServiceItem>
                            <TextStyled>24/7 room service</TextStyled>
                            <MdOutlineBedroomParent size={22}/>
                        </ServiceItem>
                        <ServiceItem>
                            <TextStyled>Kitchen</TextStyled>
                            <TbToolsKitchen2 size={22}/>
                        </ServiceItem>
                    </Services>
                </ContainerStyled>
            </WrapperStyled>
        </>
    );
};

const HomePageWrapper = styled.div`
  top: 25%;
  position: absolute;
  z-index: 5;
`

const Services = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;
  row-gap: 5em;
  color: #2a2e49;
  font-weight: 200;
`
const ServiceItem = styled.div`
  width: 180px;
  height: 150px;
  margin: 5px;
  border: 2px solid #2a2e49;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  //background: #2a2e49;
  //opacity: 0.9;
`