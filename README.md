# nase.gg
This reposity is the underlying code for the NASE Discord and FFXIV NA raiding community. It is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Contirubtions are welcome! If you would like to contribute to the site, please read the section below.

## How to contribute
1. Make a fork of the repository.
2. Make your edits in the fork.
3. Create a Pull Requestion. If approved, your edits will be merged into the main repository.

## Testing locally
Before pushing, it is often a good idea to build and preview the created site locally to check if everything is working as expected. This lets you test changes before committing them to the main repository. Follow the steps below on how to setup your local enviroment.

### Installation
Note: This guide shows you how to start your own project assuming you don't know how Docusaurus works or running local enviroments.

#### Requirements
You will need Node.js version 18.0 or above to run the development server. To install, visit the link below.
https://nodejs.org/en/download/package-manager

#### Create scaffold project
The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.

```bash
npx create-docusaurus@latest my-website classic
```

#### Running the development server
To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```bash
cd my-website
npm run start
```

By default, a browser window will open at http://localhost:3000.

Congratulations! You have just created your first Docusaurus site!

Knowing the process, you can store the forked NASE.gg project on your local system and simply run the development serverwhere you stored it.

