import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: "Tapsell React Native Sample"
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Interstitial")}
        >
          <Text style={styles.buttonText}>Interstitial and Rewarded</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("StandardBanner")}
        >
          <Text style={styles.buttonText}>Standard Banner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("NativeBanner")}
        >
          <Text style={styles.buttonText}>Native Banner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("NativeVideo")}
        >
          <Text style={styles.buttonText}>Native Video</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#33AAFF",
    padding: 10,
    margin: 10
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});
