<h3 align="center">
	<img src="" alt="" height="30" width="0px"/>
	「NextJS + Electron Boilerplate」
	<img src="" alt="" height="30" width="0px"/>
</h3>

<h6 align="center">
  <a href="#-features">Features</a>
  ·
  <a href="#-setting-up">Setting Up</a>
  ·
  <a href="#-documentation">Documentation</a>
  ·
  <a href="#-license">License</a>
</h6>

<p align="center">
	<a href="https://github.com/darkguy10/NextJS-Electron-Boilerplate/stargazers">
		<img alt="Stargazers" src="https://img.shields.io/github/stars/darkguy10/NextJS-Electron-Boilerplate?style=for-the-badge&logo=starship&color=C9CBFF&logoColor=D9E0EE&labelColor=302D41"></a>
	<a href="https://github.com/DarkGuy10/NextJS-Electron-Boilerplate/issues">
		<img src="https://img.shields.io/github/issues/DarkGuy10/NextJS-Electron-Boilerplate?colorA=1e1e28&colorB=bee4ed&logoColor=D9E0EE&logo=gitbook&style=for-the-badge"></a>
  <a href="https://github.com/darkguy10/NextJS-Electron-Boilerplate/releases/latest">
  	<img alt="Releases" src="https://img.shields.io/github/release/darkguy10/NextJS-Electron-Boilerplate?style=for-the-badge&logo=github&color=F2CDCD&logoColor=D9E0EE&labelColor=302D41"/></a>
</p>

&nbsp;

<p align="center">
  A neat and highly flexible boilerplate for building cross-platform apps with Electron at the core and NextJS serving as the frontend. The template is pre-configured with a bunch of handy tools to ease out development process. Plus, Typescript is supported from the get-go!
</p>

&nbsp;

### ✨ Features

- Pre-configured with Storybook, Eslint, Prettier and Electron Builder
- Binaries support auto-updates by default
- Completely flexible code
- Typescript supported by default
- Intuitive structure to avoid a messy codebase
- Documented npm scripts

&nbsp;

<table>
    <tr>
    	<td>

#### ⚠️ Why you might want to use Nextron instead

[Nextron](https://github.com/saltyshiomix/nextron) has been around for long, and has developed quite the userbase (2.8k stars as of writing). Therefore, its a very valid question: why not just use Nextron?
And the only valid answer is: _flexibiliy_.<br/>
With Nextron, there's a limit to how much you can tweak your code, and it might actually be a plus point if you want to focus on getting a basic app done.<br />
However, if you're like me, and you like having full control of your project, and not being at the mercy of a third-party project mantainer, then welcome aboard mate—this is just the thing you were searching for!

</td>
  </tr>
</table>

&nbsp;

### 🚀 Setting Up

This repo is a public template and you can easily use it create a new repo. A bit about that in [this article](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Once you're done, just clone _your_ repo (not this template) and install the dependencies (with `yarn install`) to get started


&nbsp;

### 📚 Documentation

#### 📂 Structure

```
.
├── assets
│   ├── icon.icns
│   ├── icon.ico
│   └── icon.png
├── backend
│   ├── main.ts
│   ├── README.md
│   └── tsconfig.json
├── frontend
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── public
│   │   ├── edit.svg
│   │   ├── menhera.png
│   │   ├── nextjs.svg
│   │   └── vercel.svg
│   ├── README.md
│   └── tsconfig.json
├── next.config.js
├── electron-builder.yml
├── package.json
├── README.md
└── yarn.lock

```
- `assets/`: Contains app icons used during run and build times.
- `backend/`: This is where your electron main processes reside. `main.ts` is the default entrypoint.
- `frontend/`: This is where your NextJS app lives.
- `next.config.js`: NextJS config file.
- `electron-builder.yml`: Electron builder config file.

There's more information about `frontend` and `backend` parts in the README files in their respective directories.

#### 💻 Scripts

You can run these scripts from your terminal using
```
yarn <SCRIPT_NAME>
```

<table> 
	<tr>
		<td> <pre>start</pre> </td>
		<td>Starts the app in development mode</td>
	</tr>
	<tr>
		<td> <pre>lint</pre> </td>
		<td>Formats code with prettier, also runs eslint on backend and frontend</td>
	</tr>
	<tr>
		<td> <pre>storybook</pre> </td>
		<td>Starts the Storybook dev server</td>
	</tr>
	<tr>
		<td> <pre>build</pre> </td>
		<td>Builds the electron app (the `lint` script is auto-executed before building)</td>
	</tr>
	<tr>
		<td><pre>frontend:dev</pre></td>
		<td>Starts the NextJS development server</td>
	</tr>
	<tr>
		<td> <pre>frontend:lint</pre> </td>
		<td>Runs eslint only on the `frontend/` directory</td>
	</tr>
	<tr>
		<td> <pre>frontend:build</pre> </td>
		<td>Builds only the frontend NextJS app to `frontend/build/` directory</td>
	</tr>
	<tr>
		<td> <pre>backend:lint</pre> </td>
		<td>Runs eslint only on the `backend/` directory</td>
	</tr>
	<tr>
		<td> <pre>backend:build</pre> </td>
		<td>Transpiles the backend code to `backend/build/` directory</td>
	</tr>
</table>

&nbsp;

### 📜 License

<a href="https://github.com/darkguy10/NextJS-Electron-Boilerplate/blob/main/LICENSE"><img src="https://img.shields.io/github/license/darkguy10/BotClient?style=for-the-badge&labelColor=302D41&color=C9CBFF"/></a>

This repository is released under the MIT license, which grants the following permissions:

- Commercial use
- Distribution
- Modification
- Private use

For more convoluted language, see the [LICENSE](https://github.com/darkguy10/NextJS-Electron-Boilerplate/blob/main/LICENSE.md).
