import React from "react";

import { Container, HashTagIcon, InviteIcon, SettingsIcon } from './styles'

import { Tooltip } from "@chakra-ui/react"
export interface Props {
    channelName: string;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {
    return(
        <Container className={selected ? 'active' : ''}>

            <div>
                <HashTagIcon/>
                <span>{channelName}</span>
            </div>

            <div className="icons">
                <Tooltip label="Criar convite" bg="rgb(32, 34, 37)">
                    <InviteIcon/>
                </Tooltip>

                <Tooltip label="Editar canal" bg="rgb(32, 34, 37)">
                    <SettingsIcon/>
                </Tooltip>
                
            </div>

        </Container>
    )
}

export default ChannelButton;