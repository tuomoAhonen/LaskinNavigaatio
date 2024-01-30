import {useCallback, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useHistoryDispatch} from '../reducers/historyReducer';

export default function Calculator({navigation}) {
	const [result, setResult] = useState({total: 0, invokedBy: ''});
	const [input1, setInput1] = useState(0);
	const [input2, setInput2] = useState(0);

	const dispatchHistory = useHistoryDispatch();

	//if (result === null) setResult(0);
	const clearInputs = () => {
		setInput1(0);
		setInput2(0);
	};

	useEffect(() => {
		dispatchHistory({payload: {input1: input1, input2: input2, result: result}});
		clearInputs();
	}, [result]);

	const handlePlus = () => {
		if (isNaN(input1) || isNaN(input2)) return;
		setResult({total: input1 + input2, invokedBy: 'plus'});
		//clearInputs();
	};

	const handleMinus = () => {
		if (isNaN(input1) || isNaN(input2)) return;
		setResult({total: input1 - input2, invokedBy: 'minus'});
		//clearInputs();
	};

	// console.log('ennen view', input1);

	return (
		<View style={styles.container}>
			<Text style={styles.result}>{result.total ? result.total : 0}</Text>
			<TextInput
				keyboardType='numeric'
				//value={input1 ? String(input1) : String(0)}
				//defaultValue={String(0)}
				value={isNaN(input1) ? String(0) : String(input1)}
				onChangeText={(e) => {
					//console.log(e);
					if (isNaN(e) || !e) return setInput1(0);
					return setInput1(parseInt(e));
				}}
				style={styles.textInput}
			/>
			<TextInput
				keyboardType='numeric'
				//value={input2 ? String(input2) : String(0)}
				//defaultValue={String(0)}
				value={isNaN(input2) ? String(0) : String(input2)}
				onChangeText={(e) => {
					if (isNaN(e) || !e) return setInput2(0);
					return setInput2(parseInt(e));
				}}
				style={styles.textInput}
			/>
			<View style={styles.buttonsView}>
				<View style={styles.buttonView}>
					<Button title='+' onPress={handlePlus} />
				</View>
				<View style={styles.buttonView}>
					<Button title='-' onPress={handleMinus} />
				</View>
			</View>
			<Button title='History' onPress={() => navigation.navigate('History')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		//justifyContent: 'center'
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
});
