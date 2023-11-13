import React from 'react';
import { StyleSheet, Text, Dimensions, ScrollView, View } from 'react-native';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 14;
const itemPerRow = 2;
const totalGapSize = (itemPerRow) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const generateColor = () => {
    //https://codingwithrashid.com/how-to-generate-random-colors-in-react-native/
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

export default function EmployeePool(props) {
  const items = props["items"]

  return (
    <View style= {{backgroundColor:'black', margin: 5}}>
        <ScrollView contentContainerStyle={styles.itemsWrap}>
            {items.map((item) => (
                <Text key={item.id} style={{backgroundColor: generateColor(), ...styles.singleItem, fontSize:18}}>
                    {item.name}
                </Text>
            ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemsWrap: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -(gap / 2),
  },
  singleItem: {
    minWidth: childWidth,
    maxWidth: childWidth,
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
    margin:5,
    borderRadius:15,
    borderWidth:1,
  },
});