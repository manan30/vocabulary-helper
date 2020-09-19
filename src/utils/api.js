const ENDPOINT = 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en';

export default async function getWordDetails(_, searchWord) {
  if (searchWord) {
    const res = await fetch(`${ENDPOINT}/${searchWord.trim().toLowerCase()}`, {
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

// export function useGetWordDetails(word, options) {
//   return
// }
