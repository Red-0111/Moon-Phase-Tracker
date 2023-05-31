// Calculates the moon phase and additional information based on the date
function calculateMoonPhase(date) {
  const moonIllumination = SunCalc.getMoonIllumination(date);
  const moonPhaseIndex = Math.ceil(moonIllumination.phase / 0.125) % 8;
  const moonPercentage = Math.round(moonIllumination.fraction * 100);
  const daysUntilFullMoon = Math.round(moonIllumination.phase * 29.53);
  const daysUntilNewMoon = Math.round((1 - moonIllumination.phase) * 29.53);

  return {
    phaseIndex: moonPhaseIndex,
    percentage: moonPercentage,
    daysUntilFullMoon: daysUntilFullMoon,
    daysUntilNewMoon: daysUntilNewMoon
  };
}

// Updates the HTML elements with moon phase data and images
function updateMoonPhaseElements(moonData) {
  const moonImages = [
    'new-moon.jpg',
    'waxing-crescent.jpg',
    'first-quarter.jpg',
    'waxing-gibbous.jpg',
    'full-moon.jpg',
    'waning-gibbous.jpg',
    'last-quarter.jpg',
    'waning-crescent.jpg'
  ];

  const moonPhases = [
    'New Moon',
    'Waxing Crescent',
    'First Quarter',
    'Waxing Gibbous',
    'Full Moon',
    'Waning Gibbous',
    'Last Quarter',
    'Waning Crescent'
  ];

  const moonImage = document.getElementById('moon-image');
  const moonName = document.getElementById('moon-name');
  const moonPercentage = document.getElementById('moon-percentage');
  const daysUntilFullMoon = document.getElementById('days-until-fullmoon');
  const daysUntilNewMoon = document.getElementById('days-until-newmoon');
  const moonInfo = document.getElementById('moon-info');

  const moonIndex = moonData.phaseIndex;
  const imageUrl = 'images/' + moonImages[moonIndex];

  moonImage.src = imageUrl;
  moonName.textContent = moonPhases[moonIndex];
  moonPercentage.textContent = `Moon Illumination: ${moonData.percentage}%`;
  daysUntilFullMoon.textContent = `Days Until Full Moon: ${moonData.daysUntilFullMoon}`;
  daysUntilNewMoon.textContent = `Days Until New Moon: ${moonData.daysUntilNewMoon}`;
  moonInfo.textContent = "";
}

// Entry point, fetches moon phase image and updates the page
function updateMoonPhase() {
  try {
    const today = new Date();
    const moonData = calculateMoonPhase(today);
    updateMoonPhaseElements(moonData);
  } catch (error) {
    console.error(error);
  }
}

// Call the updateMoonPhase function to initiate the update
updateMoonPhase();
