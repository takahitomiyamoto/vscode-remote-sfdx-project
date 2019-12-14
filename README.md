# Salesforce DX Project Template for Remote Development on VS Code

## Install Tools

see [here](https://forcedotcom.github.io/salesforcedx-vscode/articles/user-guide/remote-development#install)

- Docker Desktop
- VS Code

## Install VS Code Extensions

- Remote Development Extension Pack
- Codey Midnight
- Bracket Pair Colorizer
- Output Colorizer

## Clone Template

```sh
git clone https://github.com/takahitomiyamoto/vscode-remote-sfdx-project.git
mv vscode-remote-sfdx-project xxxxx
cd xxxxx
rm -rf .git
code .
```

## Open Folder in Container

- Remote-Containers: Open Folder in Container

## Install Latest Node Modules

```sh
npm install --save-dev --save-exact \
@prettier/plugin-xml \
@salesforce/eslint-config-lwc \
eslint \
husky \
lint-staged \
prettier \
prettier-plugin-apex
```

## Install SFDX

```sh
npm install --global sfdx-cli
echo y | sfdx plugins:install sfpowerkit
```

## Authorize Orgs

1. SFDX: Authorize a Dev Hub
1. SFDX: Create a Default Scratch Org

# Acknowledgement

This repository is cloned from [forcedotcom/vscode-remote-try-sfdx](https://github.com/forcedotcom/vscode-remote-try-sfdx).
