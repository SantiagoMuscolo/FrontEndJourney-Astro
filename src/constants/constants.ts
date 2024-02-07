import React from '../assets/svgs/React.svg';
import Chart from '../assets/svgs/Chart.svg';
import Responsive from '../assets/svgs/Responsive.svg';
import World from '../assets/svgs/World.svg';
import Html from '../assets/svgs/Html.svg'
import Css from '../assets/svgs/Css.svg'
import Javascript from '../assets/svgs/Javascript.svg'
import Tailwind from '../assets/svgs/Tailwind.svg'
import Bootstrap from '../assets/svgs/Bootstrap.svg'
import Bulma from '../assets/svgs/Bulma.svg'
import ReactBlue from '../assets/svgs/ReactBlue.svg'
import Angular from '../assets/svgs/Angular.svg'
import Astro from '../assets/svgs/Astro.svg'
import Redux from '../assets/svgs/Redux.svg'
import Vue from '../assets/svgs/Vue.svg'
import Mobx from '../assets/svgs/Mobx.svg'
import Npm from '../assets/svgs/Npm.svg'
import Pnpm from '../assets/svgs/Pnpm.svg'
import Yarn from '../assets/svgs/Yarn.svg'
import Git from '../assets/svgs/Git.svg'
import Jest from '../assets/svgs/Jest.svg'
import Vitest from '../assets/svgs/Vitest.svg'
import Github from '../assets/svgs/Github.svg'
import Netlify from '../assets/svgs/Netlify.svg'
import Gitlab from '../assets/svgs/Gitlab.svg'

export const navbarItems = [
    {
        id:1,
        name: "about us",
        href: "#about-us"
    },
    {
        id: 2,
        name: "tips",
        href: "#tips"
    },
    {
        id: 3,
        name: "Road Map",
        href: "#road-map"
    }
]

export const cards = [
    {
        id:1,
        name: "Learn Modern Frameworks",
        text: "Stay up to date with the most popular frameworks and libraries, such as React, Vue.js, and Angular. These tools are essential for modern front-end development",
        svg: React.src
    },
    {
        id:2,
        name: "Responsive Design",
        text: "Learn how to create designs that work on a variety of devices and screen sizes. The use of media queries and flexbox or grid in CSS is essential",
        svg: Chart.src
    },
    {
        id:3,
        name: "Web Accessibility",
        text: "Make sure your sites are accessible to all users, including those with disabilities. Understand the WCAG guidelines and how to implement them.",
        svg: Responsive.src
    },
    {
        id:4,
        name: "Performance Optimization",
        text: "Learn techniques to make your websites load faster and run more efficiently, such as file minification, image optimization, and lazy loading.",
        svg: World.src
    }
]

export const timeLine = [
    {
        id: 1,
        title: "Fundamentals",
        text: "Having a good, solid and secure foundation is a great start and something that I consider extremely essential to continue learning to program front-end, therefore I would advise you to start with html, css and javascript",
        image1: Html.src,
        image2: Css.src,
        image3: Javascript.src
    },
    {
        id: 2,
        title: "CSS Frameworks",
        text: "They facilitate the web design process by providing a robust set of reusable classes and components. This not only speeds up development, but also helps maintain consistency in design across different projects.",
        image1: Tailwind.src,
        image2: Bootstrap.src,
        image3: Bulma.src
    },
    {
        id: 3,
        title: "JS Frameworks",
        text: "These frameworks provide a coherent structure and architecture for your projects, resulting in more organized and maintainable code. This is especially valuable in large, complex projects, where code management can be a challenge. JavaScript frameworks are designed to improve development efficiency.",
        image1: ReactBlue.src,
        image2: Angular.src,
        image3: Astro.src
    },
    {
        id: 4,
        title: "State Management",
        text: "Centralized state management provides a consistent and predictable way to store and manage application state across multiple components or layers. This results in a more organized and easier to follow data flow, which is essential for maintenance and debugging.",
        image1: Redux.src,
        image2: Vue.src,
        image3: Mobx.src
    },
    {
        id: 5,
        title: "Package Manager",
        text: "The use of a package manager in software development is essential for efficient and organized management of a project's dependencies. It allows developers to access a vast repository of packages, simplifying the process of incorporating and updating libraries and tools.",
        image1: Npm.src,
        image2: Pnpm.src,
        image3: Yarn.src
    },
    {
        id: 6,
        title: "Git Control System",
        text: "Git allows developers to track and manage changes to source code, facilitating effective collaboration on projects large and small. It provides a detailed history of modifications, which is crucial for debugging and code review.",
        image1: Git.src
    },
    {
        id: 7,
        title: "Testing",
        text: "Testing is a crucial aspect of software development, ensuring that each individual part of an application works as expected. By performing rigorous testing on components, developers can identify and fix errors early, improving software quality and reliability.",
        image1: Jest.src,
        image2: Vitest.src
    },
    {
        id: 8,
        title: "Deployment",
        text: "Deploying applications on platforms is a critical step in the software development life cycle. These platforms not only facilitate source code management and storage, but also provide powerful tools for deployment automation.",
        image1: Github.src,
        image2: Netlify.src,
        image3: Gitlab.src
    }
]