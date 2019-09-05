import React from 'react';
import { ScrollView } from 'react-native';

import { DayCard } from './common';

const DaysList = () => {
    return (
        <ScrollView>
            <DayCard dayName="Sunday" />
            <DayCard dayName="Monday" />
        </ScrollView>
    );
};

export default DaysList;