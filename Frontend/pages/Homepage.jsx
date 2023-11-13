import React, { useEffect, useState } from 'react';
import WeeklyCalendar from 'react-native-weekly-calendar';
import Styles from '../src/Styles'
import { Shift } from '../src/Shift';
import ItemPool from './EmployeePool/EmployeePool';
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

function PersonsFiller(){
  const items = []
  for(let i = 1; i < 100; i++){
    items.push({id:`${i}`, name: `Person Number ${i} `})
  }

  return items;
}

export default function Homepage() {
  const [Events, SetEvents] = useState(SampleEvents())

  return (
    //<WeeklyCalendar events={Events} style={Styles.Calendar} />
    <EmployeePool items={PersonsFiller()} />
  );
}
