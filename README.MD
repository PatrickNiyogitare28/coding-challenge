# coding-challenge
BAG Innovation Coding Challenge

## Getting Started

- Clone the app
- Run `yarn install`
- Use the bellow guid to configure the db environment to be able to successfully connect to the db
### Setting up the database
This challenge is implemented using Postgresql db, the mapping is handled by [prisma](https://www.prisma.io/);

Prerequisites to successfully connect to Pg DB

- [X] Install postgresql db
- [X] Create a database and name it `bag-coding-challenge-dev-db` as it was used in the challenge implementation
### The next thing is to create you're db connection url
- Go in `.env` file
- Modify the `DATABASE_URL` variable to mutch your local db configurations

> This is how we go about it

`postgres` stands for your postgresql user, currently I'm using the default one.

`password` stands for your postgresql user password

`localhost:5432` stands for the connection url where your db is running

> The above variables you need to change them depending on the environment in which you're running your postgresq in.

### Next step is to run the postgresql prisma migrations

Running the migration will automatically create the entities used in the challenge.. which is the last step

Use the bellow command to be able to run migrations

`npx prisma db push`

If you're what to preveiw the db schemas and entities, [prisma](https://www.prisma.io/) provides an npx script that open the prisma studio on 5555

This is the command to go.

`npx prisma studio`

The preview is rendered on `localhost:5555`




### Running the development server.

```bash
    yarn dev
```

### Building for production.

```bash
    yarn build
```

### Running the production server.

```bash
    yarn start
```

### Running Jest test
```bash
     yarn test
```

### Running Cypress test
```bash
     yarn cypress:test
```
### **TailwindCSS**

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[Go To Documentation](https://tailwindcss.com/docs)


### **SASS/SCSS**

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.

[Go To Documentation](https://sass-lang.com/documentation)


### **React Redux**

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[Go To Documentation](https://redux.js.org/introduction/getting-started)


### **next-i18next**

next-i18next is a plugin for Next.js projects that allows you to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.

[Go To Documentation](https://github.com/isaachinman/next-i18next)


### **Jest**

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

[Go To Documentation](https://jestjs.io/docs/en/getting-started)


### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)


### **Docker**

Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

[Go To Documentation](https://www.docker.com/get-started)


### **Github Actions**

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.

[Go To Documentation](https://docs.github.com/en/actions)



## License

MIT

## Maintainer
patrickniyogitare28@gmail.com

> I'm always availabel on my email for any inquiry or guidance to successfully test the challenge features.
