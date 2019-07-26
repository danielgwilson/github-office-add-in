// import Octokit from "@octokit/rest";
// const octokit = new Octokit();

export const GH = async (endpoint: string) => {
  const api = "https://api.github.com/";
  const fetchOptions = {};

  const response = await fetch(api.concat(endpoint));
  const json = await response.json();

  return json;
};

export const searchIssuesForRepo = async (repo: string, params: string[]) => {
  let q = `q=repo:OfficeDev/${repo}`;
  q = params ? q.concat("+") : q;
  for (let param of params) {
    q = q.concat(`+${param}`);
  }

  const result = await GH(`search/issues?${q}`);

  return result.total_count;
};
