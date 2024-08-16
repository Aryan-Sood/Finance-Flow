import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { GlobalStyles } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview(){
  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: GlobalStyles.colors.primary500
      },
      headerTintColor:'white',
      tabBarStyle:{
        backgroundColor:GlobalStyles.colors.primary500
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    }}>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title:'Recent Expenses',
        tabBarLabel:'Recent',
        tabBarIcon:({color, size}) => {
          return <Ionicons name="hourglass" size={size} color={color} />
        }
      }}/>
      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title:"All Expenses",
        tabBarLabel:"All Expenses",
        tabBarIcon:({color, size}) => {
          return <Ionicons name="calendar" color={color} size={size} />
        }
      }} />
    </BottomTabs.Navigator>
  );
}


export default function Index() {
  return (
    <>
      <StatusBar style="inverted"/>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="ExpensesOverview" screenOptions={{headerShown:false}}>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview}/>
          <Stack.Screen name="ManageExpense"  component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}