import React, {useState} from 'react';
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledContainer} from "../../../styled-components/Container";
import {FlexStyled} from "../../../styled-components/Flex";
import styled from "styled-components";
import {galleryData} from "../../../api/galleryData";
import {useLocation} from "react-router-dom";
import {StyledTitle} from "../../../styled-components/Title";
import Modal from "../../common/Modal";

export const Gallery = () => {
        //=====================================FOR SHOWING TITLE FOR COMPONENT==========================================
        const location = useLocation()
        const pathName = location.pathname.replace("/", "")[0].toUpperCase()
                       + location.pathname.replace("/", "").slice(1)

        //=====================================TO DISPLAY CHOSEN PICTURES ON MODAL======================================
        const [currentPictures, setCurrentPictures] = useState<string | null>(null)
        //=====================================FOR SHOWING MODAL AND STOP SCROLLING=====================================
        const [activeModal, setActiveModal] = useState<boolean>(false)
        //==============================================================================================================

        const onClickOpenModalHandler = (id: string) => {
            setActiveModal(true)
            const currentImg = galleryData.find(i => i.id === id)
            if (currentImg){
                setCurrentPictures(currentImg.img)
            }
        }
        return (<>
                <Modal active={activeModal} setActive={setActiveModal}>
                    <ModalImg src={currentPictures as string} alt={"Pictures"}/>
                </Modal>
                <StyledWrapper>
                <StyledContainer>
                    <StyledTitle as={"h2"} fontSize={"45px"} textAlign={"center"} color={"#2A2E49"}>
                        {pathName}
                    </StyledTitle>
                    <FlexStyled isMedia flexWrap={"wrap"} columnGap={"2em"} rowGap={"2em"} margin={"3em auto"}
                                align={"center"} justify={"space-between"}>
                        {galleryData.map(i => {
                            return (
                                <GalleryItemWrapper key={i.id} onClick={() => onClickOpenModalHandler(i.id)}>
                                    <GalleryItem src={i.img}
                                                 width={i.proportions === "wide" ? 240 : 180}
                                                 height={i.proportions === "wide" ? 180 : 240}/>
                                </GalleryItemWrapper>
                            )
                        })}
                    </FlexStyled>
                </StyledContainer>
            </StyledWrapper>
            </>
        );
    }
;


const GalleryItem = styled.img`
  max-width: 100%;
`

const GalleryItemWrapper = styled.div`
  cursor: pointer;
  transition: .3s;
  :hover {
    transform: scale(1.1);

  }
`

const ModalImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
