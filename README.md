[![npm version](https://badge.fury.io/js/npm-prepare-dist.svg)](https://badge.fury.io/js/npm-prepare-dist)
[![npm downloads](https://img.shields.io/npm/dt/npm-prepare-dist.svg)](https://npm.im/npm-prepare-dist)
[![Package License](https://img.shields.io/npm/l/npm-prepare-dist.svg)](https://www.npmjs.com/npm-prepare-dist)
[![Build & Publish](https://github.com/bartholomej/npm-prepare-dist/workflows/Build%20&%20Publish/badge.svg)](https://github.com/bartholomej/npm-prepare-dist/actions)
[![codecov](https://codecov.io/gh/bartholomej/npm-prepare-dist/branch/master/graph/badge.svg?token=YQH9UoVrGP)](https://codecov.io/gh/bartholomej/npm-prepare-dist)

# NPM Prepare Dist CLI

> Clean and prepare `dist` folder and all files before publishing your NPM library
>
> - Potentially smaller build and faster installation of your library
> - TypeScript, JavaScript, CLI version
> - Useful options

## Install

via yarn

```bash
yarn add npm-prepare-dist --dev
```

via npm

```bash
npm install npm-prepare-dist --save-dev
```

## Usage

### CLI

```bash
npm-prepare-dist
```

- Main `package.json` file will be copied into your **dist** folder
- devDependencies will be removed
- More _useless_ options will be removed
- `README.md` (and other files) will be copied into _dist_ folder as you wish

### JavaScript

```javascript
import { prepareDist } from 'npm-prepare-dist';

prepareDist('build', ['README.md', 'LICENSE', 'icon.svg'], './src/');
```

## Example

Highly recommended to use as `postbuild` hook in you `package.json`

```json
{
  "name": "my-project",
  "scripts": {
    "build": "tsc",
    "postbuild": "npm-prepare-dist"
  }
}
```

## Options

| Option              | Description                                       | default     | example                   |
| ------------------- | ------------------------------------------------- | ----------- | ------------------------- |
| -h, --help          | Display this usage info                           | -           | -                         |
| -v, --version       | Show version                                      | -           | -                         |
| -d, --dist          | Dist folder path                                  | `dist`      | `-d build`                |
| -f, --files         | Array of files to copy into dist folder as well   | `README.md` | `-f README.md -f LICENSE` |
| -m, --main          | Main folder where. Usually where is your index.js | `./`        | `-m ./src/`               |
| -s, --remove-script | Remove script in package.json                     | -           | `-s postinstall -s test`  |
| --remove-deps       | Remove all dependencies from package.json         | -           | `--remove-deps`           |

## Development

I welcome you to customize this according to your needs ;)

Pull requests for any improvements would be great!

### Developing and debugging this library

```bash
git clone git@github.com:bartholomej/npm-prepare-dist.git
cd npm-prepare-dist
yarn
yarn start
```

#### Run demo locally

You can find and modify it in [`./demo.ts`](./demo.ts) file

```bash
yarn demo
```

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## Privacy Policy

I DO NOT STORE ANY DATA. PERIOD.

I physically can't. I have nowhere to store it. I don't even have a server database to store it. So even if Justin Bieber asked nicely to see your data, I wouldn't have anything to show him.

That's why, with this library, what happens on your device stays on your device till disappear.

## License

Copyright &copy; 2021 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
