import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import FilmItem from './filmItem';

import { fetchFilms } from '../TMDBApi';

const Search = () => {
  const [listOfFilm, setListOfFilm] = useState([]);
  const [filmSearched, setFilmSearched] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleLoadFilm = () => {
    if (filmSearched.length > 0) {
      fetchFilms(filmSearched, currentPage + 1).then((data) => {
        setCurrentPage(currentPage + 1);
        setListOfFilm([...listOfFilm, ...data.results]);
        setTotalPage(data.total_pages);
      });
    } else {
      setTotalPage(0);
      setCurrentPage(0);
      setListOfFilm([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Titre du film"
        style={styles.input}
        value={filmSearched}
        onSubmitEditing={() => handleLoadFilm()}
        onChangeText={setFilmSearched}
        clearButtonMode={'always'}
      />
      <Button title="Rechercher" onPress={() => handleLoadFilm()} />
      <Text>
        Vous êtes à la page {currentPage} / {totalPage}
      </Text>
      <FlatList
        data={listOfFilm}
        renderItem={({ item }) => <FilmItem film={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => {
          if (currentPage < totalPage) {
            handleLoadFilm();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  input: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default Search;
