import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import interceptors from "http/interceptors";
import { AppNav } from "navigation";
import { navigationRef } from "navigation/utils";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";
import { Provider } from "react-redux";
import { store } from "store/index";

interceptors.setup();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="dark" />

        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <Host>
              <AppNav />
            </Host>
          </NavigationContainer>
        </Provider>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
