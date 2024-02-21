// Base URL----------------------------------------------------------------

const base_url = "https://api.rawg.io/api/";



// Getting the dates
const getCurrentMonth = () => {
  let month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting Current Date
const getCurrentDate = () => {
  let date = new Date().getDate();

  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games --------------------------------
const popularGames = `games?key=${
  import.meta.env.VITE_GAME_API_KEY
}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popularGames}`;

// UpComing Games --------------------------------

const upcomingGames = `games?key=${
  import.meta.env.VITE_GAME_API_KEY
}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;

// New Games--------------------------------------

const newGames = `games?key=${
  import.meta.env.VITE_GAME_API_KEY
}&dates=${currentYear},${currentDate}&ordering=-rating&page_size=10`;

export const newGamesUrl = () => `${base_url}${newGames}`;
