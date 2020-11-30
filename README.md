# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Clone

# Sequelize Querying

> - [](https://sequelize.org/master/manual/model-querying-basics.html)

Sequelize comes packaged with pre-defined query builders out of the box. Whenever we create a new model, it comes attached to that specific model.

Heres a sequelize cheat repo for your reference.**[Cheat Repo](https://github.com/SEI-R-10-5/Sequelize-Cheatsheet)**

##

Let's go into the repo:

```sh
cd sequelize-querying
npm install
```

Create your database:

```sh
npx sequelize-cli db:create
```

Run the migration:

```sh
npx sequelize-cli db:migrate
```

Populate the database with seed data:

```sh
npx sequelize-cli db:seed:all
```

Test the database:

```sh
psql sequelize_querying_development
SELECT * FROM users;
```

## Querying

While referencing either the docs, or the cheat sheet, query for the specified information. Work with the query.js file in the repo to execute different queries:

```sh
node query.js
```

## Resources

- https://sequelize.org/master/manual/querying.html
