import { createClerkClient } from "@clerk/nextjs/server"

void async function () {
    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
    const list = await clerkClient.users.getUserList({ orderBy: '-created_at', limit: 250, offset: 0 })
    console.log(list.data.map(user => user._raw.email_addresses[0].email_address).join("\n"))
}()