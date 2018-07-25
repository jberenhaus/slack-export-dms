# slack-export-dms
This is a script that helps export DMs from Slack using their API


## Get an Auth Token
1. Go to https://api.slack.com/custom-integrations/legacy-tokens
2. Get a token (the test pages )
3. Copy the token locally (Don't share this ever)

## Getting the User's Id
1. Go to https://api.slack.com/methods/users.list/test and press Test Method
2. Find the correct "name" (ex: Josh)
3. Copy the (User) Id above (ex: U0PUVNTB2)

## Getting the DM chat Id
1. Go to https://api.slack.com/methods/im.list/test
2. Press ctrl-F and search for the User Id. You'll find it next to "user": _____
3. Copy the (DM Chat) Id above it (ex. D6Y2YP56U)

## Extracting the messages
1. Go to http://jsfiddle.net/k6ed0o4n/
2. Paste the token where it says token
3. Paste the DM Chat Id where it says channel
4. Paste the User Id where it says other
5. Look down a bit and change the person's name in the quotes "Other: " where it says // Replace Me
