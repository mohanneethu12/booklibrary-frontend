import React from 'react'

function ErrorMessage(props) {
  
    const {type, field} = props
    let errorMessage;
    if(type === 'maxLength'){
        errorMessage = `${field} is too long`
    }
    else if(type === 'required'){
        errorMessage = `${field} is require`
    }
    else if(type === 'pattern'){
        errorMessage = 'password should contain one small letter, caps letter, number and special charecter. mimimum 6 charecter and maximum 16'
    }
    return(
        <span>{errorMessage}</span>
    )
  
}

export default ErrorMessage