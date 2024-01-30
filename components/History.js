import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useHistoryValue} from '../reducers/historyReducer';
export default function History({navigation}) {
	const historyList = useHistoryValue();

	return (
		<View style={styles.container}>
			{historyList.length > 0 ? (
				<FlatList
					data={historyList}
					renderItem={({index, item}) => (
						<View key={index}>
							<Text>{item}</Text>
						</View>
					)}
					style={styles.flatList}
				/>
			) : (
				<Text style={styles.empty}>Very empty history...</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		//justifyContent: 'center',
	},
	flatList: {
		marginTop: 10,
	},
	empty: {
		marginTop: 10,
	},
});
