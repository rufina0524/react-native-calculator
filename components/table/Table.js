import React from 'react';
import { StyleSheet, View } from 'react-native';
import Row from '../table/Row';

const Table = ({ data , onButtonPress, isClear }) => {
	return (
		<View style={{width: 320, height: 500}}>
		{
			data.map((item, index) => {
				return <Row
					isClear={isClear}
					key={`row-${index}`}
					rowIndex={index}
					data={item}
					onButtonPress={onButtonPress}/>;
			})
		}
		</View>
	)
}

export default Table;
