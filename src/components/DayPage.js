import React from 'react';
import { View, Text } from 'react-native';

const DayPage = ({ dayName }) => {
    return (
        <View>
            <Text> Here is your summary for {dayName} </Text> 
        </View>
    );
};

export default DayPage;