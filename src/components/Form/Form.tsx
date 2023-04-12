import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";
import {emailApi} from "../../api/email-api";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export type formType = {
    name: string
    email: string
    message: string
}

const schema = yup.object().shape({
    name: yup.string()
        .min(2, "Min length is 2")
        .required("Name is required")
    ,
    email: yup.string()
        .email("Invalid email address")
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address format"
        )
        .required("Email is required"),
    message: yup.string()
        .min(7, "Min length is 7")
        .required("Message is required")

});

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
        console.log(data)
        emailApi.sendMail(data)
            .then((res) => {
                console.log(typeof res.data)
                alert(res.data)
            })
            .catch((e) => {
                alert(e.message)
            })
            .finally(()=>{
                reset()
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
                    {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
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
                    {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
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
                    {errors.message && <p style={{color: "red"}}>{errors.message.message}</p>}
                </RowStyled>

                <RowStyled>
                    <InputSubmitStyled type={"submit"}/>
                </RowStyled>
            </form>
        </FormContainerStyled>
    );
};

const RowStyled = styled.div`
  display: flex;
  flex-direction: column;

  ::after {
    content: "";
    display: table;
    clear: both;
  }
`

const Col25Styled = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
`
const Col100Styled = styled.div`
  float: left;
  width: 100%;
  margin-top: 6px;
`

const FormContainerStyled = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 450px;
  @media (max-width: 500px) {
    width: 95vw;
  }
`

const InputStyled = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`

const TextAreaStyled = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  font-size: 16px;
`

const InputSubmitStyled = styled.input`
  background-color: #2a2e49;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;

  :hover {
    background-color: #2a2e60;
  }

  :active {
    background-color: #282c34;
  }
`