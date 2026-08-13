import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

import "./FocusKinetic.css";
import bg1 from "../../assets/images/pexels-hyrlf-meng-317253942-18413963.jpg";
import bg2 from "../../assets/images/pexels-daniel-maforte-3709229-5544038.jpg";
import bg3 from "../../assets/images/pexels-abdellahbnz-38019371.jpg";
import filmGrain from "../../assets/film_grain.mp4";
import grainImg from "../../assets/grain.jpg";

gsap.registerPlugin(CustomEase, SplitText, ScrambleTextPlugin);

const backgroundTexts = [
  { text: "BE", style: { top: "5%", left: "8%" } },
  { text: "PRESENT", style: { top: "5%", left: "15%" } },
  { text: "LISTEN", style: { top: "5%", left: "28%" } },
  { text: "DEEPLY", style: { top: "5%", left: "42%" } },
  { text: "OBSERVE", style: { top: "5%", left: "55%" } },
  { text: "&", style: { top: "5%", left: "75%" } },
  { text: "FEEL", style: { top: "5%", left: "85%" } },

  { text: "MAKE", style: { top: "10%", left: "12%" } },
  { text: "BETTER", style: { top: "10%", left: "45%" } },
  { text: "DECISIONS", style: { top: "10%", right: "20%" } },

  { text: "THE", style: { top: "15%", left: "8%" } },
  { text: "CREATIVE", style: { top: "15%", left: "30%" } },
  { text: "PROCESS", style: { top: "15%", left: "55%" } },
  { text: "IS", style: { top: "15%", right: "20%" } },
  { text: "MYSTERIOUS", style: { top: "15%", right: "5%" } },

  { text: "S", style: { top: "25%", left: "5%" } },
  { text: "I", style: { top: "25%", left: "10%" } },
  { text: "M", style: { top: "25%", left: "15%" } },
  { text: "P", style: { top: "25%", left: "20%" } },
  { text: "L", style: { top: "25%", left: "25%" } },
  { text: "I", style: { top: "25%", left: "30%" } },
  { text: "C", style: { top: "25%", left: "35%" } },
  { text: "I", style: { top: "25%", left: "40%" } },
  { text: "T", style: { top: "25%", left: "45%" } },
  { text: "Y", style: { top: "25%", left: "50%" } },
  { text: "IS THE KEY", style: { top: "25%", right: "5%" } },

  {
    text: "FIND YOUR VOICE",
    style: { top: "35%", left: "25%" },
  },
  {
    text: "TRUST INTUITION",
    style: { top: "35%", left: "65%" },
  },

  {
    text: "EMBRACE SILENCE",
    style: { top: "50%", left: "5%" },
  },
  {
    text: "QUESTION EVERYTHING",
    style: { top: "50%", right: "5%" },
  },

  { text: "TRUTH", style: { top: "75%", left: "20%" } },
  { text: "WISDOM", style: { top: "75%", right: "20%" } },

  { text: "FOCUS", style: { top: "80%", left: "10%" } },
  { text: "ATTENTION", style: { top: "80%", left: "35%" } },
  { text: "AWARENESS", style: { top: "80%", left: "65%" } },
  { text: "PRESENCE", style: { top: "80%", right: "10%" } },

  { text: "SIMPLIFY", style: { top: "85%", left: "25%" } },
  { text: "REFINE", style: { top: "85%", right: "25%" } },
];

