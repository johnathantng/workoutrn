import React from 'react';
import { View, Text } from 'react-native';

const DayPage = ({ dayName, totalCalories }) => {
    return (
        <View>
            <Text> Here is your summary for {dayName} </Text> 
            <Text> Your total calories for {dayName} is {totalCalories} </Text>
        </View>
    );
};

export default DayPage;