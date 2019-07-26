import { clientID, clientSecret } from "../../ghKeys";
import Octokit from "@octokit/rest";

const octokit = new Octokit();

export const GH = async (endpoint: string) => {
  const api = "https://api.github.com/";
  const fetchOptions = {};

  const response = await fetch(api.concat(endpoint));
  const json = await response.json();

  return json;
};

export const searchIssuesForRepo = async (repo: string, params: string[]) => {
  let q = `repo:OfficeDev/${repo}`;
  q = params ? q.concat("+") : q;
  for (let param of params) {
    q = q.concat(`+${param}`);
  }

  const result = await octokit.search.issues({ q: q });

  return result.data.total_count;
};
