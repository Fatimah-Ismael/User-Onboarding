import React, { useState } from 'react';
import './App.css';
import Form from './Component/Form'
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';
const initialFormsValues = {
  username: '',
  password: '',
  email: '',
  checked: false
}
const initialFormsError = {
  username: '',
  password: '',
  email: '',
  checked: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormsValues);
  const [formErrors, setFormErrors] = useState(initialFormsError);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    //WORK IN PROGRESS
    axios.get('https://reqres.in/api/users', formValues)
    .then(res => {
      //console.log(res)
      setUsers([ res.data, ...users])
    })
  }
const validate = (name, value)=> {
  yup.reach(schema, name)
  .validate(value)
  .then(()=> setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors}))
}

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />
      {users.map(user => (
        <div key={user.id} >
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))

      }
    </div>
  );
}

export default App;