const alternativeTexts = {
  focus: {
    BE: "BECOME",
    PRESENT: "MINDFUL",
    LISTEN: "HEAR",
    DEEPLY: "INTENTLY",
    OBSERVE: "NOTICE",
    "&": "+",
    FEEL: "SENSE",
    MAKE: "CREATE",
    BETTER: "IMPROVED",
    DECISIONS: "CHOICES",
    THE: "YOUR",
    CREATIVE: "ARTISTIC",
    PROCESS: "JOURNEY",
    IS: "FEELS",
    MYSTERIOUS: "MAGICAL",
    S: "START",
    I: "INSPIRE",
    M: "MAKE",
    P: "PURE",
    L: "LIGHT",
    C: "CREATE",
    T: "TRANSFORM",
    Y: "YOURS",
    "IS THE KEY": "UNLOCKS ALL",
    "FIND YOUR VOICE": "SPEAK YOUR TRUTH",
    "TRUST INTUITION": "FOLLOW INSTINCT",
    "EMBRACE SILENCE": "WELCOME STILLNESS",
    "QUESTION EVERYTHING": "CHALLENGE NORMS",
    TRUTH: "HONESTY",
    WISDOM: "INSIGHT",
    FOCUS: "CONCENTRATE",
    ATTENTION: "AWARENESS",
    AWARENESS: "CONSCIOUSNESS",
    PRESENCE: "BEING",
    SIMPLIFY: "MINIMIZE",
    REFINE: "PERFECT",
  },

  presence: {
    BE: "EVOLVE",
    PRESENT: "ENGAGED",
    LISTEN: "ABSORB",
    DEEPLY: "FULLY",
    OBSERVE: "ANALYZE",
    "&": "→",
    FEEL: "EXPERIENCE",
    MAKE: "BUILD",
    BETTER: "STRONGER",
    DECISIONS: "SYSTEMS",
    THE: "EACH",
    CREATIVE: "ITERATIVE",
    PROCESS: "METHOD",
    IS: "BECOMES",
    MYSTERIOUS: "REVEALING",
    S: "STRUCTURE",
    I: "ITERATE",
    M: "METHOD",
    P: "PRACTICE",
    L: "LEARN",
    C: "CONSTRUCT",
    T: "TECHNIQUE",
    Y: "YIELD",
    "IS THE KEY": "DRIVES SUCCESS",
    "FIND YOUR VOICE": "DEVELOP YOUR STYLE",
    "TRUST INTUITION": "FOLLOW THE FLOW",
    "EMBRACE SILENCE": "VALUE PAUSES",
    "QUESTION EVERYTHING": "EXAMINE DETAILS",
    TRUTH: "CLARITY",
    WISDOM: "KNOWLEDGE",
    FOCUS: "DIRECTION",
    ATTENTION: "PRECISION",
    AWARENESS: "UNDERSTANDING",
    PRESENCE: "ENGAGEMENT",
    SIMPLIFY: "STREAMLINE",
    REFINE: "OPTIMIZE",
  },

  feel: {
    BE: "SEE",
    PRESENT: "FOCUSED",
    LISTEN: "UNDERSTAND",
    DEEPLY: "CLEARLY",
    OBSERVE: "PERCEIVE",
    "&": "=",
    FEEL: "KNOW",
    MAKE: "ACHIEVE",
    BETTER: "CLEARER",
    DECISIONS: "VISION",
    THE: "THIS",
    CREATIVE: "INSIGHTFUL",
    PROCESS: "THINKING",
    IS: "BRINGS",
    MYSTERIOUS: "ILLUMINATING",
    S: "SHARP",
    I: "INSIGHT",
    M: "MINDFUL",
    P: "PRECISE",
    L: "LUCID",
    C: "CLEAR",
    T: "TRANSPARENT",
    Y: "YES",
    "IS THE KEY": "REVEALS TRUTH",
    "FIND YOUR VOICE": "DISCOVER YOUR VISION",
    "TRUST INTUITION": "BELIEVE YOUR EYES",
    "EMBRACE SILENCE": "SEEK STILLNESS",
    "QUESTION EVERYTHING": "CLARIFY ASSUMPTIONS",
    TRUTH: "REALITY",
    WISDOM: "PERCEPTION",
    FOCUS: "CLARITY",
    ATTENTION: "OBSERVATION",
    AWARENESS: "RECOGNITION",
    PRESENCE: "ALERTNESS",
    SIMPLIFY: "DISTILL",
    REFINE: "SHARPEN",
  },
};

const rows = ["focus", "presence", "feel"];

const typeLines = [
  "focus focus focus",
  "presence presence presence",
  "feel feel feel",
  "focus focus focus",
  "presence presence presence",
  "focus focus focus",
  "focus focus focus",
  "presence presence presence",
  "feel feel feel",
  "focus focus focus",
  "presence presence presence",
  "focus focus focus",
];

