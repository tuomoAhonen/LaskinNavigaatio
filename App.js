import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
	const [result, setResult] = useState(0);
	const [input1, setInput1] = useState(0);
	const [input2, setInput2] = useState(0);

	const [historyList, setHistoryList] = useState([]);

	//if (result === null) setResult(0);

	const handlePlus = () => {
		if (!input1 || !input2) return;
		setResult(input1 + input2);
		setHistoryList([...historyList, `${input1} + ${input2} = ${input1 + input2}`]);
	};

	const handleMinus = () => {
		if (!input1 || !input2) return;
		setResult(input1 - input2);
		setHistoryList([...historyList, `${input1} - ${input2} = ${input1 - input2}`]);
	};

	//console.log(historyList);

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
			<FlatList
				data={historyList}
				renderItem={({index, item}) => (
					<View key={index}>
						<Text>{item}</Text>
					</View>
				)}
				style={styles.flatList}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight + 50 || 50,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	result: {
		margin: 5,
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
	flatList: {
		margin: 5,
	},
	flatListItem: {
		marginBottom: 5,
	},
});

