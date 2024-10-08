import React, { useState } from 'react'
import { addUserName } from '../../slice/slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import "./index.css"

const Login = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeUserName = (event) => {
    setName(event.target.value)
  }

  const onClickSubmitButton = () => {
    dispatch(addUserName(name));
    navigate("/quiz-game");
  }

  return (
    <div className="login-container">
      <h1 className="project-heading">Quiz Game</h1>
      <label className="label" htmlFor='input'>UserName:</label>
      <input type="text" className="user-input" id="input" placeholder='Enter your Name' onChange={onChangeUserName}/>
      <button type="button" className="login-button" onClick={onClickSubmitButton}>Submit</button>
    </div>
  )
}

export default Login
