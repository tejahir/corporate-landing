"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import WorkProcess from "./WorkProcess/WorkProcess";
import Project from "./Project/Project";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="work"><WorkProcess /></section>
      <section id="portfolio"><Project /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
