import React, { forwardRef } from 'react'

const TextInput = forwardRef(({ph, n}, ref) => {
  return (
    <input name={n} style={style} placeholder={ph} ref={ref} />
  )
})
const style = {
    height: '3em',
    width: '90%',
    margin: 'auto',
    borderBottom: '0.5px solid black'
}
export default TextInput