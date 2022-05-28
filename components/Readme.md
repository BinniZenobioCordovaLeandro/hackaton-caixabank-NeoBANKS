### New Features or BugFixing

Everytime that you need a new feature or a bug, please create a new branch using:

```sh
  git checkout -b feature/modal-component
```

```sh
  git checkout -b bug/fix-multiple-dissmiss-modal-component
```

and create a PR to `master` branch

### New Components

Always try to use the existing components and features in components directory.

If you need a new component, create a new component in components directory.
Every component must have a `component.tsx` file, a `props.ts` file and a `variant.tsx` like `icon.tsx` and her variants are `calendar.icon.tsx`, `dots.icon.tsx`, ...

REMEBER: If u need a new component, determine the most ATOMIC component, to maximise the reuse of the component.

### Posible Components structure

- textfield | textinput
- image
- list
- card
- screen
- modal
- gradient
- radio
- checkbox
- combo
- automcomplete
...
