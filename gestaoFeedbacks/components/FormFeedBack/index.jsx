/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import { FormContainer, Label, TextArea, Button } from "./index.style";

const Form = ({ preData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, preData);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Label>Responda o feedback:</Label>
      <TextArea
        id="resposta"
        name="histrespostaoria"
        {...register("resposta", { required: true })}
      />
      {errors.resposta && <span>Este campo é obrigatório</span>}
      <Button type="submit">Continuar</Button>
    </FormContainer>
  );
};

export default Form;
