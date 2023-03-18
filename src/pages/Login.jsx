import React, { useState } from "react";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [formFields, setFormFeilds] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formFields.email, formFields.password);
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 w-[25rem]">
        <SectionTitle title={"Login..."} />

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

        <Button text={isLoading ? "Logging..." : "Login"} submit />

        {error && (
          <p className="bg-rose-50 text-rose-500 p-5 rounded border border-rose-500">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default React.memo(Login);
