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