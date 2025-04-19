import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { OnboardingForm } from "@/components/OnboardingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding.",
  description: "Finish setting up your account by selecting your role.",
};

export default async function OnboardingPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (user.publicMetadata?.role) {
    redirect("/");
  }

  let githubUsername: string | null = null;
  if (user.externalAccounts && user.externalAccounts.length > 0) {
    const githubAccount = user.externalAccounts.find(
      (acc) => acc.provider === "oauth_github" && acc.username,
    );
    if (githubAccount && githubAccount.username) {
      githubUsername = `https://github.com/${githubAccount.username}`;
    }
  }

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <OnboardingForm initialGithubUsername={githubUsername} />
      <img
          className="h-1/2"
          loading="lazy"
          src="/assets/images/signpost.webp"
          alt="retrofuturistic signpost overgrown with plants"
      />
    </div>
  );
}
