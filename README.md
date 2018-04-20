# Bitbucket Pipelines - Rocket.chat integration
Enable notification webhooks of [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) to show nicely in your [Rocket.Chat](https://rocket.chat/) instance.

This script only supports the [Build status created](https://confluence.atlassian.com/bitbucket/event-payloads-740262817.html#EventPayloads-Buildstatuscreated) and [Build status updated](https://confluence.atlassian.com/bitbucket/event-payloads-740262817.html#EventPayloads-Buildstatusupdated) events.

## Setup
1. Go to your admin page
2. Go to Integrations
3. Create a New Integration and select Incoming WebHook
4. Select the channel were you will receive the alerts (you can override in messages)
5. Set Script Enabled to True
6. Paste the contents of `script.js` inside the Script field
7. Save the integration
8. Use the generated WebHook URL to POST messages to Rocket.Chat

## More information
* Rocket.Chat integrations - https://rocket.chat/docs/administrator-guides/integrations/
* Bitbucket Pipeline Webhooks - https://confluence.atlassian.com/bitbucket/manage-webhooks-735643732.html
