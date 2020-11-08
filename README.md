# Conveyor Belt Sushi Animation

I've been playing around with CSS and made this fun animation!

https://harryli0088.github.io/conveyor-belt-sushi-animation/

![Gif](/conveyor-belt-sushi-animation.gif)


## Animation Code

### CSS
```css
:root {
  --offset-x: -10vh;
  --offset-y: 100vh;
}

@keyframes conveyor-belt {
  0% {
    transform: rotate(0) translateX( var(--offset-x)) translateY(calc(-1 * var(--offset-y))); /* start at the top, offset to the left */
  }
  43% { /* these percentages are hard-coded to the offset values at the top of the file to make the rotation look like it's moving at the same speed */
    transform: rotate(0) translateX( var(--offset-x)) translateY(0); /* move to the bottom of the conveyer belt */
  }
  57% {
    transform: rotate(-180deg) translateX( var(--offset-x)) translateY(0); /* rotate */
  }
  100% {
    transform: rotate(-180deg) translateX( var(--offset-x)) translateY( var(--offset-y)); /* move back to the top, offset to the right */
  }
}
```

### SCSS
```scss
$offset-x: -10vh;
$offset-y: 100vh;

@keyframes conveyor-belt {
  0% {
    transform: rotate(0) translateX($offset-x) translateY(-$offset-y); //start at the top, offset to the left
  }
  43% { //these percentages are hard-coded to the offset values at the top of the file to make the rotation look like it's moving at the same speed
    transform: rotate(0) translateX($offset-x) translateY(0); //move to the bottom of the conveyer belt
  }
  57% {
    transform: rotate(-180deg) translateX($offset-x) translateY(0); //rotate
  }
  100% {
    transform: rotate(-180deg) translateX($offset-x) translateY($offset-y); //move back to the top, offset to the right
  }
}
```
