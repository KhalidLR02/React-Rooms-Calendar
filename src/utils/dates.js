export function getMonths() {
  // Get the current date
  const currentDate = new Date();

  // Set the date to the first day of the current month
  currentDate.setDate(1);

  // Initialize an array to store the dates
  const dateList = [];

  // Loop through the next 3 months
  for (let i = 0; i < 3; i++) {
    // Push the current date to the array
    dateList.push(new Date(currentDate));

    // Move to the next month
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return dateList;
}

export const getDaysOfDateMonth = (date) => {
  if (date == null) return [];
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from(
    { length: daysInMonth },
    (_, i) => new Date(year, month, i + 1),
  );
};

export const getFirstDayOfDateMonth = (date) => {
  if (date == null) return null;
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  return new Date(year, month, 1);
};

export const getLastDayOfDateMonth = (date) => {
  if (date == null) return null;
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return new Date(year, month, daysInMonth);
};

export function getAllDays() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Set the date to the first day of the current month
  const startDate = new Date(currentYear, currentMonth, 1);

  // Calculate the end date (3 months forward)
  const endDate = new Date(currentYear, currentMonth + 3, 0);

  // Initialize an array to store the result
  const dateList = [];

  // Loop through each day and add it to the array
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    dateList.push(new Date(date));
  }

  return dateList;
}

export function daysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Set the date to the first day of the next month and subtract 1 day
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Get the day of the month, which gives the total number of days
  const numberOfDays = lastDayOfMonth.getDate();

  return numberOfDays;
}

export function formatDate(date) {
  // Use the toLocaleString method with options
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = date?.toLocaleString("fr-fr", options);

  return formattedDate;
}

export function formatMonth(date) {
  const options = { year: "numeric", month: "long", timeZone: "UTC" };
  const formattedDate = date.toLocaleString("fr-FR", options);
  return formattedDate;
}

export function formatDay(date) {
  const options = { weekday: "short", day: "2-digit" };
  const formattedDate = date.toLocaleString("fr-FR", options).replace(".", "");
  return formattedDate;
}

export function calculateDaysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return diffDays;
}

export function isDateBefore(date1, date2) {
  return date1 < date2;
}

export function isDateAfter(date1, date2) {
  return date1 > date2;
}

export function formatBookingDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getNextDay(date) {
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);
  return nextDay;
}

export function isToday(date) {
  const today = new Date();
  const inputDate = new Date(date);

  return (
    inputDate.getDate() === today.getDate() &&
    inputDate.getMonth() === today.getMonth() &&
    inputDate.getFullYear() === today.getFullYear()
  );
}

export function getDateOfDateMonthAfter(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}

export function getDateOfDateMonthBefore(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
}
