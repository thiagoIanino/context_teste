import React, { useState } from 'react';
import './container.css'
// import { Container } from './styles';
import { UseUserContext } from '../../context/user/user'
import Infos from '../infos'

const Container = () => {

const context = UseUserContext()

    const [Nome1, setNome1] = useState('')
    const [Nome2, setNome2] = useState('')
   

    function hendleName(event: React.ChangeEvent<HTMLInputElement>) {
        setNome1(event.target.value)
        
    }
    function hendleNumber(event: React.ChangeEvent<HTMLInputElement>) {
        setNome2(event.target.value)
    }
   function login() {
      // UseUserContext().setUser({name:Nome,numero:Numero})

context?.setUser({nome1:Nome1,nome2:Nome2})
   }

    return (
        <div className="pageLogin">
            <div className="content">
                <div className="main">
                    <div className="loginH1">
                        <Infos/>
                    </div>
                    <div className="Logintxt">
                        <label htmlFor="login">Nome</label>
                        <input type="text" onChange={hendleName} id="login" />

                    </div>
                    <div className="Senhatxt">
                        <label htmlFor="sobre">Sobrenome</label>
                        <input type="text" onChange={hendleNumber } id="senha" />
                    </div>

                    <div className="btnlogin">

                        <button id="login" onClick={login}>login</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;