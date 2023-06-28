const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
type WeekDay = typeof weekDays[number];
export type WeekSelection = Record<WeekDay, string[]>;

/**
 * Conditions for an user to be available:
 * 1- Not been picked for current day already
 * 2- Not has been picked 3 times this week
 * 3- Not has been picked 3 times the previous week and 2 this one
 *
 */

function generateWeek(users: string[], previousWeek?: WeekSelection) {
  const weekPicks: WeekSelection = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
  };
  Object.keys(weekPicks).forEach((currentDay) => {
    const selection: string[] = [];
    if (currentDay === "Mon" || currentDay === "Tue") {
      while (selection.length < 4) {
        const availables = [...users].filter(
          (user) => !selection.includes(user)
        );
        const picked = pickNextUser(availables);
        selection.push(picked);
      }
      weekPicks[currentDay] = selection;
    } else {
      while (selection.length < 4) {
        const availables = [...users].filter((user) => {
          const timesSelectedThisWeek = picksCountOnWeek(user, weekPicks);
          const timesSelectedPreviousWeek = !!previousWeek
            ? picksCountOnWeek(user, previousWeek)
            : 0;
          const maximumPicksThisWeek = timesSelectedPreviousWeek > 2 ? 2 : 3;
          return (
            !selection.includes(user) &&
            timesSelectedThisWeek < maximumPicksThisWeek
          );
        });
        const picked = pickNextUser(availables);
        selection.push(picked);
      }
      weekPicks[currentDay] = selection;
    }
  });
  return weekPicks;
}

/**
 * Picks 1 user randomly from the availables
 * @param availableUsers
 * @returns
 */
function pickNextUser(availableUsers: string[]) {
  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * availableUsers.length);
  // Access the element at the random index
  const randomUser = availableUsers[randomIndex];
  return randomUser;
}

/**
 * Counts how many times the user has been picked in a given week
 * @param user
 * @param weekPicks
 */
function picksCountOnWeek(user: string, weekPicks: WeekSelection) {
  const totalPicks = Object.keys(weekPicks).reduce((picksCount, currentDay) => {
    const selectedInCurrentDay =
      weekPicks[currentDay as WeekDay].includes(user);
    return selectedInCurrentDay ? picksCount + 1 : picksCount;
  }, 0);
  return totalPicks;
}

export function generateCalendar(users: string[]) {
  const weeks: WeekSelection[] = [];
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      const firstWeek = generateWeek(users);
      weeks.push(firstWeek);
    } else {
      const week = generateWeek(users, weeks[i - 1]);
      weeks.push(week);
    }
  }
  return weeks;
}
