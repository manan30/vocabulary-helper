const ENDPOINT = 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en';

export default async function getWordDetails(_, word) {
  if (word) {
    const res = await fetch(`${ENDPOINT}/${word.trim().toLowerCase()}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      }
    });
    const json = await res.json();
    return json;
  }
  return {};
}
