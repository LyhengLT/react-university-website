# BELTEI International University Website

A modern React university website for BELTEI International University, built with Create React App, React Router, Bootstrap 5, React Bootstrap, custom CSS, scroll animations, count-up metrics, and dynamic date logic.

This project started from a university website tutorial foundation, but it has been heavily customized into a richer, more polished university landing experience. It now includes a modern startup-style home hero, dynamic academic intake dates, live Phnom Penh date/time display, animated statistic counters, animated reveal sections, responsive page layouts, course cards, blog cards, FAQ content, and a multi-page navigation structure.

![React University Website Preview](React%20JS%20University%20Website%20Img.jpg)

## Table of Contents

- [Project Summary](#project-summary)
- [Live Experience](#live-experience)
- [Main Features](#main-features)
- [Tech Stack](#tech-stack)
- [Pages](#pages)
- [Dynamic Date System](#dynamic-date-system)
- [Animation System](#animation-system)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Notes](#environment-notes)
- [Styling Guide](#styling-guide)
- [Images and Assets](#images-and-assets)
- [Routing](#routing)
- [Components](#components)
- [Hooks](#hooks)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Testing and Quality Checks](#testing-and-quality-checks)
- [Known Notes](#known-notes)
- [Original Tutorial Credit](#original-tutorial-credit)
- [Current Project Identity](#current-project-identity)
- [Maintenance Checklist](#maintenance-checklist)
- [Quick Commands](#quick-commands)
- [License](#license)
- [Final Note](#final-note)

## Project Summary

This is a responsive university marketing website built in React. It presents BELTEI International University as a modern, international, student-focused institution. The site is structured as a multi-page single-page application with client-side routing.

The design direction is clean, polished, and modern:

- Dark glass-style fixed navigation
- Hero images with layered overlays
- Large editorial-style headline typography
- Animated live date chip
- Dynamic current-year and academic-intake logic
- Scroll-triggered reveal animations
- Count-up statistics
- Card-based course, blog, team, and location sections
- Mobile-first responsive behavior
- Bootstrap layout helpers combined with custom CSS

The app is not connected to a backend. All content is currently stored in React component arrays and local image assets.

## Live Experience

When running locally, the app is available at:

```bash
http://localhost:3000
```

The site behaves like a full university website with separate routes for:

- Home
- Degrees
- About Us
- Blog
- Get In Touch
- Not Found fallback

## Main Features

### Modern Home Page

The home page is the strongest visual part of the project. It includes:

- Full-width hero section
- BELTEI brand messaging
- Live Phnom Penh date/time chip
- Dynamic founding year label
- Dynamic academic intake year
- Animated hero ring decoration
- Animated CTA buttons
- Responsive highlight strip
- Count-up statistics
- Featured university benefits
- Intake call-to-action section
- FAQ section
- Featured blog cards

### Dynamic Date Content

The app no longer relies on scattered hard-coded year values for the main date-driven content. Shared date logic lives in:

```txt
src/utils/siteDates.js
```

This power:

- Current footer year
- Years of excellence
- Academic intake year
- Blog year labels
- Graduation ceremony year
- Current milestone year
- Live Phnom Penh date/time chip

### Scroll Reveal Animations

Sections use reveal classes such as:

```txt
reveal
reveal-up
reveal-left
reveal-right
reveal-scale
```

The custom `useScrollReveal` hook observes those elements and animates them when they enter the viewport.

### Count-Up Statistics

The home page stats animate from zero when they become visible. This is powered by:

```txt
src/hooks/useCountUp.js
```

The current stats include:

- Students Enrolled
- Programs Offered
- Years of Excellence
- Graduate Employment

### Multi-Page App Structure

The app uses `react-router-dom` and renders different page components from `src/pages`.

### Bootstrap + Custom CSS

Bootstrap handles grid layout, spacing utilities, navbar behavior, buttons, cards, and accordions. Custom CSS handles the real visual personality of the site.

## Tech Stack

### Core

- React 18
- React DOM
- React Router DOM
- Create React App

### UI and Styling

- Bootstrap 5
- React Bootstrap
- Custom CSS
- Montserrat from Google Fonts

### Testing

- React Testing Library
- Jest DOM
- User Event

### Build Tooling

- React Scripts
- Web Vitals

## Pages

### Home

File:

```txt
src/pages/Home/Home.jsx
src/pages/Home/Home.css
```

The home page is the main landing page. It contains:

- Modern hero section
- Live date/time display
- CTA buttons
- Highlight bar
- Animated statistics
- Why choose BIU section
- Academic intake section
- FAQ accordion
- Featured blog preview

Important content arrays:

- `blogs`
- `getStats`
- `heroHighlights`

Important local component:

- `LiveDateBadge`

### Courses

File:

```txt
src/pages/Courses/Courses.jsx
src/pages/Courses/Courses.css
```

The courses page lists academic programs and degree areas. It uses local image assets for each program category.

Common course categories include:

- Business
- Computer Science
- Law
- Education
- Healthcare
- Arts
- Music
- Sports

### About

File:

```txt
src/pages/About/About.jsx
src/pages/About/About.css
```

The about page explains the university story and includes:

- About hero
- Study section
- Dynamic milestone timeline
- Why choose section
- Leadership team cards

The milestone timeline uses shared date logic, so the current year milestone updates automatically.

### Blog

File:

```txt
src/pages/Blog/Blog.jsx
src/pages/Blog/Blog.css
```

The blog page presents university news cards. Blog entries are currently stored in a local array generated by `getBlogs`.

The page includes dynamic year content:

- Scholarship intake year
- Current-year tags
- Previous-year graduation ceremony

### Contact

File:

```txt
src/pages/Contact/Contact.jsx
src/pages/Contact/Contact.css
```

The contact page provides the university contact experience. It includes location information and communication details.

### Not Found

File:

```txt
src/pages/NotFound/NotFound.jsx
```

This route catches unknown paths and gives users a fallback page instead of a blank screen.

## Dynamic Date System

The dynamic date system is centralized in:

```txt
src/utils/siteDates.js
```

It exports:

```js
export const FOUNDING_YEAR = 1992;
export const CAMBODIA_TIME_ZONE = 'Asia/Phnom_Penh';
```

And two helper functions:

```js
getSiteDateInfo(now = new Date())
formatCambodiaDateTime(date = new Date())
```

### getSiteDateInfo

This function returns a date object used throughout the app:

```js
{
  currentYear,
  intakeYear,
  previousYear,
  yearsOfExcellence,
}
```

### How Intake Year Works

The intake year uses Phnom Penh time. If the current month is September or later, the site rolls the intake year forward.

For example:

- May 2026 displays `2026 Academic Intake Is Open`
- September 2026 displays `2027 Academic Intake Is Open`

This prevents the intake copy from going stale every year.

### formatCambodiaDateTime

This function formats a live date/time string for the home page hero:

```txt
Tue, May 26, 2026, 03:24 PM
```

The `LiveDateBadge` component updates once per minute.

## Animation System

This project has several animation layers.

### Page Fade

All major pages use a page fade-in animation defined in:

```txt
src/App.css
```

### Hero Text Stagger

Hero content uses stagger classes:

```txt
hero-text-1
hero-text-2
hero-text-3
hero-text-4
```

These make hero content slide upward in sequence when the page loads.

### Scroll Reveal

Reveal classes are used throughout the site:

```txt
reveal reveal-up
reveal reveal-left
reveal reveal-right
reveal reveal-scale
```

The hook:

```txt
src/hooks/useScrollReveal.js
```

adds the `revealed` class once an element is visible.

### Count-Up

The stat counters use:

```txt
src/hooks/useCountUp.js
```

This starts animation when the stat block enters the viewport.

### Home Hero Motion

The home page includes:

- Pulsing live-dot animation
- Sweeping highlight on the date chip
- Drifting circular ring decoration
- Button shimmer
- Highlight-dot pulse

### Card Motion

Cards use hover transforms and shadows:

- Blog cards lift and reveal gradient strips
- Milestone cards glow subtly
- Team cards lift and scale
- Home cards use image zoom effects

## Project Structure

```txt
react-university-website/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ChooseSection/
│   │   │   └── ChooseSection.jsx
│   │   └── FaqAccordion/
│   │       ├── FaqAccordion.css
│   │       └── FaqAccordion.jsx
│   ├── hooks/
│   │   ├── useCountUp.js
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── About/
│   │   ├── Blog/
│   │   ├── Contact/
│   │   ├── Courses/
│   │   ├── Home/
│   │   └── NotFound/
│   ├── utils/
│   │   ├── images/
│   │   └── siteDates.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

## Getting Started

### Requirements

Install Node.js and npm first.

Recommended:

```txt
Node.js 18+
npm 9+
```

The app may work on other versions, but Node 18 or newer is a comfortable baseline for React Scripts projects.

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

Then open:

```txt
http://localhost:3000
```

### Build Production Files

```bash
npm run build
```

The optimized production output is generated in:

```txt
build/
```

## Available Scripts

### npm start

Runs the app in development mode.

```bash
npm start
```

Use this while editing pages, CSS, components, and assets.

### npm run build

Creates an optimized production build.

```bash
npm run build
```

This is the main command to run before deployment.

### npm test

Starts the test runner.

```bash
npm test
```

The default Create React App test setup is present.

### npm run eject

Ejects the Create React App configuration.

```bash
npm run eject
```

This is permanent. Do not run it unless you truly want to take over the build configuration manually.

## Environment Notes

This project does not currently require environment variables.

There is no backend API key, CMS token, database URL, or authentication secret required to run the site.

If environment variables are added later, create a local `.env` file and avoid committing secrets.

Example:

```bash
REACT_APP_API_URL=https://example.com
```

Create React App exposes only variables prefixed with:

```txt
REACT_APP_
```

## Styling Guide

Global styles live in:

```txt
src/index.css
src/App.css
```

Page-specific styles live beside each page:

```txt
src/pages/Home/Home.css
src/pages/About/About.css
src/pages/Blog/Blog.css
src/pages/Courses/Courses.css
src/pages/Contact/Contact.css
```

### CSS Variables

The main theme tokens are defined in `src/index.css`:

```css
:root {
  --navy: #0d1b3e;
  --navy-mid: #162554;
  --navy-light: #1e3a8a;
  --crimson: #c1272d;
  --crimson-light: #e53935;
  --gold: #f5a623;
  --light-bg: #f0f4f8;
  --text-dark: #1a2332;
  --text-muted: #64748b;
}
```

Use these variables instead of scattering new colors everywhere.

### Design Direction

The site currently uses:

- Navy and white as the foundation
- Crimson for primary action buttons
- Gold for institutional accents
- Teal for modern live/dynamic highlights
- Soft shadows
- Glass-like panels
- Clean card edges

### Responsive Rules

The app uses Bootstrap breakpoints and custom media queries.

Important breakpoint used in many places:

```css
@media (max-width: 575.98px) {
  ...
}
```

This controls mobile-specific spacing, hero typography, reveal transforms, and highlight layouts.

## Images and Assets

Images are stored in:

```txt
src/utils/images/
```

Common asset groups:

- Header backgrounds
- Course images
- Blog images
- People/team images
- Location images
- Campus/section images

When adding a new image:

1. Put it in `src/utils/images/`
2. Import it in the component
3. Use a descriptive alt attribute
4. Make sure it is compressed enough for web usage

Example:

```js
import NewCampusImage from '../../utils/images/new-campus.jpg';
```

## Routing

Routes are defined in:

```txt
src/App.js
```

Current routes:

```jsx
<Route path='/' element={<Home />} />
<Route path='/courses' element={<Courses />} />
<Route path='/about' element={<About />} />
<Route path='/blog' element={<Blog />} />
<Route path='/contact' element={<Contact />} />
<Route path='*' element={<NotFound />} />
```

Navigation links use `Link` from `react-router-dom`.

## Components

### ChooseSection

File:

```txt
src/components/ChooseSection/ChooseSection.jsx
```

This reusable section highlights why students should choose BIU.

It currently contains:

- Trophy feature
- Happy students feature
- Three locations feature

The feature data is stored in a local `features` array.

### FaqAccordion

Files:

```txt
src/components/FaqAccordion/FaqAccordion.jsx
src/components/FaqAccordion/FaqAccordion.css
```

This component uses `Accordion` from React Bootstrap.

It includes FAQ content for:

- Programs
- Admissions
- Scholarships
- International recognition
- Exchange programs
- Tuition fees

## Hooks

### useCountUp

File:

```txt
src/hooks/useCountUp.js
```

Purpose:

- Counts from zero to a target number
- Starts only when the element becomes visible
- Uses `IntersectionObserver`
- Returns `[count, ref]`

Basic usage:

```js
const [count, ref] = useCountUp(15000, 1800);
```

### useScrollReveal

File:

```txt
src/hooks/useScrollReveal.js
```

Purpose:

- Finds elements with `.reveal`
- Watches them with `IntersectionObserver`
- Adds `.revealed` when visible
- Re-runs when the route changes

It is called from `App.js`:

```js
useScrollReveal(location.pathname);
```

## Deployment

This project can be deployed anywhere that serves static React builds.

### Vercel

The repository includes:

```txt
vercel.json
```

Typical Vercel flow:

1. Push the repo to GitHub
2. Import it into Vercel
3. Use the default React/Create React App settings
4. Build command: `npm run build`
5. Output directory: `build`

### Netlify

Use:

```txt
Build command: npm run build
Publish directory: build
```

### GitHub Pages

This project can be adapted for GitHub Pages, but you may need to set `homepage` in `package.json` and adjust routing behavior.

### Static Server Preview

After building:

```bash
npm run build
```

You can preview the build with a static server:

```bash
npx serve -s build
```

## Customization Guide

### Change University Name

Update branding in:

```txt
src/App.js
src/pages/Home/Home.jsx
public/index.html
```

Search for:

```txt
BELTEI
BIU
Beltei
```

### Change Founding Year

Update:

```txt
src/utils/siteDates.js
```

Change:

```js
export const FOUNDING_YEAR = 1992;
```

Everything connected to years of excellence will update automatically.

### Change Time Zone

Update:

```js
export const CAMBODIA_TIME_ZONE = 'Asia/Phnom_Penh';
```

Use a valid IANA time zone string.

Examples:

```txt
Asia/Phnom_Penh
Asia/Bangkok
Asia/Singapore
America/New_York
Europe/London
```

### Change Intake Rollover Month

In `getSiteDateInfo`, intake currently rolls forward in September:

```js
const intakeYear = currentMonth >= 9 ? currentYear + 1 : currentYear;
```

If your academic year changes earlier or later, adjust the number.

Examples:

```js
// August rollover
const intakeYear = currentMonth >= 8 ? currentYear + 1 : currentYear;

// October rollover
const intakeYear = currentMonth >= 10 ? currentYear + 1 : currentYear;
```

### Add a New Page

1. Create a folder in `src/pages/`
2. Add a JSX file and CSS file
3. Import the page in `src/App.js`
4. Add a new route
5. Add a navbar link if needed

Example:

```txt
src/pages/Admissions/Admissions.jsx
src/pages/Admissions/Admissions.css
```

Then in `App.js`:

```js
import Admissions from './pages/Admissions/Admissions';
```

And:

```jsx
<Route path='/admissions' element={<Admissions />} />
```

### Add a Course

Open:

```txt
src/pages/Courses/Courses.jsx
```

Find the course data array and add another object with:

- id
- image
- title
- description

### Add a Blog Post

Open:

```txt
src/pages/Blog/Blog.jsx
```

Add another object inside `getBlogs`.

If it needs a dynamic year, use one of:

```js
currentYear
intakeYear
previousYear
```

### Change Hero Copy

Open:

```txt
src/pages/Home/Home.jsx
```

Look for:

```jsx
<h1 className='fw-bold hero-text-2'>
```

Also update:

- Hero subtitle
- CTA labels
- Hero highlights
- Date chip label

### Change Colors

Start with:

```txt
src/index.css
```

Change CSS variables instead of editing every component one by one.

## Testing and Quality Checks

### Build Check

Before deploying or committing major changes:

```bash
npm run build
```

A successful build means the app compiled into production assets.

### Manual Browser Checks

Recommended pages to check:

```txt
/
/courses
/about
/blog
/contact
```

Recommended viewport sizes:

```txt
Desktop: 1280 x 720
Mobile: 390 x 844
```

Check for:

- No horizontal scrolling
- Navbar works
- Hero text is readable
- Buttons are clickable
- Cards do not overlap
- Dynamic dates render correctly
- Blog cards fit on mobile
- FAQ accordion opens
- Footer year is correct

### Automated Tests

The app includes the default CRA test setup.

Run:

```bash
npm test
```

The test coverage is minimal right now. If this project grows, useful test targets would include:

- `getSiteDateInfo`
- `formatCambodiaDateTime`
- Route rendering
- Navbar links
- Blog dynamic year content
- Home stat rendering

## Known Notes

### Static Data

The project currently uses static arrays inside components. This is simple and fast, but for a real production university site you may eventually want:

- CMS integration
- API-backed blog posts
- Admin editing
- Real admissions forms
- Search
- Multilingual support
- SEO metadata per page

### Images

The project uses local images. For production, make sure images are:

- Properly licensed
- Optimized
- Compressed
- Sized appropriately
- Given useful alt text

### Accessibility

The site has normal semantic structure and alt text in many places, but deeper accessibility work could include:

- More descriptive button labels
- Keyboard testing for all nav and accordion interactions
- Reduced-motion support
- Color contrast audit
- ARIA labels where needed

### SEO

This is a Create React App project, so metadata is mostly static from `public/index.html`. For stronger SEO, consider:

- React Helmet or similar metadata management
- Server-side rendering
- Static generation
- Better page-specific descriptions
- Open Graph images
- Sitemap generation

## Original Tutorial Credit

This project was originally based on a React university website tutorial and later customized into the current BELTEI International University clone.

Original tutorial links from the earlier README:

- [React JS University Website Project | Tutorial for Beginners - Part 1](https://youtu.be/v5GmKHncNB8?si=rkyGaFEDfJx_IFIr)
- [React JS Project University Website Tutorial With Bootstrap 5 From Scratch - Part 2](https://youtu.be/KnncqbOLwo4?si=H_0O4W_56iP5pKeJ)

Original demo from the tutorial:

- [https://ionut-cora.github.io/react-university-website/](https://ionut-cora.github.io/react-university-website/)

## Current Project Identity

This repository is now customized around:

```txt
BELTEI International University
```

It includes Cambodia-specific location, date, university, and academic-intake messaging.

## Maintenance Checklist

Use this checklist before pushing big updates:

- Run `npm run build`
- Check `git status --short`
- Confirm unrelated files are not staged
- Test home page desktop
- Test home page mobile
- Test at least one internal route
- Confirm dynamic years are correct
- Confirm footer year is correct
- Confirm no horizontal overflow on mobile
- Commit with a clear message
- Push to the correct branch

## Quick Commands

Install:

```bash
npm install
```

Start:

```bash
npm start
```

Build:

```bash
npm run build
```

Test:

```bash
npm test
```

Git status:

```bash
git status --short
```

## License

No explicit license file is currently included in this repository.

If this project will be shared publicly, add a license file such as MIT, Apache 2.0, or another license that matches how you want others to use the code.

## Final Note

This is a front-end university website with a polished modern visual layer. The most important pieces to understand before editing are:

```txt
src/App.js
src/pages/Home/Home.jsx
src/pages/Home/Home.css
src/utils/siteDates.js
src/hooks/useScrollReveal.js
src/hooks/useCountUp.js
```

If you understand those files, you understand the heart of the project.
