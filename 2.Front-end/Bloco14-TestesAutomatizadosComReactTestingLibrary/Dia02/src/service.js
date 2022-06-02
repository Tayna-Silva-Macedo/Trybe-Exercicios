randomNumber = () => Math.floor(Math.random() * 101);

upperCase = (string) => string.toUpperCase();

firstLetter = (string) => string[0];

concatStrings = (string1, string2) => string1 + string2;

fetchDogPictures = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const responseJson = await response.json();
  return responseJson;
}

module.exports = { randomNumber, upperCase, firstLetter, concatStrings, fetchDogPictures };
