import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <TailSpin
      height="40"
      width="40"
      color="#3E4F8E"
      ariaLabel="tail-spin-loading"
      radius="1"
      visible={true}
    />
  );
};

export default Spinner;
