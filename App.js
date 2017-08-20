import React from 'react';
import { StyleSheet, Text, View, FlatList, Button as NativeButton } from 'react-native';
import Platform from 'Platform';
import Button from './components/Button';
import Row from './components/table/Row';
import Table from './components/table/Table';
import { KEYS } from './utils/constants';

const getData = () => {
	return [[
		{ label: 1, type: '' },
		{ label: 2, type: '' },
		{ label: 3, type: '' }
	], [
		{ label: 4, type: '' },
		{ label: 5, type: '' },
		{ label: 6, type: '' }
	], [
		{ label: 7, type: '' },
		{ label: 8, type: '' },
		{ label: 9, type: '' }
	], [
		{ label: '+', type: KEYS.ADD },
		{ label: 0, type: '' },
		{ label: '-', type: KEYS.SUBTRACT }
	], [
		{ label: '=', type: KEYS.EQUAL }
	]];
};

export default class App extends React.Component {

	constructor () {
		super();
		this.onClearPress = this.onClearPress.bind(this);
		this.onNumberPress = this.onNumberPress.bind(this);

		this.state = {
			number: 0,
			text: '',
			action: ''
		};
		this._data = null;
	}

	componentWillMount () {
		this._data = getData();
	}

	onNumberPress (button) {
		return () => {
			const prevNumber = this.state.number,
				prevText = this.state.text;

			switch (button.type) {
				case KEYS.ADD:
					this.setState({
						number: prevNumber + parseInt(prevText, 10),
						action: button.type,
						text: prevNumber + parseInt(prevText, 10)
					});
					break;

				case KEYS.SUBTRACT:
					this.setState({
						number: prevNumber - parseInt(prevText, 10),
						action: button.type,
						text: prevNumber - parseInt(prevText, 10)
					});
					break;

				default:
					if (this.state.action) {
						this.setState({
							action: '',
							text: button.label.toString()
						});
					} else {
						this.setState({
							text: prevText + button.label.toString()
						});
					}
					break;
			}

		};
	}

	onClearPress () {
		this.setState({
			text: ''
		});
	}

	render () {
		return (
		  <View style={styles.container}>
		    <Text>{this.state.text}</Text>
			<NativeButton
				onPress={this.onClearPress}
				title='Clear'
				color='red' />
			<Table
				isClear={!this.state.text.length}
				onButtonPress={this.onNumberPress}
			 	data={this._data} />
		  </View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
