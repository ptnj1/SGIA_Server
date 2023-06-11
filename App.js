import React, { useState } from 'react'

function App() {

  const [nom, setNom] = useState('');
  const [matricule, setMatricule] = useState('');
  const [pass, setPass] = useState('');


  const handleSubmit = (n) => {
    n.preventDefault();
    console.log(nom);

  }

  return (
    <form onSubmit = {handleSubmit}>
      <label for="nom">Nom</label>
      <input  value={nom} onChange={(n) => setNom(n.target.value)} type="nom" placeholder='votre nom' id="nom" name='nom'/>
      <label for="matricule">Matricule</label>
      <input value={matricule} onChange={(n) => setNom(n.target.value)} type="matricule" placeholder='votre matricule' id="matricule" name='matricule'/>
      <label for="password">Password</label>
      <input value={matricule} onChange={(n) => setNom(n.target.value)} type="password" placeholder='********' id="password" name='password'/>
      <button type="submit">Login</button>
    </form>

  )

}

export default App