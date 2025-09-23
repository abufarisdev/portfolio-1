import { notFound } from 'next/navigation';
import BlogPostClient from '@/components/blog-post-client';

const blogPosts = [
  {
    title: "my first-ever hackathon!🚀",
    excerpt: "How I started coding and where I'm heading next...",
    date: "Sept 2025",
    slug: "journey-into-tech",
    category: "Career",
    readTime: "5 min read",
    thumbnail: "/blog/hackathonexp.jpg",
    content: `
      <p>Last weekend, I participated in my very first hackathon—and honestly, it was one of the most intense, exciting, and rewarding experiences of my journey into tech so far.
      <br></br>
      Walking into a hackathon for the first time can feel overwhelming. The energy in the room, the ideas bouncing off every corner, the ticking clock… it all creates an atmosphere that pushes you to go beyond what you thought you could do. And that's exactly what happened to me.</p>
      
      <h2>The Preparation</h2>
      <p>In the week leading up to the hackathon, I decided to brush up on my React and Next.js skills, while also diving deeper into API integrations and data visualization tools. I knew hackathons were all about building fast and learning on the fly, but I still wanted to walk in with some ammo in my toolkit.
      <br></br>
      Still, nothing could have prepared me for how much I would actually learn under pressure—from debugging at 2 AM to quickly Googling obscure errors and learning brand-new libraries on the spot.</p>
      
      <h2>The Project – Crypton 💹</h2>
      <p>Our team brainstormed for hours before locking down the idea: <strong>Crypton</strong>, a cryptocurrency dashboard that allows users to track live prices, analyze trends, and manage their digital portfolio—all in a clean, intuitive UI.
      <br></br>
      We wanted to build something that wasn't just a flashy prototype, but a tool people could actually imagine using. With the rise of crypto, it felt like a perfect problem statement: <em>How do you simplify crypto tracking for everyday users without overwhelming them with data?</em></p>

      <h2>My Role</h2>
      <p>I took on the front-end development, using Next.js + Tailwind CSS to design a sleek dashboard experience. Here's what I worked on:
      <br></br>
      <strong>Landing Page</strong> – A simple but bold first impression with the name Crypton front and center.
      <br></br>
      <strong>Live Price Tracker</strong> – Integrated real-time cryptocurrency APIs to fetch the latest prices of popular tokens.
      <br></br>
      <strong>Charts & Visualizations</strong> – Used chart libraries to build clean graphs showing market trends, volume, and percentage changes.
      <br></br>
      <strong>Portfolio Section</strong> – Allowed users to input their holdings and instantly see their overall gains/losses.</p>

      <h2>The Challenges</h2>
      <p>Of course, it wasn't all smooth sailing. We faced plenty of roadblocks:
      <br></br>
      <strong>Time Pressure ⏳</strong> – Building a functional product in under 36 hours is brutal.
      <br></br>
      <strong>API Rate Limits</strong> – Some crypto APIs were strict on free-tier usage, which forced us to optimize our calls.
      <br></br>
      <strong>UI Consistency</strong> – With multiple people coding at once, keeping a consistent design system was tricky.
      <br></br>
      But these challenges were exactly what made the hackathon such a valuable learning experience. Every bug we squashed and every obstacle we overcame felt like a mini-victory.</p>

      <h2>The Outcome</h2>
      <p>By the end of the hackathon, we had a working prototype of Crypton that we were proud to demo. It wasn't perfect, but it was functional, sleek, and most importantly—it told a story of what we could build together in just two days.
      <br></br>
      Even better, presenting it to the judges gave me my first taste of pitching a product to an audience. Standing there, explaining the features and vision behind Crypton, I realized this is exactly the kind of work I want to keep doing.</p>

      <h2>What I Learned</h2>
      <ul>
        <li><strong>Teamwork is everything.</strong> Communication and dividing tasks effectively can make or break your project.</li>
        <li><strong>Perfection isn't the goal.</strong> A working MVP (minimum viable product) is worth more than chasing flawless code.</li>
        <li><strong>Hackathons are about growth.</strong> I walked in with React knowledge but left with experience in APIs, charting libraries, and rapid prototyping.</li>
      </ul>

      <h2>What's Next?</h2>
      <p>This first hackathon lit a fire in me. I don't just want to code—I want to solve problems through products. Crypton was just the beginning.
      <br></br>
      I'll keep polishing it, maybe even turn it into a side project with more advanced features like AI-powered predictions, wallet integrations, and multi-chain support.
      <br></br>
      But beyond the product itself, this experience reminded me of why I started coding in the first place: <em>to build things that make an impact.</em></p>

      <p>✨ <strong>Final Thoughts:</strong><br></br>
      If you've ever thought about joining a hackathon—just do it. You'll walk out exhausted but inspired, with new skills, new friends, and maybe even your first real product.
      <br></br>
      For me, Crypton wasn't just a hackathon project—it was the first milestone in my journey into tech. 🚀</p>
  `,
  },
  {
    title: "Building My Portfolio from Scratch 🎨",
    excerpt: "A look behind the scenes of my portfolio design process.",
    date: "Sept 2025",
    slug: "portfolio-design",
    category: "Design",
    readTime: "7 min read",
    thumbnail: "/api/placeholder/400/200",
    content: `
      <p>Designing and building my portfolio was an incredible journey of self-reflection and technical growth. I wanted to create something that truly represented my skills and personality.</p>
      
      <h2>Design Inspiration</h2>
      <p>I drew inspiration from minimalist design principles combined with subtle animations to create a clean yet engaging experience.</p>
      
      <h2>Technical Stack</h2>
      <p>I chose Next.js for its excellent performance and SEO capabilities, combined with Tailwind CSS for rapid styling.</p>
    `,
  },
  {
    title: "Notes from GSSoC 💻",
    excerpt: "Lessons I learned contributing to open source...",
    date: "Aug 2025",
    slug: "gssoc-notes",
    category: "Open Source",
    readTime: "6 min read",
    thumbnail: "/api/placeholder/400/200",
    content: `
      <p>Participating in Girl Script Summer of Code was a transformative experience that introduced me to the world of open-source contribution.</p>
      
      <h2>Getting Started</h2>
      <p>The first pull request is always the hardest. I spent hours reading documentation and understanding the codebase before making my first contribution.</p>
      
      <h2>Key Learnings</h2>
      <p>I learned about version control best practices, code reviews, and the importance of clear documentation.</p>
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}