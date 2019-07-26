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
    q = q.concat(`+${param}`);
  }

  const token = await getAuthToken();

  try {
    const result = await request(`GET /search/issues?q=:q`, {
      headers: {
        authorization: `token ${token}`
      },
      q: q
    });
    return result.data.total_count;
  } catch (err) {
    OfficeRuntime.storage.removeItem("token");
  }
};

export const getIssueCount = async (
  repo: string,
  states: ["OPEN"] | ["CLOSED"] | ["OPEN", "CLOSED"],
  assignee: string
) => {
  const token = await getAuthToken();
  const result = await request("POST /graphql", {
    headers: {
      authorization: `token ${token}`
    },
    query: `
    query($repo:String!, $states:[IssueState!], $assignee:String!) {
      repository(owner:"OfficeDev", name:$repo) {
        issues(filterBy: {states:$states, assignee:$assignee}) {
          totalCount
        }
      }
    }
    `,
    variables: {
      repo: repo,
      states: states,
      assignee: assignee
    }
  });
  return result.data.repository.issues.totalCount;
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
