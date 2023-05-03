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
            <WrapperStyled margin={"1em"} padding={"30px"}>
                <ContainerStyled>
                    <TitleStyled fontSize={"28px"} as={"h2"} color={"#2a2e49"}>Room services</TitleStyled>
                    <ServicesBlockStyled>
                        <ServiceItem>
                            <TbAirConditioning  size={75}/>
                            <TextStyled>Air-cooling</TextStyled>
                        </ServiceItem>
                        <ServiceItem>
                            <MdOutlineAirportShuttle size={75}/>
                            <TextStyled>Airport Pickup</TextStyled>
                        </ServiceItem>
                        <ServiceItem>
                            <MdWifi size={75}/>
                            <TextStyled>Wifi</TextStyled>
                        </ServiceItem>
                        <ServiceItem>
                            <CiMonitor size={75}/>
                            <TextStyled>TV</TextStyled>
                        </ServiceItem>
                        <ServiceItem>
                            <MdOutlineBedroomParent size={75}/>
                            <TextStyled>24/7 room service</TextStyled>
                        </ServiceItem>
                        <ServiceItem>
                            <TbToolsKitchen2 size={75}/>
                            <TextStyled>Kitchen</TextStyled>
                        </ServiceItem>
                    </ServicesBlockStyled>
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

const ServicesBlockStyled = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;
  row-gap: 5em;
  color: #2a2e49;
  font-weight: 200;
  @media(max-width: 750px){
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 25% 25%;
  }
`
const ServiceItem = styled.div`
  //width: 100%;
  //height: 100%;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 300;
  text-align: center;
`