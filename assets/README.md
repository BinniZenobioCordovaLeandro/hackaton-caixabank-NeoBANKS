### New Features or BugFixing

Everytime that you need a new feature or a bug, please create a new branch using:

```sh
  git checkout -b feature/loona-image
```

```sh
  git checkout -b bug/error-gif-loona
```

and create a PR to `master` branch

### New Assets

If you need a new Asset, like font, or image:

- To new images, add the image into images directory.
- To new fonts, add the font into fonts directory.

IMPORTANT NOTE: Dont use an `image` with a first solution, better use a `svg` or `icon` svg component directly to the `react-native` code.
