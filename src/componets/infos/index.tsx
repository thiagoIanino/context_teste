import React, { useEffect } from 'react';
import {UseUserContext} from '../../context/user/user'
// import { Container } from './styles';

const Infos: React.FC = () => {


const context = UseUserContext()



  return <div ><h1>Bem vindo(a) :{context?.user.nome1} {context?.user.nome2}</h1></div>;
}

export default Infos;