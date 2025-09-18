"use client";

import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";

// Locally trainable Q&A
const trainedResponses: { [key: string]: string } = {
  hi: "Hey! I'm Abu's bot 🤖. Ask me anything about him!",
  hello: "Hello there! I'm here to tell you about Abu.",
  projects: "Abu has worked on React, Next.js, and 3D portfolio projects.",
  skills: "He knows Java, Python, C, React, Tailwind CSS, and loves learning new tech.",
  contact: "You can reach Abu via LinkedIn or email. Check the contact section!",
  gdg: "Abu is a proud student member of GDG Kolkata, actively learning and contributing.",
};

export default function AboutMeBot() {
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hi! I'm Abu's bot 🤖. Ask me anything about him!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    const key = input.toLowerCase().trim();
    if (trainedResponses[key]) {
      setMessages((prev) => [...prev, { from: "bot", text: trainedResponses[key] }]);
    } else {
      fetchChatGPTResponse(input);
    }

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="max-w-md mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-4 shadow-lg">
      <div className="flex flex-col gap-3 max-h-96 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-2 ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
          >
            {msg.from === "bot" && <Avatar className="w-8 h-8">🤖</Avatar>}
            <div
              className={`px-4 py-2 rounded-xl max-w-[70%] break-words ${
                msg.from === "bot" ? "bg-indigo-600 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2 justify-start"
          >
            <Avatar className="w-8 h-8">🤖</Avatar>
            <div className="px-4 py-2 rounded-xl max-w-[70%] break-words bg-indigo-600 text-white">
              Typing...
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
