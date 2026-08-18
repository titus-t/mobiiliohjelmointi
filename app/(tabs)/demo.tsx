import { Text, View } from "react-native";

export default function DemoScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>Hello world</Text>
    </View>
  );
}
