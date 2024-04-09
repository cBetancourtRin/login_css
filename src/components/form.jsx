import { useState } from "react";

import { handleRegister } from "../utils/handleRegister";
export const Form = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");

  function sendUser(e){
    e.preventDefault();
    const DATA_USER = {
      email: email,
      name: name,
      phone: phone,
      option: option,
    }
    handleRegister(DATA_USER);
    setEmail(""); 
    setName("");
    setPhone("");
    setOption("");
  }

  return (
    <div className="md:ml-11 max-w-sm shadow-xl bg-white w-full px-6 py-5">
      <h1 className="text-xl font-semibold mb-4 text-primary_blue ">
        ¡Bienvenido al portal de la caja de seguro social!
      </h1>
      <h1 className="text-sm  mb-6 text-gray-400 ">
        Regístrese y acceda a los beneficios de la Caja de Seguro Social
      </h1>

      <form className="space-y-4" onSubmit={sendUser}>
        <div>
          <label className="absolute bg-white ml-2 px-3 text-xs font-medium text-primary_blue">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder="Ingrese su correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 text-xs p-2 pt-3 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
          />
        </div>

        <div>
          <label className="absolute bg-white ml-2 px-3 text-xs font-medium text-primary_blue">
            Nombre Completo
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Ingrese su nombre completo"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 text-xs w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
          />
        </div>
        <div>
          <label className="absolute bg-white ml-2 px-3 text-xs font-medium text-primary_blue">
            Celular
          </label>
          <input
            type="tel"
            id="userPhone"
            name="userPhone"
            placeholder="Ingrese su número de celular"
            title="Ingrese solo números"
            pattern="[0-9]*"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 p-2 text-xs w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
          />
        </div>
        <div>
          <label className="absolute bg-white ml-2 px-3 text-xs font-medium text-primary_blue">
            Tipo Registro
          </label>
          <select
            id="opciones"
            name="opciones"
            required
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="mt-2 p-2 text-xs w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-400"
          >
            <option value="">
              Seleccione el tipo de registro que desea realizar
            </option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full text-sm bg-primary_blue text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};
