#!/bin/bash

# Create the main project directory
mkdir my-app
cd my-app

# Create client directory and its subdirectories
mkdir -p client/public client/src/assets client/src/components client/src/views
touch client/public/index.html client/src/App.vue client/src/main.js

# Create server directory and its subdirectories
mkdir -p server/controllers server/models server/routes server/utils
touch server/app.js server/server.js

# Create config directory and its files
mkdir config
touch config/database.js config/env.js

# Create docs and EXAMPLES directories
mkdir docs EXAMPLES

# Create SQL and MongoDB subdirectories in the server directory
mkdir server/models/mongodb sql

# Create SQL and MongoDB related files
touch sql/schema.sql sql/seed.sql
touch config/db.sql

# Create documentation files
touch README.md LICENSE CONTRIBUTING.md CODE_OF_CONDUCT.md CHANGELOG.md AUTHORS.md ISSUE_TEMPLATE.md PULL_REQUEST_TEMPLATE.md
touch docs/user_guide.md

# Create the .env file
touch .env

# Create package.json and package-lock.json files
touch package.json package-lock.json

# Create the .gitignore file
cat <<EOL > .gitignore
node_modules/
.env
EOL

# Display success message
echo "Directory structure created successfully!"

