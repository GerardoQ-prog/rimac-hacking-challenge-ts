import React from "react";

export const useErrorForm = (initialState: any) => {
  const [state, setstate] = React.useState(initialState);

  const onChangeError = (newState: any) => {
    setstate(newState);
  };

  const onResetError = () => {
    setstate(initialState);
  };

  return {
    ...state,
    errorForm: state,
    onChangeError,
    onResetError,
  };
};
