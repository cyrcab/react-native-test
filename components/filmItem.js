import { View, Text, StyleSheet } from 'react-native';
import {REACT_APP_API_KEY} from '@env';

const FilmItem = ({ film }) => {
  console.log(film);
  const key = REACT_APP_API_KEY;
  console.log(key);
  return (
    <View style={styles.filmItemContainer}>
      <View style={styles.filmImg} />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, flex: 1, fontWeight: '700' }}>{film.title}</Text>
          <Text
            style={{
              fontSize: 30,
              flex: 0.7,
              textAlign: 'right',
              color: 'grey',
              fontWeight: '600',
            }}>
            {film.vote_average}
          </Text>
        </View>
        <Text style={{ color: 'grey', marginBottom: 20 }} numberOfLines={6}>
          {film.overview}
        </Text>
        <Text style={{ textAlign: 'right', fontSize: 16, fontWeight: '700' }}>
          {' '}
          Sorti le {film.release_date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filmItemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor: '#083D77',
  },
  filmImg: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 2,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default FilmItem;
