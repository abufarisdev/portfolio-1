import { notFound } from 'next/navigation';
import Link from 'next/link';

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
      Walking into a hackathon for the first time can feel overwhelming. The energy in the room, the ideas bouncing off every corner, the ticking clock… it all creates an atmosphere that pushes you to go beyond what you thought you could do. And that’s exactly what happened to me.</p>
      
      <h2>The Preparation</h2>
      <p>In the week leading up to the hackathon, I decided to brush up on my React and Next.js skills, while also diving deeper into API integrations and data visualization tools. I knew hackathons were all about building fast and learning on the fly, but I still wanted to walk in with some ammo in my toolkit.
      <br></br>
      Still, nothing could have prepared me for how much I would actually learn under pressure—from debugging at 2 AM to quickly Googling obscure errors and learning brand-new libraries on the spot.</p>
      
      <h2>The Project – Crypton 💹</h2>
      <p>Our team brainstormed for hours before locking down the idea: <strong>Crypton</strong>, a cryptocurrency dashboard that allows users to track live prices, analyze trends, and manage their digital portfolio—all in a clean, intuitive UI.
      <br></br>
      We wanted to build something that wasn’t just a flashy prototype, but a tool people could actually imagine using. With the rise of crypto, it felt like a perfect problem statement: <em>How do you simplify crypto tracking for everyday users without overwhelming them with data?</em></p>

      <h2>My Role</h2>
      <p>I took on the front-end development, using Next.js + Tailwind CSS to design a sleek dashboard experience. Here’s what I worked on:
      <br></br>
      <strong>Landing Page</strong> – A simple but bold first impression with the name Crypton front and center.
      <br></br>
      <strong>Live Price Tracker</strong> – Integrated real-time cryptocurrency APIs to fetch the latest prices of popular tokens.
      <br></br>
      <strong>Charts & Visualizations</strong> – Used chart libraries to build clean graphs showing market trends, volume, and percentage changes.
      <br></br>
      <strong>Portfolio Section</strong> – Allowed users to input their holdings and instantly see their overall gains/losses.</p>

      <h2>The Challenges</h2>
      <p>Of course, it wasn’t all smooth sailing. We faced plenty of roadblocks:
      <br></br>
      <strong>Time Pressure ⏳</strong> – Building a functional product in under 36 hours is brutal.
      <br></br>
      <strong>API Rate Limits</strong> – Some crypto APIs were strict on free-tier usage, which forced us to optimize our calls.
      <br></br>
      <strong>UI Consistency</strong> – With multiple people coding at once, keeping a consistent design system was tricky.
      <br></br>
      But these challenges were exactly what made the hackathon such a valuable learning experience. Every bug we squashed and every obstacle we overcame felt like a mini-victory.</p>

      <h2>The Outcome</h2>
      <p>By the end of the hackathon, we had a working prototype of Crypton that we were proud to demo. It wasn’t perfect, but it was functional, sleek, and most importantly—it told a story of what we could build together in just two days.
      <br></br>
      Even better, presenting it to the judges gave me my first taste of pitching a product to an audience. Standing there, explaining the features and vision behind Crypton, I realized this is exactly the kind of work I want to keep doing.</p>

      <h2>What I Learned</h2>
      <ul>
        <li><strong>Teamwork is everything.</strong> Communication and dividing tasks effectively can make or break your project.</li>
        <li><strong>Perfection isn’t the goal.</strong> A working MVP (minimum viable product) is worth more than chasing flawless code.</li>
        <li><strong>Hackathons are about growth.</strong> I walked in with React knowledge but left with experience in APIs, charting libraries, and rapid prototyping.</li>
      </ul>

      <h2>What’s Next?</h2>
      <p>This first hackathon lit a fire in me. I don’t just want to code—I want to solve problems through products. Crypton was just the beginning.
      <br></br>
      I’ll keep polishing it, maybe even turn it into a side project with more advanced features like AI-powered predictions, wallet integrations, and multi-chain support.
      <br></br>
      But beyond the product itself, this experience reminded me of why I started coding in the first place: <em>to build things that make an impact.</em></p>

      <p>✨ <strong>Final Thoughts:</strong><br></br>
      If you’ve ever thought about joining a hackathon—just do it. You’ll walk out exhausted but inspired, with new skills, new friends, and maybe even your first real product.
      <br></br>
      For me, Crypton wasn’t just a hackathon project—it was the first milestone in my journey into tech. 🚀</p>
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

// Function to get category-specific styles
const getCategoryStyles = (category: string) => {
  switch (category) {
    case "Career":
      return {
        bg: "bg-[#5d7e6d]/20",
        text: "text-[#a3cfbb]",
        border: "border-[#5d7e6d]/30",
      };
    case "Design":
      return {
        bg: "bg-[#b46a55]/20",
        text: "text-[#e8b4a8]",
        border: "border-[#b46a55]/30",
      };
    case "Open Source":
      return {
        bg: "bg-[#7d8c69]/20",
        text: "text-[#c5d0b4]",
        border: "border-[#7d8c69]/30",
      };
    default:
      return {
        bg: "bg-[#8a7561]/20",
        text: "text-[#d6c8b8]",
        border: "border-[#8a7561]/30",
      };
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const categoryStyle = getCategoryStyles(post.category);

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#1a120b] via-[#2a1c11] to-[#1a120b]">
      <article className="max-w-2xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-amber-200/70 hover:text-amber-300 mb-6 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to all posts
        </Link>

        {/* Category badge */}
        <div className="mb-5">
          <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${categoryStyle.bg} ${categoryStyle.text} ${categoryStyle.border}`}>
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-amber-50 mb-5 font-serif">
          {post.title}
        </h1>

        {/* Meta information */}
        <div className="flex items-center text-amber-200/70 text-xs mb-6">
          <span className="flex items-center mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>

        {/* Featured image */}
        <div className="rounded-xl overflow-hidden mb-8 border border-amber-800/20 shadow-md">
          <div
            className="h-60 w-full bg-gradient-to-br from-amber-900/10 to-amber-800/10 relative"
            style={{
              backgroundImage: `url(${post.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b]/50 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="content-container text-amber-100/80">
          <div
            className="text-sm leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<p>/g, '<p class="mb-4">')
                .replace(/<h2>/g, '<h2 class="text-xl font-semibold text-amber-50 mt-8 mb-4 font-serif">')
            }}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800/20 my-10"></div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-amber-200/70 mb-5 text-sm">Enjoyed this article?</p>
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-800/30 text-amber-200 font-medium hover:bg-amber-800/40 transition-all duration-300 border border-amber-700/30 text-sm group"
          >
            Read more articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Author bio section */}
        <div className="mt-12 p-5 bg-amber-950/20 rounded-xl border border-amber-800/20">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-700 to-amber-800 flex items-center justify-center text-amber-100 font-bold text-xs mr-3">
              A
            </div>
            <div>
              <h3 className="text-sm font-semibold text-amber-100">About the Author</h3>
              <p className="text-amber-200/70 mt-0.5 text-xs">Passionate developer sharing experiences and learnings from the tech journey.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}