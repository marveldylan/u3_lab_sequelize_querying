# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Create a feature branch
1. Clone

# Sequelize Querying

## Setup

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
SELECT * FROM "Users";
```

## Querying

```js
// Find all users
// Raw SQL: SELECT * FROM "Users";

const findAll = async () => {
    const users = await User.findAll();
    console.log("All users:", JSON.stringify(users, null, 4));
}

// Create a new user
// Raw SQL: INSERT INTO users (id, firstName, lastName, email) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com')
const createUser = async () => {
    const jane = await User.create({ firstName: "Jane", lastName: "Doe", email: "jane@jane.com" })
    console.log("Jane's auto-generated ID:", jane.id)
}


// Delete everyone named "Jane"
// Raw SQL: DELETE FROM users WHERE firstName = 'Jane'
const destroyUser = async () => {
    const destroyed = await User.destroy({
        where: {
            firstName: "Jane"
        }
    })
    console.log("Destroyed:", destroyed);
}

// Change lastname "Doe" to "Smith"
// UPDATE users SET lastName='Smith' WHERE lastName = 'Doe'
const updateUser = async () => {
    const updated = await User.update({ lastName: "Smith" }, {
        where: {
            lastName: "Doe"
        }
    })
    console.log("Updated:", updated);
}

// Find all users and only show their email
// Raw SQL: SELECT email FROM users;
const findAllEmails = async () => {
    const emails = await User.findAll({
        attributes: ['email']
    })
    console.log("All user emails:", JSON.stringify(emails, null, 4));
}

// Find all users where firstname is John
// Raw SQL: SELECT * FROM users WHERE firstName = "John";
const findAllJohns = async () => {
    const johns = await User.findAll({
        where: {
            firstName: "John"
        }
    })
    console.log("All users with first name John:", JSON.stringify(johns, null, 4));
}

// Find all users where firstname is either John or Jane
// Raw SQL: SELECT * FROM user WHERE firstName = "John" OR firstName = "Jane";
const findAllJohnsOrJanes = async () => {
    const johnOrJanes = await User.findAll({
        where: {
            [Op.or]: [{ firstName: "John" }, { firstName: "Jane" }]
        }
    })
    console.log("All users with first name John or Jane:", JSON.stringify(johnOrJanes, null, 4));
}
```

## Resources

- https://sequelize.org/master/manual/querying.html
