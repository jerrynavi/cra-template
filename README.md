# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder Structure

This project is written in TypeScript and there are minor differences to the default Create React App project. All of the project's source code still lives in the `src` folder. Below, I'll point out what's happening in what folder.

### `src/app`

The App™️. Pages typically go here.

### `src/components`

You can put reusable components &mdash; Error Boundaries, Loading, Layout components, etc &mdash; here.

### `src/lang`

This project uses the wonderful `react-intl` library for <abbr title="Internationalisation">i18n</abbr>. Translation files live in this folder. This is entirely optional. If you would like to remove the i18n feature, please run the command to uninstall the `react-intl` library. Also, remove the `src/utils/language-service.ts` file and remove the imports related to the package & file from the project's code.

```bash
# remove react-intl package
yarn remove react-intl
```

### `src/models`

Shared type definitions should go in this folder.

### `src/store`

This project uses [Redux Toolkit](https://redux-toolkit.js.org/) for Redux development. The setup is intentionally lightweight.

### `src/theme`

Stylesheets and fonts go here.

### `src/utils`

Shared JavaScript functions and app-wide services can go here.
