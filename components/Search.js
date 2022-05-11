import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import data from '../Helpers/filmsDatas';
import FilmItem from './filmItem';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Titre du film" style={styles.input} />
      <Button title="Rechercher" onPress={() => {}} />
      <FlatList
        data={data}
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
