# path-settings README

`path-settings` allow you to have specific vscode settings that only affect certain paths. Ideal for monorepos.

## Extension Settings

* `pathSettings.rules`: Rules objects with known keys "path" and "settings"
    * `path`: path to test against
    * `settings`: Settings objects to apply when `path` tests true. This is any allowed VSCode Setting

## Release Notes

### 1.0.0

Initial release of path-settings
