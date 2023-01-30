import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postRegister } from '../../../services/apiCalls';
// import { Decoder, errorCheck } from '../../../services/utiles';
//RDX imports......

import './Register.css';

export const Register = () => {

    const [usuario, setUsuario] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        dni: ''
    })

    const navigate = useNavigate();

    const registrar = () => {
        
        postRegister(usuario)
        .then(

            newUser => {
                console.log(newUser)
                setTimeout(()=> {
                    navigate("/")
                },700);
            }
        )
        .catch(error => console.log(error));
    }

    const registerInputHandler = (e) => {

        //Manejo la entrada de datos en los input y voy actualizando el hook usuario a medida
        //que los datos se van introduciendo

        //Bindear (atar)
        setUsuario((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;

    }

    // const RegisterErrorHandler = (e) => {

    //     let error = '';

    //     error = errorCheck(e.target.name, e.target.value);


    //     setErrorCredenciales((prevState) => ({
    //         ...prevState,
    //         [e.target.name + 'Error']: error
    //     }));
    // }

    return (
        <div className='registerDesign'>
            {/* <pre>{JSON.stringify(usuario, null, 2)}</pre> */}
            <InputText 
            type={'text'} 
            name={'name'} 
            // className={credencialesError.name === '' ? 'inputDesign' : 'inputDesign inputDesignError'}
            placeholder={'name'} 
            functionHandler={registerInputHandler}/>
            
            <InputText 
            type={'text'} 
            name={'surname'} 
            placeholder={'surname'} 
            functionHandler={registerInputHandler}/>
            
            <InputText 
            type={'text'} 
            name={'phone'} 
            placeholder={'phone'} 
            functionHandler={registerInputHandler}/>
            
            <InputText 
            type={'email'} 
            name={'email'} 
            placeholder={'email'} 
            functionHandler={registerInputHandler}/>
            
            <InputText 
            type={'password'} 
            name={'password'} 
            placeholder={'password'} 
            functionHandler={registerInputHandler}/>
            
            <InputText 
            type={'text'} 
            name={'dni'} 
            placeholder={'dni'} 
            functionHandler={registerInputHandler}/>
            <div className='loginButtonDesign' onClick={()=>registrar()}>Registrarse</div>
        </div>
    );
};