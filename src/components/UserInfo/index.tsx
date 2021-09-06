import React from "react";

import { Tooltip } from "@chakra-ui/react"

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon } from './styles'

const UserInfo: React.FC = () => {
    return(
        <Container>

            <Profile>
                <Avatar/>
                <UserData>
                    <strong>aragão</strong>
                    <span>#4354</span>
                </UserData>

            </Profile>

            <Icons>
                <Tooltip label="Silenciar" bg="rgb(32, 34, 37)">
                    <MicIcon/>
                </Tooltip>

                <Tooltip label="Desativar áudio" bg="rgb(32, 34, 37)">
                    <HeadPhoneIcon/>
                </Tooltip>

                <Tooltip label="Configurações do usuário" bg="rgb(32, 34, 37)">
                    <SettingsIcon/>
                </Tooltip>

            </Icons>
            
        </Container>
    )
}

export default UserInfo;