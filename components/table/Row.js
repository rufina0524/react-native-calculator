import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../Button';

const Row = ({ data, onButtonPress, rowIndex, isClear, type = '' }) => {
	return (
		<View style={styles.listView}>
		{
			data.map((item, index) => {
				return <Button
					type={item.type}
					isClear={isClear}
					key={`item-${rowIndex}-${index}-${item.label.toString()}`}
					onPress={onButtonPress(item)}
					title={item.label.toString()}
					textStyle={styles.listText}
					selectedStyle={styles.listItemSelected}
				 	containerStyle={styles.listItem} />
			})
		}
		</View>
	)
}

const styles = StyleSheet.create({
  listView: {
	flexDirection: 'row'
  },

  listItem: {
	  flex: 1,
	  justifyContent: 'center',
	  margin: 10,
	  backgroundColor: '#F1F1F1',
	  width: 50,
	  height: 50,
	  borderRadius: 10
  },

  listItemSelected: {
	  flex: 1,
	  textAlign: 'center',
	  justifyContent: 'center',
	  margin: 10,
	  backgroundColor: '#F00',
	  width: 50,
	  height: 50,
	  borderRadius: 10
  },

  listText: {
	  justifyContent: 'center',
	  textAlign: 'center'
  }
});

export default Row;
