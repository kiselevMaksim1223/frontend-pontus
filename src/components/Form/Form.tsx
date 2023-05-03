import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {emailApi} from "../../api/email-api";
import {yupResolver} from "@hookform/resolvers/yup";
import {InputSubmitStyled} from "../../styled-components/Form/Input/InputSubmit";
import { FormContainerStyled } from '../../styled-components/Form/FormContainer/FormContainer';
import {Col100Styled, Col25Styled} from '../../styled-components/Form/FormColumn/FormColumn';
import {TextAreaStyled} from "../../styled-components/Form/TextArea/TextArea";
import {RowStyled} from "../../styled-components/Form/FormRow/FormRow";
import {InputStyled} from "../../styled-components/Form/Input/Input";
import {schema} from "../../utils/validationSchema";
import {ErrorStyled} from "../../styled-components/Form/FormError/FormError";

export type formType = {
    name: string
    email: string
    message: string
}

export const Form:FC = () => {

    const {
        register, //includes name, onChange, onBlur, ref
        handleSubmit, //(data: Object, e?: Event) => Promise<void>
        formState: {errors}, //formState contains info about form state (errors, isDirty, isSubmitted...)
        reset
    } = useForm<formType>({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<formType> = data => {
        emailApi.sendMail(data)
            .then((res) => {
                alert(res.data.messageMail)
                reset()
            })
            .catch((e) => {
                alert(e.message)
            })
    }

    return (
        <FormContainerStyled>
            <form onSubmit={handleSubmit(onSubmit)}>

                <RowStyled>
                    <Col25Styled>
                        <label htmlFor="name">Name</label>
                    </Col25Styled>
                    <Col100Styled>
                        <InputStyled
                            {...register("name")}
                            id="name"
                            placeholder="Your name.."
                        />
                    </Col100Styled>
                    {errors.name && <ErrorStyled>{errors.name.message}</ErrorStyled>}
                </RowStyled>

                <RowStyled>
                    <Col25Styled>
                        <label htmlFor="email">Email</label>
                    </Col25Styled>
                    <Col100Styled>
                        <InputStyled {...register("email",
                            {required: "This field is required"})}
                                     id="email"
                                     placeholder="Your email.."
                        />
                    </Col100Styled>
                    {errors.email && <ErrorStyled>{errors.email.message}</ErrorStyled>}
                </RowStyled>

                <RowStyled>
                    <Col25Styled>
                        <label htmlFor="message">Message</label>
                    </Col25Styled>
                    <Col100Styled>
                        <TextAreaStyled {...register("message")}
                                        id="message"
                                        placeholder="Write your message.."
                        />
                    </Col100Styled>
                    {errors.message && <ErrorStyled>{errors.message.message}</ErrorStyled>}
                </RowStyled>

                <RowStyled>
                    <InputSubmitStyled type={"submit"}/>
                </RowStyled>
            </form>
        </FormContainerStyled>
    );
};
