import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "pages/Home";
import { UserDataPage } from "pages/UserData";
import { Layout } from "components/layout/Layout";
import { MapboxPage } from "pages/Mapbox";
import { ReportPage } from "pages/Report";
import { PetAroundPage } from "pages/PetsAround";
import { LoginPage } from "pages/LoginPage";
import { MyPetsPage } from "pages/MyPets";
import { SignupPage } from "pages/Signup";
import { PasswordPage } from "pages/PasswordPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { EditPetPage } from "pages/EditPet";
import { Sigthing } from "pages/Sighting";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="userdata" element={<UserDataPage />}></Route>
        <Route path="mapbox" element={<MapboxPage />}></Route>
        <Route path="my-reports" element={<ReportPage />}></Route>
        <Route path="my-pets" element={<MyPetsPage />}></Route>
        <Route path="pets-around" element={<PetAroundPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="password" element={<PasswordPage />}></Route>
        <Route path="edit-pet" element={<EditPetPage />}></Route>
        <Route path="sigthing" element={<Sigthing />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export { AppRoutes };

//<Route path="search/:query" element={<SearchResults />}></Route>
