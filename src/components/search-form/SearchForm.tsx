// import React from "react";
// import { useNavigate } from "react-router-dom";
// //import { useSearchResults } from "../../hooks";
// import { MainButton } from "../../ui/buttons";
// import { TextField } from "../../ui/text-field";
// import css from "./index.css";

// function SearchForm() {
//   const results = useSearchResults();
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = e.target.query.value;
//     navigate("/search/" + query, { replace: true });
//   };
//   return (
//     <div>
//       <form className={css.root} onSubmit={handleSubmit}>
//         <TextField name="query" />
//         <MainButton>Buscar</MainButton>
//       </form>
//       <div>
//         <h2>{results.length}</h2>
//         <MainButton>Hola Perro</MainButton>
//       </div>
//     </div>
//   );
// }

// export { SearchForm };
