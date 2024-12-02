# saas-monorepo

## run agendaonline

`npm ci && npm run nx run agendaonline-landing:serve`

```sh
#!/bin/sh

cd /home/saas-monorepo
git fetch && git pull
npm ci
npm run nx affected -- -t build --base=main~1
curl -X POST -H 'Content-type: application/json' --data '{"text":"saas-monorepo deployed"}' https://hooks.slack.com/services/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
```
