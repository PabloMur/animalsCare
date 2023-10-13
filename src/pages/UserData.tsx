import React from "react";
import { UserData } from "components/userdata";
import { Loader } from "ui/loader";

function UserDataPage() {
  return (
    <div>
      <UserData />
      <Loader />
    </div>
  );
}

export { UserDataPage };
