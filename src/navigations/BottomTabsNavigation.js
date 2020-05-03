import React,{ Component } from 'react';

import Home from '../screens/Home';
import ChangeAdd from '../screens/ChangeAdd';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from '../theme';
import AddButton from './AddButton';

const sizeIcons = 24;

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsNavigation({
    navigation
}) {
    return (
        <>
            <Tab.Navigator
                initialRouteName='Home'

                barStyle={{
                    elevation: 10,
                    borderTopWidth:2,
                    borderTopColor:theme.COLORS.PRIMARY,
                    backgroundColor: theme.COLORS.PRIMARY,
                }}
                inactiveTintColor={theme.COLORS.GREY}
                activeColor={theme.COLORS.WHITE}
                labeled={false }
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                    
                        switch(route.name) {
                            case 'Home' : 
                                iconName = "home";
                                break;
                            case 'Metas' : 
                                iconName = "bullseye";
                                break;
                            case 'Wallet': 
                                iconName = "wallet";
                                break;
                            case 'Settings': 
                                iconName = "cog";
                                break;
                            case 'Add': 
                                return(
                                    <AddButton
                                        navigation={navigation}
                                    />
                                )
                                
                        }
            
                        // You can return any component that you like here!
                        return  <Icon name={iconName} color={color} size={sizeIcons} />

                    },
                })}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                />
                <Tab.Screen 
                    name="Metas" 
                    component={Home}
                />
                <Tab.Screen 
                    name="Add" 
                    component={ChangeAdd}
                />
                <Tab.Screen 
                    name="Wallet" 
                    component={Home}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={Home}
                />
            </Tab.Navigator>
        </>
    );
}