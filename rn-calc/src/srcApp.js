import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "700",
          color: "green",
          backgroundColor: "yellow",
          borderWidth: 4,
          borderColor: "red",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        inline Css - 계산기
      </Text>
      <Text style={styles.text}>StyleSheet</Text>
      <Text style={styles.error}>Error</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "green",
  },
  error: {
    fontSize: 30,
    fontWeight: "700",
    color: "red",
  },
});

export default App;
