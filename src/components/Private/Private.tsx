import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { HeaderSimple } from "../HeaderSimple/HeaderSimple";
import PrivateContent from "../../layout/PrivateContent/PrivateContent";
import PrivatePreface from "../../layout/PrivateContent/PrivatePreface";

const Private = () => {
  const [selected, setSelected] = useState("");
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
  useEffect(() => {
    console.log(selected);
  }, []);
  function handleSelect(value: any) {
    setSelected(value);
    console.log(value);
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderSimple></HeaderSimple>
      {!selected ? (
        <PrivatePreface setSelected={handleSelect} />
      ) : (
        <PrivateContent selected={selected} />
      )}
    </div>
  );
};

export default Private;
