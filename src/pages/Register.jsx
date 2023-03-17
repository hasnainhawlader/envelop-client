import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFeilds] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formFields);

    // clear

    setFormFeilds({
      name: "",
      email: "",
      password: "",
    });

    await signup(formFields.name, formFields.email, formFields.password);
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Register..."} />

        <FormControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="Write your name"
          formFields={formFields}
          setFormFeilds={setFormFeilds}
        />

        <FormControl
          label="email"
          labelInner="Email Address"
          inputType="email"
          placeholder="Write your email"
          formFields={formFields}
          setFormFeilds={setFormFeilds}
        />

        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Write your password"
          formFields={formFields}
          setFormFeilds={setFormFeilds}
        />
        <Button text="Register" submit />
      </form>
    </div>
  );
};

export default React.memo(Register);
