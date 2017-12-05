import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStlye}>Albums!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStlye: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
});

export default Header;
