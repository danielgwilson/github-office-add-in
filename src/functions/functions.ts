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
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */
async function getAccessToken() {
  return await getTokenViaDialog();
}
