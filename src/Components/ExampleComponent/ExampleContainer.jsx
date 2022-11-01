import React, { useState } from "react";
import Example from "./Example";

const ExampleContainer = () => {
  const [exampleProp] = useState("Hello World");
  
  return (
    <>
      <Example props={exampleProp} />
    </>
  );
};

export default ExampleContainer;
