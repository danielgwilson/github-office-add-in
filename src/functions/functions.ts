import { searchIssuesForRepo } from "./github";
import { getTokenViaDialog } from "./getTokenViaDialog";

/**
 * Gets the number of issues for a particular repo given some search parameters.
 * @customfunction
 * @param repo
 * @param params Search parameters
 * @returns The number of issues
 */
async function issueCountForRepo(repo: string, params?: string[]) {
  return await searchIssuesForRepo(repo, params);
}

/**
 * Gets the number of issues for a particular repo given some search parameters, also adding a hyperlink to the corresponding repo (filtered).
 * @customfunction
 * @param repo
 * @param params Search parameters
 * @returns The number of issues and a hyperlink to the repo (filtered).
 */
async function issueCountForRepoWithHyperlink(repo: string, params?: string[]) {
  return `=HYPERLINK(https://google.com)`;
}
