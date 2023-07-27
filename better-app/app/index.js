import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Modal,
  Button,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useRouter, Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LogoTitle from "../assets/icons/LogoTitle.jsx";
import { AppCard } from "../components/AppCard.js";

export default function Page() {
  const [modalVisble, setModalVisible] = useState(false);
  const centres = [
    {
      id: 1,
      centreName: "Sidcup Leisure Center",
      description: `Welcome to Sidcup Leisure Center, we hope you enjoy it here`,
      location: "2.5 miles",
    },
    {
      id: 2,
      centreName: "Erith Leisure Center",
      description: `Welcome to ${this.centreName}, we hope you enjoy it here`,
      location: "2.9 miles",
    },
    {
      id: 3,
      centreName: "Parkwood Leisure Center",
      description: `Welcome to ${this.centreName}, we hope you enjoy it here`,
      location: "3.2 miles",
    },
    {
      id: 4,
      centreName: "Crook Log Leisure Center",
      description: `Welcome to ${this.centreName}, we hope you enjoy it here`,
      location: "5.5 miles",
    },
  ];
  const router = useRouter();
  const handlePress = () => setModalVisible(true);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerTitleAlign: "center",
          headerLeft: () => <MaterialCommunityIcons name="menu" size={25} />,
          headerRight: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={25}
              color="#000000"
            />
          ),
        }}
      />

      <FlatList
        data={centres}
        keyExtractor={(centre) => centre.id}
        renderItem={({ item }) => (
          <AppCard
            mainText={item.centreName}
            description={item.description}
            location={item.location}
            handlePress={handlePress}
          />
        )}
      />
      <Modal visible={modalVisble}>
        <SafeAreaView>
          <Button title="Close" onPress={() => setModalVisible(!modalVisble)} />
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
