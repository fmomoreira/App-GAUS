import { StyleSheet } from 'react-native';
import Form from '../components/Form';
import {  View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
