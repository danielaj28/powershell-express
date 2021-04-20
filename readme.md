<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
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
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!--
<a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
-->

  <h3 align="center">Runner</h3>

  <p align="center">
    A quick way to setup an API for triggering Powershell Scripts remotely.
    <!--<br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>-->
    <br />
    ·
    <a href="https://github.com/danielaj28/runner/issues">Report Bug</a>
    ·
    <a href="https://github.com/danielaj28/runner/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

<!--[![Product Name Screen Shot][product-screenshot]](https://example.com)-->

As part of my journey on continuous integration, I had powershell scripts that:

1. Pull from a git repo
2. Updates dependencies
3. Create docker images and containers
4. Swaps out the live containers

I wanted to trigger these process from GitHub pushes or GitHub actions through webhooks. Thus this project was born. This project allows for multiple powershell scripts to be triggered.

### Built With

- [CORS](https://www.npmjs.com/package/cors)
- [ExpressJS](http://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

1. Clone the repo
2. Update the dependencies `npm i`
3. Create a config.json files from config.json.template
4. Add webhooks and file paths to the config
5. Run the project `npm start`

### Prerequisites

None

### Installation

Not Required

<!-- USAGE EXAMPLES -->

## Usage

Example of use cases:

- Server maintenance
- Deployment pipelines
- Automation

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/danielaj28/runner/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/#)

<!-- CONTACT -->

## Contact

Daniel Ward - [@Me](http://danieljaward.com/#Contact)

Project Link: [https://github.com/danielaj28/runner](https://github.com/danielaj28/runner)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Choose an Open Source License](https://choosealicense.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
