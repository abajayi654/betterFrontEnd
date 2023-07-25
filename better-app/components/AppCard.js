import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";

export const AppCard = ({ handlePress, mainText, description, location }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
      <View style={styles.container}>
        <View style={styles.borderStyle}>
          <Image
            source={{ uri: "https://picsum.photos/1000/1000" }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <View style={styles.textBorder}>
              <Text style={{ flex: 1, fontWeight: 700, fontSize: 15 }}>
                {mainText}
              </Text>
              <View style={styles.textRow}>
                <Text
                  style={{
                    marginLeft: 2,
                    height: 45,
                    width: 285,
                    color: "#000000",
                  }}
                >
                  {description}
                </Text>
                <Text
                  style={{
                    marginLeft: 300,
                    color: "#4C4C4C",
                    height: 30,
                    width: 60,
                    position: "absolute",
                    alignSelf: "center",
                  }}
                >
                  {location}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  borderStyle: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 210,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    // borderWidth: 3,
  },
  mainText: {},
  subtitleText: {},
  textBorder: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  textContainer: {
    height: 90,
    width: "100%",
    padding: 5,
  },
  textRow: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
  },
  touchable: {
    padding: 10,
  },
});
