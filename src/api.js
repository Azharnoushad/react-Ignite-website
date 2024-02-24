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
}&dates=${currentYear},${currentDate}&ordering=-released&page_size=10`;

export const newGamesUrl = () => `${base_url}${newGames}`;

// Game details--------------------------------
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${import.meta.env.VITE_GAME_API_KEY}`;

// Game Screenshots--------------------------------
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${
    import.meta.env.VITE_GAME_API_KEY
  }`;

// Game Search--------------------------------
export const gameSearchURL = (game_name) =>
  `${base_url}games?key=${
    import.meta.env.VITE_GAME_API_KEY
  }&search=${game_name}&page_size=10`;

