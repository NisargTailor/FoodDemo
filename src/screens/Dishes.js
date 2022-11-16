//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Modal,
  Dimensions,
  ScrollView,
} from 'react-native';
import {tabList, dishes, PizzaData} from '../constants/DataJSON';

const TabList = props => {
  const {item, onPress, index, selectedIndex} = props;

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.tabItem,
        {borderBottomWidth: index == selectedIndex ? 5 : 0},
      ]}>
      <Text style={styles.tabText}>{item.name}</Text>
    </Pressable>
  );
};

const ListItems = props => {
  const {item, selection} = props;

  return (
    <View style={Istyles.container}>
      {selection && (
        <Image
          style={Istyles.chekMark}
          source={require('../assets/check.png')}
        />
      )}
      <Image style={Istyles.image} source={{uri: item.image}} />
      <View style={Istyles.details}>
        <Text style={Istyles.titleText}>{item.name}</Text>
        <Text style={Istyles.detailText} numberOfLines={2}>
          {item.details}
        </Text>
      </View>
    </View>
  );
};
const Istyles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chekMark: {
    height: 20,
    width: 20,
    borderRadius: 40,
    marginRight: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 40,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#0D0446',
  },
  detailText: {
    color: '#9098A5',
  },
});
// create a component
const Dishes = () => {
  const [selectedIndex, SetselectedIndex] = useState(0);
  const [showDishModal, SetShowDishModal] = useState(false);
  const [selectedItems, SetSelectedItems] = useState([]);

  const onTabPress = (item, index) => {
    SetselectedIndex(index);
  };
  const addDishesPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.tabListContainer}>
        {tabList.map((item, index) => {
          return (
            <TabList
              selectedIndex={selectedIndex}
              index={index}
              onPress={() => onTabPress(item, index)}
              item={item}
              key={index.toString()}
            />
          );
        })}
      </View>
      {selectedIndex == 0 ? (
        <View style={styles.backgroundContainer}>
          <TextInput placeholder="Restaurant Name" style={styles.textInput} />
          <TextInput placeholder="Details" style={styles.textInput} />
          <View style={styles.listContainer}>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>Menu</Text>
              <Pressable
                style={{padding: 5}}
                onPress={() => SetShowDishModal(true)}>
                <Text style={styles.titleText}>+</Text>
              </Pressable>
            </View>
            <ScrollView>
              {dishes.map((item, index) => (
                <ListItems item={item} key={index.toString()} />
              ))}
            </ScrollView>
          </View>
          <Pressable style={{marginTop: 15}} onPress={() => addDishesPress()}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>save</Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View style={styles.backgroundContainer}>
          <TextInput placeholder="Dish Name" style={styles.textInput} />
          <View style={styles.listContainer}>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>Images</Text>
              <Pressable
                style={{padding: 5}}
                onPress={() => SetShowDishModal(true)}>
                <Text style={styles.titleText}>+</Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                flexWrap: 'wrap',
              }}>
              {PizzaData.map((item, index) => (
                <View>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 60,
                      width: 60,
                      backgroundColor: 'gray',
                      borderRadius: 10,
                      margin: 4,
                    }}
                  />
                </View>
              ))}
            </View>
            <TextInput placeholder="Details" style={styles.detailsInput} />
          </View>
          <Pressable style={{marginTop: 15}} onPress={() => addDishesPress()}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>save</Text>
            </View>
          </Pressable>
        </View>
      )}
      <Modal animationType="fade" visible={showDishModal} transparent={true}>
        <View style={styles.modalView}>
          <Pressable
            style={{flex: 1}}
            onPress={() => SetShowDishModal(false)}
          />
          <View style={styles.modalListContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.titleText}>Add Dishes</Text>
              <Pressable
                onPress={() => SetShowDishModal(false)}
                style={styles.crossButton}>
                <Text style={styles.titleText}>x</Text>
              </Pressable>
            </View>
            {dishes.map((item, index) => (
              <ListItems selection item={item} key={index.toString()} />
            ))}
            <Pressable onPress={() => addDishesPress()}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>add to restaurant</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabListContainer: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    shadowColor: '#0D044650',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: '#ffffff',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  tabText: {
    fontWeight: '600',
  },
  tabItem: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'red',
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#F2F4F9',
    padding: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#9098A550',
    borderWidth: 1,
  },
  detailsInput: {
    backgroundColor: '#fff',
    padding: 15,
    height: 70,
    textAlignVertical: 0,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#9098A550',
    borderWidth: 1,
  },
  listContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#00000040',
    justifyContent: 'flex-end',
  },
  modalListContainer: {
    padding: 20,
    paddingBottom: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff',
  },
  buttonView: {
    height: 45,
    width: '100%',
    backgroundColor: '#DC143C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  crossButton: {
    backgroundColor: 'lightgray',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});

//make this component available to the app
export default Dishes;
