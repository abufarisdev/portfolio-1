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

      {/* Main page content */}
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between items-center">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                  yOffset={8}
                  text={DATA.name}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-md"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <div className="flex items-center gap-1 text-sm text-white font-bold">
                    <span className="leading-none">📍</span>
                    <Link href={DATA.locationLink} target="_blank" className="hover:underline">
                      {DATA.location}
                    </Link>
                  </div>

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
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">about me :D</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="max-w-full text-pretty text-sm">
              {DATA.summary}
            </Markdown>
            <div className="flex flex-wrap gap-4 mt-4">
              {DATA.contact.social.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-1 justify-center items-center p-1 rounded-md hover:bg-gray-100 transition-opacity"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </BlurFade>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
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

        {/* Projects Section */}
        <section id="projects">
          <div className="space-y-4 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-bold">featured projects</h2>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade key={project.title} delay={BLUR_FADE_DELAY * id * 0.05}>
                  <ProjectCard
                    href={project.href}
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
    </>
  );
}
