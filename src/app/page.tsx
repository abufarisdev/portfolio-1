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

const BLUR_FADE_DELAY = 0.04;

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

              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-32 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
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
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="flex justify-center mb-6">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>

            {/* Experience */}
            <TabsContent value="experience">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="space-y-4 w-full">
                  {DATA.work.map((work) => (
                    <ResumeCard
                      key={work.company}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                    />
                  ))}
                </div>
              </BlurFade>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="space-y-4 w-full">
                  {DATA.education.map((edu) => (
                    <ResumeCard
                      key={edu.school}
                      logoUrl={edu.logoUrl}
                      altText={edu.school}
                      title={edu.school}
                      subtitle={edu.degree}
                      href={edu.href}
                      badges={edu.badges}
                      period={`${edu.start} - ${edu.end ?? "Present"}`}
                      description={edu.description}
                    />
                  ))}
                </div>
              </BlurFade>
            </TabsContent>
          </Tabs>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-3xl font-bold">skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge
                    key={skill}
                    className="relative overflow-hidden transition-all duration-500 hover:text-white
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500
                    before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                    hover:scale-105"
                  >
                    <span className="relative z-10">{skill}</span>
                  </Badge>
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

      {/* Add CSS for waving animation */}
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
      `}</style>
    </>
  );
}
