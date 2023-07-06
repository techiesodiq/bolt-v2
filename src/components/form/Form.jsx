import React from "react";
import {
  FormWrapper,
  FormBox,
  FormLabel,
  StyledForm,
  FormInput,
  FormTextArea,
  FormButton,
} from "./form.style";
import data from "../../data/text.json";

const { button, email, message, name, number } = data.contact.form;

const Form = () => {
  return (
    <FormWrapper>
      <StyledForm>
        <FormBox>
          <FormLabel htmlFor={name.label}>{name.label}</FormLabel>
          <FormInput
            type="text"
            placeholder={name.placeHolder}
            name={name.label}
          />
        </FormBox>
        <FormBox>
          <FormLabel htmlFor={email.label}>{email.label}</FormLabel>
          <FormInput
            type="text"
            placeholder={email.placeHolder}
            name={email.label}
          />
        </FormBox>
        <FormBox>
          <FormLabel htmlFor={number.label}>{number.label}</FormLabel>
          <FormInput
            type="text"
            placeholder={number.placeHolder}
            name={number.label}
          />
        </FormBox>
        <FormBox>
          <FormLabel htmlFor={message.label}>{message.label}</FormLabel>
          <FormTextArea
            name={message.label}
            placeholder={message.placeHolder}
          />
        </FormBox>
        <FormButton>{button}</FormButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
