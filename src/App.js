import React, { useState } from "react";
import FormControl from "./components/FormControl";

function App() {
  const [person, setPerson] = useState({
    name: "",
    lastname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(person, null, 4));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <form className="card" onSubmit={handleSubmit}>
            <div className="card-header">
              <h5>Formulario</h5>
            </div>
            <div className="card-body">

              <FormControl
                label="person.name"
                id="inputName"
                value={person.name}
                name="name"
                placeholder="Ej: Pedro"
                onChange={handleChange}
              />

              <FormControl
                label="person.lastname"
                id="inputLastname"
                value={person.lastname}
                name="lastname"
                placeholder="Ej: Donoso"
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h5>Reprentación del estado</h5>
            </div>
            <div className="card-body text-center">
              <div className="card-title">person.name</div>
              <div className="card-text">
                {person.name === "" ? "No Asignado" : person.name}
              </div>
              <br />
              <div className="card-title">person.lastname</div>
              <div className="card-text">
                {person.lastname === "" ? "No Asignado" : person.lastname}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
