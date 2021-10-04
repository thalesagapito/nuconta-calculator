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

# Choices

-   I used Typescript because in my experience it has shown to reduce bugs and improve maintainability. I also have a better DX when using it.
-   I used Vue 3 because it provides the composition API (not present in Vue 2) and supports Typescript out of the box. I also have more experience with Vue than with React.
-   Unit tests are written with Jest and component tests use Vue Testing Library (@testing-library/vue). These libs are recommended by Vue's core team and are compatible with Vue 3.
-   I created a domain folder to house functions that handle business rules. So they aren't coupled to the Vue application, the application just consumes them through a composable utility.
-   Since the project was meant to be production ready, I also added a few small packages:
    -   `vue-i18n` to deal with internationalization and number formatting.
    -   `vueuse` to provide common composition utilities, it prevents reinventing the wheel.
    -   `big.js` to simplify and prevent bugs when handling floating point number operations.
    -   `tailwindcss` and `postcss` to handle styles, decreasing the amount of time needed to write css.
-   No component library, since the project was so small and the UI was very simple.
