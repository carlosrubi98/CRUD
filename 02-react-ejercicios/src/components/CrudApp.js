
import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    nombre: "Carlos",
    apellido: "Rubí",
    residencia : "655165151",
  },
  
  {
    id: 2,
    nombre: "Fernando",
    apellido: "Juárez",
    residencia : "El Rosario, Sinaloa",
  },
  
  {
    id: 3,
    nombre: "María",
    apellido: "Germán",
    residencia : "Cd. Obregón, Sonora",
  },
  
  {
    id: 4,
    nombre: "Luz",
    apellido: "Félix",
    residencia : "Hermosillo, Sonora",
  },
  
  {
    id: 5,
    nombre: "Daniel",
    apellido: "Bracamontes",
    residencia : "Hermosillo, Sonora",
  },

  {
    id: 6,
    nombre: "Alejandra",
    apellido: "Astorga",
    residencia : "Los Mochis, Sinaloa",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;