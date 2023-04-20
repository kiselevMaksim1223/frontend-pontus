import React, {FC, useState} from 'react';
import {FlexStyled} from "../../../../../styled-components/Flex";
import {StyledText} from "../../../../../styled-components/Text";
import {LinkStyled} from "../../../../../styled-components/Header/Nav/LinkStyled";
import {Button} from "../../../../common/Button";
import {Form} from "../../../../Form/Form";
import Modal from "../../../../common/Modal";

export const Description:FC = () => {
    const [activeModal, setActiveModal] = useState<boolean>(false)

    const onClickOpenModalHandler = () => {
        setActiveModal(true)
    }

    return (<>
            <Modal active={activeModal} setActive={setActiveModal}>
                <Form/>
            </Modal>
            <FlexStyled columnGap={"2em"} align={"center"}>
                {/*<StyledTitle color={"white"}>Hotel Pontus</StyledTitle>*/}
                <StyledText width={"40%"} color={"white"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                    <LinkStyled type={"primary"}>+995 123 456 789</LinkStyled>
                    <br/>
                    <LinkStyled type={"primary"}>+995 123 456 789</LinkStyled>
                </StyledText>
                <Button buttonType={"secondary"} margin={"0 0 0 auto"} onClick={onClickOpenModalHandler}>
                    Contact us please!
                </Button>
            </FlexStyled></>
    );
};

