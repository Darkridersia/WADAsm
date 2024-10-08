import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutScreen from './screens/WorkoutScreen';
import LifestyleAndWellnessScreen from './screens/LifestyleWellnessScreen'; // Import your other screen
import SocialCommunityScreen from './screens/SocialCommunityScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import Location from './screens/Location';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';
import AddEditActivityScreen from './screens/AddEditActivityScreen';
import ActivityScreen from './screens/Activity';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Workout"
                component={WorkoutScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LifestyleAndWellnessScreen"
                component={LifestyleAndWellnessScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SocialCommunityScreen"
                component={SocialCommunityScreen}
                options={{ headerShown: false }}
                />
             <Stack.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{ headerShown: false }}
                />
            <Stack.Screen
                name="Fit"
                component={FitScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Rest"
                component={RestScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Location"
                component={Location}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Result"
                component={ResultScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator;
