import React from 'react';
import { StyleSheet, Text, Dimensions, ScrollView, View } from 'react-native';

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
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
        <ScrollView contentContainerStyle={styles.itemsWrap} >
            {items.map((item) => (
                <Text key={item.id} style={{backgroundColor: generateColor(), ...styles.singleItem,}}>
                    {item.name}
                </Text>
            ))}
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemsWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  singleItem: {
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
    padding:10,
    borderColor: 'black',
    borderWidth: 1,
    flexBasis: "33.3333333333%"
  },
});