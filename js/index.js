"use strict";

/* Imports */
import { apiKey } from "./apiKey.js";
import { getWeather } from "./getWeather.js";

/* HTML Elements */
const getStartedBtn = document.getElementById("getStartedBtn");
const getWeatherBtn = document.getElementById("getWeatherBtn");

getStartedBtn.addEventListener("click", () => {
  document.getElementById("city").focus();
});

getWeatherBtn.addEventListener("click", getWeather);
