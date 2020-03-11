import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {flex: 1},
  placeholder: {
    alignSelf: 'center',
    fontSize: 16,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 620,
    width: 440,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default styles;
