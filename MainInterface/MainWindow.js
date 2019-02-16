import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{alignContent : 'center'}}>
        <Text> We Logged In </Text>
        <Button onPress = {() => this.props.navigation.navigate('Welcome')}
          title = " back to main Window"
        ></Button>
      </View>
    );
  }
}

export default MainWindow;
