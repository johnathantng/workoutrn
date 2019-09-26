import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { DayCard } from './common';

const DaysList = (props) => {
    return (
        <ScrollView>
            <DayCard 
                dayName="Sunday" 
                onPress={() => Actions.track()}
            />
            <DayCard 
                dayName="Monday" 
                onPress={() => Actions.track()}
            />
            <DayCard 
                dayName="Tuesday" 
                onPress={() => Actions.track()}
            />
            <DayCard 
                dayName="Wednesday" 
                onPress={() => Actions.track()}
            />
            <DayCard 
                dayName="Thursday" 
                onPress={() => Actions.track()}
            />
            <DayCard 
                dayName="Friday"
                onPress={() => Actions.track()} 
            />
            <DayCard 
                dayName="Saturday" 
                onPress={() => Actions.track()}
            />
        </ScrollView>
    );
};

export default DaysList;