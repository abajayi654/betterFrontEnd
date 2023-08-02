import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AppBook = () => {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: 200,
        width: "90%",
        margin: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          height: 70,
          width: 60,
          borderRadius: 3,
          justifyContents: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <View
          style={[styles.firstSlash, { transform: [{ rotate: "315deg" }] }]}
        />
        <View
          style={[styles.secondSlash, { transform: [{ rotate: "315deg" }] }]}
        />
        <View
          style={[styles.thirdSlash, { transform: [{ rotate: "315deg" }] }]}
        />
        {/* <View
          style={[styles.fourthSlash, { transform: [{ rotate: "315deg" }] }]}
        />
        <View
          style={[styles.fifthSlash, { transform: [{ rotate: "315deg" }] }]}
        />
        <View
          style={[styles.sixthSlash, { transform: [{ rotate: "315deg" }] }]}
        /> */}
        <Text style={{ fontSize: 12 }}>9:00am </Text>
        <Text style={{ fontSize: 12 }}>-</Text>
        <Text style={{ fontSize: 12 }}> 10:00am</Text>
        <Text style={{ fontSize: 12 }}>1 hour</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstSlash: {
    position: "absolute",
    top: 7,
    left: -5,
    width: 25,
    height: 2,
    backgroundColor: "lightgray",
  },
  secondSlash: {
    position: "absolute",
    top: 13,
    left: -7,
    width: 40,
    height: 2,
    backgroundColor: "lightgray",
  },
  thirdSlash: {
    position: "absolute",
    top: 18,
    left: -10,
    width: 60,
    height: 2,
    backgroundColor: "lightgray",
  },
  fifthSlash: {
    position: "absolute",
    top: 23,
    left: 0,
    width: 50,
    height: 2,
    backgroundColor: "black",
  },
  sixthSlash: {
    position: "absolute",
    // top: 0,
    left: 0,
    width: 15,
    height: 2,
    backgroundColor: "black",
  },
});

export default AppBook;
