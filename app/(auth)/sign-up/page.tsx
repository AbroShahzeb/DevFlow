"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import { signUpWithCredentials } from "@/lib/actions/auth.action";

const SignUp = () => {
  return (
    <AuthForm
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", name: "", username: "" }}
      onSubmit={signUpWithCredentials}
      formType="SIGN_UP"
    />
  );
};

export default SignUp;
