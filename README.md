<!-- Credit to: https://github.com/othneildrew/Best-README-Template -->
A Wrapper NPM module to abstract os-specific dependencies on the [NodeJS Chilkat libraries][chilkat] (`@chilkat/ck-node24*`).

<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT][license-shield]][license-url]


<div align="center">

  <h3 align="center">ck-node24-wrapper</h3>

  <p align="center">
    This is a wrapper NPM module to abstract os-specific dependencies on the <a href="https://www.chilkatsoft.com/nodejs.asp">NodeJS Chilkat libraries </a> (@chilkat/ck-node24-*).
  </p>

  <p align="left">
    <strong>NOTE:</strong> Chilkat libraries are not open source.
    Some are free to use, while others require a paid license. See the <a href="https://www.chilkatsoft.com/">Chilkat website</a> for details.
  </p>
  <p align="left">
    <strong>Freeware classes include:</strong> Cert, CertChain, CertStore, Csv, Pfx, PrivateKey, PublicKey, Spider, TrustedRoots, Upload, Xml, JsonObject, ...
    <br/>
    <strong>Commercial classes include:</strong> Ssh, SFtp, Imap, Ftp2, Socket, Rest, OAuth2, Http, ...
    <br />
  </p>
  <p align="center">
    <br />
    <a href="https://github.com/cunneen/ck-node24-wrapper"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/cunneen/ck-node24-wrapper/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/cunneen/ck-node24-wrapper/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <a href="#issues-when-updating-other-packages">Issues When Updating Other Packages</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

This is a node module to provide an os-independent wrapper for the os-specific [@chilkat/ck-node24-* modules][chilkat].

So you can have this:

* **With Wrapper:**

  ```js
  import chilkat from "ck-node24-wrapper";
  ```

Instead of this:

* **Without Wrapper:**

  ```js
  const os = require('os');
  let chilkat;
  if (os.platform() == 'win32') {  
      if (os.arch() == 'ia32') {
          chilkat = require('@chilkat/ck-node11-win-ia32');
      } else {
          chilkat = require('@chilkat/ck-node11-win64'); 
      }
  } else if (os.platform() == 'linux') {
      if (os.arch() == 'arm') {
          chilkat = require('@chilkat/ck-node11-arm');
      } else if (os.arch() == 'x86') {
          chilkat = require('@chilkat/ck-node11-linux32');
      } else {
          chilkat = require('@chilkat/ck-node11-linux64');
      }
  } else if (os.platform() == 'darwin') {
      chilkat = require('@chilkat/ck-node11-macosx');
  }
  ```

It requires nodejs 24 or later.

**NOTE** : This is an ESM-only module.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Typescript][Typescript]][Typescript-url]
* [![Mocha][Mocha]][Mocha-url]
* [![NodeJS][NodeJS]][NodeJS-url]
* [![NPM][NPM]][NPM-url]
* [![GitHub][GitHub]][GitHub-url]
* [![VSCode][VSCode]][VSCode-url]
* [![Shields.io][Shields.io]][Shields.io-URL]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Install this module into your project directory:

```sh
npm install ck-node24-wrapper --save
```

Add `ck-install` as a `"prepare"` script in your `package.json`:

```json
"scripts": {
  "prepare": "ck-install"
}
```

Then import the module in your code:

```js
import chilkat from "ck-node24-wrapper";
```

and use the `chilkat` object as you would normally; e.g.:

