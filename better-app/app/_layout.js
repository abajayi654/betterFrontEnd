import { Stack } from "expo-router";

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
    />
  );
};

export default Layout;
