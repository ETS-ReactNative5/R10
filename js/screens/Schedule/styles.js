import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    paddingTop: 5,
    paddingLeft: 10,
    backgroundColor: '#e6e6e6',
    fontWeight: '600',
    height: 25,
  },
  border: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#e6e6e6',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  position: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  location: {
    color: '#999999',
    fontWeight: '500',
  },
});

export default styles;
