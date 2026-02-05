import { ScrollView, Text, View } from "react-native";
import * as AC from "@bacons/apple-colors";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: 12,
        }}
      >
        <Text
          style={{
            fontSize: 48,
          }}
        >
          👋
        </Text>
        <Text
          selectable
          style={{
            fontSize: 28,
            fontWeight: "600",
            color: AC.label,
          }}
        >
          Hello World
        </Text>
        <Text
          selectable
          style={{
            fontSize: 17,
            color: AC.secondaryLabel,
          }}
        >
          Welcome to Expo
        </Text>
      </View>
    </ScrollView>
  );
}
