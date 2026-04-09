"use client";

import useScrollReveal from "../app/Hooks/useScrollReveal";

export default function ScrollRevealProvider({ children }) {
  useScrollReveal();
  return children;
}