import { StyleSheet, Dimensions } from 'react-native';
import padding from '../../config/styles';

const height = Dimensions.get('window').height - padding.paddingTop;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: padding.paddingTop,
    height,
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
  },
});
