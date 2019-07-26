import Octokit from "@octokit/rest";
import { getTokenViaDialog } from "./getTokenViaDialog";

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

const getAuthToken = () => {
  let authToken = "";
  getTokenViaDialog().then(token => {
    authToken = token;
  });

  return authToken;
};

const octokit = new Octokit({ auth: `token ${getAuthToken()}` });
