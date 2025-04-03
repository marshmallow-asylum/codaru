import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()
  if(user && user.externalAccounts && user.externalAccounts[0].provider === "oauth_github") {
    console.log(`https://github.com/${user.externalAccounts[0].username}`);
  }
  // Use `user` to render user details or create UI elements
  return <div>Welcome, {user?.firstName}!</div>
}