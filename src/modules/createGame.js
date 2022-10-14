const newGame = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const response = await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: "Javier's Game",
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const result = await response.json();
  console.log(result.result);
  return response.json;
};

export default newGame;