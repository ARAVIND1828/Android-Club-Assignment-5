import React from 'react';
import {useCountContext} from '../context/countContextProvider';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
export default function MainScreen() {
  const countContext = useCountContext();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.countText}>{countContext.count}</Text>
        <Button
            title='Increase by 1'
          onPress={() => countContext.setCount(countContext.count + 1)} />
        <Text style={styles.countText}>{countContext.count2}</Text>
        <Button
            title='Decrease by 1'
          onPress={() => countContext.setCount2(countContext.count2 - 1)} />
        <Text style={styles.countText}>{countContext.count3}</Text>
        <Button
          title='Increase by 2'
          onPress={() => countContext.setCount3(countContext.count3 + 2)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    marginTop: 64,
    fontSize: 48,
    color: '#000000',
  },
});
