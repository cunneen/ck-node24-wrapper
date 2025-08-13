<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
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
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
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

* [Chilkat](https://www.chilkatsoft.com/nodejs.asp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
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
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
