interface GithubStatsInterface {
    avatar_url: string,
    name: string,
    languages: string[],
    commitCount: number,
    PRCount: number,
    issueCount: number
}

export default GithubStatsInterface;
