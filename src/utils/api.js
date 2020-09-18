const ENDPOINT = 'https://lingua-robot.p.rapidapi.com/language/v1/entries/en';

export default async function getWordDetails(_, searchWord) {
  if (searchWord) {
    const res = await fetch(`${ENDPOINT}/${searchWord}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'lingua-robot.p.rapidapi.com',
        'x-rapidapi-key': '15dc1a3dd8msh986c0071a2b216fp1b00ccjsn84f85d57d080'
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
