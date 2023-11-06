import { StyleSheet, Text, View,Button, KeyboardAvoidingView, Modal } from 'react-native'
import React, { useState } from 'react'
import TopBar from './src/components/TopBar'
import BottomBar from './src/components/BottomNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './src/screens/Menu';
import CustomHeader from './src/components/CustomHeader'
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  const [state, setState ] = useState (false)
  return (
      <SafeAreaView style={{flex:1}}>
        <TopBar/>
        
      
      {/* <NavigationContainer>

      <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor:'grey',
            }
          }}
      >
        <Stack.Screen name="Menu" component={Menu } options={{header: ()=> <CustomHeader />}} />
        {/* <Stack.Screen name="BottomTabs" component={BottomTabs} options={{
          headerShown:false
        }}/> */}
      {/* </Stack.Navigator>
      </NavigationContainer> */} 
      <BottomBar/>
      </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({})
