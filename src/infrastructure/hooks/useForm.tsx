import React, { ChangeEvent } from "react";

export const useForm = (initialState: any) => {
  const [state, setstate] = React.useState(initialState);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setstate({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const onReset = () => {
    setstate(initialState);
  };

  return {
    ...state,
    form: state,
    onChange,
    onChangeChecked,
    onReset,
  };
};
