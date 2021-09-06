import React from "react";

import { Container, Role, Avatar, User  } from './styles'

import { Tooltip } from "@chakra-ui/react"

import { users } from '../../data/data'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Tooltip label={nickname} bg="rgb(32, 34, 37)">
                <strong>{nickname}</strong>
            </Tooltip>

            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
    return(
        <Container>
            <Role>Disponível - {users.filter((user) => user.status === "online").length}</Role>

            {
                users.filter((user) => user.status === "online").map((user, index) => user?.isBot ? <UserRow key={index} nickname={user.nickname} isBot/> : <UserRow key={index} nickname={user.nickname}/>)
            }

            <Role>Offline - {users.filter((user) => user.status === "offline").length}</Role>

            {
                users.filter((user) => user.status === "offline").map((user, index) => user?.isBot ? <UserRow key={index} nickname={user.nickname} isBot/> : <UserRow key={index} nickname={user.nickname}/>)
            }
                      
        </Container>
    )
}

export default UserList;