import React from 'react'
import LoginDesktop from './LoginDesktop'
import LoginMobile from './LoginMobile'

const Login = ({ screenWidth }) => {
  return (
    <div>

      { screenWidth >= 1000 ? <LoginDesktop />
                                                : <LoginMobile />}
    </div>
  )
}

export default Login