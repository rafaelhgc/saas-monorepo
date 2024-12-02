# saas-monorepo

## run agendaonline

`npm ci && npm run nx run agendaonline-landing:serve`

```sh
#!/bin/sh

git --work-tree=/home/saas-monorepo --git-dir=/repositories/saas-monorepo.git checkout -f
cd /home/saas-monorepo
#cp /home/saas-monorepo/apache2/saas-monorepo.conf /etc/apache2/sites-available/
#a2ensite saas-monorepo
#service apache2 reload
#curl -X POST -H 'Content-type: application/json' --data '{"text":"growing.dev deployed"}' https://hooks.slack.com/services/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
```
