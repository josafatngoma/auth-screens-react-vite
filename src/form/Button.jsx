import React from 'react'

const Button = ({ styles, type, text}) => {
  return (
    <div>
        <button type={type} className={styles.btn_form}>{text}</button>
    </div>
  )
}

export default Button