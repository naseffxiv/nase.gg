# nase.gg
This reposity is the underlying code for the NASE Discord and FFXIV NA raiding community. 
It is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. 
Contirubtions are welcome! If you would like to contribute to the site, please read the section below.

# How to contribute

This guide will walk you through the steps to fork the repository, make changes, and submit a pull request (PR) to contribute.

If you already know how to contribute to a GitHub repository, feel free to skip this.

## Table of Contents

1. [Fork the Repository](#fork-the-repository)
2. [Clone Your Forked Repository](#clone-your-forked-repository)
3. [Set Up Your Development Environment](#set-up-your-development-environment)
4. [Make Changes](#make-changes)
5. [Test Your Changes](#test-your-changes)
6. [Submit a Pull Request](#submit-a-pull-request)

## Fork the Repository

1. Go to the GitHub page of the original Docusaurus project you want to contribute to.

2. Click the **Fork** button in the top right corner of the page. 
This action will create a copy of the repository under your GitHub account.

## Clone Your Forked Repository

1. Open your terminal or command prompt.

2. Clone your forked repository to your local machine by running:

   ```bash
   git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
   ```

Replace `YOUR-USERNAME` with your GitHub username and `REPOSITORY-NAME` with the name of the forked repository.

3. Navigate to the project directory:

   ```bash
   cd REPOSITORY-NAME
   ```
## Set Up Your Development Environment

1. Ensure you have Node.js and npm installed on your system. You can verify this by running:

   ```bash
   node -v
   npm -v
   ```

If not installed, download and install them from the [Node.js official website](https://nodejs.org/en).

2. Install the project's dependencies:

   ```bash
   npm install
   ```

This command will install all necessary packages required to run the Docusaurus project.

## Make Changes

1. Create a new branch for your changes:

    ```bash
    git checkout -b my-feature-branch
    ```

Replace `my-feature-branch` with a descriptive name for your branch.

2. Make the necessary changes to the Docusaurus project files using your preferred code editor.

## Test Your Changes

1. Start the local development server to test your changes:

    ```bash
    npm run start
    ```
2. Open your browser and navigate to `http://localhost:3000`. 
You should see the Docusaurus site running locally with your changes.

3. Verify that your changes appear correctly and do not break any existing functionality.

## Submit a Pull Request

1. Stage and commit your changes:

    ```bash
    git add .
    git commit -m "Description of the changes made"
    ```

2. Push your changes to your forked repository:

    ```bash
    git push origin my-feature-branch
    ```

Replace `my-feature-branch` with the name of your branch.

3. Go to the original repository on GitHub and click the Compare & pull request button.

4. Provide a clear title and description for your pull request, detailing the changes you have made.

5. Click Create pull request to submit your PR for review.

## Additional Resources
- [Docusaurus Documentation](https://docusaurus.io)
- [GitHub Guides: Fork a Repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
- [GitHub Guides: Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)



