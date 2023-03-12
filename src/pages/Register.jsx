import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="register flex flex-col justify-center  items-center">
      <SectionTitle title={"Register...."} />
    </div>
  );
};

export default Register;
