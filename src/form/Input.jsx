import React from 'react'

const Input = ({ type, text, name, placeholder, styles }) => {
  return (
    <div className={styles.form_item}>
        <label htmlFor={name}>{text}</label>
        <input 
            type={type} 
            id={name} 
            name={name}
            placeholder={placeholder} 
        />
    </div>
  )
}

export default Input