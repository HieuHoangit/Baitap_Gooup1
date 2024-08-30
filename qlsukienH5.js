function parseDate(input) {
  const [day, month, year] = input.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function eventsOnDate(inputDate, events) {
  const date = parseDate(inputDate);
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  const eventsOfTheDay = events.filter(
    (event) => event.date >= startOfDay && event.date <= endOfDay
  );

  console.log(eventsOfTheDay);
}

function eventsBetweenDates(inputDate, events) {
  const now = new Date();
  const targetDate = parseDate(inputDate);

  let result;

  if (targetDate >= now) {
    result = events
      .filter((event) => event.date > now && event.date <= targetDate)
      .map((event) => {
        const remainingTime = Math.ceil(
          (event.date - now) / (1000 * 60 * 60 * 24)
        );
        return {
          ...event,
          remainingDate: formatRemainingTime(remainingTime),
        };
      });
  } else {
    result = events
      .filter((event) => event.date <= targetDate)
      .map((event) => {
        const passedTime = Math.ceil(
          (now - event.date) / (1000 * 60 * 60 * 24)
        );
        return {
          ...event,
          passedDay: `${passedTime} days ago`,
        };
      });
  }

  console.log(result);
}

function formatRemainingTime(days) {
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = (days % 365) % 30;

  let formattedTime = "";
  if (years > 0) formattedTime += `${years} year${years > 1 ? "s" : ""}, `;
  if (months > 0) formattedTime += `${months} month${months > 1 ? "s" : ""}, `;
  if (remainingDays > 0)
    formattedTime += `${remainingDays} day${remainingDays > 1 ? "s" : ""}`;

  return formattedTime.trim().replace(/,\s*$/, "");
}

function main() {
  const events = [
    { id: 1, name: "Conference", date: new Date("2023-12-01T09:00:00") },
    { id: 2, name: "Workshop", date: new Date("2023-12-10T14:30:00") },
    { id: 3, name: "Meeting", date: new Date("2023-11-20T11:45:00") },
    { id: 3, name: "Solve rubik", date: new Date("2023-11-29T11:45:00") },
    { id: 3, name: "Buy new phone", date: new Date("2023-11-30T11:45:00") },
    { id: 3, name: "Eating", date: new Date("2023-12-20T11:45:00") },
    { id: 3, name: "Walking", date: new Date("2023-12-20T11:45:00") },
    { id: 3, name: "Runing", date: new Date("2025-12-20T12:45:00") },
    { id: 3, name: "Checking Bug", date: new Date("2025-12-20T12:46:00") },
    { id: 3, name: "Deploy Production", date: new Date("2025-12-20T12:47:00") },
  ];
  events.sort((a, b) => a.date - b.date);
  eventsOnDate("29-11-2023", events);
  eventsBetweenDates("30-11-2023", events);
  eventsBetweenDates("21-12-2025", events);
}

main();
