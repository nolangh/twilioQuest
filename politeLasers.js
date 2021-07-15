
function getLaserSetting(input) {
  if (input === 'please') {
    return 'OFF';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting();
console.log('the current setting is: ' + currentSetting);