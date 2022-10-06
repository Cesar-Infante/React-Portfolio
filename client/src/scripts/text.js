import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import Typewriter from 'typewriter-effect/dist/core';
import GraphemeSplitter from "grapheme-splitter";


initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const typed = document.getElementById('typed');

const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

const typewriter = new Typewriter(typed, {
  loop: true,
  delay: 75,
  stringSplitter
});

typewriter
  .pauseFor(2500)
  .typeString('Software Engineer 👨🏽‍💻')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Ingeniero de Software 🇲🇽')
  .pauseFor(1000)
  .deleteAll()
  .typeString('From warehouse Team Lead to Software Engineer! 🧑🏽‍💼')
  .pauseFor(1000)
  .deleteAll()
  .typeString('<strong><span class="text-color-main">MERN</span> Stack Dev</strong>')
  .pauseFor(1000)
  .start();