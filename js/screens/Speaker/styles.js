import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: '#000', flex: 1},
  banner: {
    paddingHorizontal: 10,
    marginTop: 40,
    marginBottom: 50,
    color: '#ffffff',
  },
  header: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#ffffff',
    height: '100%',
    margin: 10,
    borderRadius: 6,
    marginBottom: 0,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '500',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  bio: {margin: 20, fontSize: 16},
  close: {justifyContent: 'flex-start'},
});

export default styles;
