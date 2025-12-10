import {
  formatBookingDate,
  getNextDay,
  isDateAfter,
  isDateBefore,
} from "./dates";

export function findIndexByRoom(resources, room) {
  for (let i = 0; i < resources.length; i++) {
    if (resources[i].id === room) {
      return i;
    }
  }
  return -1;
}

export function UpdatedEvents(events, startDate, endDate) {
  let newEvents;
  // filter the  events
  newEvents = events.filter((ev) => {
    const evStart = new Date(ev.start);
    const evEnd = new Date(ev.end);
    return (
      (isDateAfter(evStart, startDate) && isDateBefore(evStart, endDate)) ||
      (isDateAfter(evEnd, startDate) && isDateBefore(evEnd, endDate))
    );
  });

  // update the start date and end date
  newEvents = newEvents.map((ev) => {
    const evStart = new Date(ev.start);
    const evEnd = new Date(ev.end);

    if (isDateBefore(evStart, startDate))
      ev.start = formatBookingDate(startDate);

    if (isDateAfter(evEnd, endDate))
      ev.end = formatBookingDate(getNextDay(endDate));

    return ev;
  });

  return newEvents;
}
