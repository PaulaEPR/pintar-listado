import { useEffect, useState } from 'react';
import initialAdalaber from '../data/initialAdalaber.json';
import callToApi from '../services/api';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState(initialAdalaber);
  const [search, setSearch] = useState('');
  const [searchCounselor, setSearchCounselor] = useState('');

  /* --- Use Effect --- */
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  /* --- Handlers --- */
  const handleChangeNewAdalaber = (event) => {
    setNewAdalaber({
      ...newAdalaber,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const handleSubmitNewAdalaber = (event) => {
    event.preventDefault();
    setData([...data, newAdalaber]);
    setNewAdalaber(initialAdalaber);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.currentTarget.value);
  };
  const handleChangeSelect = (event) => {
    if (event.currentTarget.value !=="Anyone") {
      setSearchCounselor(event.currentTarget.value);
    } else {
      setSearchCounselor('')
    }
  };

  /* --- Add HTML for Adalabers List --- */
  const htmlAdalabersList = data
    .filter((adalaber) =>
      adalaber.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((adalaber) =>
      adalaber.counselor.toLowerCase().includes(searchCounselor.toLowerCase())
    )
    .map((adalaber, index) => (
      <tr key={index}>
        <td>{adalaber.name}</td>
        <td>{adalaber.counselor}</td>
        <td>{adalaber.speciality}</td>
      </tr>
    ));

  /* --- Add HTML for New Adalabers --- */
  const headersList = [
    { id: 'name', ph: 'Ej: Mari Carmen', l: 'Nombre', v: newAdalaber.name },
    {
      id: 'counselor',
      ph: 'Ej: Dayana',
      l: 'Tutora',
      v: newAdalaber.counselor,
    },
    {
      id: 'speciality',
      ph: 'Ej: MeteorJS',
      l: 'Especialidad',
      v: newAdalaber.speciality,
    },
  ];

  const htmlInput = headersList.map((adalaber, index) => (
    <div key={index}>
      <label htmlFor={adalaber.id}>{adalaber.l}</label>
      <input
        type="text"
        name={adalaber.id}
        id={adalaber.id}
        placeholder={adalaber.ph}
        onChange={handleChangeNewAdalaber}
        value={adalaber.v}
      />
    </div>
  ));

  return (
    <div className="App">
      <h1>Adalabers</h1>
      <form>
        <label>
          Nombre:
          <input
            autoComplete="off"
            spellCheck="false"
            type="search"
            name="search-adalaber"
            id="search-adalaber"
            placeholder="Ej: Mari Carmen"
            onChange={handleChangeSearch}
            value={search}
          />
        </label>
        <select
          name="search-counselor"
          id="search-counselor"
          onChange={handleChangeSelect}
        >
          <option value="Anyone">Cualquiera</option>
          <option value="Yanelis">Yanelis</option>
          <option value="Dayana">Dayana</option>
          <option value="Iván">Iván</option>
        </select>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>{htmlAdalabersList}</tbody>
      </table>
      <h2>Añadir a una Adalaber</h2>
      <form action="#">
        {htmlInput}
        <input
          type="submit"
          value="Añadir una nueva adalaber"
          onClick={handleSubmitNewAdalaber}
        />
      </form>
    </div>
  );
}

export default App;
