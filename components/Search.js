import { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import FilmItem from './filmItem';

import { getFilmFromAPiWithSearchedText } from '../TMDBApi';

const Search = () => {
  const [listOfFilm, setListOfFilm] = useState([]);
  const [filmSearched, setFilmSearched] = useState('');

  const handleLoadFilm = (filmToSearch) => {
    getFilmFromAPiWithSearchedText(filmToSearch).then((data) => setListOfFilm(data.results));
    setFilmSearched('');
  };

  console.log(listOfFilm);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Titre du film"
        style={styles.input}
        value={filmSearched}
        onSubmitEditing={() => handleLoadFilm(filmSearched)}
        onChangeText={setFilmSearched}
        clearButtonMode={'always'}
      />
      <Button title="Rechercher" onPress={() => handleLoadFilm(filmSearched)} />
      <FlatList
        data={listOfFilm}
        renderItem={({ item }) => <FilmItem film={item} />}
        keyExtractor={(item) => item.id.toString()}
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
