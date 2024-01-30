import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Calculator from './Calculator';
import History from './History';

const Stack = createNativeStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Calculator' component={Calculator} />
				<Stack.Screen name='History' component={History} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
