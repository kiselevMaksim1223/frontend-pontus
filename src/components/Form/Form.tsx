import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

type formType = {
    name: string
    email: string
    message: string
}

export const Form = () => {

    const {
        register, //includes name, onChange, onBlur, ref
        handleSubmit, //(data: Object, e?: Event) => Promise<void>
        formState: {errors} //formState contains info about form state (errors, isDirty, isSubmitted...)
    } = useForm<formType>()


    const onSubmit: SubmitHandler<formType> = data => {
        console.log(data)
        axios.post("https://pontushotel.000webhostapp.com/public/", data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' //если отправили данные не в json
            }
        })
            .then((res) => {
                console.log(res.data)
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
                            {...register("name",
                                {
                                    required: "This field is required",
                                    minLength: {value: 3, message: "Min length is 3"}
                                })}
                            id="name"
                            placeholder="Your name.."
                        />
                    </Col100Styled>
                    <span>{errors.name?.message}</span>
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
                    <span>{errors.email?.message}</span>
                </RowStyled>

                <RowStyled>
                    <Col25Styled>
                        <label htmlFor="message">Message</label>
                    </Col25Styled>
                    <Col100Styled>
                        <TextAreaStyled {...register("message", {
                            required: "This field is required",
                            minLength: {
                                value: 5,
                                message: "Your message at least should be 5 symbols "
                            }
                        })}
                                        id="message"
                                        placeholder="Write your message.."
                        />
                    </Col100Styled>
                    <span>{errors.message?.message}</span>
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
  //letter-spacing: 2px;
  //height: 100%;
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
`