import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconWith({ name, color, focused, isAround }) {
  return (
    <View style={isAround && styles.container2}>
      <Icon
        name={name}
        size={isAround ? 20 : 23}
        color={isAround ? '#fff' : color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 1,
    backgroundColor: '#FB8A92',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
