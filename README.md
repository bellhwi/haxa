# Haxa

> eCommerce project built with React & Firebase for my entrepreneur client.

<p align="center"><img src="public/img/github-cover.png" width="75%"></p>

<p align="center">📍 Admin page is accessible by clicking the copyright text at footer! (admin@example.com / 123456)</p>

## Overview

- **How did I build it?** Haxa is the eCommerce project for my entrepreneur client. I closely communicated with my client to meet his visual and functional requirements. After discussion, I designed and developed an entire website and deployed it.

- **What was the most challenging part?** I used Firebase database and storage for this project. I had to write code logics to fetch the products data. That code logic was being called every time I opened the products page. I found out that this number of fetching data causes quite a bit of loading delay. I had to solve this problem to make my website run faster. [See more on Google Docs](https://docs.google.com/document/d/1cCmYlvT7zN1VVJ4X7mH-5sxntNe4PvYZ5K1fgKZWyMg/edit).

- **How did I solve it?** I used Redux and the `useEffect` hook in React to optimize data fetching logic. It stores data in a state after the component is rendered initially. I set the last product update time as a dependency to fetch data only when there is a change made. In this way, I could improve the performance of my website.

- **What was the most fun part?** The most fun part was creating an admin page. It was my very first time implementing this feature with Firebase. I had to read the official document on Google Firebase to come up with code logics. I was surprised to see how the Firebase handles the data and makes it easy to apply backend to my web app. I enjoyed learning this new technology.

- **What did I learn?** I learned how to build a full stack web app with the Firebase. It was significant achievement for me since it was my first website that is connected to the database. I learned how to integrate a PayPal payment with my app, as well. It was way more simple that I thought. It taught me that I shouldn't assume implementing new feature in the project is complicated. I learned that I should always be opened to face a new challenge and go over my comfort zone.

- **What will I do differently next time?** I want to create a wireframe before starting to develop the website next time. At the early stage of the project, I didn't want to spend too much time coming up with design. I dived into the project with a very simple and vague design decision. I had no detailed visual blueprint of the completed project at all. It caused a lot of debating in terms of design during the development process. I had to spend way more time than I expected for this part. I overlooked the decision making of website design could be very time consuming overall the project. I'll definitely use design tools to create a detailed wireframe of the project next time.

## Technical Decision

- I used ReactJS on purpose for one of the features in the project. My client required a filter that showed the products without page reloading.
- I used Redux to optimize the data fetching logic. It lets me manage global states in an easier and more intuitive way as well.
- My goal is to become a full-stack developer ultimately. However I want to focus on the frontend for now. That's why I decided to use Firebase rather than create a custom server. I have basic backend knowledge in NodeJS, Express, MongoDB, and MySQL.

## Features

- 🧑🏻‍💼 Admin product management: [Example code](https://github.com/bellhwi/haxa/blob/main/src/pages/Edit.jsx#L86-L139)
- 🧑🏻‍💻 User authentication: [Example code](https://github.com/bellhwi/haxa/blob/main/src/pages/Login.jsx#L61-L86)
- 🎯 Filter / sort product: [Example code](https://github.com/bellhwi/haxa/blob/main/src/components/Products.jsx#L25-L73)
- 💳 PayPal integration
- 🔍 Search product
- ✨ Live inventory
- 📱 Responsive design

## Tech

<p align="left">
    <img
      src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
      alt="html5"
    />
    <img
      src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
      alt="css3"
    />
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="sass">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react">
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux">
    <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="firebase">
</p>
