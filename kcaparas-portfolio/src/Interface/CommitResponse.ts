interface CommitAuthor {
    name: string;
    email: string;
    date: string;
}

interface Commit {
    author: CommitAuthor;
    message: string;
}

interface CommitResponse {
    sha: string;
    commit: Commit;
    url: string;
}

export default CommitResponse;
