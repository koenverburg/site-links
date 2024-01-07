'use client';

import { useState, useEffect, useRef } from 'react';

const words = ['Conrad The Programmer', 'Koen Verburg'];

export function WordLogo() {
  const ref = useRef()
  const [count, setCount] = useState(0)
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    function wrapLettersWithSpan(node: HTMLElement) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const text = node.textContent
        const wrappedText = Array.from(text)
          .map(letter => `<span>${letter}</span>`)
          .join('')
        const spanContainer = document.createElement('span')
        spanContainer.innerHTML = wrappedText
        node.replaceWith(spanContainer)
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const childNodes = Array.from(node.childNodes)
        childNodes.forEach(child => wrapLettersWithSpan(child as HTMLElement))
      }
    }
    function addAnimationDelay(node: HTMLElement) {
      node.querySelectorAll('span > span').forEach((span, index) => {
        // @ts-ignore
        span.style.animationDelay = `${index * 0.008}s`
      })
    }
    wrapLettersWithSpan(ref.current! as HTMLElement)
    addAnimationDelay(ref.current! as HTMLElement)
  }, [ref, currentWord]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000); // Change words every 2 seconds

    if (count === 5) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [count]);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingAnimationDuration = word.length * 50; // Adjust animation speed as needed

    setCurrentWord('');
    setTimeout(() => {
      setCurrentWord(word);
    }, typingAnimationDuration);

    setCount(count + 1)
  }, [currentWordIndex]);

  return (
    // @ts-ignore
    <a href="/"><h1 className="font-bold word-logo" ref={ref}>{currentWord}</h1></a>
  )
}