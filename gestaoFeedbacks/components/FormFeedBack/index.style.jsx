import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const Checkbox = styled.input`
  display: inline-block;
  margin-right: 5px;
`;

export const CheckboxLabel = styled.label`
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #4CAF50; /* Green color */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
`;