/** @format */

import { Text, View, Center } from "native-base";
import React from "react";

const Messages = ({ bg, color, children, size }) => {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
};

export default Messages;
