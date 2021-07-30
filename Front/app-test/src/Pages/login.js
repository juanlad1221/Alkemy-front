import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'
import logo from '../assets/avatar.png'
import 'react-toastify/dist/ReactToastify.css';



//Funciones  
function PresenceValidateInput(value1, value2) {
  if (value1 === '' || value2 === '') { alert('Debe completar los campos...'); return }
  return
}
const notify = (msg) => toast.error(msg, {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,

})






export default function LogIn() {
  let history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsername(e) {
    setUsername(e.target.value);

  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  var url = 'http://localhost:3005/api/login'
  const sendData = (url, username, password) => {

    PresenceValidateInput(username, password)

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then((res) => {

        if (res.token) {
          //Almaceno en el storage el token de seguridad
          localStorage.setItem('token', res.token);
          //Se envia a la pantalla home.
          history.push('/home')
        }

        if (res.status === 404) {
          notify("ERROR: Username or Password incorrect")
        }
      })
      .catch(error => console.error('Error:', error))
  }



  return (

    <div className="container">
      <ToastContainer />

      <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
        <Avatar src={logo} size="110" round={true} />
      </div>

      <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
        <div className="col-sm-12 col-lg-4">
          <input onChange={handleUsername} type="text" class="form-control" placeholder="username" />
          <br></br>

          <input onChange={handlePassword} type="password" class="form-control" placeholder="password" />
          <br></br> <br></br>

          <div class="d-grid gap-2">
            <button onClick={() => { sendData(url, username, password) }} className="btn btn-primary" type="button">Login</button>
          </div>

        </div>
      </div>
    </div>
  )
}



