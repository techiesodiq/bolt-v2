import { styled } from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 24px;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 480px;
  width: 100%;
  gap: 24px;
`;

export const FormBox = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
`;

export const FormLabel = styled.label`
  color: #475467;
  font-size: 14px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  border-radius: 8px;
  border: 0.5px solid #d0d5dd;
  padding: 12px 18px;
  width: 100%;
`;

export const FormTextArea = styled.textarea`
  resize: none;
  border-radius: 8px;
  border: 0.5px solid #d0d5dd;
  min-height: 167px;
  padding: 24px;
  width: 100%;
  color: #475467;
  font-size: 16px;
  line-height: 24px;
`;

export const FormButton = styled.button`
  width: 100%;
  border-radius: 6px;
  background: #013ebd;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding: 12px 18px;
`;
