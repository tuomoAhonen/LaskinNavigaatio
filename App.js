import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
	const [result, setResult] = useState(0);
	const [input1, setInput1] = useState(0);
	const [input2, setInput2] = useState(0);

	//if (result === null) setResult(0);

	const handlePlus = () => setResult(input1 + input2);

	const handleMinus = () => setResult(input1 - input2);

	return (
		<View style={styles.container}>
			<Text style={styles.result}>{result ? result : 0}</Text>
			<TextInput keyboardType='numeric' onChangeText={(e) => setInput1(parseInt(e))} style={styles.textInput} />
			<TextInput keyboardType='numeric' onChangeText={(e) => setInput2(parseInt(e))} style={styles.textInput} />
			<View style={styles.buttonsView}>
				<View style={styles.buttonView}>
					<Button title='+' onPress={handlePlus} />
				</View>
				<View style={styles.buttonView}>
					<Button title='-' onPress={handleMinus} />
				</View>
			</View>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	result: {
		fontSize: 70,
	},
	textInput: {
		width: 100,
		margin: 5,
		paddingLeft: 5,
		paddingRight: 5,
		borderWidth: 1,
		borderColor: '#000000',
	},
	buttonsView: {
		margin: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonView: {
		margin: 5,
		width: 30,
	},
});

