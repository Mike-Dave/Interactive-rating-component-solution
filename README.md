# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Preview

![Interactive rating](images/desktop-design.jpg)

### Links

- [My Solution](https://www.frontendmentor.io/solutions/mobilefirst-workflow-usng-flexbox-KHbWSB7AG6)
- [Live Site URL](https://mike-dave.github.io/Interactive-rating-component-solution/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- DOM Manipulation
- Javascript

### What I learned

I was able to reinforce and practice my basic knowledge of javascript and the DOM.

Most importantly, I learnt how to use the _:focus pseudocode_ and how to use the _transition-property_ for animations and _transform-property_.

```css
.item:focus {
  background-color: var(--light-grey);
  color: var(--white);
}
```

```css
.btn {
  transition: all 1s;
}

.btn:hover {
  transform: translateY(-10px);
}
```

### Useful resources

- [Stackoverflow](https://stackoverflow.com/) - This is a great site for solutions to your problems, especially if you get stucked.

- [MDN DOCS](https://developer.mozilla.org/) - This is an amazing site to read about the documentations of html, css and javascript properties.
- [Google Fonts](https://fonts.google.com/) - For all kinds of font styles, this is highly recommended.
