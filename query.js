const { User } = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// Find all users
// Raw SQL: SELECT * FROM users;

// Create a new user
// Raw SQL: INSERT INTO users (id, firstName, lastName, email, userName, password, jobTitle) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com', 'janedoe', '123456789', 'Systems Analyst')


// Delete everyone named "Jane"
// Raw SQL: DELETE FROM users WHERE firstName = 'Jane'

// Change lastname "Doe" to "Smith"
// UPDATE users SET lastName='Smith' WHERE lastName = 'Doe'

// Find all users and only show their email
// Raw SQL: SELECT email FROM users;

// Find all users where firstname is John
// Raw SQL: SELECT * FROM users WHERE firstName = "John";

// Find all users where firstname is either John or Jane
// Raw SQL: SELECT * FROM users WHERE firstName = "John" OR firstName = "Jane";

const run = async () => {
    await process.exit()
}

run()