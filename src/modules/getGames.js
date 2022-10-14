const createScore = async (name, score) => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOA5yPi0APoFn2dcUj6u/scores';
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const data = await response.json();
  return data.result;
};

const getGames = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOA5yPi0APoFn2dcUj6u/scores';
  const response = await fetch(url,
    {
      method: 'GET',
    });
  const data = await response.json();
  const sortedScores = data.result.sort((a, b) => b.score - a.score);
  return sortedScores;
};

export { createScore, getGames };