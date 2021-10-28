import React from "react";
import { CInputCheckbox, CInputSelect, CInputText, CSelect } from "./style";

interface InputTextProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: any;
  name: string;
}

interface SelectDocumentProps {
  nameType: string;
  onChange: any;
  typeDni: number;
  nameDni: string;
  dni: string;
}

interface InputCheckedProps {
  checked: boolean;
  name: string;
  label: string;
  underline: string;
  onChange: any;
}

export const InputText = ({
  type,
  placeholder,
  value,
  onChange,
  name,
}: InputTextProps) => {
  return (
    <CInputText
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export const InputSelect = ({
  nameType,
  typeDni,
  onChange,
  dni,
  nameDni,
}: SelectDocumentProps) => {
  return (
    <div style={{ display: "flex" }}>
      <CSelect style={{ display: "flex" }}>
        <select name={nameType} value={typeDni} onChange={onChange}>
          <option value={1}>DNI</option>
          <option value={2}>PAS</option>
        </select>
      </CSelect>
      <CInputSelect>
        <input
          type="text"
          required
          value={dni}
          name={nameDni}
          onChange={onChange}
          placeholder="Nro. de doc"
        ></input>
      </CInputSelect>
    </div>
  );
};

export const InputCheckbox = ({
  checked,
  onChange,
  name,
  label,
  underline,
}: InputCheckedProps) => {
  return (
    <CInputCheckbox>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      ></input>
      <label>
        {label}
        <a style={{ marginLeft: 3 }}>{underline}</a>
      </label>
    </CInputCheckbox>
  );
};
