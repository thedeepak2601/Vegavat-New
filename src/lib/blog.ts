export type PostBlock =
  | string // paragraph
  | { type: "sub"; text: string } // sub-heading (h3)
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; emoji?: string; title?: string; text: string }
  | { type: "stats"; items: { value: string; label: string }[] };

export type PostSection = { heading: string; body: PostBlock[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "why-every-business-needs-a-professional-website-2026",
    title: "Why Every Business Needs a Professional Website in 2026",
    excerpt: "Your storefront is no longer on a street, it's on a screen. If you don't have a professional website, you don't just miss customers, you lose them to someone who does.",
    category: "Web Development",
    author: "Vegavat Team",
    date: "June 26, 2026",
    readTime: "9 min read",
    image: "/blog/web-hero.webp",
    sections: [
      {
        heading: "Why your website matters in 2026",
        body: [
          "Let's be direct for a moment. If someone hears about your business today, whether through a referral, a social media post, or a passing conversation, the very first thing they will do is Google you. And if they can't find you, or worse, find something embarrassing, you've already lost them.",
          "A professional website isn't a luxury anymore. It's the entry point to every relationship your business will ever have with a new customer. In 2026, the question isn't \"should we have a website?\", it's \"is our website good enough to compete?\"",
          "In this post, we'll walk you through exactly why a professional website matters, what it should actually do for your business, and what happens to businesses that keep delaying it.",
          { type: "stats", items: [
            { value: "81%", label: "of consumers research online before buying" },
            { value: "75%", label: "judge credibility by website design" },
            { value: "3 sec", label: "before a visitor decides to stay or leave" },
            { value: "46%", label: "of Google searches seek local businesses" },
          ] },
        ],
      },
      {
        heading: "Your website is your first impression, and your last chance",
        body: [
          "Think about the last time you checked out a restaurant, a lawyer, a software company, or even a local plumber. You probably opened their website before calling them. You formed an opinion in about three seconds, sometimes less.",
          "That split-second judgment is based entirely on visual design, loading speed, and how clearly the business communicates what it does. A poorly made website says, without a single word, \"we don't take ourselves seriously enough to invest in this.\" And if a business doesn't take itself seriously, why should the customer?",
          { type: "quote", text: "You never get a second chance to make a first impression.", cite: "A lesson that is truer online than anywhere else" },
          "A professional website, built with intention and care, communicates something very different. It says: we are good at what we do, we respect your time, and you can trust us.",
        ],
      },
      {
        heading: "Your customers are searching for you right now",
        body: [
          "Google processes over 8.5 billion searches every single day. A meaningful chunk of those are people looking for a product, a service, or a solution, right now, with intent to buy.",
          "Search engine optimisation (SEO) is the discipline of making sure your website shows up when those searches happen. Without a website, you simply don't exist in that world. You cannot rank for keywords, appear in Google Maps results, or capture the customer who typed \"ERP software for manufacturing in Delhi\" or \"best web development company near me.\"",
          { type: "callout", emoji: "🔍", title: "Think about this for a moment.", text: "If your competitor has a website and you don't, every single Google search in your niche sends traffic their way. You're not just invisible, you're actively handing leads to someone else." },
          "A professionally built, SEO-optimised website turns Google into your best salesperson. Every blog post, service page and case study you publish becomes a piece of content that can attract organic traffic for months, sometimes years, after it's written.",
          { type: "image", src: "/blog/web-seo.jpg", alt: "Website search traffic and analytics", caption: "An SEO-ready website keeps bringing in organic traffic long after launch." },
        ],
      },
      {
        heading: "A website builds credibility that social media can't",
        body: [
          "You might be thinking: \"But I have an Instagram page. I have a Facebook profile. Isn't that enough?\" It isn't, and here's why.",
          "Social media profiles are spaces you rent. The platform owns the relationship. If a platform shuts down tomorrow, your 10,000 followers disappear overnight. You have no email list, no owned audience, no anchor. Social media is for discovery; a website is for trust.",
          { type: "table", head: ["Feature", "Professional Website", "Social Media Profile"], rows: [
            ["You own it completely", "Yes", "No, platform owns it"],
            ["Appears on Google", "Yes", "Limited"],
            ["Custom domain & branding", "Fully customisable", "Template-constrained"],
            ["Case studies & portfolios", "Yes", "Very limited"],
            ["Contact forms & lead capture", "Yes", "Basic at best"],
            ["Works without an algorithm", "Yes", "Algorithm-dependent"],
          ] },
          "When a potential client is deciding between two companies, they will visit both websites. The business with a cleaner, more professional, more informative website wins, almost every time.",
          { type: "image", src: "/blog/web-credibility.jpg", alt: "What makes a website credible", caption: "Design, clarity and trust signals decide who the customer believes." },
        ],
      },
      {
        heading: "Your website works 24/7, your sales team doesn't",
        body: [
          "Your office closes at 7pm. Your website doesn't.",
          "At 11:30 on a Tuesday night, a manufacturing company owner in Jaipur is frustrated with his current ERP system. He searches, he reads, he lands on a well-written blog post, he browses your services page, he fills out a contact form. By the time you arrive at work Wednesday morning, there's a qualified lead waiting in your inbox.",
          "That is the power of a website. It is a salesperson who never sleeps, never asks for a salary, and never has a bad day.",
          { type: "list", items: [
            "Answers common customer questions without a single phone call",
            "Showcases your portfolio and case studies at any hour",
            "Captures leads through forms, chatbots and call-to-actions",
            "Displays pricing, services and contact details instantly",
            "Builds familiarity before a single conversation takes place",
          ] },
        ],
      },
      {
        heading: "Your competitors already have one",
        body: [
          "In almost every industry today, if your competitor has a well-made website and you don't, you are not competing on a level playing field. You're bringing a notepad to a technology conference.",
          "The businesses that invested in professional websites early are now reaping the benefits of years of SEO authority, customer reviews and an established online presence. Every month you delay is a month of compound advantage you're handing to them.",
          { type: "quote", text: "The best time to build your website was two years ago. The second best time is today." },
        ],
      },
      {
        heading: "What a professional website should actually do",
        body: [
          "Here's where most businesses go wrong. They think a website is a brochure, a digital pamphlet that says \"we exist, here's our phone number.\" A professional website in 2026 should do far more than that.",
          { type: "sub", text: "It should convert visitors into leads" },
          "Every page should have a clear purpose, whether that's getting someone to fill a form, call a number, or download a resource. A website without clear calls-to-action is like a shop with no checkout counter.",
          { type: "sub", text: "It should load in under 3 seconds" },
          "Google's research shows that 53% of mobile visitors abandon a page if it takes more than 3 seconds to load. Speed is not a technical luxury, it is a business requirement.",
          { type: "sub", text: "It should work perfectly on mobile" },
          "As of 2026, over 63% of global web traffic comes from mobile devices. If your website looks broken on a phone, you're broken to the majority of your audience.",
          { type: "image", src: "/blog/web-mobile.jpg", alt: "Mobile-first ecommerce website on a smartphone", caption: "Most of your visitors arrive on a phone, so mobile comes first." },
          { type: "sub", text: "It should communicate trust signals" },
          "Client testimonials, case studies, certifications, team photos and a physical address signal that there are real, accountable people behind the website. They matter enormously for conversion.",
          { type: "image", src: "/blog/web-trust.jpg", alt: "Website testimonial section building trust", caption: "Reviews and testimonials turn interested visitors into confident buyers." },
          { type: "sub", text: "It should be built for SEO from day one" },
          "Proper heading structure, fast load times, relevant keywords, meta descriptions and internal linking are not afterthoughts. They are foundations. Getting them right from the start saves significant time and money later.",
        ],
      },
      {
        heading: "What does a website cost in 2026?",
        body: [
          "This is the question most business owners have in the back of their minds. The honest answer is: it depends on what you need. Here is a rough guide.",
          { type: "table", head: ["Website Type", "Typical Use Case", "Approx. Cost Range"], rows: [
            ["Simple informational site (3–5 pages)", "Local business, freelancer, startup", "₹25,000 – ₹60,000"],
            ["Business website with blog & SEO", "Growing company, B2B services", "₹60,000 – ₹1,50,000"],
            ["E-commerce website", "Online store with product catalogue", "₹1,00,000 – ₹3,00,000+"],
            ["Custom web application", "ERP, CRM, SaaS, portals", "₹2,00,000 – ₹10,00,000+"],
          ] },
          "The more important question isn't what a website costs, it's what not having one costs. If one new client is worth ₹50,000 to your business and a good website brings in two clients per month, the maths speaks for itself.",
          { type: "callout", emoji: "💡", title: "Pro tip from Vegavat:", text: "Don't start with the cheapest option hoping to \"upgrade later.\" A poorly built foundation is expensive to fix. Invest in quality once and build on top of it." },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        body: [
          { type: "sub", text: "Isn't a Facebook page good enough for a small business?" },
          "For discovery, maybe. For credibility, no. A Facebook page tells people you exist; a website tells them you're serious. You also don't own your Facebook audience, the platform does. A website gives you full control over your brand and your customer relationships.",
          { type: "sub", text: "How long does it take to build a professional website?" },
          "A simple business website typically takes 3 to 6 weeks with an experienced agency. A custom web application or e-commerce platform can take 2 to 6 months depending on complexity. A clear brief and quick content approvals from your side speed this up significantly.",
          { type: "sub", text: "Do I need to know how to code to manage my website?" },
          "No. Most professional websites today are built on content management systems like WordPress or custom admin panels that let you update text, images and blog posts without touching any code. A good agency will train you and hand over control.",
          { type: "sub", text: "What's the difference between a website and a web application?" },
          "A website is primarily informational, it tells people about your business. A web application has interactive functionality, like an ERP system, a customer portal, or an e-commerce platform where users log in, take actions and see personalised data.",
          { type: "sub", text: "How do I make sure my website appears on Google?" },
          "Search visibility comes from SEO: proper site structure, fast loading, relevant content and consistent publishing. A professional website built with SEO in mind starts appearing in search results within weeks, and ongoing blogging and link-building accelerate this over time.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "In 2026, a professional website isn't optional, it's the foundation of your business's credibility, visibility and growth. It's where your customers go to decide whether to trust you. It's the only marketing asset you truly own, and it works for you around the clock, seven days a week.",
          "The businesses that treat their website as a living, evolving tool, not a set-it-and-forget-it brochure, are the ones consistently winning new customers while their competitors wonder why the phone stopped ringing.",
          "If you don't have a professional website yet, or if your current one is outdated, slow, or embarrassing to show potential clients, now is the time to change that. Not next quarter. Now.",
        ],
      },
    ],
  },
  {
    slug: "what-is-artificial-intelligence",
    title: "What is Artificial Intelligence? A Complete Beginner's Guide",
    excerpt: "Learn what Artificial Intelligence is, how it works, its types, benefits, real-world applications, challenges and future trends, in this complete beginner's guide from Vegavat.",
    category: "Artificial Intelligence",
    author: "Vegavat Team",
    date: "June 26, 2026",
    readTime: "10 min read",
    image: "/blog/ai-guide.gif",
    sections: [
      {
        heading: "What is Artificial Intelligence?",
        body: [
          "Artificial Intelligence (AI) is one of the most transformative technologies of our time. From voice assistants and chatbots to recommendation systems and self-driving vehicles, AI is changing the way people live and businesses operate.",
          "Whether you're a business owner, student, developer, or simply curious about technology, understanding AI is becoming increasingly important. In this guide, we'll explain what Artificial Intelligence is, how it works, its different types, benefits, challenges, and why it is shaping the future of nearly every industry.",
          "Artificial Intelligence (AI) is the ability of computers and software systems to perform tasks that normally require human intelligence. These tasks include:",
          { type: "list", items: ["Learning from data", "Understanding language", "Recognizing images", "Making decisions", "Solving problems", "Predicting outcomes", "Automating repetitive work"] },
          "Instead of simply following fixed instructions, AI systems can analyze information, identify patterns, and improve their performance over time.",
        ],
      },
      {
        heading: "Why is AI Important?",
        body: [
          "AI is helping businesses become faster, smarter, and more efficient. Some major reasons why AI is important include:",
          { type: "list", items: ["Reduces manual work", "Improves decision-making", "Saves operational costs", "Enhances customer experience", "Automates repetitive tasks", "Increases productivity", "Enables 24/7 customer support", "Analyzes large amounts of data quickly"] },
          "Businesses of all sizes, from startups to global enterprises, are investing in AI to stay competitive.",
        ],
      },
      {
        heading: "How Does AI Work?",
        body: [
          "AI works through a combination of data, algorithms, and computing power. A simplified process looks like this:",
          { type: "list", ordered: true, items: ["Data Collection — AI gathers information from databases, sensors, websites, or user interactions.", "Data Processing — The data is cleaned and organized.", "Model Training — Algorithms learn patterns from the data.", "Prediction — The trained model makes decisions or predictions.", "Improvement — Feedback helps the AI improve over time."] },
          "The more high-quality data an AI system has, the better its performance is likely to be.",
        ],
      },
      {
        heading: "Types of Artificial Intelligence",
        body: [
          { type: "sub", text: "1. Narrow AI" },
          "Narrow AI is designed for a specific task. Examples include voice assistants, recommendation systems, spam filters and chatbots. This is the most common type of AI used today.",
          { type: "sub", text: "2. General AI" },
          "General AI refers to systems that could perform any intellectual task a human can. This remains a research goal and is not yet available in practical applications.",
          { type: "sub", text: "3. Super AI" },
          "Super AI is a hypothetical concept where machines surpass human intelligence across all domains. It is still a topic of research and discussion rather than reality.",
          { type: "image", src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80", alt: "Artificial intelligence concept", caption: "AI spans from today's task-specific systems to long-term research goals." },
        ],
      },
      {
        heading: "AI vs Machine Learning vs Deep Learning",
        body: [
          {
            type: "table",
            head: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
            rows: [
              ["Broad concept of intelligent systems", "A subset of AI that learns from data", "A subset of Machine Learning using neural networks"],
              ["Includes rule-based systems", "Learns patterns from data", "Learns complex patterns from large datasets"],
            ],
          },
        ],
      },
      {
        heading: "Real-World Applications of AI",
        body: [
          "Artificial Intelligence is already part of everyday life.",
          { type: "sub", text: "Healthcare" },
          { type: "list", items: ["Disease detection", "Medical imaging analysis", "Drug discovery", "Virtual health assistants"] },
          { type: "sub", text: "Finance" },
          { type: "list", items: ["Fraud detection", "Credit scoring", "Investment analysis", "Automated trading"] },
          { type: "sub", text: "Retail" },
          { type: "list", items: ["Product recommendations", "Inventory management", "Customer support", "Demand forecasting"] },
          { type: "sub", text: "Manufacturing" },
          { type: "list", items: ["Predictive maintenance", "Quality inspection", "Robotics", "Process automation"] },
          { type: "sub", text: "Education & Transportation" },
          { type: "list", items: ["Personalized learning and AI tutors", "Automated grading", "Route optimization and fleet management", "Driver assistance systems"] },
          { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80", alt: "AI analytics dashboard", caption: "AI turns raw data into decisions across every department." },
        ],
      },
      {
        heading: "Benefits of Artificial Intelligence",
        body: [
          { type: "sub", text: "Increased Productivity" },
          "AI automates repetitive tasks so employees can focus on more valuable work.",
          { type: "sub", text: "Better Decision-Making" },
          "AI analyzes large datasets and identifies patterns that humans may miss.",
          { type: "sub", text: "Cost Savings" },
          "Automation reduces operational costs and minimizes errors.",
          { type: "sub", text: "Improved Customer Experience" },
          "AI-powered chatbots and recommendation systems provide faster and more personalized support.",
          { type: "sub", text: "Higher Accuracy" },
          "AI systems can process data consistently and reduce the likelihood of human error in many routine tasks.",
        ],
      },
      {
        heading: "Challenges of AI",
        body: [
          "Despite its advantages, AI also comes with challenges:",
          { type: "list", items: ["Data privacy concerns", "Security risks", "Bias in training data", "High implementation costs", "Lack of skilled professionals", "Ethical considerations", "Integration with existing systems"] },
          "Organizations should adopt AI responsibly and with appropriate governance.",
        ],
      },
      {
        heading: "Industries Using AI",
        body: [
          "Artificial Intelligence is making an impact across many sectors:",
          { type: "list", items: ["Healthcare", "Banking & Finance", "Manufacturing", "Retail & E-commerce", "Logistics", "Agriculture", "Education", "Real Estate", "Government", "IT Services", "Telecommunications", "Entertainment"] },
        ],
      },
      {
        heading: "Future of AI",
        body: [
          "The future of AI is expected to bring:",
          { type: "list", items: ["Smarter business automation", "AI-powered software assistants", "Autonomous systems", "Advanced healthcare diagnostics", "Improved cybersecurity", "Personalized education", "Faster scientific research", "More efficient enterprise operations"] },
          "Businesses that embrace AI thoughtfully will be better positioned to innovate and compete.",
          { type: "image", src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80", alt: "The future of artificial intelligence", caption: "Adopting AI responsibly is becoming essential for long-term success." },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        body: [
          { type: "sub", text: "What is Artificial Intelligence in simple words?" },
          "Artificial Intelligence enables computers to perform tasks that usually require human intelligence, such as learning, reasoning, and decision-making.",
          { type: "sub", text: "Is AI the same as Machine Learning?" },
          "No. Machine Learning is a branch of AI that focuses on learning patterns from data.",
          { type: "sub", text: "Is AI replacing human jobs?" },
          "AI is automating some repetitive tasks while also creating new roles in AI development, data analysis, cybersecurity, and other fields. In many cases, it augments human work rather than replacing it entirely.",
          { type: "sub", text: "Can small businesses use AI?" },
          "Yes. Many affordable AI tools are available for customer support, marketing, analytics, and business automation.",
          { type: "sub", text: "Is AI safe?" },
          "AI can provide significant benefits when designed, deployed, and monitored responsibly with attention to privacy, security, and fairness.",
        ],
      },
      {
        heading: "Final Thoughts",
        body: [
          "Artificial Intelligence is no longer a technology of the future, it is already helping organizations improve efficiency, make better decisions, and deliver better customer experiences.",
          "Whether you're running a startup or a large enterprise, understanding AI is the first step toward identifying where it can create value for your business. As AI continues to evolve, staying informed and adopting it responsibly will be essential for long-term success.",
        ],
      },
    ],
  },
  {
    slug: "convert-store-visitors-into-customers",
    title: "How to convert your e-store visitors into customers",
    excerpt: "Driving traffic is no longer the primary challenge for ecommerce businesses. Converting that traffic is. Here's how to turn browsers into buyers.",
    category: "E-commerce",
    author: "Vegavat Team",
    date: "May 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Traffic isn't the problem",
        body: [
          "Over 288 million people shop online in the United States alone, making it one of the most competitive ecommerce markets in the world. As online shopping continues to grow, thousands of brands compete daily for the same customer attention.",
          "Driving traffic is no longer the primary challenge for ecommerce businesses. Most brands actively invest in paid advertising, search optimization, influencer partnerships and content. The real challenge is conversion, turning that hard-won traffic into paying customers.",
        ],
      },
      {
        heading: "Optimize for conversion",
        body: [
          "Start with page speed and a frictionless checkout. Every additional second of load time and every extra form field measurably reduces conversion. Then layer in social proof, clear value propositions and personalized recommendations to nudge visitors toward purchase.",
        ],
      },
      {
        heading: "Measure and iterate",
        body: [
          "Finally, measure everything. A/B test your landing pages, track funnel drop-off and continuously iterate. Small, data-driven improvements compound into significant revenue gains over time.",
        ],
      },
    ],
  },
  {
    slug: "why-collaboration-feels-hard",
    title: "Why collaboration feels hard, and how to fix the friction",
    excerpt: "Modern teams juggle dozens of tools. We break down where collaboration friction comes from and how a unified workspace removes it.",
    category: "Productivity",
    author: "Vegavat Team",
    date: "June 19, 2026",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Where the friction comes from",
        body: [
          "Collaboration breaks down when context is scattered across too many disconnected tools. Information lives in silos, and people spend more time finding work than doing it.",
        ],
      },
      {
        heading: "How a unified workspace fixes it",
        body: [
          "The fix is consolidation and clarity: a single source of truth, transparent workflows and async-friendly communication that respects deep work. When everyone can see the same board, friction melts away.",
        ],
      },
    ],
  },
  {
    slug: "state-of-mobile-app-security-2026",
    title: "The state of mobile app security in 2026",
    excerpt: "Key insights on protecting user data, securing APIs and building trust into every layer of your mobile applications.",
    category: "Security",
    author: "Vegavat Team",
    date: "June 02, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Why mobile security matters",
        body: [
          "Mobile security is no longer optional. With biometric data, payments and personal information flowing through apps, a single vulnerability can erode years of trust.",
        ],
      },
      {
        heading: "What strong app security covers",
        body: [
          "We cover secure storage, certificate pinning, API hardening and the testing practices that keep production apps resilient against modern threats.",
        ],
      },
    ],
  },
  {
    slug: "ai-agents-for-business-workflows",
    title: "AI agents: turning prompts into real business workflows",
    excerpt: "Autonomous AI agents are moving from demos to production. Here's how businesses are wiring them into real operations.",
    category: "Artificial Intelligence",
    author: "Vegavat Team",
    date: "June 12, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "From demos to production",
        body: [
          "AI agents can now plan, call tools and complete multi-step tasks with minimal supervision. The opportunity is enormous, but so is the need for guardrails.",
        ],
      },
      {
        heading: "Patterns that actually work",
        body: [
          "We share patterns for grounding agents in your data, keeping a human in the loop and measuring real ROI before scaling across the organization.",
        ],
      },
    ],
  },
  {
    slug: "designing-for-conversion",
    title: "Designing for conversion: UX principles that pay off",
    excerpt: "Great UX isn't decoration, it's revenue. These research-backed principles turn good designs into high-converting products.",
    category: "Design",
    author: "Vegavat Team",
    date: "May 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "Design for clarity",
        body: [
          "Conversion-focused design starts with clarity. Reduce cognitive load, guide attention with hierarchy and remove every unnecessary step between intent and action.",
        ],
      },
      {
        heading: "De-risk before development",
        body: [
          "We walk through wireframing, prototyping and usability testing, and how each stage de-risks your product before development begins.",
        ],
      },
    ],
  },
  {
    slug: "scaling-startup-engineering-teams",
    title: "Scaling a startup engineering team without breaking velocity",
    excerpt: "Hiring fast is easy to get wrong. Learn how dedicated teams and clear process keep velocity high as you grow.",
    category: "Engineering",
    author: "Vegavat Team",
    date: "April 30, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        heading: "The fast-hiring trap",
        body: [
          "Growing too fast can tank productivity. The key is onboarding structure, clear ownership and a dedicated team model that integrates seamlessly with your in-house staff.",
        ],
      },
      {
        heading: "Process that keeps velocity",
        body: [
          "We explain engagement models, communication cadence and quality control that let you scale capacity on demand without losing momentum.",
        ],
      },
    ],
  },
];

/** Stable URL-safe id for a section heading (used by the Table of Contents). */
export function sectionId(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
