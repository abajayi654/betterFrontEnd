import { SafeAreaView, Image } from "react-native";

function LogoTitle() {
  return (
    <SafeAreaView
      style={{
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 75, height: 75 }}
        source={require("./5eb3c1b0c8c459000443512e.png")}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}

export default LogoTitle;
