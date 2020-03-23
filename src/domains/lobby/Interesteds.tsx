import React from "react";
import { Flex } from "rebass";
import { Avatar } from "../../screens/Lobby";

export function Interesteds({ interesteds }) {
  return (
    <Flex flexWrap="wrap">
      {interesteds.map(user => (
        <Avatar key={user.id} user={user} />
      ))}
    </Flex>
  );
}
