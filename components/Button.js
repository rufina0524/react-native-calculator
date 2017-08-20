
import React from 'react';
import Platform from 'Platform';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';

class Button extends React.Component {

	constructor () {
		super();
		this.onPress = this.onPress.bind(this);
		this.state = {
			selected: false
		}
	}

	onPress () {
		const { onPress } = this.props;

		this.props.onPress();
	}

	render () {
		const { containerStyle = {}, textStyle = {}, title, onPress, selectedStyle, isClear } = this.props;
		const style = this.state.selected && !isClear ? selectedStyle : containerStyle;

		return (
			<TouchableHighlight
				underlayColor={'#BBB'}
				onPress={this.onPress}
				style={style}>
					<Text style={textStyle}>{title}</Text>
			</TouchableHighlight>
		);
	}
}

export default Button;
