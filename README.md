# Salesforce DX project template for Remote Development on VS Code

## Install tools

see [here](https://forcedotcom.github.io/salesforcedx-vscode/articles/user-guide/remote-development#install)

- Docker Desktop
- VS Code

## Install VS Code Extensions

- Remote Development Extension Pack
- Codey Midnight
- Bracket Pair Colorizer
- Output Colorizer

## Clone template

```sh
git clone https://github.com/takahitomiyamoto/vscode-remote-sfdx-project.git
cd vscode-remote-sfdx-project
rm -rf .git
code .
```

## Open Folder in Container

- Remote-Containers: Open Folder in Container

## Install node modules

```sh
npm install --save-dev --save-exact \
@salesforce/eslint-config-lwc \
eslint \
husky \
lint-staged \
prettier \
prettier-plugin-apex
```

## Authorize orgs

- SFDX:Authorize a Dev Hub
- SFDX: Create a Default Scratch Org
