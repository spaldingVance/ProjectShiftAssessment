//In the above challenge, when the loop gets to 'Nickelback', alert,
//"I DON'T love Nickelback!", but still alert the previous message for all other bands.

const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

bands.forEach(band => {
  if (band !== 'Nickelback') {
  console.log(`I love ${band}`);
  } else console.log("I DON'T love Nickelback!");
});
