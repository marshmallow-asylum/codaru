import { createClerkClient } from "@clerk/nextjs/server"

void async function () {
    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
    const list = await clerkClient.users.getUserList()
    console.log(list.data.map(user => user._raw.email_addresses[0].email_address))
}()