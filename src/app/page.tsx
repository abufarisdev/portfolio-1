"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import AboutMeBot from "@/components/AboutMeBot";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { useEffect } from 'react';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  useEffect(() => {
    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = 'magic-cursor';
    document.body.appendChild(cursor);

    // Create ripple container
    const rippleContainer = document.createElement('div');
    rippleContainer.className = 'ripple-container';
    document.body.appendChild(rippleContainer);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Mouse move event
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // Click event for ripples
    const onClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      rippleContainer.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };

    // Mouse down/up events for cursor effect
    const onMouseDown = () => {
      cursor.classList.add('active');
    };

    const onMouseUp = () => {
      cursor.classList.remove('active');
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onClick);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cursor.remove();
      rippleContainer.remove();
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <>
      {/* Floating Light/Dark Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        <AboutMeBot />
      </div>

      {/* Main page content */}
      <main className="flex flex-col min-h-[100dvh] space-y-8">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-6">
            <div className="gap-2 flex justify-between items-center">
              <div className="flex-col flex flex-1 space-y-1.5">
                {/* Name with waving hand */}
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none flex items-center">
                    {DATA.name.replace("👋", "")}
                    <span className="wave-hand ml-2 text-4xl">👋</span>
                  </h1>
                </BlurFade>

                <BlurFadeText
                  className="max-w-[600px] md:text-md"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />

                {/* Summary Section */}
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <Markdown className="max-w-full text-pretty text-sm">
                    {DATA.summary}
                  </Markdown>
                </BlurFade>

                {/* Location */}
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <div className="flex items-center gap-1 text-sm font-bold">
                    <span className="leading-none">📍</span>
                    <Link
                      href={DATA.locationLink}
                      target="_blank"
                      className="hover:underline text-foreground"
                    >
                      {DATA.location}
                    </Link>
                  </div>
                </BlurFade>

                {/* Chatbot Invitation */}
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <p className="text-xs text-muted-foreground mt-1 italic">
                    Want to know more about me? Ask my chatbot!!
                  </p>
                </BlurFade>
              </div>

              {/* Avatar with hover effect */}
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-32 border group">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    hoverSrc={DATA.hoverAvatarUrl}
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-2">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-4">
              {DATA.contact.social.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-1 justify-center items-center p-3 rounded-md bg-muted/50 hover:bg-muted transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </BlurFade>
        </section>
        {/* Tabs Section */}
        <section id="tabs" className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="flex justify-center mb-8">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>

              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <div className="w-full">
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    {/* Single experience card container */}
                    <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                      {/* Timeline style layout */}
                      <div className="space-y-8">
                        {DATA.work.map((work) => (
                          <div key={work.company} className="relative">
                            <div className="flex items-start gap-4">
                              {/* Company logo/icon */}
                              <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                  <img
                                    src={work.logoUrl}
                                    alt={work.company}
                                    className="h-8 w-8 object-contain"
                                  />
                                </div>
                              </div>

                              {/* Experience details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                  <div className="min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                      <h4 className="text-lg font-semibold text-foreground">
                                        {work.company}
                                      </h4>
                                      {/* Badges beside heading */}
                                      {work.badges && work.badges.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                          {work.badges.map((badge) => (
                                            <span
                                              key={badge}
                                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                            >
                                              {badge}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-muted-foreground text-sm mt-1">
                                      {work.title}
                                    </p>
                                  </div>
                                  <p className="text-muted-foreground text-sm whitespace-nowrap sm:text-right flex-shrink-0">
                                    {work.start} - {work.end ?? "Present"}
                                  </p>
                                </div>

                                {/* Description as bullet points */}
                                {work.description && (
                                  <ul className="text-foreground/60 text-xs mt-3 space-y-1">
                                    {work.description.split('. ').filter(point => point.trim().length > 0).map((point, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{point.replace(/\.$/, '')}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                </div>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="w-full">
                <div className="w-full">
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    {/* Single education card container */}
                    <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                      {/* Timeline style layout */}
                      <div className="space-y-8">
                        {DATA.education.map((edu) => (
                          <div key={edu.school} className="relative">
                            <div className="flex items-start gap-4">
                              {/* School logo/icon */}
                              <div className="flex-shrink-0">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                  <img
                                    src={edu.logoUrl}
                                    alt={edu.school}
                                    className="h-8 w-8 object-contain"
                                  />
                                </div>
                              </div>

                              {/* Education details */}
                              <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                  <div className="min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                      <h4 className="text-lg font-semibold text-foreground">
                                        {edu.school}
                                      </h4>
                                      {/* Badges beside heading */}
                                      {edu.badges && edu.badges.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                          {edu.badges.map((badge) => (
                                            <span
                                              key={badge}
                                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                            >
                                              {badge}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <p className="text-muted-foreground text-sm mt-1">
                                      {edu.degree}
                                    </p>
                                  </div>
                                  <p className="text-muted-foreground text-sm whitespace-nowrap sm:text-right flex-shrink-0">
                                    {edu.start} - {edu.end ?? "Present"}
                                  </p>
                                </div>

                                {/* Description as bullet points */}
                                {edu.description && (
                                  <ul className="text-foreground/60 text-xs mt-3 space-y-1">
                                    {edu.description.split('. ').filter(point => point.trim().length > 0).map((point, i) => (
                                      <li key={i} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{point.replace(/\.$/, '')}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </BlurFade>
                </div>
              </TabsContent>
            </Tabs>
          </BlurFade>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-16">
          <div className="flex flex-col gap-y-10">
            {/* Centered Heading - Changed to white */}
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-4xl font-bold text-center text-white">
                Skills
              </h2>
            </BlurFade>

            {/* Grid for Skill Categories with Theme-Matching Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {Object.entries(DATA.skills).map(([category, skills], idx) => (
                <BlurFade
                  key={category}
                  delay={BLUR_FADE_DELAY * 10 + idx * 0.1}
                  className="w-full"
                >
                  {/* Skill Category Card */}
                  <div className="relative group">
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700/30 to-purple-700/30 rounded-xl opacity-0 group-hover:opacity-50 transition duration-500 blur-sm"></div>

                    {/* Main card content */}
                    <div className="relative bg-card border border-border rounded-xl p-5 h-full transition-all duration-300 hover:border-blue-700/30">
                      {/* Category Heading - Changed to white */}
                      <h3 className="text-lg font-semibold mb-4 text-center text-white">
                        {category}
                      </h3>

                      {/* Skills Badges */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant={category.toLowerCase() as any}
                            className="hover:scale-105 transition-transform border-0 shadow-md"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="space-y-4 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-3xl font-bold">featured projects</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * id * 0.05}>
                  <ProjectCard
                    href={project.href}
                    githubUrl={project.githubUrl}
                    key={project.title}
                    title={project.title}
                    active={project.active}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Add CSS for waving animation and cursor effects */}
      <style jsx global>{`
        .wave-hand {
          display: inline-block;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          cursor: pointer;
        }

        .wave-hand:hover {
          animation: wave 0.5s infinite;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        /* Magic Cursor Styles */
        .magic-cursor {
          position: fixed;
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, rgba(91, 133, 255, 0.6) 0%, rgba(91, 133, 255, 0.3) 40%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          filter: blur(4px);
          transition: 
            width 0.2s ease,
            height 0.2s ease,
            background 0.2s ease;
        }

        .magic-cursor.active {
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(147, 197, 253, 0.8) 0%, rgba(147, 197, 253, 0.4) 40%, transparent 70%);
        }

        /* Ripple Container */
        .ripple-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9998;
        }

        /* Ripple Effect */
        .ripple {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: ripple-effect 1s ease-out;
        }

        @keyframes ripple-effect {
          to {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }

        /* Interactive element hover states */
        a:hover ~ .magic-cursor,
        button:hover ~ .magic-cursor,
        .badge:hover ~ .magic-cursor {
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, rgba(147, 197, 253, 0.8) 0%, rgba(147, 197, 253, 0.5) 40%, transparent 70%);
        }
      `}</style>
    </>
  );
}