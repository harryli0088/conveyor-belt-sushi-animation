//this file is used to generate the HTML icons
//copy and paste the console output of this file into index.html

const NUM_ICONS = 14
const ANIMATION_SECONDS = 30
const FILES = [
  "./salmon_nigiri.svg",
  "./tuna_nigiri.svg",
  "./tuna_rolls.svg",
  "./yellowtail_nigiri.svg",
  "./unagi_nigiri.svg",
  "./alfonsino_nigiri.svg",
  "./mackerel_nigiri.svg",
  "./tuna_rolls.svg",
  "./tofu.svg",
]

let i = 0
while(i < NUM_ICONS) {
  const file = FILES[i % FILES.length]

  //the first icon should a slight animation delay, otherwise it will render incorrectly on iOS (and many other platforms)
  const animationDelay = i===0 ? "0.01" : (i*ANIMATION_SECONDS/NUM_ICONS).toFixed(2)
  console.log(
    `<span class="icon" style="animation-delay: -${animationDelay}s;"><img src="${file}" alt="${file}" style="transform: rotate(${Math.round(Math.random() * 360)}deg);"></span>`
  )

  ++i
}
