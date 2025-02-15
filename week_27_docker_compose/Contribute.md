## Manual Installation

-Install Node.js
-Clone the repository
-Install dependencies
-Start db locally
-docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
-go to neon.tech and get db
-Change the database url in .env file
-npx prisma migrate
-npx prisma generate
-npm run build
-npm run start

## Docker Installation

-Install Docker
-Clone the repository
-Start db locally
-docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
-go to neon.tech and get db
-Change the database url in .env file
-docker build -t week_27_docker_compose
-docker run -p 3000:3000 week_27_docker_compose

## Docker Compose Installation

-Install Docker
-Clone the repository
-Run docker compose up
