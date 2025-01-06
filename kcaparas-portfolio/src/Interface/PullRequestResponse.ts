interface PullRequestResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Array<{
      id: number;
      number: number;
      title: string;
      state: string;
      created_at: string;
      closed_at: string | null;
    }>;
}

export default PullRequestResponse;
