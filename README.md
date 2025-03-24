### codaru
**source code for the great hackathon**

```bash
bun install
bun --bun run build
bun start
```
The exposed port *should be* 7376, but it could be 3000. <br>
I don't know what I'm doing lol. <br>

Add this to the Clerk Custom JWT Token.
```json
{
    "metadata": "{{user.public_metadata}}"
}
```