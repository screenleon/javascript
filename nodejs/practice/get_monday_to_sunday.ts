const date = new Date();
const monday = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
console.log(new Date(date.setDate(monday)).toUTCString())
console.log(new Date(date.setDate(monday + 6)).toUTCString());

import * as moment from 'moment'
// moment('YYYY-MM-DD')
console.log(moment().isoWeekday(1).startOf('isoWeek').format('YYYY-MM-DD'));
console.log(moment().isoWeekday(1).endOf('isoWeek').format('YYYY-MM-DD'));