/*
    * this class is meant to allow oop manipulation of a specific events data, and assembled by some controller for use.

    - Example object in json representation:

    {
        start: '2023-11-14 19:00:00',
        duration: '01:00:00',
        note: 'Dinner with family',
    }
    
    - or after toString():

    {start:'2023-11-14 19:00:00',duration:'01:00:00',note:'Dinner with family',}

*/

// in 'react-native-weekly-calendar' an Event = a Shift in our app
export class Shift {
    constructor(start, duration, note) {
        this.start = start; // date format = 'YYYY-MM-DD HOURS:MINUTES:SECONDS'
        this.duration = duration; // in hours, format = HOURS:MINUTES:SECONDS'
        this.note = note; // acts as the title or name of an event
    }

    //might be good for json manipulation use-case.
    toString() {return ("start:'"+ this.start +"',duration:'"+ this.duration +"',note:'"+ this.note +"',")} 
    
}