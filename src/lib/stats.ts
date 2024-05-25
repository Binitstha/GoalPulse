
async function statsData() {
    const response = await fetch(
      "http://api.football-data.org/v4/competitions/PD/scorers",
      { headers: { "X-Auth-Token": "f7df7abbc1c84acdab28c5aafd614c1b" } }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP response error ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  }
  an();
  