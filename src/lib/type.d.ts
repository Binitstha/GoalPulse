type searchResult = {
    title : string,
    rankings: string,
    thumbnail: string,
    games: games
}

type games = {
    tournament : string,
    stadium : string,
    date: string,
    time : string,
    video_highlights: {
        link : string,
        thumbnail : string
    },
    teams : teams,
}

type teams = {
    name : string,
    score : number,
    thumbnail : string,
}