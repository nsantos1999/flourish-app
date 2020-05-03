
import { SET_USER_DATA } from '../store/auth/actionTypes';

import { useDispatch } from 'react-redux';
// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import theme from '../theme';
import * as StorageService from '../services/StorageService';

//Components
import Presentation from '../screens/Presentation';
import SignUp from '../screens/SignUp';
import BottomTabsNavigation  from './BottomTabsNavigation';
import FormOperacao  from '../screens/FormOperacao';

import Splash from '../screens/Splash';

const Stack = createStackNavigator();

export default function StackNavigation({ navigation }) {
  const dispatch = useDispatch()
  const auth = useSelector(({auth}) => auth)

  const [ isLoading, setIsLoading ] = useState(true);
  
  React.useEffect(() => {
    const bootstrapAsync = async () => {
        setIsLoading(true);
        let userSession;
        
        if(!auth.id){

            try {
                userSession = await StorageService.getUser();
            } catch (e) {
                console.log(e.message);
            }
            
        }
        if(userSession){
            dispatch({ type: SET_USER_DATA, userData:{...userSession} });
        }

        setTimeout(() => {
            setIsLoading(false);
        },1000);
      
    };
    bootstrapAsync();
  }, [auth, setIsLoading]);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <Splash />;
  }
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName={!auth.id ? 'Presentation' : 'BottomTabs'}
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.COLORS.PRIMARY,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    // fontFamily: stylesDefault.fontFamilyBold
                },
            }}
        >
            {!auth.id ? (
                <>
                <Stack.Screen
                    name="Presentation"
                    component={Presentation}
                    options={{
                        header: () => null,
                    }}
                />
                <Stack.Screen 
                    name="SignUp"
                    options={{
                        title: 'Cadastro',
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                    }} 
                    component={SignUp} 
                    options={{
                        header: () => null,
                    }}
                />
                </>
            ) : (
                <>
                    <Stack.Screen name="BottomTabs" component={BottomTabsNavigation} 
                        options={{
                            header: () => null,
                        }}
                    />
                    <Stack.Screen name="FormOperacao" component={FormOperacao} 
                        // options={{
                        //     header: () => null,
                        // }}
                    />
                    
                    
                </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
}