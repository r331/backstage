# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev
```

start docker
```sh
docker run --name backstage-postgres -e POSTGRES_PASSWORD=mysecretpassword -v ~/sandbox/backstage/backstage-finra/database:/var/lib/postgresql/data -p 5432:5432 -d postgres
```
