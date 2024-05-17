:floppy_disk:
`meteor-actions/install`
==

```yaml
jobs:
  my-job:
    - uses: meteor-actions/install@v6
```

## `inputs`

### `executable-version` (default: `local`)

Meteor version for the `meteor` executable. See description in
[`action.yml`](action.yml).

### `working-directory` (default: `.`)

The working directory to run the installation in.
