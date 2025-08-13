<!-- Credit to: https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT][license-shield]][license-url]



<div align="center">

  <h3 align="center">ck-node24-wrapper</h3>

  <p align="center">
    A Wrapper NPM module to abstract os-specific dependencies on @chilkat/ck-node24-* .
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

It requires nodejs 24 or later.

**NOTE** : This is an ESM-only module.

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
