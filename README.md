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

## Update Node Modules

```sh
npm install --save-dev --save-exact \
@salesforce/eslint-config-lwc \
@salesforce/eslint-plugin-aura \
eslint \
husky \
lint-staged \
prettier \
prettier-plugin-apex
```

## Authorize Orgs

- SFDX: Authorize a Dev Hub
- SFDX: Create a Default Scratch Org

# Acknowledgement

This repository is cloned from [forcedotcom/vscode-remote-try-sfdx](https://github.com/forcedotcom/vscode-remote-try-sfdx).
