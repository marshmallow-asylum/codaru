"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { USER_ROLES, UserRole, DISCOVERY_OPTIONS } from "@/lib/constants";

interface UpdateUserRoleInput {
  role: UserRole;
  portfolioUrl?: string;
  githubUrl?: string;
  discovery?: DISCOVERY_OPTIONS;
}

interface ActionResult {
  success: boolean;
  error?: string | null;
}

export async function updateUserRoleAction(
  input: UpdateUserRoleInput,
): Promise<ActionResult> {
  const { userId } = await auth();

  if (!userId) {
    console.error("updateUserRoleAction: No authenticated user found.");
    return {
      success: false,
      error: "Authentication required. Please sign in.",
    };
  }

  const { role } = input;

  if (!USER_ROLES.includes(role)) {
    console.error(
      `updateUserRoleAction: Invalid role "${role}" provided for user ${userId}.`,
    );
    return { success: false, error: "Invalid role selected." };
  }

  const newPublicMetadata = role === "Participant" ? {
    role: "Participant",
    approved: true,
    portfolioUrl: input.portfolioUrl || "",
    githubUrl: input.githubUrl || "",
    discovery: input.discovery || null,
  } : {
    role: role,
    approved: false,
  };

  try {
    const client = await clerkClient();
    await client.users.updateUser(userId, {
      publicMetadata: newPublicMetadata,
    });

    console.log(
      `updateUserRoleAction: Successfully updated metadata for user ${userId}. Role set to "${role}", approved: false.`,
    );

    revalidatePath("/onboarding");

    return { success: true };
  } catch (error) {
    console.error(
      `updateUserRoleAction: Failed to update metadata for user ${userId}. Error:`,
      error,
    );

    return {
      success: false,
      error:
        "There was an issue updating your profile. Please try again later.",
    };
  }
}
