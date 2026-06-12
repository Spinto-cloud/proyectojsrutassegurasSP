export async function obtenerClima() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=4.71&longitude=-74.07&current_weather=true",
    );

    const data = await response.json();

    return `${data.current_weather.temperature}°C`;
  } catch (error) {
    return "No disponible";
  }
}
