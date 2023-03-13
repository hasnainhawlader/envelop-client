import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register flex flex-col justify-center  items-center">
      <form onChange={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register...."} />
        <div className="form-control flex flex-col gap-2">
          <input
            type="text"
            placeholder="Write your name"
            id="name"
            value={formFields.name}
            onChange={(e) =>
              setFormFields({ ...formFields, name: e.target.value })
            }
            className=" border py-3 px-5  w-[25rem] outline-none rounded hover:border-violet-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
