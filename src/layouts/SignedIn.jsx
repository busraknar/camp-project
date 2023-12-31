import React from 'react'
import { Dropdown,Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://cdn.pixabay.com/photo/2022/09/14/01/42/girl-7453178_1280.png"/>
            <Dropdown pointing="top left" text="Büşra">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon = "info"/>
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon = "sign-out"/>

                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>    
    </div>
  )
}
