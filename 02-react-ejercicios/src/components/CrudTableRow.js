import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { nombre, apellido, residencia, id } = el;

  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{residencia}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;