export default function FocusKinetic() {
  const rootRef = useRef(null);
  // Background presets from local assets
  const bgImages = [bg1, bg2, bg3];

  const textPresets = [
    {
      label: "Film Noir Lines",
      rows: ["BLACK WHITE TRUTH", "MOMENT IN FILM", "OBSERVE SLOWLY"],
    },
    {
      label: "Light & Shadow",
      rows: ["CHRONICLE OF LIGHT", "SILENT SCENE, BIG STORY", "CLARITY IN NOISE"],
    },
    {
      label: "Default",
      rows: ["FOCUS", "PRESENCE", "FEEL"],
    },
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const filmEffectEnabled = true; // always-on film effect

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    let resizeTimer = null;
    let scrambleTimer = null;
    let initialScrambleTimer = null;
    let kineticStartTimer = null;

    const splitTexts = {};
    const splitInstances = [];

    const state = {
      activeRowId: null,
      kineticAnimationActive: false,
      activeKineticAnimation: null,
      textRevealAnimation: null,
      transitionInProgress: false,
    };

    const ctx = gsap.context(() => {
      CustomEase.create("customEase", "0.86, 0, 0.07, 1");
      CustomEase.create("mouseEase", "0.25, 0.1, 0.25, 1");

      const initializeAnimation = () => {
        const backgroundTextItems = root.querySelectorAll(".text-item");
        const textRows = root.querySelectorAll(".text-row");

        const kineticType = root.querySelector("#kinetic-type");
        const typeLineElements = root.querySelectorAll(".type-line");
        const oddLines = root.querySelectorAll(".type-line.odd");
        const evenLines = root.querySelectorAll(".type-line.even");

        const backgroundImages = {
          default: root.querySelector("#default-bg"),
          focus: root.querySelector("#focus-bg"),
          presence: root.querySelector("#presence-bg"),
          feel: root.querySelector("#feel-bg"),
        };

        // Apply selected background image to all bg layers
        const selectedBg = bgImages[bgIndex];
        Object.values(backgroundImages).forEach((el) => {
          if (!el) return;
          el.style.backgroundImage = `url(${selectedBg})`;
          el.style.filter = "grayscale(100%) contrast(110%)";
        });

        const TYPE_LINE_OPACITY = 0.015;

        /*
         * ---------------------------------
         * Background
         * ---------------------------------
         */

        const switchBackgroundImage = (id) => {
          Object.values(backgroundImages).forEach((bg) => {
            gsap.to(bg, {
              opacity: 0,
              duration: 0.8,
              ease: "customEase",
            });
          });

          const target = backgroundImages[id] || backgroundImages.default;

          gsap.to(target, {
            opacity: 1,
            duration: 0.8,
            ease: "customEase",
            delay: 0.2,
          });
        };

        /*
         * ---------------------------------
         * Background text setup
         * ---------------------------------
         */

        backgroundTextItems.forEach((item) => {
          item.dataset.originalText = item.textContent;
          item.dataset.text = item.textContent;

          gsap.set(item, {
            opacity: 1,
          });
        });

        /*
         * ---------------------------------
         * SplitText
         * ---------------------------------
         */

        textRows.forEach((row, index) => {
          const textElement = row.querySelector(".text-content");
          const rowId = row.dataset.rowId;

          const split = new SplitText(textElement, {
            type: "chars",
            charsClass: "char",
            mask: "chars",
            reduceWhiteSpace: false,
            propIndex: true,
          });

          splitTexts[rowId] = split;
          splitInstances.push(split);

          // Apply selected text preset to the visible rows
          const presetRows = textPresets[textIndex].rows;
          const newText = presetRows[index] || textElement.dataset.text;
          textElement.dataset.text = newText;
          textElement.textContent = newText;

          textElement.style.visibility = "visible";
        });

        /*
         * ---------------------------------
         * Character width
         * ---------------------------------
         */

        const updateCharacterWidths = () => {
          const isMobile = window.innerWidth < 1024;

          textRows.forEach((row) => {
            const rowId = row.dataset.rowId;
            const textElement = row.querySelector(".text-content");

            const computedStyle = window.getComputedStyle(textElement);
            const currentFontSize = computedStyle.fontSize;

            const chars = splitTexts[rowId]?.chars || [];

            chars.forEach((char, index) => {
              let inner = char.querySelector(".char-inner");

              const charText = inner
                ? inner.textContent
                : char.textContent || "";

              if (!charText && index === 0) return;

              if (!inner && charText) {
                char.textContent = "";

                inner = document.createElement("span");
                inner.className = "char-inner";
                inner.textContent = charText;

                char.appendChild(inner);

                gsap.set(inner, {
                  x: 0,
                });
              }

              let charWidth;

              const fontSizeValue = parseFloat(currentFontSize);

              if (isMobile) {
                charWidth = fontSizeValue * 0.6;

                char.style.width = `${charWidth}px`;
                char.style.maxWidth = `${charWidth}px`;

                char.dataset.charWidth = String(charWidth);
                char.dataset.hoverWidth = String(charWidth);
              } else {
                const tempSpan = document.createElement("span");

                tempSpan.style.position = "absolute";
                tempSpan.style.visibility = "hidden";
                tempSpan.style.fontSize = currentFontSize;
                tempSpan.style.fontFamily = "Longsile, sans-serif";
                tempSpan.textContent = charText;

                root.appendChild(tempSpan);

                const actualWidth = tempSpan.offsetWidth;

                tempSpan.remove();

                const fontSizeRatio = fontSizeValue / 160;
                const padding = 10 * fontSizeRatio;

                charWidth = Math.max(
                  actualWidth + padding,
                  30 * fontSizeRatio
                );

                char.style.width = `${charWidth}px`;
                char.style.maxWidth = `${charWidth}px`;

                char.dataset.charWidth = String(charWidth);

                const hoverWidth = Math.max(
                  charWidth * 1.8,
                  85 * fontSizeRatio
                );

                char.dataset.hoverWidth = String(hoverWidth);
              }

              char.style.setProperty("--char-index", index);
            });
          });
        };

        updateCharacterWidths();

        /*
         * ---------------------------------
         * Initial reveal
         * ---------------------------------
         */

        textRows.forEach((row, rowIndex) => {
          const rowId = row.dataset.rowId;
          const chars = splitTexts[rowId]?.chars || [];

          gsap.set(chars, {
            opacity: 0,
            filter: "blur(15px)",
          });

          gsap.to(chars, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.09,
            ease: "customEase",
            delay: 0.15 * rowIndex,
          });
        });

        /*
         * ---------------------------------
         * Kinetic typography
         * ---------------------------------
         */

        const forceResetKineticAnimation = () => {
          kineticStartTimer && clearTimeout(kineticStartTimer);

          if (state.activeKineticAnimation) {
            state.activeKineticAnimation.kill();
            state.activeKineticAnimation = null;
          }

          gsap.killTweensOf([
            kineticType,
            typeLineElements,
            oddLines,
            evenLines,
          ]);

          gsap.set(kineticType, {
            display: "grid",
            scale: 1,
            rotation: 0,
            opacity: 1,
            visibility: "visible",
          });

          gsap.set(typeLineElements, {
            opacity: TYPE_LINE_OPACITY,
            x: "0%",
          });

          state.kineticAnimationActive = false;
        };

        const startKineticAnimation = (text) => {
          forceResetKineticAnimation();

          kineticType.style.display = "grid";
          kineticType.style.opacity = "1";
          kineticType.style.visibility = "visible";

          const repeatedText = `${text} ${text} ${text}`;

          typeLineElements.forEach((line) => {
            line.textContent = repeatedText;
          });

          kineticStartTimer = window.setTimeout(() => {
            const timeline = gsap.timeline({
              onComplete: () => {
                state.kineticAnimationActive = false;
              },
            });

            timeline.to(kineticType, {
              duration: 1.4,
              ease: "customEase",
              scale: 2.7,
              rotation: -90,
            });

            timeline.to(
              oddLines,
              {
                keyframes: [
                  {
                    x: "20%",
                    duration: 1,
                    ease: "customEase",
                  },
                  {
                    x: "-200%",
                    duration: 1.5,
                    ease: "customEase",
                  },
                ],
                stagger: 0.08,
              },
              0
            );

            timeline.to(
              evenLines,
              {
                keyframes: [
                  {
                    x: "-20%",
                    duration: 1,
                    ease: "customEase",
                  },
                  {
                    x: "200%",
                    duration: 1.5,
                    ease: "customEase",
                  },
                ],
                stagger: 0.08,
              },
              0
            );

            timeline.to(
              typeLineElements,
              {
                keyframes: [
                  {
                    opacity: 1,
                    duration: 1,
                    ease: "customEase",
                  },
                  {
                    opacity: 0,
                    duration: 1.5,
                    ease: "customEase",
                  },
                ],
                stagger: 0.05,
              },
              0
            );

            state.kineticAnimationActive = true;
            state.activeKineticAnimation = timeline;
          }, 20);
        };

        const fadeOutKineticAnimation = () => {
          if (!state.kineticAnimationActive) {
            forceResetKineticAnimation();
            return;
          }

          if (state.activeKineticAnimation) {
            state.activeKineticAnimation.kill();
            state.activeKineticAnimation = null;
          }

          const timeline = gsap.timeline({
            onComplete: () => {
              gsap.set(kineticType, {
                scale: 1,
                rotation: 0,
                opacity: 1,
              });

              gsap.set(typeLineElements, {
                opacity: TYPE_LINE_OPACITY,
                x: "0%",
              });

              state.kineticAnimationActive = false;
            },
          });

          timeline.to(kineticType, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "customEase",
          });
        };

        /*
         * ---------------------------------
         * Background text reveal
         * ---------------------------------
         */

        const createTextRevealAnimation = (rowId) => {
          const timeline = gsap.timeline();

          timeline.to(backgroundTextItems, {
            opacity: 0.3,
            duration: 0.5,
            ease: "customEase",
          });

          timeline.call(() => {
            backgroundTextItems.forEach((item) => {
              item.classList.add("highlight");
            });
          });

          timeline.call(
            () => {
              backgroundTextItems.forEach((item) => {
                const originalText = item.dataset.text;

                const replacement =
                  alternativeTexts[rowId]?.[originalText];

                if (replacement) {
                  item.textContent = replacement;
                }
              });
            },
            null,
            "+=0.5"
          );

          timeline.call(() => {
            backgroundTextItems.forEach((item) => {
              item.classList.remove("highlight");
              item.classList.add("highlight-reverse");
            });
          });

          timeline.call(
            () => {
              backgroundTextItems.forEach((item) => {
                item.classList.remove("highlight-reverse");
              });
            },
            null,
            "+=0.5"
          );

          return timeline;
        };

        const resetBackgroundTextWithAnimation = () => {
          const timeline = gsap.timeline();

          timeline.call(() => {
            backgroundTextItems.forEach((item) => {
              item.classList.add("highlight");
            });
          });

          timeline.call(
            () => {
              backgroundTextItems.forEach((item) => {
                item.textContent = item.dataset.originalText;
              });
            },
            null,
            "+=0.5"
          );

          timeline.call(() => {
            backgroundTextItems.forEach((item) => {
              item.classList.remove("highlight");
              item.classList.add("highlight-reverse");
            });
          });

          timeline.call(
            () => {
              backgroundTextItems.forEach((item) => {
                item.classList.remove("highlight-reverse");
              });
            },
            null,
            "+=0.5"
          );

          timeline.to(backgroundTextItems, {
            opacity: 1,
            duration: 0.5,
            ease: "customEase",
          });

          return timeline;
        };

        /*
         * ---------------------------------
         * Row transition
         * ---------------------------------
         */

        const transitionBetweenRows = (fromRow, toRow) => {
          if (state.transitionInProgress) return;

          state.transitionInProgress = true;

          const fromRowId = fromRow.dataset.rowId;
          const toRowId = toRow.dataset.rowId;

          fromRow.classList.remove("active");

          const fromChars = splitTexts[fromRowId]?.chars || [];
          const fromInners =
            fromRow.querySelectorAll(".char-inner");

          gsap.killTweensOf(fromChars);
          gsap.killTweensOf(fromInners);

          toRow.classList.add("active");
          state.activeRowId = toRowId;

          const toText =
            toRow.querySelector(".text-content").dataset.text;

          const toChars = splitTexts[toRowId]?.chars || [];
          const toInners =
            toRow.querySelectorAll(".char-inner");

          forceResetKineticAnimation();
          switchBackgroundImage(toRowId);
          startKineticAnimation(toText);

          state.textRevealAnimation?.kill();

          state.textRevealAnimation =
            createTextRevealAnimation(toRowId);

          gsap.set(fromChars, {
            maxWidth: (_, target) =>
              parseFloat(target.dataset.charWidth),
          });

          gsap.set(fromInners, {
            x: 0,
          });

          const timeline = gsap.timeline({
            onComplete: () => {
              state.transitionInProgress = false;
            },
          });

          timeline.to(
            toChars,
            {
              maxWidth: (_, target) =>
                parseFloat(target.dataset.hoverWidth),
              duration: 0.64,
              stagger: 0.04,
              ease: "customEase",
            },
            0
          );

          timeline.to(
            toInners,
            {
              x: -35,
              duration: 0.64,
              stagger: 0.04,
              ease: "customEase",
            },
            0.05
          );
        };

        /*
         * ---------------------------------
         * Activate row
         * ---------------------------------
         */

        const activateRow = (row) => {
          const rowId = row.dataset.rowId;

          if (state.activeRowId === rowId) return;
          if (state.transitionInProgress) return;

          const activeRow =
            root.querySelector(".text-row.active");

          if (activeRow) {
            transitionBetweenRows(activeRow, row);
            return;
          }

          row.classList.add("active");

          state.activeRowId = rowId;

          const text =
            row.querySelector(".text-content").dataset.text;

          const chars = splitTexts[rowId]?.chars || [];
          const innerSpans =
            row.querySelectorAll(".char-inner");

          switchBackgroundImage(rowId);
          startKineticAnimation(text);

          state.textRevealAnimation?.kill();

          state.textRevealAnimation =
            createTextRevealAnimation(rowId);

          const timeline = gsap.timeline();

          timeline.to(
            chars,
            {
              maxWidth: (_, target) =>
                parseFloat(target.dataset.hoverWidth),
              duration: 0.64,
              stagger: 0.04,
              ease: "customEase",
            },
            0
          );

          timeline.to(
            innerSpans,
            {
              x: -35,
              duration: 0.64,
              stagger: 0.04,
              ease: "customEase",
            },
            0.05
          );
        };

        /*
         * ---------------------------------
         * Deactivate row
         * ---------------------------------
         */

        const deactivateRow = (row) => {
          const rowId = row.dataset.rowId;

          if (state.activeRowId !== rowId) return;
          if (state.transitionInProgress) return;

          state.activeRowId = null;

          row.classList.remove("active");

          switchBackgroundImage("default");
          fadeOutKineticAnimation();

          state.textRevealAnimation?.kill();

          state.textRevealAnimation =
            resetBackgroundTextWithAnimation();

          const chars = splitTexts[rowId]?.chars || [];
          const innerSpans =
            row.querySelectorAll(".char-inner");

          const timeline = gsap.timeline();

          timeline.to(
            innerSpans,
            {
              x: 0,
              duration: 0.64,
              stagger: 0.03,
              ease: "customEase",
            },
            0
          );

          timeline.to(
            chars,
            {
              maxWidth: (_, target) =>
                parseFloat(target.dataset.charWidth),
              duration: 0.64,
              stagger: 0.03,
              ease: "customEase",
            },
            0.05
          );
        };

        /*
         * ---------------------------------
         * Row events
         * ---------------------------------
         */

        const rowCleanups = [];

        textRows.forEach((row) => {
          const interactiveArea =
            row.querySelector(".interactive-area");

          const handleEnter = () => {
            activateRow(row);
          };

          const handleLeave = () => {
            if (state.activeRowId === row.dataset.rowId) {
              deactivateRow(row);
            }
          };

          const handleClick = () => {
            activateRow(row);
          };

          interactiveArea.addEventListener(
            "mouseenter",
            handleEnter
          );

          interactiveArea.addEventListener(
            "mouseleave",
            handleLeave
          );

          row.addEventListener("click", handleClick);

          rowCleanups.push(() => {
            interactiveArea.removeEventListener(
              "mouseenter",
              handleEnter
            );

            interactiveArea.removeEventListener(
              "mouseleave",
              handleLeave
            );

            row.removeEventListener("click", handleClick);
          });
        });

        /*
         * ---------------------------------
         * Resize
         * ---------------------------------
         */

        const handleResize = () => {
          clearTimeout(resizeTimer);

          resizeTimer = window.setTimeout(() => {
            updateCharacterWidths();
          }, 250);
        };

        window.addEventListener("resize", handleResize);

        /*
         * ---------------------------------
         * Scramble
         * ---------------------------------
         */

        const scrambleRandomText = () => {
          if (!backgroundTextItems.length) return;

          const randomIndex = Math.floor(
            Math.random() * backgroundTextItems.length
          );

          const randomItem =
            backgroundTextItems[randomIndex];

          const originalText = randomItem.dataset.text;

          gsap.to(randomItem, {
            duration: 1,
            scrambleText: {
              text: originalText,
              chars: "■▪▌▐▬",
              revealDelay: 0.5,
              speed: 0.3,
            },
            ease: "none",
          });

          const delay = 0.5 + Math.random() * 2;

          scrambleTimer = window.setTimeout(
            scrambleRandomText,
            delay * 1000
          );
        };

        initialScrambleTimer = window.setTimeout(
          scrambleRandomText,
          1000
        );

        /*
         * ---------------------------------
         * IS THE KEY reveal
         * ---------------------------------
         */

        const simplicity = root.querySelector(
          '.text-item[data-text="IS THE KEY"]'
        );

        if (simplicity) {
          const splitSimplicity = new SplitText(simplicity, {
            type: "chars",
            charsClass: "simplicity-char",
          });

          splitInstances.push(splitSimplicity);

          gsap.from(splitSimplicity.chars, {
            opacity: 0,
            scale: 0.5,
            duration: 1,
            stagger: 0.015,
            ease: "customEase",
            delay: 1,
          });
        }

        /*
         * ---------------------------------
         * Background text breathing
         * ---------------------------------
         */

        backgroundTextItems.forEach((item, index) => {
          gsap.to(item, {
            opacity: 0.85,
            duration: 2 + (index % 3),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1,
          });
        });

        /*
         * ---------------------------------
         * Parallax
         * ---------------------------------
         */

        const backgroundElements = [
          ...root.querySelectorAll("[id$='-bg']"),
          ...root.querySelectorAll(".bg-text-container"),
        ];

        const parallaxLayers = [0.02, 0.03, 0.04, 0.05];

        backgroundElements.forEach((element, index) => {
          element.dataset.parallaxSpeed =
            parallaxLayers[index % parallaxLayers.length];

          gsap.set(element, {
            transformOrigin: "center center",
            force3D: true,
          });
        });

        let lastParallaxTime = 0;

        const handleMouseMove = (event) => {
          const now = Date.now();

          if (now - lastParallaxTime < 20) return;

          lastParallaxTime = now;

          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const offsetX =
            (event.clientX - centerX) / centerX;

          const offsetY =
            (event.clientY - centerY) / centerY;

          backgroundElements.forEach((element) => {
            const speed = parseFloat(
              element.dataset.parallaxSpeed
            );

            const moveX = offsetX * 100 * speed;
            const moveY = offsetY * 50 * speed;

            gsap.to(element, {
              x: moveX,
              y: moveY,
              duration: 1,
              ease: "mouseEase",
              overwrite: "auto",
            });
          });
        };

        const handleMouseLeave = () => {
          backgroundElements.forEach((element) => {
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 1.5,
              ease: "customEase",
            });
          });
        };

        root.addEventListener(
          "mousemove",
          handleMouseMove
        );

        root.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        /*
         * Floating background movement
         */

        backgroundElements.forEach((element, index) => {
          const floatAmount =
            5 + (index % 3) * 2;

          gsap.to(element, {
            y: `+=${floatAmount}`,
            duration: 3 + (index % 2),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          });
        });

        /*
         * Film effect (grain flicker)
         */
        let grainTween = null;
        // Prefer a video overlay if available, otherwise fallback to static grain
        const videoGrain = root.querySelector(".film-grain-video");
        const imgGrain = root.querySelector(".film-grain");
        const vignetteEl = root.querySelector(".film-vignette");
        const scanlinesEl = root.querySelector(".film-scanlines");

        let usedGrain = null;
        let onVideoLoaded;
        let onVideoError;

        const startGrainTween = (el) => {
          if (!el) return;
          // stronger base opacity for clearer effect
          gsap.set(el, { opacity: filmEffectEnabled ? 0.28 : 0 });

          if (filmEffectEnabled) {
            grainTween = gsap.to(el, {
              // flicker between slightly higher range
              opacity: () => 0.18 + Math.random() * 0.22,
              duration: () => 0.06 + Math.random() * 0.35,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              repeatRefresh: true,
            });
          }
        };

        if (videoGrain) {
          // If video loads, use it; on error fallback to static image
          onVideoLoaded = () => {
            usedGrain = videoGrain;
            startGrainTween(usedGrain);
            videoGrain.removeEventListener("loadeddata", onVideoLoaded);
            videoGrain.removeEventListener("error", onVideoError);
          };

          onVideoError = () => {
            usedGrain = imgGrain;
            startGrainTween(usedGrain);
            videoGrain.removeEventListener("loadeddata", onVideoLoaded);
            videoGrain.removeEventListener("error", onVideoError);
          };

          videoGrain.addEventListener("loadeddata", onVideoLoaded);
          videoGrain.addEventListener("error", onVideoError);

          // attempt to play; if play is rejected, fallback will be handled by error or by catching
          const p = videoGrain.play();
          if (p && p.catch) {
            p.catch(() => {
              onVideoError();
            });
          }
        } else {
          usedGrain = imgGrain;
          startGrainTween(usedGrain);
        }

        if (vignetteEl) {
          gsap.set(vignetteEl, { opacity: filmEffectEnabled ? 0.6 : 0 });
        }

        if (scanlinesEl) {
          gsap.set(scanlinesEl, { opacity: filmEffectEnabled ? 0.12 : 0 });
        }

        /*
         * React cleanup
         */

        return () => {
          window.removeEventListener(
            "resize",
            handleResize
          );

          root.removeEventListener(
            "mousemove",
            handleMouseMove
          );

          root.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );

          rowCleanups.forEach((cleanup) => cleanup());

          grainTween?.kill();

          // remove video event listeners if they were attached
          try {
            const videoEl = root.querySelector(".film-grain-video");
            if (videoEl) {
              videoEl.removeEventListener("loadeddata", onVideoLoaded);
              videoEl.removeEventListener("error", onVideoError);
            }
          } catch (e) {
            // ignore
          }
        };
      };

      let removeEvents;

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          removeEvents = initializeAnimation();
        });
      } else {
        removeEvents = initializeAnimation();
      }

      return () => {
        removeEvents?.();
      };
    }, root);

    return () => {
      clearTimeout(resizeTimer);
      clearTimeout(scrambleTimer);
      clearTimeout(initialScrambleTimer);
      clearTimeout(kineticStartTimer);

      state.activeKineticAnimation?.kill();
      state.textRevealAnimation?.kill();

      splitInstances.reverse().forEach((split) => {
        try {
          split.revert();
        } catch {
          // already reverted
        }
      });

      ctx.revert();
    };
  }, [bgIndex, textIndex]);

  return (
    <section className="focus-kinetic" ref={rootRef}>
      {/* Frame */}
      <div className="background-frame" />

      {/* Backgrounds */}
      <div
        className="background-image default"
        id="default-bg"
      />

      <div
        className="background-image focus"
        id="focus-bg"
      />

      <div
        className="background-image presence"
        id="presence-bg"
      />

      <div
        className="background-image feel"
        id="feel-bg"
      />

      <div className="bottom-gradient" />

      {/* Background text */}
      <div className="text-background">
        {backgroundTexts.map((item, index) => (
          <div
            key={`${item.text}-${index}`}
            className="text-item"
            style={item.style}
            data-text={item.text}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Film overlays: prefer bundled video overlay, fallback to static grain image */}
      <video
        className="film-grain-video"
        src={filmGrain}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div
        className="film-grain"
        style={{ backgroundImage: `url(${grainImg})` }}
      />
      <div className="film-scanlines" />
      <div className="film-vignette" />

      {/* Main Titles */}
      <div className="main-content">
        <div className="sliced-container">
          {rows.map((row) => (
            <div
              key={row}
              className="text-row"
              data-row-id={row}
            >
              <div
                className="text-content"
                data-text={row.toUpperCase()}
              >
                {row.toUpperCase()}
              </div>

              <div className="interactive-area" />
            </div>
          ))}
        </div>
      </div>

      {/* Kinetic Type */}
      <div
        className="type"
        id="kinetic-type"
        aria-hidden="true"
      >
        {typeLines.map((text, index) => (
          <div
            key={index}
            className={`type-line ${
              index % 2 === 0 ? "odd" : "even"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}