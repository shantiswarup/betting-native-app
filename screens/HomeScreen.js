import React from "react";
import { View, Text, Button } from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
          <Button
          title="Start Betting"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'KioskScan' })
              ],
            }))
          }}
        />
        </View>
      );
    }
}

export default HomeScreen;
