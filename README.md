# intertWINE

California's modern wine network

## URL

[https://demo.intertwine.library.ucdavis.edu/](https://demo.intertwine.library.ucdavis.edu/)

## Development

In the root, let's install our dependancies needed to construct our code.

```bash
npm install
```

Navigate to ./client/public and once again run `npm install`.

Run `ln -s node_modules/@ucd-lib/cork-app-load/lib loader`.  This command should create a *loader* directory which contains the required polyfills.

Set up webpack to continuously update its bundles.  This command is setup in the `package.json` file at the project's root.

MacOS:

  ```bash
  ln -s node_modules/@ucd-lib/cork-app-load/lib loader`
  ```

  Windows (run as administrator):

  ```bash
  mklink /D c:\Projects\intertwine\client\public\loader c:\Projects\intertwine\client\public\node_modules\@ucd-lib\cork-app-load\lib
  ```

Set up webpack to continuously update its bundles.  This command is setup in the `package.json` file at the project's root.

  ```bash
  npm run watch
  ```

Navigate to the root directory and run `node server.js`.

And you are now running your development setup on `localhost`.

### Notes

When making requests to Fedora be sure to include the following header in your get requests:

  ```bash
  "Content-Type": "application/json, charset=utf-8"
  "Accept": "application/ld+json; profile=\"http:///www.w3.org/ns/json-ld#compacted\""
  ```

  Using Fin

  ```bash
  fin http get -H "Accept: application/ld+json; profile=\"http://www.w3.org/ns/json-ld#compacted\"" -P b /collection/moments/chardonnay/chardonnay.json > mock/chardonnay.json
  ```

### Documentation

(Fedora 4.7.5 RESTful HTTP API)<https://wiki.lyrasis.org/display/FEDORA475/RESTful+HTTP+API>

### Deployment

#### Linux

```bash
npm run dist
./deploy.sh
```

#### Windows

```bash
npm run dist-windows
./deploy.sh
```
