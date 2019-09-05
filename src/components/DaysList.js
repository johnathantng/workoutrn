import React from 'react';
import { ScrollView } from 'react-native';

import { DayCard } from './common';

const DaysList = () => {
    return (
        <ScrollView>
            <DayCard 
                dayName="Sunday" 
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