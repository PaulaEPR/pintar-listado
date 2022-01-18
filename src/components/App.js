import { useState } from 'react';
import adalabers from '../data/adalabers.json';
import '../styles/App.scss';

function App() {
  const [data, setData] = useState(adalabers.results);
  //const [search, setSearch] = useState('');
  //const [newAdalaber, setNewAdalaber] = useState(initialState);



  const htmlAdalabersList = data.map((adalaber, index) => (
    <tr key={index}>
      <td>{adalaber.name}</td>
      <td>{adalaber.counselor}</td>
      <td>{adalaber.speciality}</td>
    </tr>
  ));

  return (
    <div className="App">
      <h1>Adalabers</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {htmlAdalabersList}
        </tbody>
      </table>
    </div>
  );
}

export default App;
