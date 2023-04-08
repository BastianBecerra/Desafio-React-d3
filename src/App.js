import {useState} from 'react';
import { baseColaboradores } from "./baseColaboradores";

function App() {
const [nuevoColaborador, setNuevoColaborador] = useState({nombre:"", correo:""});
const [ListaColaboradores, setListaColaboradores] = useState(baseColaboradores);

const handleChange = (e, propiedad) => {
  setNuevoColaborador({...nuevoColaborador, [propiedad]: e.target.value})
  console.log(nuevoColaborador)
}
const [buscadorColaboradores, setBuscadorColaboradores] = useState("")

const handleClick = () => {
  setListaColaboradores([...ListaColaboradores, {...nuevoColaborador, id: Date.now}])
}
const handleSearch = (e) => {
  setBuscadorColaboradores(e.target.value)
}

  return (
    <div className="App">
      <h1>Buscador Colaboradores</h1>
      <input 
      onChange={handleSearch}
      type="text" />
      <label>Nombre:</label>
      <input 
      onChange={(ev) => {handleChange(ev, "nombre")}}
      type="text" />
      <label>Correo Colaborador:</label>
      <input 
      onChange={(ev) => {handleChange(ev, "correo")}}
      type="email" />
      <button onClick={handleClick}>Agregar.</button>
      <ul>
        {ListaColaboradores.filter((colaborador) => {
          return (colaborador.nombre.toLowerCase().includes(buscadorColaboradores.toLowerCase()))
        }).map(colaborador => {
          return(
            <li key={colaborador.id}>
              {colaborador.nombre} - {colaborador.correo}
            </li>)})}
      </ul>
      </div>
  );
}

export default App;
