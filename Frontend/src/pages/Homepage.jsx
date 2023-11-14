import React, { useEffect, useState } from 'react';
import WeeklyCalendar from 'react-native-weekly-calendar';
import Styles from '../Styles'
import { Shift } from '../Shift';
import {PersonsFiller} from '../Util'
import EmployeePool from './EmployeePool/EmployeePool';

function SampleEvents() {
  events = [
    new Shift(start = '2023-11-12 09:00:00',duration = '00:20:00', note = 'Walk my dog'),
    new Shift(start = '2023-11-12 11:00:00',duration = '01:00:00', note = 'Doctors appointment'),
    new Shift(start = '2023-11-12 12:00:00',duration = '01:20:00', note = 'Walk my dog'),
    new Shift(start = '2023-11-12 13:00:00',duration = '01:20:00', note = 'Walk my dog'),
    new Shift(start = '2023-11-12 14:00:00',duration = '01:20:00', note = 'Walk my dog'),
    new Shift(start = '2023-11-12 15:00:00',duration = '01:20:00', note = 'Walk my dog'),
    new Shift(start = '2023-11-12 16:00:00',duration = '01:20:00', note = 'Walk my dog'),
    new Shift(start = '2023-11-12 17:00:00',duration = '01:20:00', note = 'im lazy ok?'),
  ];

  return events
}



export default function Homepage() {
  const [Events, SetEvents] = useState(SampleEvents())

  return (
    //<WeeklyCalendar events={Events} style={Styles.Calendar} />
    <EmployeePool items={PersonsFiller()} />
  );
}
