//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {restaurants} from '../constants/DataJSON';
// create a component
const Restaurants = () => {
  return (
    <View style={styles.container}>
      {restaurants.map((item, index) => (
        <Item item={item} key={index.toString()} />
      ))}
    </View>
  );
};
const Item = props => {
  const {item} = props;

  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.DetailsContainer}>
        <Text style={styles.hotelText}>{item.name}</Text>
        <Text style={styles.detailsText}>{item.details}</Text>
        <Text
          style={[styles.statusText, {color: item.isOpen ? 'green' : 'red'}]}>
          {item.isOpen ? 'open' : 'close'}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    shadowColor: '#0D044650',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  DetailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },

  image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  detailsText: {
    fontWeight: '400',
    lineHeight: 20,
    color: '#0D044680',
  },
  statusText: {
    color: 'Black',
    fontWeight: '400',
  },
  hotelText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0D0446',
  },
});

//make this component available to the app
export default Restaurants;
