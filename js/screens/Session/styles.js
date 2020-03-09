import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {padding: 18},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  location: {
    fontWeight: '500',
    fontSize: 16,
    paddingBottom: 15,
    color: '#999',
  },
  title: {fontSize: 28, fontWeight: '500', paddingBottom: 10},
  startTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#cf392a',
    paddingBottom: 15,
  },
  description: {fontSize: 18, paddingBottom: 20},
  border: {
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: '#e6e6e6',
    paddingBottom: 20,
  },
  avatar: {width: 55, height: 55, borderRadius: 50},
  speaker: {
    paddingLeft: 15,
    paddingTop: 16,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default styles;
