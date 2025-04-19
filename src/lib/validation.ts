/**
 * Regex for validating URLs (Portfolio links).
 * This is a relatively permissive pattern:
 * - Must start with http:// or https://
 * - Followed by at least one character for the domain/path.
 */
export const PORTFOLIO_URL_REGEX = /^https?:\/\/.+/i;

/**
 * Regex for validating GitHub profile URLs.
 * - Must start with http:// or https://
 * - Domain must be github.com
 * - Followed by a username path segment.
 * - GitHub usernames: alphanumeric characters and hyphens, cannot start/end with hyphen.
 */
export const GITHUB_URL_REGEX =
  /^https?:\/\/github\.com\/[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}\/?$/i;

/**
 * Checks if a value is a non-empty string.
 * @param value The value to check.
 * @returns True if the value is a non-empty string, false otherwise.
 */
export const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

/**
 * Example validation function specifically for the participant form rules.
 * You would likely use this logic within Mantine's useForm validation schema.
 *
 * @param values An object containing portfolioUrl and githubUrl.
 * @returns True if validation passes (at least one URL is valid), false otherwise.
 */
export const validateParticipantLinks = (values: {
  portfolioUrl?: string;
  githubUrl?: string;
}): boolean | undefined | "" => {
  const hasValidPortfolio =
    values.portfolioUrl && PORTFOLIO_URL_REGEX.test(values.portfolioUrl);
  const hasValidGithub =
    values.githubUrl && GITHUB_URL_REGEX.test(values.githubUrl);

  return hasValidPortfolio || hasValidGithub;
};

/**
 * Checks if EITHER portfolio OR github is provided (doesn't validate format here, just presence).
 * Useful for form-level validation message with Mantine's useForm.
 *
 * @param values An object containing portfolioUrl and githubUrl.
 * @returns An error message if neither is provided, null otherwise.
 */
export const requirePortfolioOrGithub = (values: {
  portfolioUrl?: string;
  githubUrl?: string;
}): string | null => {
  const portfolioProvided = isNonEmptyString(values.portfolioUrl);
  const githubProvided = isNonEmptyString(values.githubUrl);

  if (!portfolioProvided && !githubProvided) {
    return "Please provide either a Portfolio link or a GitHub profile link.";
  }
  return null;
};
