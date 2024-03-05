import React from "react"; 
import SignInForm from "../loginComponents/SignInForm";
import SignUpForm from "../loginComponents/SignUpForm";

const LoginTemplate = (props) => {

  const formType = props.formType

  return (
    <div className="mt-10">
      <div className="flex justify-center mx-auto">
        <div className="shadow-xl border-t-4 border-[#418160] p-10 rounded-md">

          {
            formType === 'SignIn' ?
            <SignInForm /> :
            <SignUpForm />
          }
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
