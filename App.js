//onko tämä oikeasti parempi tapa importtaa Reactin osat?
//osaako build compiler poistaa kaiken ylimääräisen lopullisesta buildista?
import * as React from 'react';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {NavigationContainer} from '@react-navigation/native';
//import Calculator from './components/Calculator';
//import History from './components/History';
import {HistoryContextProvider} from './reducers/historyReducer';
import Navigation from './components/Navigation';

//const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<HistoryContextProvider>
			{/*<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Calculator' component={Calculator} />
					<Stack.Screen name='History' component={History} />
				</Stack.Navigator>
			</NavigationContainer>
		*/}
			<Navigation />
		</HistoryContextProvider>
	);
}

