### New Features or BugFixing

Everytime that you need a new feature or a bug, please create a new branch using:

```sh
  git checkout -b feature/profile-screen
```

```sh
  git checkout -b bug/fix-
```

and create a PR to `master` branch

### New Screens

If you need a new Screen, create a new screen in screens directory.

Every Screen must have a `screen.tsx` file, a `screen.presets.ts` file and a `variant/screenVariant.tsx` like `HomeScreen.tsx` and her variants are `HomeScreenDesktop.tsx`, `HomeScreenTablet.tsx`, ...

REMENBER: CREATE A SCREEN VARIANT ONLY if it necessary. Else use the same screen with flex structure.
REMEBER: If u need a new Screen, first determine the new most ATOMIC component nonexistent, to maximise the reuse of a component.

### Posible Screen structure

- profilescreen
- loginscreen
- signupscreen
...
