import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log(" Expo React Native init....");

  //java Script 사용하긱
  const name = "jae young";
  const isFullname = true;

  const add = (a, b) => {
    return a + b;
  };

  return (
    <View style={styles.container}>
      <Text>내 첫 리액트 네이티브 프로젝트!</Text>
      <Text>변수 사용</Text>
      <Text>myFullName : {isFullname ? name + " Ahn" : name}</Text>

      <Text>1 + 2 = {add(1, 2)}</Text>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
