import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { HeaderSimple } from "../HeaderSimple/HeaderSimple";
import PrivateContent from "../../layout/PrivateContent/PrivateContent";

const Private = () => {
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const password = localStorage.getItem("password");
    if (password === "smasep20") {
      setLoading(false);
    } else {
      navigate("/login");
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <HeaderSimple></HeaderSimple>
      <PrivateContent />
    </div>
  );
};

export default Private;
