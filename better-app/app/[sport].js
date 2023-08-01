import { View, Text } from "react-native";
import React from "react";
import { useSearchParams, Stack } from "expo-router";

const Sport = () => {
  const { sport, centre } = useSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: sport }} />
      <Text>
        See {sport} listings at {centre}
      </Text>
    </View>
  );
};

export default Sport;
