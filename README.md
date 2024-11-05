# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot
#### Desktop View

![Screenshot 2024-11-05 at 12 03 07 AM](https://github.com/user-attachments/assets/8e6776de-79c2-4f15-afe2-07332e873313)

#### Tablet View

![Screenshot 2024-11-05 at 12 00 48 AM](https://github.com/user-attachments/assets/90c3a427-4e4e-4a2a-952a-0a9435defb12)

#### Mobile View

![Screenshot 2024-11-04 at 11 58 10 PM](https://github.com/user-attachments/assets/4c0bd977-757f-48e9-bad6-f19d9dc7757f)


### Links

- [Solution URL](https://github.com/heejung-hong/space-tourism-website)
- [Live Site URL](https://heejung-hong.github.io/space-tourism-website/)

## My process


### Built with

- HTML
- SCSS
- JavaScript

### What I learned

This is my first time working with Sass and I'm not sure if this was the right CSS framework because there were many differences in styling.

After watching a couple of tutorials on creating functions for responsive websites, I was able to write a prompt in the Google browser, and the browser AI generated the code below.  I was pleasantly surprised to see the code work and I didn't have to spend additional time trying to figure out how to get another example code to work.

To see how you can add code snippets, see below:

```js
  function responsiveImage() {
    const imageElement = document.querySelector("#techImage");

    if (window.matchMedia("(max-width: 1440px)").matches) {
      imageElement.src = data.technology[0].images.landscape;
    } else {
      imageElement.src = data.technology[0].images.portrait;
    }
  }
  // Call the function initially to set the image based on the current screen size
  responsiveImage();
  // Add an event listener to update the image when the screen size changes
  window
    .matchMedia("(max-width: 1440px)")
    .addEventListener("change", responsiveImage);
```

### Useful resources

- [YouTube SCSS Tutorial](https://www.youtube.com/watch?v=_a5j7KoflTs) - This video tutorial showed me the basics of implementing Sass in an actual project. 

- [Sass Guide](https://sass-lang.com/guide/) - This is the official Sass website where the guide shows SCSS examples alongside the compiled CSS.

## Author

- Website - [Portfolio](https://heejunghong.com)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)


