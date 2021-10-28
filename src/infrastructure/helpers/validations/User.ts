import { ErroUser, User } from "../../../domain/models/User";

const isNumeric = /^[0-9]+$/;

export const validateUser = (infoUser: User, errorInfoUser: ErroUser) => {
  const { license, phone, terms, dni } = infoUser;
  let {
    errorPhone,
    errorDocumentType,
    errorLicense,
    errorTerms,
    errorTextDocumentType,
    errorTextLicense,
    errorTextPhone,
    errorTextTerms,
    errorDni,
    errorTextDni,
  } = errorInfoUser;

  if (dni === "") {
    errorDni = true;
    errorTextDni = "Ingrese nro. de documento";
  } else if (!dni.match(isNumeric)) {
    errorDni = true;
    errorTextDni = "Ingrese nro. de documento valido";
  } else {
    errorDni = false;
    errorTextDni = "";
  }

  if (phone === "") {
    errorPhone = true;
    errorTextPhone = "Ingrese celular";
  } else if (!phone.match(isNumeric)) {
    errorPhone = true;
    errorTextPhone = "Ingrese celular valido";
  } else {
    errorPhone = false;
    errorTextPhone = "";
  }

  if (license === "") {
    errorLicense = true;
    errorTextLicense = "Ingrese placa";
  } else {
    errorLicense = false;
    errorTextLicense = "";
  }

  if (!terms) {
    errorTerms = true;
    errorTextTerms = "Debe aceptar terminos";
  } else {
    errorTerms = false;
    errorTextTerms = "";
  }

  if (
    errorPhone ||
    errorTerms ||
    errorDni ||
    errorLicense ||
    (errorPhone && errorTerms && errorDni && errorLicense)
  ) {
    return {
        errorPhone,
      errorDocumentType,
      errorLicense,
      errorTerms,
      errorTextDocumentType,
      errorTextLicense,
      errorTextPhone,
      errorTextTerms,
      errorDni,
      errorTextDni,
    };
  } else {
    return false;
  }
};
