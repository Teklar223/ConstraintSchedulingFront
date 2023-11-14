import React from 'react';
import { StyleSheet, Text, Dimensions, ScrollView, View } from 'react-native';
import { generateRndColor } from '../../Util';

export default function EmployeePool(props) {
  const items = props.items;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {items.map((item) => (
        <View key={item.id} style={[styles.item, { backgroundColor: generateRndColor() }]}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    margin: 5,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  item: {
    width: '33.3333%', // Adjust the percentage as needed to fit 2-3 items in a row
    aspectRatio: 1, // Maintain a 1:1 aspect ratio (adjust as needed)
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
  },
  itemText: {
    fontSize: 18,
  },
});