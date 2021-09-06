import React from "react";

import { Container, Separator } from "./styles";

import { servers } from '../../data/data';

import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <Container>

      {
        servers.map((server, index) => 
          server?.isHome ? 
          <>
            <ServerButton 
              isHome
            /> 
            <Separator />
          </>
          : 
          <ServerButton 
            mentions={server.mentions} 
            hasNotifications={server.hasNotifications} 
          />
        )
      }

      <Separator />

    </Container>
  );
};

export default ServerList;
