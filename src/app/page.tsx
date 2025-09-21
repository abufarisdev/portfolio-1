"use client";

import { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
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
import { ChevronLeft, ChevronRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

// macOS-style carousel component
function ProjectCarousel({ projects }: { projects: typeof DATA.projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Handle navigation
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };
  
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };
  
  // Calculate the projects to display (current, previous, next)
  const getVisibleProjects = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    
    return [
      projects[prevIndex],
      projects[currentIndex],
      projects[nextIndex]
    ];
  };
  
  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleProjects = getVisibleProjects();

  return (
    <BlurFade delay={BLUR_FADE_DELAY*11}>
   
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative flex items-center justify-center h-[500px]">
        {/* Navigation buttons */}
        <button 
          onClick={prevProject}
          className="absolute left-4 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={nextProject}
          className="absolute right-4 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Project cards */}
        <div className="flex items-center justify-center w-full h-full">
          {/* Left card (previous project) */}
          <div className="absolute left-0 transform -translate-x-1/4 scale-90 opacity-70 transition-all duration-500 z-20 w-80">
            <ProjectCard
              {...visibleProjects[0]}
              tags={visibleProjects[0].technologies}
              className="pointer-events-none"
            />
          </div>

          {/* Center card (current project) */}
          <div className="relative z-30 scale-105 transition-all duration-500 w-96">
            <ProjectCard
              {...visibleProjects[1]}
              tags={visibleProjects[1].technologies}
            />
          </div>

          {/* Right card (next project) */}
          <div className="absolute right-0 transform translate-x-1/4 scale-90 opacity-70 transition-all duration-500 z-20 w-80">
            <ProjectCard
              {...visibleProjects[2]}
              tags={visibleProjects[2].technologies}
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </BlurFade>
  );
}

export default function Page() {
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
      <main className="flex flex-col min-h-[100dvh] space-y-6">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-4">
            <div className="gap-2 flex justify-between items-center">
              <div className="flex-col flex flex-1 space-y-1.5">
                {/* Name with waving hand */}
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl/text-6xl/none flex items-center">
                    {DATA.name.replace("👋", "")}
                    <span className="wave-hand ml-2 text-4xl">👋</span>
                  </h1>
                </BlurFade>

                <BlurFadeText
                  className="max-w-[600px] md:text-md text-zinc-300"
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
                  <social.icon className="size-4" />
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
<br></br>
<br></br>

          {/* Skills Section */}
        <section id="skills" className="mt-20"> 
          <div className="flex flex-col gap-y-8"> {/* Increased from gap-y-10 to gap-y-12 */}
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
        

        <br></br>
        <br></br>
        <br></br>
        {/* Projects Section with macOS-style Carousel */}
        <section id="projects" className="mt-20">
          <div className="space-y-10 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-4xl space-y-10 font-bold text-center text-zinc-200 mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-400 space-y-10 text-center text-lg max-w-2xl mx-auto">
                Explore my latest work and personal projects
              </p>
            </BlurFade>
            
            <ProjectCarousel projects={DATA.projects} />
          </div>
        </section>
      </main>
    </>
  );
}