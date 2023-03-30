import React, { useState } from 'react'
import { api_ } from '../Apis/api'
import { useUserDetails } from '../Hooks/useUserDetails'
import Button1 from './Button1'
import TextInput from './TextInput'

const SellForm = () => {
    const [spin, setSpin] = useState(false)
    const { user } = useUserDetails()

    const submit = async(e) => {
        e.preventDefault()
        setSpin(true)
        let form = new FormData(e.target)
        form.append('bidOwner', user._id)
        await api_.post('/addproduct', form)
        .then(res=>{
            alert(res.data.message)
            setSpin(false)
        })
        .catch(({error, response})=>{
            try {
                alert(response.data.message)
            } catch (error) {
                alert(error.message)
            }
            setSpin(false)
        })
    }

  return (
    <div style={style}>
        <h1 className='h1'>Add Product for Auction</h1>
        <form style={form} onSubmit={submit} >
            <label>Choose Image</label>
            <input style={inp} type='file' name='image' multiple />
            <TextInput n='askingPrice' ph="Asking Price" />
            <textarea style={{...inp, 
                backgroundColor: 'white',color: 'black',
                fontFamily: 'inherit'}} placeholder='Product description...' />
            <TextInput n='category' ph='Categories(separate with comma)' />
            <Button1 load={'load'} spin={spin} txt={"Add Product"} />
        </form>
    </div>
  )
}

const style = {
    width: 'calc(90% - 1rem)',
    marginLeft: "auto",
    marginRight: 'auto',
    textAlign: 'left',
    padding: '1rem',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.25)',
}
const inp = {
    width: "90%",
    margin: 'auto',
    height: '5rem',
    color: 'white',
    backgroundColor: 'black',
}
const form = {
    display: 'grid',
    gridAutoFlow: 'row',
    gap: "1rem"
}

export default SellForm