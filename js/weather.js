async function obtenerClima(ciudad) {
  try {
    const response = await fetch(`https://wttr.in/${ciudad}?format=j1`);

    const data = await response.json();

    return data.current_condition[0].temp_C + "°C";
  } catch (error) {
    return "No disponible";
  }
}