```js
import chilkat from "ck-node24-wrapper";

const cert = new chilkat.Cert();
// Load any type of certificate (.cer, .p7b, .pem, etc.) by calling LoadFromFile.
const success = cert.LoadFromFile("qa_data/certs/sample_cert_a.cer");
if (success) {
  console.log("SubjectDN:" + cert.SubjectDN);

  console.log("Common Name:" + cert.SubjectCN);
  console.log("Issuer Common Name:" + cert.IssuerCN);

  console.log("Serial Number:" + cert.SerialNumber);

  console.log(cert.ExportCertPem());
} else {
  console.error("failed to load cert");
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Issues When Updating Other Packages

When you use NPM (and probably yarn, pnpm etc) to add or update your dependencies, the package manager unfortunately will automatically remove your os-dependent installation of the chilkat library.

If that has happened, then when you run your program you'll see an error like this:

```
Error: Cannot find module '@chilkat/ck-node24-mac-universal'
```

This happens because this wrapper installs the appropriate library using the `--no-save` flag, which means that the package manager (NPM) will not add the library to your `package.json` file. Then, when the package manager performs another update, it notices the installed library that isn't in the `package.json` file, and removes it.

This wrapper avoids updating your `package.json` file, and does not make the assumption that your deployment OS environment is the same as your development OS environment (or even that you are using NPM to manage your other packages).

For example, you might be:

* Authoring a NodeJS package that uses this wrapper. In that case, you want the consumers of your package to download the appropriate chilkat library for *their* environment. So
  you don't want the os-specific chilkat library in the `dependencies` section of your `package.json`.
* Bundling a server application using webpack, parcel, tar, zip or some other packaging tool. The target environment might be different from your development environment, so
  we want the chilkat installer to run (via `npm ci`) in the target environment. For example, if your development machine is MacOS and your target machine is Linux, we
  don't want to include the @chilkat/ck-node24-mac-universal library and omit the appropriate linux one.

#### Solutions

##### Solution 1: Manually use the `prepare` script

If you've added a `"prepare"` script as per the [Getting Started](#getting-started) section, then you can rerun the `ck-install` script manually:

```sh
npm run prepare
```

##### Solution 2: Use the `--save-optional` flag

You can explicitly add the os-specific dependency for use on your own machine via the `--save-optional` flag:

```sh
npm install @chilkat/ck-node24-mac-universal --save-optional
```

That will add it to the `optionalDependencies` section of your `package.json` file, which will prevent the package manager from removing it. This will allow NPM to proceed if installation fails. You should note, however, that consumers of your package will be attempting to install that os-specific chilkat library without necessarily using it.

See the [optionalDependencies section](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#optionaldependencies) of the [NPM website][NPM-URL] for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/cunneen/ck-node24-wrapper/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/cunneen/ck-node24-wrapper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=cunneen/ck-node24-wrapper" alt="contrib.rocks image" />
</a>


<!-- LICENSE -->
## License

Distributed under the MIT. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/cunneen/ck-node24-wrapper](https://github.com/cunneen/ck-node24-wrapper)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Chilkat][chilkat]
* [Best Readme Template][bestreadme]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[bestreadme]: https://github.com/othneildrew/Best-README-Template
[chilkat]: https://www.chilkatsoft.com/nodejs.asp
[contributors-shield]: https://img.shields.io/github/contributors/cunneen/ck-node24-wrapper.svg?style=for-the-badge
[contributors-url]: https://github.com/cunneen/ck-node24-wrapper/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/cunneen/ck-node24-wrapper.svg?style=for-the-badge
[forks-url]: https://github.com/cunneen/ck-node24-wrapper/network/members
[stars-shield]: https://img.shields.io/github/stars/cunneen/ck-node24-wrapper.svg?style=for-the-badge
[stars-url]: https://github.com/cunneen/ck-node24-wrapper/stargazers
[issues-shield]: https://img.shields.io/github/issues/cunneen/ck-node24-wrapper.svg?style=for-the-badge
[issues-url]: https://github.com/cunneen/ck-node24-wrapper/issues
[license-shield]: https://img.shields.io/github/license/cunneen/ck-node24-wrapper.svg?style=for-the-badge
[license-url]: https://github.com/cunneen/ck-node24-wrapper/blob/master/LICENSE.txt
<!-- shields from https://github.com/inttter/md-badges -->
[GitHub]: https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white
[GitHub-URL]: https://github.com
[Mocha]: https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=fff
[Mocha-URL]: https://mochajs.org
[NodeJS]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white
[NodeJS-URL]: https://nodejs.org/
[NPM]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff
[NPM-URL]: https://www.npmjs.com
[Shields.io]: https://img.shields.io/badge/shields-io-97C900?logo=shieldsdotio&logoColor=97C900&labelColor=555
[Shields.io-URL]: https://shields.io/
[Typescript]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[Typescript-URL]: https://typescriptlang.org
[VSCode-URL]: https://code.visualstudio.com/
[VSCode]: https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white