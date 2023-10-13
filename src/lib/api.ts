import { updateName, userName } from "atoms/userAtoms";
import { useSetUpdateName, useUserToken } from "hooks";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

type pet = {
  fullname: string;
  zone: string;
  lat: number;
  lng: number;
  status: string;
  image: string;
  token: string;
};

type msg = {
  to: any;
  from: string;
  subject: string;
  text: string;
  html: string;
};

// chekear el mail -> https://desafio7.onrender.com/auth/email-check

export const APICheckEmail = async (email) => {
  try {
    const fetching = await fetch(
      "https://desafio7.onrender.com/auth/email-check",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

// obtener el Token del usuario -> https://desafio7.onrender.com/auth/token
export const APIGetToken = async (params: {
  email: string;
  password: string;
}) => {
  try {
    const { email, password } = params;

    const fetching = await fetch("https://desafio7.onrender.com/auth/token", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await fetching.json();
    if (response.error) console.log("error");
    return response;
  } catch (error) {
    console.error(error);
  }
};

//obtener el ME del user
export const APIGetMeName = async (token) => {
  try {
    const userToken = token;
    const fetching = await fetch("https://desafio7.onrender.com/auth/me", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${userToken}`,
      },
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdateMeName = async (params: { token; fullname }) => {
  try {
    const { fullname, token } = params;

    if (fullname !== "") {
      const fetching = await fetch("https://desafio7.onrender.com/auth/me", {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({ fullname }),
      });
      const response = await fetching.json();
      return response;
    } else {
      alert("El Nombre esta vacío");
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdatePassword = async (params: { password; token }) => {
  try {
    const { password, token } = params;

    if (password !== "") {
      const fetching = await fetch(
        "https://desafio7.onrender.com/auth/password",
        {
          method: "PUT",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
          body: JSON.stringify({ password }),
        }
      );
      const response = await fetching.json();
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

//crear user -> https://desafio7.onrender.com/auth

export const APICreateUser = async (params: {
  fullname: string;
  email: string;
  password: string;
}) => {
  try {
    const fetching = await fetch("https://desafio7.onrender.com/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

//crear user -> https://desafio7.onrender.com/pet

//Cons esta llamada voy a traer las mascotas que estan cerca
export const APIgetPetsAround = async (lat, lng) => {
  try {
    const fetching = await fetch(
      `https://desafio7.onrender.com/pets-around?lat=${lat}&lng=${lng}`
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIGetMePets = async (token) => {
  try {
    const fetching = await fetch("https://desafio7.onrender.com/me/pets", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APICreatePet = async (params: pet, token: any) => {
  try {
    const fetching = await fetch("https://desafio7.onrender.com/pet", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(params),
    });
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIUpdatePetData = async (dataForUpdate, token, petId) => {
  try {
    const fetching = await fetch(
      `https://desafio7.onrender.com/me/pets/${petId}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify(dataForUpdate),
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const APIDeletePet = async (id, token) => {
  try {
    const fetching = await fetch(
      `https://desafio7.onrender.com/me/pets/${id}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

// me quede en crear report send mail
export const APISendInfoToPetOwner = async (mensaje: msg) => {
  try {
    const emailFetch = await fetch("https://desafio7.onrender.com/send-email", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        msg: mensaje,
      }),
    });
    const response = await emailFetch.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
