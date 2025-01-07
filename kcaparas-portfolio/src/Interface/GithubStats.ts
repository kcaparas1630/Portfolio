interface GithubStatsInterface {
    avatar_url: string,
    full_name: string,
    languages: string[],
    commitCount: number,
    PRCount: number,
    issueCount: number
}

export default GithubStatsInterface;
