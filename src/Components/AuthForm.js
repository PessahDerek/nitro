
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api_ } from '../Apis/api';
import { useUserDetails } from '../Hooks/useUserDetails';
import Button1 from './Button1';
import TextInput from './TextInput';

const AuthForm = () => {
    const navigate = useNavigate()
    const { set } = useUserDetails()
    const [signup, setSignup] = useState(true)
    const [spin, setSpin] = useState(false)
    let fn=useRef(null), ln=useRef(null), ph=useRef(null), id=useRef(null), 
        pwd=useRef(null), conf=useRef(null), mode=useRef(null);
    
    let signupInps = [fn, ln, ph, id, pwd, conf]
    let loginInps = [id, pwd]
    const submit = async(e) => {
        e.preventDefault()
        if(id.current.value.length < 8)return id.current.style.borderBottom = "0.5px solid red"
        let request = {}
        let inputs = signup ? signupInps : loginInps
        for(let elem of inputs){
            if(elem.current.value.length < 4)return elem.current.style.borderBottom = "0.5px solid red"
            request[`${elem.current.name}`] = elem.current.value
        };
        
        request['mode'] = signup

        setSpin(true)
        let path = signup ? "/signup" : "/login"
        await api_.post(path, request)
        .then(res => {
            set(res.data.user)
            navigate('/dashboard')
            setSpin(false)
        })
        .catch(({error, response})=>{
            try {
                console.log(request)
                alert(response.data.message)
            } catch (err) {
                alert(error.message)
            }
            setSpin(false)
        })
    }
  return (
    <div style={cont}>
        <h1>{signup ? "Signup" : "Login"}</h1>
        <form style={form} onSubmit={submit} >
            {signup && <>
                <TextInput n="firstName" ph='First Name' ref={fn} />
                <TextInput n="lastName" ph='Last Name' ref={ln} />
                <TextInput n="phone" ph='Phone Number' ref={ph} />
            </>}
            <TextInput n="idNumber" ph='ID Number' ref={id} />
            <TextInput n="passwd" ph='Password' ref={pwd} />
            {signup && <TextInput n="confPasswd" ph='Confirm Passord' ref={conf} />}
            <Button1 txt={
                spin ? "wait..." : 
                signup ? "Sign Up" : "Login"
                } load={'load'} spin={spin} />
            <Button1 txt={
                signup ? "Login Instead" : "Signup Instead"
            } load="normal" action={()=>setSignup(!signup)} />
        </form>
    </div>
  )
}


const cont = {
    minWidth: '300px',
    width: '20rem',
    top: '10vh',
    padding: '0.5rem',
    margin: 'auto',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)'
}
const form = {
    display: 'grid',
    gridAutoFlow: 'row',
    rowGap: '0.5rem'
}

export default AuthForm
