import React from "react";
import { HeaderSimple } from "../../components/HeaderSimple/HeaderSimple";
import { FooterLinks } from "../../components/FooterLinks/FooterLinks";
import { AuthenticationTitle } from "./AuthenticationTitle/AuthenticationTitle";

const Login = () => {
  return (
    <div>
      <HeaderSimple></HeaderSimple>
      <AuthenticationTitle></AuthenticationTitle>
    </div>
  );
};

export default Login;
