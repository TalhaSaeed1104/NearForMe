import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Statements For Components.
import HomeScreen from "./src/Components/Home/MainHomePage";
import  Home  from "./src/Components/Home/Home.jsx";
import  Items  from "./src/Components/Items/Items.jsx";
import CompassData from "./src/Components/Compass/Compass.jsx";
import  Details  from "./src/Components/Details/Details.jsx";
import ItemsDetails from "./src/Components/ItemDetails/ItemDetails.jsx";
import CameraApp from "./src/Components/Camera/CameraTry.jsx";
import LocationApp from "./src/Components/Location/Location.jsx";
import PlacesApp from "./src/Components/PlacesData/Places.jsx";

// import { Stack } from 'react-bootstrap';

const Stack = createNativeStackNavigator();
export default function App({ content }) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={HomeScreen} options={{
                headerStyle: { backgroundColor: 'gray' },
                headerTintColor: 'white',
              }}/>
          <Stack.Screen name='NearForMe' component={Home} options={{
            title: 'NearForMe',
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
            headerLeft: () => (
              <Icon
                name="bars"
                size={24}
                color="#fff"
                style={{ marginLeft: 6, marginRight:35 }}
              />
            ),
          }}/>
          <Stack.Screen name='Items' component={Items} options={{
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
          }}/>
          <Stack.Screen name='Food' component={PlacesApp} options={{
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
          }}/>
          {/* <Stack.Screen name='Food' component={Details} options={{
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
          }}/> */}
          <Stack.Screen name='Details' component={ItemsDetails} options={{
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
          }}/>
          <Stack.Screen name='Camera' component={CameraApp} options={{
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


