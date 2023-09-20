import { Text, View } from 'react-native';
import { Profil, Chat, Accueil } from './components';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarstyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 5,
    height: 60,
 

  }
};
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFDB58', // Définir la couleur de fond ici
  },
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator screenOptions={screenOptions}  >
        <Tab.Screen name='Accueil' component={Accueil} 
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <AntDesign name="home" size={24} color={focused ? "#16247d" : "#111"} />
                  <Text style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}>
                    Accueil
                  </Text>
                </View>
              )
            }
          }} />
        <Tab.Screen name='Chat' component={Chat}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name="chatbubble-ellipses-outline" size={24} color={focused ? "#16247d" : "#111"} />
                  <Text style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}>
                    Chat
                  </Text>
                </View>
              )
            }
          }}
        />
        <Tab.Screen name='Profil' component={Profil}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <AntDesign name="profile" size={24} color={focused ? "#16247d" : "#111"} />
                  <Text style={{ fontSize: 12, color: focused ? "#16247d" : "#111" }}>
                    Profil
                  </Text>
                </View>
              )
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}