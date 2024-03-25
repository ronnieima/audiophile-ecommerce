<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

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
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ronnieima/audiophile-ecommerce">
    <img src="https://raw.githubusercontent.com/ronnieima/audiophile-ecommerce/73a32bfb00ee56c2a12aef4dc31eeef0422320a9/public/assets/shared/desktop/logo.svg" alt="Logo" width="full" height="80">
  </a>

<h3 align="center">[Full Stack] Audiophile E-Commerce Website</h3>

  <p align="center">
    A solution for the <a href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx">"Audiophile e-commerce website"</a> Frontend Mentor challenge.  
    <br />
    <a href="https://www.frontendmentor.io/solutions/audiophile-ecommerce-using-nextjs-neWEk8DaHr"><strong>View the challenge solution page »</strong></a>
    <br />
    <br />
    <a href="https://audiophile-ecommerce-peach.vercel.app/"><strong>View Demo</strong></a>
    ·
    <a href="https://github.com/ronnieima/audiophile-ecommerce/issues">Report Bug</a>
    ·
    <a href="https://github.com/ronnieima/audiophile-ecommerce/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Audiophile Screen Shot][product-screenshot]](https://audiophile-ecommerce-peach.vercel.app/)

This full-stack web application is a challenge from <a href="https://www.frontendmentor.io/">Frontend Mentor</a>, a site that provides professional designs that allows developers to practice building websites in a realistic workflow. In this project, I've implemented an immersive ecommerce platform tailored specifically for audiophiles.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![PostgreSQL][PostgreSQL]][Postgres-url] using `NeonDB`
- [![TailwindCSS][TailwindCSS]][Tailwind-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Drizzle][Drizzle]][Drizzle-url]
- `react-hook-form` & `zod` for form handling
- `shadcn-ui` for highly-customizable UI components

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ronnieima/audiophile-ecommerce.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Neon database URL into .env.local

   ```plain
    NEXTAUTH_URL=http://localhost:3000

    # A random string that is used to hash tokens, sign/encrypt cookies and generate cryptographic keys.
    # You can quickly create a good value on the command line via this openssl command. `openssl rand -base64 32`
    NEXTAUTH_SECRET=123

    # Neon database URL
    DATABASE_URL=
   ```

4. Start the app
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Features

### User Credential Authentication

![Sign in][signin]

### Cart Functionality

![Add to cart][addToCart]
![Cart][cart]

### Checkout Feature

![Checkout][checkout]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Persist orders
- [ ] Different auth providers (Google, GitHub, etc.)

See the [open issues](https://github.com/ronnieima/audiophile-ecommerce/issues) for a full list of proposed features (and known issues).

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

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ronnie Kaito Imagawa - [@imagawaDev](https://twitter.com/imagawaDev) - [ronniekaito@imagawa.dev](mailto:ronniekaito@imagawa.dev)

Project Link: [https://github.com/ronnieima/audiophile-ecommerce](https://github.com/ronnieima/audiophile-ecommerce)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Lessons Learned

### The HTML Picture Element

```html
<picture>
  <source />
  <source />
  <img />
</picture>
```

### User Credential Authentication

Implementing user credential authentication provided valuable insights into security practices. Although the approach may not offer the highest level of security, it serves as an essential learning experience. Employing libraries like `bcrypt` for password hashing enhances data protection by securely storing user credentials in the database. It highlights the importance of safeguarding sensitive information and implementing encryption techniques to mitigate potential security threats.

### Devising Database Schemas for the Cart

Designing effective database schemas for managing shopping carts involves careful consideration of various factors. It requires defining clear relationships between entities such as users, products, and orders. By structuring the database schema appropriately, it becomes easier to manage cart functionality, including adding, removing, and updating items. Additionally, optimizing queries and ensuring data consistency are crucial aspects of cart schema design to deliver seamless shopping experiences for users.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ronnieima/audiophile-ecommerce.svg?style=for-the-badge
[contributors-url]: https://github.com/ronnieima/audiophile-ecommerce/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ronnieima/audiophile-ecommerce.svg?style=for-the-badge
[forks-url]: https://github.com/ronnieima/audiophile-ecommerce/network/members
[stars-shield]: https://img.shields.io/github/stars/ronnieima/audiophile-ecommerce.svg?style=for-the-badge
[stars-url]: https://github.com/ronnieima/audiophile-ecommerce/stargazers
[issues-shield]: https://img.shields.io/github/issues/ronnieima/audiophile-ecommerce.svg?style=for-the-badge
[issues-url]: https://github.com/ronnieima/audiophile-ecommerce/issues
[license-shield]: https://img.shields.io/github/license/ronnieima/audiophile-ecommerce.svg?style=for-the-badge
[license-url]: https://github.com/ronnieima/audiophile-ecommerce/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ronnie-kaito-imagawa
[product-screenshot]: /public/assets/github/audiophile-preview.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Drizzle]: https://img.shields.io/badge/drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black
[Drizzle-url]: https://orm.drizzle.team/

<!-- IMAGES -->

[signin]: https://raw.githubusercontent.com/ronnieima/audiophile-ecommerce/main/public/assets/github/audiophile-signin.png
[addToCart]: https://raw.githubusercontent.com/ronnieima/audiophile-ecommerce/main/public/assets/github/audiophile-addtocart.png
[cart]: https://raw.githubusercontent.com/ronnieima/audiophile-ecommerce/main/public/assets/github/audiophile-cart.png
[checkout]: https://raw.githubusercontent.com/ronnieima/audiophile-ecommerce/main/public/assets/github/audiophile-checkout.png
