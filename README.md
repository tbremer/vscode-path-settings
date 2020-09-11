# Path Settings ![Path Settings Icon](https://github.com/tbremer/vscode-path-settings/raw/main/icon.png)

Path Settings allows you to have specific VSCode settings that only affect certain paths. Ideal for monorepos.

## Extension Settings

* `pathSettings.rules`: Rules objects with known keys "path" and "settings"
    * `path`: path to test against
    * `settings`: Settings objects to apply when `path` tests true. This is any allowed VSCode Setting

## Release Notes

### 1.0.0

Initial release of path-settings

### 1.0.1

- Add Icon
- Update display name
- Update README
- Extract Rule to it's own Interface
