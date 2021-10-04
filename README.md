# How to run

First, install the project's dependencies using yarn, then start the server using the dev command:

```bash
yarn
yarn dev
```

If you want to build and locally preview the production build you can use:

```bash
yarn build
yarn serve
```

You can also use the `--host` flag when running `yarn dev` or `yarn serve` to preview the project on a physical mobile device more easily.

Additionally, run the automated tests using:

```bash
yarn test
```

# Recommendations

-   Install the workspace recommended extensions
-   Disable Vetur if you use it (it doesn't support the new `<script setup>` syntax)
