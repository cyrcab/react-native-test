import { View, Text, StyleSheet, Image } from 'react-native';
import { getImgFromApi } from '../TMDBApi';

const FilmItem = ({ film }) => {
  return (
    <View style={styles.filmItemContainer}>
      <View style={styles.filmImg}>
        {film.poster_path ? (
          <Image
            style={styles.image}
            source={{
              uri: getImgFromApi(film.poster_path),
            }}
          />
        ) : (
          <Text>No image found</Text>
        )}
      </View>
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
  image: {
    flex: 1,
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
