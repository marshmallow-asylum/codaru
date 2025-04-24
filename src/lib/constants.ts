/**
 * Defines the possible roles a user can select during onboarding.
 * Using 'as const' ensures these are treated as literal types for better type safety.
 */
export const USER_ROLES = ["Host", "Captain", "Judge", "Participant"] as const;

export type UserRole = (typeof USER_ROLES)[number];

/**
 * Defines the keys used for storing onboarding progress in localStorage.
 */
export const LOCAL_STORAGE_KEYS = {
  ONBOARDING_STEP: "onboarding_active_step",
  ONBOARDING_ROLE: "onboarding_selected_role",
} as const;

/**
 * Optional: Define step indices if you want constants for them.
 * This can make the code in your form component more readable.
 */
export const ONBOARDING_STEP_INDICES = {
  ROLE_SELECTION: 0,
  PARTICIPANT_DETAILS: 1,
  COMPLETION: 2,
} as const;

/**
 * Optional: Options for the "How did you discover us?" dropdown.
 */
export type DISCOVERY_OPTIONS = ['Friend', "TKS", 'Social Media (LinkedIn, Instagram)', 'Newsletter', 'Khan Academy', "Online Community (Discord, Slack, Forum)", 'Other', ""] | undefined;
