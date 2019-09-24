import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { DayCard } from './common';

const DaysList = (props) => {
    return (
        <ScrollView>
            <DayCard 
                dayName="Sunday" 
                onPress={Actions.track()}
            />
            <DayCard 
                dayName="Monday" 
            />
            <DayCard 
                dayName="Tuesday" 
            />
            <DayCard 
                dayName="Wednesday" 
            />
            <DayCard 
                dayName="Thursday" 
            />
            <DayCard 
                dayName="Friday" 
            />
            <DayCard 
                dayName="Saturday" 
            />
        </ScrollView>
    );
};

export default DaysList;