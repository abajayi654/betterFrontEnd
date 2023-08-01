import { Stack } from "expo-router";

import { useEffect } from "react";

export const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "green",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    ></Stack>
  );
};

export default Layout;
