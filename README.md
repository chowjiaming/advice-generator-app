# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Get a new piece of advice on application load and each time they press the main advice button

### Screenshot

![](https://imgur.com/a/kwLDXk0)

### Links

- Solution URL: [https://github.com/chowjiaming/advice-generator-app-react](https://github.com/chowjiaming/advice-generator-app-react)
- Live Site URL: [https://advice-generator-frontend-mentor.netlify.app/](https://advice-generator-frontend-mentor.netlify.app/)

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was the first time I experimented with css keyframe animations. I did not know that they overrided css transform properties. I believe that it is better css practice to use transform to make smaller positioning tweeks with absolute position instead of calculating with em values.

But this was the only way I could position the button while it spun:

```css
.button {
  ...
  position: absolute;
  right: calc(50% - 1.125em);
  bottom: -1.125em;
  ...
}
```

### Continued development

Set a two second timer before the button can be pressed again to generate a new piece of advice. This is because the API only takes a request only once every one and a half seconds or so. I am sure that this piece of spaghetti timeout function can be cleaned up somehow.

```js
const handleClick = (e) => {
  console.log(`${e.type} at ${e.timeStamp}`);
  setAdviceCounter((prevState) => {
    return prevState + 1;
  });
  setRenderButton((prevState) => {
    return !prevState;
  });
  setTimeout(() => {
    setRenderButton((prevState) => {
      return !prevState;
    });
  }, 2000);
};
```

## Author

- Website - [Joseph Chow](https://josephchow.dev)
- Github - [@chowjiaming](https://github.com/chowjiaming)
- Frontend Mentor - [@chowjiaming](hhttps://www.frontendmentor.io/profile/chowjiaming)
- Twitter - [@couri3r](https://twitter.com/Couri3r)
