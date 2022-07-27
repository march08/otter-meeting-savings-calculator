# Project info

Project built using

- Svelte
- Typescript
- SCSS

## Development

To develop app, run these commands in the command line

```
// if starting for the first time
yarn install
// then
yarn dev

```

Make sure you have `node` installed to run this project. If you don't have yarn installed

```
npm install -g yarn
```

## UMD js files for web embedding

We will need to build and compile the project first on your local machine:

```
yarn build:embed
```

Will build

```
/public/umd
   - /bundle.css
   - /otter-meeting-calculator.js
   - /otter-meeting-calculator.js.map
```

As a simple solution for js and css delivery we are using [jsDelivery](https://www.jsdelivr.com/), for that reason the build code **must be included in the git**. You will need to make a new release version of the repository to promote new changes.

## Otter meeting cost calculator

Include styles in `<head>`

> Instead of @latest, you can use specific version, e.g. @1.0.0, @latest is cached for about a week

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/march08/otter-meeting-savings-calculator@latest/public/umd/bundle.css"
/>
```

To include Calculator on the website, create a div element with `id` in the desired location of the html.

```html
<div
  id="otter-meeting-calculator"
  style="max-width: 640px; margin-left: auto; margin-right: auto;"
></div>
```

At the end of `<body>`, include this script:

```html
<!-- calculator -->
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/gh/march08/otter-meeting-savings-calculator@latest/public/umd/otter-meeting-calculator.js"
></script>

<!-- initalize calculator -->
<script defer>
  OtterMeetingCostCalculator("otter-meeting-calculator");
</script>
```

### Options for initializing the calculator

To add custom properties, initialize the calculator with custom config object:

```javascript
const config = {
  benefitCoeficient: 1.6,
  workingHoursPerYear: 1700,
};
OtterMeetingCostCalculator("otter-meeting-calculator", config);
```

What can be configured?

```typescript
export type Config = {
  initialValues: {
    duration: number; // hours
    attendeeCount: number; // number
  };
  defaultSalary: number;
  title: string;
  // calculations
  benefitCoeficient: number;
  workingHoursPerYear: number;
  // end screen
  hrefHighCost: string;
  hrefLowCost: string;
  ctaCostThreshold: number;
  // select options
  optionsDuration: number[]; // hours
  optionsSalaries: number[]; // in thousands
  optionsAttendees: number[]; // number of attendees
  // copy
  copy: {
    endCtaLowerCost: string;
    endCtaHigherCost: string;
    endShareButton: string;
    endCalcAgain: string;
    calculatorCtaEstimate: string;
    calculatorSalaryItemLabel: (index: number) => string;
    calculatorCoeficientNote: (coeficient: number) => string;
    shareTitle: string;
    shareClose: string;
    shareUrlFacebook: string;
    shareUrlTwitter: string;
    shareUrlLinkedin: string;
    shareUrlEmail: string;
    shareEmailSubjet: string;
    shareMessage: (props: {
      amountSpent: number;
      amountSpentFormatted: string;
    }) => string;
    resultTitle: string;
    resultInputSummary: (hours: number, attendees: number) => string;
  };
};
```

Default config is defined [here](https://github.com/march08/otter-meeting-savings-calculator/blob/main/src/config.ts). Each property is optional.

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.
