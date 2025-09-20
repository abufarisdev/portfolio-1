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
import { useEffect, useRef } from 'react';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const lastParticleTimeRef = useRef(0);

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

    // Particle trail effect
    const createParticle = (e: MouseEvent) => {
      if (Date.now() - lastParticleTimeRef.current < 30) return; // Limit particle creation
      
      const particle = document.createElement('div');
      particle.className = 'particle-trail';
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      // Randomize particle size and color slightly
      const size = 2 + Math.random() * 4;
      const opacity = 0.4 + Math.random() * 0.3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `rgba(180, 85, 40, ${opacity})`;
      
      document.body.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1000);
      
      lastParticleTimeRef.current = Date.now();
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousemove', createParticle);
    document.addEventListener('click', onClick);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousemove', createParticle);
      document.removeEventListener('click', onClick);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      
      if (rippleContainer.parentNode) {
        rippleContainer.parentNode.removeChild(rippleContainer);
      }
      
      document.body.style.cursor = 'default';
      
      // Clean up any remaining particles
      document.querySelectorAll('.particle-trail').forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Floating Light/Dark Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-4 right-4 z-50 space-y-4">
        <AboutMeBot />
      </div>

      {/* Main page content */}
      <main className="flex flex-col min-h-[100dvh] space-y-6"> 
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-16">
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
                  className="max-w-[600px] md:text-md gap-y-8 text-zinc-300"
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
        <section id="tabs" className="w-full"> {/* Added mt-12 */}
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
        <section id="skills" className="mt-20"> {/* Increased from mt-16 to mt-20 */}
          <div className="flex flex-col gap-y-12"> {/* Increased from gap-y-10 to gap-y-12 */}
            {/* Centered Heading */}
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-4xl font-bold text-center text-zinc-200">
                Skills
              </h2>
            </BlurFade>

            {/* Grid for Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full "> {/* Increased gap from gap-5 to gap-6 */}
              {Object.entries(DATA.skills).map(([category, skills], idx) => (
                <BlurFade
                  key={category}
                  delay={BLUR_FADE_DELAY * 10 + idx * 0.1}
                  className="w-full"
                >
                  {/* Skill Category Card */}
                  <div className="relative group h-full">
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-700/30 to-amber-900/30 rounded-xl opacity-0 group-hover:opacity-50 transition duration-500 blur-sm"></div>

                    {/* Main card content */}
                    <div className="relative bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-amber-700/30 group-hover:shadow-lg"> {/* Increased padding from p-5 to p-6 */}
                      {/* Category Heading */}
                      <h3 className="text-lg font-semibold mb-5 text-center text-zinc-400"> {/* Increased margin from mb-4 to mb-5 */}
                        {category}
                      </h3>

                      {/* Skills Badges */}
                      <div className="flex flex-wrap gap-3 justify-center"> {/* Increased gap from gap-2 to gap-3 */}
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
              
              {/* DevOps & Cloud Category Card */}
              <BlurFade delay={BLUR_FADE_DELAY * 10 + Object.entries(DATA.skills).length * 0.1} className="w-full">
                <div className="relative group h-full">
                  {/* Subtle glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-700/30 to-amber-900/30 rounded-xl opacity-0 group-hover:opacity-50 transition duration-500 blur-sm"></div>

                  {/* Main card content */}
                  <div className="relative bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:border-amber-700/30 group-hover:shadow-lg"> {/* Increased padding from p-5 to p-6 */}
                    {/* Category Heading */}
                    <h3 className="text-lg font-semibold mb-5 text-center  text-zinc-400"> {/* Increased margin from mb-4 to mb-5 */}
                      DevOps & Cloud
                    </h3>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-3 justify-center"> {/* Increased gap from gap-2 to gap-3 */}
                      <Badge variant="devops" className="hover:scale-105 transition-transform border-0 shadow-md">
                        Docker
                      </Badge>
                      <Badge variant="devops" className="hover:scale-105 transition-transform border-0 shadow-md">
                        AWS
                      </Badge>
                      <Badge variant="devops" className="hover:scale-105 transition-transform border-0 shadow-md">
                        GitHub Actions
                      </Badge>
                      <Badge variant="devops" className="hover:scale-105 transition-transform border-0 shadow-md">
                        CI/CD
                      </Badge>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-20"> {/* Added mt-20 */}
          <div className="space-y-8 w-full"> {/* Increased from space-y-6 to space-y-8 */}
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-4xl font-bold text-center text-zinc-200 mb-4"> {/* Increased margin from mb-2 to mb-4 */}
                Featured Projects
              </h2>
              <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
                Explore my latest work and personal projects
              </p>
            </BlurFade>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"> {/* Increased gap from gap-6 to gap-8 */}
              {DATA.projects.map((project, id) => (
                <BlurFade 
                  key={project.title} 
                  delay={BLUR_FADE_DELAY * 12 + id * 0.1}
                  className="h-full"
                >
                  <ProjectCard
                    href={project.href}
                    githubUrl={project.githubUrl}
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
    </>
  );
}