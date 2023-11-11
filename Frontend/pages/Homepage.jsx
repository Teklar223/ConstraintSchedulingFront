import React, { useEffect, useState } from 'react';
import WeeklyCalendar from 'react-native-weekly-calendar';
import Styles from '../src/Styles'

function SampleEvents() {
  events = [
    {start: '2023-03-23 09:00:00', duration: '00:20:00', note: 'Walk my dog'},
    {
      start: '2023-11-11 14:00:00',
      duration: '01:00:00',
      note: "Doctor's appointment",
    },
    {
      start: '2023-11-12 08:00:00',
      duration: '00:30:00',
      note: 'Morning exercise',
    },
    {
      start: '2023-11-13 14:00:00',
      duration: '02:00:00',
      note: 'Meeting with client',
    },
    {
      start: '2023-11-14 19:00:00',
      duration: '01:00:00',
      note: 'Dinner with family',
    },
    {start: '2023-03-26 09:30:00', duration: '01:00:00', note: 'Schedule 1'},
    {start: '2023-03-26 11:00:00', duration: '02:00:00', note: 'Schedule 2'},
    {start: '2023-03-26 15:00:00', duration: '01:30:00', note: 'Schedule 3'},
    {start: '2023-03-26 18:00:00', duration: '02:00:00', note: 'Schedule 4'},
    {start: '2023-03-26 22:00:00', duration: '01:00:00', note: 'Schedule 5'},
  ];

  return events
}

export default function Homepage() {
  const [Events, SetEvents] = useState(SampleEvents())

  return (
    <WeeklyCalendar events={Events} style={Styles.Calendar} />
  );
}
