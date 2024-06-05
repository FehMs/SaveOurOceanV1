import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import Home from './Views/Home';
import Report from './Views/Report';
import Mapa from './Views/Mapa';
import ReportList from './Views/ReportList';
import Cadastro from './Views/Cadastro'




const Tab = createBottomTabNavigator();
export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false , tabBarStyle:{
            position: 'absolute',
            backgroundColor: '#121212',
            borderTopWidth: 0,
            bottom: 14,
            left: 14, 
            right: 14,
            elevation: 0,
            borderRadius: 20,
            height: 60,
        }}}>
            <Tab.Screen name='Home' component={Home} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name='home' size={size} color='#00796b'/>
                }
                return <Ionicons name='home-outline' size={size} color={color}/>
            }}}/>
            <Tab.Screen name='Mapa' component={Mapa} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name='map' size={size} color='#00796b'/>
                }
                return <Ionicons name='map-outline' size={size} color={color}/>
            }}}/>
            <Tab.Screen name='Relatar' component={Report} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name='add-circle' size={55} color='#00796b'/>
                }
                return <Ionicons name='add-circle' size={55} color={color}/>
            }}}/>
            <Tab.Screen name='Índice' component={ReportList} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name='logo-buffer' size={size} color='#00796b'/>
                }
                return <Ionicons name='logo-buffer' size={size} color={color}/>
            }}}/>
            <Tab.Screen name='cadastro' component={Cadastro} options={{tabBarIcon: ({color, size, focused}) => {
                if(focused){
                    return <Ionicons name='person' size={size} color='#00796b'/>
                }
                return <Ionicons name='person-outline' size={size} color={color}/>
            }}}/>
        </Tab.Navigator>
    )
}