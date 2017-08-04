import { StyleSheet, Dimensions } from 'react-native';

const paddingTop = 20;
const height = Dimensions.get('window').height - paddingTop;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop,
    height,
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
  },
});
