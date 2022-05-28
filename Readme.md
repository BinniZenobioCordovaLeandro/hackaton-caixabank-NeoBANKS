# HACKATHON de CaixaBank Tech! SOLVED

To this hackaton, i used the following technologies:

```
- React
- React Native
- Expo
- Expo CLI
- TypeScript
```

So, the next developer need a basic skill and know how to use the `Expo CLI` to run a project, and have experience using `typescript` or `javascript`.

## HOW RUN THIS APP

### Running Locally

Download the copy of this repostory.

```sh
git clone https://github.com/BinniZenobioCordovaLeandro/hackaton-caixabank-NeoBANKS.git
```

Then `cd` into the downloaded directory and install dependencies with:

```sh
npm install
expo install
```

Then you can run the app with (make sure you have no server running on port 19000-19010):

```sh
expo r -c
```


### Running the app

This starts the expo cli into the terminal
from this CLI, you can run the app:

- to browser press `w`:
- to android device or emulator press `a`:
- to iOS simulator press `i`:

HOURAI!

Now can see the app in one of the three platforms.

### Editing Docs Content

You can find the source of the documentation inside every directory. Documentation is mostly written in markdown with the help of some React components (for components, screens, variants, etc).

The routes and navbar are been declared into `navigation` directory.

### Current status

This is the current status of the project:
- FrontEnd Mockup Ready!

### Next steps

This app is ready to build the functional actions.
TODO:
- Add UniTest using jest to every component and screen.
- Install redux to manage the state of the app
- Add the services directory to manage data from the end-points.
- Mock the response services to test the app.
- Use redux hooks into the screens to set the data to the components.

### New Features or BugFixing

Everytime that you need a new feature or a bug, please create a new branch using:

```sh
  git checkout -b feature/new-timeline-chart
```

```sh
  git checkout -b bug/fix-timeline-chart-height
```

and create a PR to `master` branch

### New Components

Always try to use the existing components and features in components directory.

If you need a new component, create a new component in components directory.
Every component must have a `component.tsx` file, a `props.ts` file and a `variant.tsx` like `icon.tsx` and her variants are `calendar.icon.tsx`, `dots.icon.tsx`, ...

REMEBER: If u need a new component, determine the most ATOMIC component, to maximise the reuse of the component.

### New Screens

If you need a new Screen, create a new screen in screens directory.

Every Screen must have a `screen.tsx` file, a `screen.presets.ts` file and a `variant/screenVariant.tsx` like `HomeScreen.tsx` and her variants are `HomeScreenDesktop.tsx`, `HomeScreenTablet.tsx`, ...

REMENBER: CREATE A SCREEN VARIANT ONLY if it necessary. Else use the same screen with flex structure.
REMEBER: If u need a new Screen, first determine the new most ATOMIC component nonexistent, to maximise the reuse of a component.

### New Assets

If you need a new Asset, like font, or image:

- To new images, add the image into images directory.
- To new fonts, add the font into fonts directory.

IMPORTANT NOTE: Dont use an `image` with a first solution, better use a `svg` or `icon` svg component directly to the `react-native` code.

### Checkers and fomatters

This project have code checkers and formatters.

you can test this using:

```sh
  npm run lint
  npm run lint-and-fix
  npm run prettier-format
```

This commands are been runned before every commit. To maximise the quality of the code!

### HACKATHON de CaixaBank Tech! SOLVED