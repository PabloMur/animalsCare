import { editPetNameAtom } from "atoms/userAtoms";
import {
  useSetReportPetName,
  useSetUpdateName,
  useSetUserEmail,
  useUserEmail,
} from "hooks";
import React from "react";
import { useSetRecoilState } from "recoil";
import css from "./index.css";

export function TextField({ name, type }) {
  function NormalTextField() {
    return <input name={name} className={css.root} type="text"></input>;
  }
  function PasswordTextField() {
    return <input name={name} className={css.root} type="password"></input>;
  }

  return type === "text" ? <NormalTextField /> : <PasswordTextField />;
}

export function NameTextField({ name, placeholder }) {
  return (
    <input
      name={name}
      className={css.root}
      type="text"
      placeholder={placeholder}
    ></input>
  );
}

export function ReportNameField() {
  const nameSetter = useSetReportPetName();
  function handleChange(e) {
    const petName = e.target.value;
    nameSetter(petName);
  }
  return (
    <input
      className={css.root}
      type="reportname"
      onChange={handleChange}
    ></input>
  );
}

export function EditNameField() {
  const nameSetter = useSetRecoilState(editPetNameAtom);
  function handleChange(e) {
    const petName = e.target.value;
    nameSetter(petName);
  }
  return (
    <input
      className={css.root}
      type="reportname"
      onChange={handleChange}
    ></input>
  );
}

export function EmailField() {
  const userEmailAtom = useUserEmail();
  const emailSetter = useSetUserEmail();
  function handleChange(e) {
    e.preventDefault();
    const userEmail = e.target.value;
    emailSetter(userEmail);
  }

  return (
    <input
      className={css.root}
      type="email"
      placeholder={userEmailAtom}
      onChange={handleChange}
    ></input>
  );
}
