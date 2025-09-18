"use client";

import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Minus, MessageCircle } from "lucide-react";

// Locally trainable Q&A
const trainedResponses: { [key: string]: string } = {
  hi: "Hey! I'm Abu's bot 🤖. Ask me anything about him!",
  hello: "Hello there! I'm here to tell you about Abu.",
  projects: "Abu has worked on React, Next.js, and 3D portfolio projects.",
  skills: "He knows Java, Python, C, React, Tailwind CSS, and loves learning new tech.",
  contact: "You can reach Abu via LinkedIn or email. Check the contact section!",
  gdg: "Abu is a proud student member of GDG Kolkata, actively learning and contributing.",
  salary: "Abu's expected salary range depends on the role and company, but he values learning opportunities most.",
  hobbies: "Abu enjoys chess, football, building projects, and exploring new tech stacks.",
  "dogs or cats": "He loves both, but leans slightly towards dogs 🐶.",
  "tea or coffee": "Coffee ☕ for coding marathons, but tea 🍵 for chill evenings.",
};

interface AboutMeBotProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export default function AboutMeBot({ forceOpen = false, onClose }: AboutMeBotProps) {
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hi! I'm Abu's bot 🤖. Ask me anything about him!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(forceOpen);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync with forceOpen prop
  useEffect(() => {
    if (forceOpen) {
      setOpen(true);
    }
  }, [forceOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }
  };

  const fetchChatGPTResponse = async (question: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.answer }]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "Oops, something went wrong 😅" }]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = (customInput?: string) => {
    const finalInput = customInput ?? input;
    if (!finalInput.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: finalInput }]);

    const key = finalInput.toLowerCase().trim();
    if (trainedResponses[key]) {
      setMessages((prev) => [...prev, { from: "bot", text: trainedResponses[key] }]);
    } else {
      fetchChatGPTResponse(finalInput);
    }

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (!open) {
    return (
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleOpen}
        className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg 
                   bg-gradient-to-r from-gray-900 to-gray-800 text-white fixed bottom-4 right-4 z-50"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative max-w-sm w-80 bg-white/70 dark:bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-white/10">
        {/* Minimize Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -left-3 w-7 h-7 flex items-center justify-center rounded-full 
                     bg-gray-200 dark:bg-zinc-700 hover:scale-110 transition"
        >
          <Minus className="w-4 h-4 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Messages Container */}
        <div 
          className="flex flex-col gap-3 h-72 overflow-y-auto mb-3 pr-1 
                     scrollbar-thin scrollbar-thumb-gray-400/30 dark:scrollbar-thumb-gray-700/40"
        >
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex gap-2 ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
            >
              {msg.from === "bot" && (
                <Avatar className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex items-center justify-center">
                  🤖
                </Avatar>
              )}
              <div
                className={`px-4 py-2 rounded-xl max-w-[70%] break-words text-sm shadow-md ${
                  msg.from === "bot"
                    ? "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 border border-gray-700/40"
                    : "bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-gray-200 border border-transparent dark:border-white/10"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-2 justify-start"
            >
              <Avatar className="w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex items-center justify-center">
                🤖
              </Avatar>
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 text-sm">
                <motion.span
                  className="flex gap-1"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </motion.span>
              </div>
            </motion.div>
          )}
          
          {/* Invisible element for auto-scrolling */}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        <div className="flex flex-wrap gap-2 mb-2">
          {["What's your expected salary range?", "What are your hobbies?", "Dogs or cats?", "Tea or coffee?"].map(
            (q, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(q)}
                className="px-3 py-1 rounded-lg text-xs bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-900 dark:text-gray-200 transition"
              >
                {q}
              </button>
            )
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-xl text-sm transition-colors
                       bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500
                       dark:bg-zinc-800 dark:text-white dark:placeholder-gray-400"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => sendMessage()}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm hover:shadow-md hover:shadow-gray-900/40 transition-all"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
}