import React, { useState } from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
//SignedIn =eğer izni yoksa giriş yapacak
//SignedOut = giriş yapmış çıkış yapacak

//False sa singedIn girecek
export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate();

  function handleSignOut(){  //çıkış yap
    setIsAuthenticated(false)
    navigate("/");
   
  }
  function handleSignIn(){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
        <Menu.Item
          name='home' />
        <Menu.Item name='messages' />

        <Menu.Menu position='right'>
          {cartItems.length>0 && <CartSummary/>}
          {isAuthenticated?<SignedIn signOut={handleSignOut}/>:
          <SignedOut signIn={handleSignIn}/>}
        
      </Menu.Menu>
        </Container>
      </Menu>

    </div>
  );
}
