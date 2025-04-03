"use strict";
import { apiKey } from "../js/apiKey.js";

export async function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Please, enter a city.");
    return;
  }

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
    city
  )}?unitGroup=metric&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching data from API");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log(error);
    alert("Deu erro");
  }
}

export function displayWeather(data) {
  const weatherResponse = document.getElementById("weather-response");

  if (data.currentConditions) {
    const { temp, feelslike, humidity, precip, conditions, windspeed } =
      data.currentConditions;

    weatherResponse.innerHTML = `
  <h3>Weather in ${data.address}</h3>
      <p><strong>Current Temperature:</strong> ${temp}°C</p>
      <p><strong>Feels Like:</strong> ${feelslike}°C</p>
      <p><strong>Humidity:</strong> ${humidity}%</p>
      <p><strong>Precipitation:</strong> ${precip} mm</p>
      <p><strong>Conditions:</strong> ${conditions}</p>
      <p><strong>Wind Speed:</strong> ${windspeed} km/h</p>
  `;
  } else {
    weatherResponse.innerHTML =
      "<p>Não foi possível apresentar as estatísticas.</p>";
  }
}
