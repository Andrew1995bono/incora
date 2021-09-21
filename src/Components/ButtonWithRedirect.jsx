import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const ButtonWithRedirect = ({ recordId, pathname, text }) => {
  const history = useHistory();

  return (
    <Button
      onClick={() => {
        history.push({ pathname, state: recordId });
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonWithRedirect;
