"use client";

import { useState } from "react";
import ContactForm from "@/components/contact-form";
import { DATA } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <main className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${DATA.contact.email}`} className="text-muted-foreground hover:text-primary">
                      {DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href={`tel:${DATA.contact.tel}`} className="text-muted-foreground hover:text-primary">
                      {DATA.contact.tel}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{DATA.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold mb-4">Follow me on</h3>
                <div className="flex gap-4">
                  {DATA.contact.social.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}