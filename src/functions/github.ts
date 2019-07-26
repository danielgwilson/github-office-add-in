import { request } from "@octokit/request";
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
  for (let param of params) {
    q = q.concat(` ${param}`);
  }

  const token = await getAuthToken();

  const response = await request("POST /graphql", {
    headers: {
      authorization: `token ${token}`
    },
    query: `
      query ($q: String!) {
        search(type: ISSUE, query: $q) {
          issueCount
        }
      }
      `,
    variables: {
      q: q
    }
  });

  return response.data.data.search.issueCount;
};

const getAuthToken = async () => {
  const token = await OfficeRuntime.storage.getItem("token");
  if (token) {
    return token;
  } else {
    const newToken = await getTokenViaDialog();
    OfficeRuntime.storage.setItem("token", newToken);
    return newToken;
  }
};
