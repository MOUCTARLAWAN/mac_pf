import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FONT_WEIGHT = {
  // Valeurs ajustées : default correspond à la valeur de retour
  subtitle: { min: 100, max: 700, default: 400 },
  title: { min: 100, max: 900, default: 400 },
};

const renderText = (text, className, baseWidth = 400) =>
  [...text].map((char, i) => (
    <span
      key={i}
      className={`${className} inline-block`}
      style={{ fontVariationSettings: `"wght" ${baseWidth}`, fontFamily: "Inter" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // helper to setup hover animations for a container element (DOM node)
    const setupTextHover = (container, type) => {
      if (!container) return null;

      const letters = Array.from(container.querySelectorAll("span"));
      const { min, max, default: baseWeight } = FONT_WEIGHT[type];

      // map letter -> { proxy, tween }
      const registry = new Map();

      letters.forEach((letter) => {
        // initial numeric proxy
        const proxy = { w: baseWeight };
        registry.set(letter, { proxy, tween: null });
        // ensure initial style
        letter.style.fontVariationSettings = `"wght" ${baseWeight}`;
        letter.style.willChange = "font-variation-settings";
      });

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        letters.forEach((letter) => {
          const { left: l, width: w } = letter.getBoundingClientRect();
          const center = l - rect.left + w / 2;
          const distance = Math.abs(mouseX - center);

          // gaussian-like falloff; sigma controls spread
          const sigma = 120; // ajuste l'effet (distance d'influence)
          const intensity = Math.exp(-(distance ** 2) / (2 * sigma * sigma)); // 0..1
          const target = min + (max - min) * intensity;

          const entry = registry.get(letter);
          if (!entry) return;

          // kill existing tween if active to avoid empilement
          if (entry.tween) {
            entry.tween.kill();
            entry.tween = null;
          }

          // animate numeric proxy; onUpdate writes css
          entry.tween = gsap.to(entry.proxy, {
            w: target,
            duration: 0.22,
            ease: "power2.out",
            onUpdate: () => {
              // apply numeric value with two decimals
              letter.style.fontVariationSettings = `"wght" ${entry.proxy.w.toFixed(2)}`;
            },
          });
        });
      };

      const handleMouseLeave = () => {
        // return all letters to baseWeight
        letters.forEach((letter) => {
          const entry = registry.get(letter);
          if (!entry) return;
          if (entry.tween) {
            entry.tween.kill();
            entry.tween = null;
          }
          entry.tween = gsap.to(entry.proxy, {
            w: baseWeight,
            duration: 0.6,
            ease: "power3.out",
            onUpdate: () => {
              letter.style.fontVariationSettings = `"wght" ${entry.proxy.w.toFixed(2)}`;
            },
            onComplete: () => {
              entry.tween = null;
            },
          });
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      // cleanup function
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        registry.forEach((entry) => {
          if (entry.tween) entry.tween.kill();
        });
        registry.clear();
      };
    };

    // mount
    const cleanups = [];
    if (titleRef.current) {
      const fn = setupTextHover(titleRef.current, "title");
      if (fn) cleanups.push(fn);
    }
    if (subtitleRef.current) {
      const fn = setupTextHover(subtitleRef.current, "subtitle");
      if (fn) cleanups.push(fn);
    }

    // unmount cleanup
    return () => {
      cleanups.forEach((c) => {
        try {
          c();
        } catch (err) {
          // ignore
        }
      });
    };
  }, []); // run once

  return (
    <section id="welcome" className="col-center w-full h-full text-center text-white">
      <p ref={titleRef} className="text-3xl font-bold">
        {renderText(
          "Hello, Je suis Mouctar LAWAN bienvenue sur mon",
          "text-3xl font-bold",
          FONT_WEIGHT.title.default
        )}
      </p>

      <h1 ref={subtitleRef} className="text-5xl font-bold mt-7">
        {renderText("Portfolio", "text-9xl italic font-bold", FONT_WEIGHT.subtitle.default)}
      </h1>
    </section>
  );
};

export default Welcome;
