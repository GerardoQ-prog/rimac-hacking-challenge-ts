import React from "react";
import { useHistory } from "react-router";
import { signInUser } from "../../../../domain/services/User.service";
import { validateUser } from "../../../helpers/validations/User";
import { useErrorForm } from "../../../hooks/useErrorForm";
import { useForm } from "../../../hooks/useForm";
import { InputCheckbox, InputSelect, InputText } from "../../ui/Inputs";
import { ButtonForm, ContainerForm, TextError, TitleForm } from "./style";

const FormHome: React.FC = () => {
  const router = useHistory();

  const { form, onChange, onChangeChecked, onReset } = useForm({
    dni: "",
    phone: "",
    license: "",
    documentType: 1,
    terms: false,
  });

  const { errorForm, onChangeError, onResetError } = useErrorForm({
    errorDocumentType: false,
    errorTextDocumentType: "",
    errorPhone: false,
    errorTextPhone: "",
    errorLicense: false,
    errorTextLicense: "",
    errorTerms: false,
    errorTextTerms: "",
    errorDni: false,
    errorTextDni: "",
  });

  console.log(errorForm);

  const handleSubmit = () => {
    const validatorUser = validateUser(form, errorForm);
    if (validatorUser) {
      onChangeError(validatorUser);
    } else {
      onResetError();
      onReset();
      signInUser(form, router);
    }
  };

  return (
    <ContainerForm>
      <TitleForm>Déjanos tus datos</TitleForm>
      <InputSelect
        nameType="documentType"
        nameDni="dni"
        dni={form.dni}
        onChange={onChange}
        typeDni={form.documentType}
      />
      {errorForm.errorDni && <TextError>{errorForm.errorTextDni}</TextError>}
      <InputText
        placeholder="Celular"
        onChange={onChange}
        type="text"
        value={form.phone}
        name="phone"
      />
      {errorForm.errorPhone && (
        <TextError>{errorForm.errorTextPhone}</TextError>
      )}
      <InputText
        placeholder="Placa"
        onChange={onChange}
        type="text"
        value={form.license}
        name="license"
      />
      {errorForm.errorLicense && (
        <TextError>{errorForm.errorTextLicense}</TextError>
      )}
      <InputCheckbox
        checked={form.terms}
        onChange={onChangeChecked}
        name="terms"
        label="Acepto la"
        underline="Política de Protecciòn de Datos Personales y los Términos y Condiciones."
      />
      {errorForm.errorTerms && (
        <TextError>{errorForm.errorTextTerms}</TextError>
      )}
      <ButtonForm onClick={handleSubmit}>COTÍZALO</ButtonForm>
    </ContainerForm>
  );
};

export default FormHome;
