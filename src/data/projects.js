// ─────────────────────────────────────────────────────────────
// Central project data. To add a new project in the future:
// 1. Drop screenshots into /public/images/projects/
// 2. Add a new object to this array below.
// That's it — the grid and detail pages pick it up automatically.
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    slug: 'boibazaar',
    name: 'BoiBazaar',
    hash: 'a3f9c2',
    tagline: 'A textbook exchange marketplace for Bangladeshi university students.',
    cover: '/images/projects/boibazaar-home.png',
    gallery: [
      '/images/projects/boibazaar-home.png',
      '/images/projects/boibazaar-explore.png',
      '/images/projects/boibazaar-details.png',
    ],
    techStack: ['Next.js 14', 'Express.js', 'MongoDB', 'Firebase Auth', 'Tailwind CSS'],
    mainStack: 'Next.js 14 + Express + MongoDB + Firebase Auth',
    description:
      "BoiBazaar connects students across Bangladeshi universities to buy and sell secondhand textbooks, notes, and study guides at a fraction of bookstore prices. It carries a distinctive library index-card and ledger visual identity instead of a generic marketplace look, with book listings, condition tags, seller info, and a review system built in.",
    challenges:
      "Integrating Firebase Authentication with a Next.js 14 App Router setup was tricky at first — making sure the user's auth state persisted correctly across server and client components without flickering or unauthorized redirects. Designing the library index-card aesthetic from scratch also meant custom-building several components rather than reaching for a pre-made UI template.",
    improvements:
      'Planning to add real-time chat between buyers and sellers, an in-app rating and review system tied to completed transactions, and a recommendation engine that suggests textbooks based on a student\'s department and semester.',
    liveLink: 'https://boibazaar-client.vercel.app',
    githubLink: 'https://github.com/fahim3101/boibazaar-client',
  },
  {
    slug: 'lifeline',
    name: 'Lifeline',
    hash: 'e7c145',
    tagline: 'A blood donation platform connecting donors with patients in urgent need.',
    cover: '/images/projects/lifeline-home.png',
    gallery: [
      '/images/projects/lifeline-home.png',
      '/images/projects/lifeline-dashboard.png',
      '/images/projects/lifeline-form.png',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Recharts'],
    mainStack: 'MERN Stack + Stripe + ImageBB',
    description:
      'Lifeline connects willing blood donors across Bangladesh with patients and families in urgent need. The platform supports three distinct roles — Admin, Volunteer, and Donor — each with its own dashboard, alongside donation request management, funding via Stripe, and image uploads through ImageBB.',
    challenges:
      'Designing a clean role-based access system for three different roles required careful route protection and backend authorization logic, since each role needed a different dashboard and permission set. Integrating Stripe for donation-related payments alongside ImageBB for image uploads also meant coordinating two separate third-party services smoothly within one flow.',
    improvements:
      "Future plans include an SMS/email alert system to notify nearby donors during urgent blood requests, a donor eligibility tracker based on last donation date, and richer analytics for Volunteers to visualize donation trends over time using Recharts.",
    liveLink: 'https://blood-donation-client-indol.vercel.app',
    githubLink: 'https://github.com/fahim3101/blood-donation-client',
  },
  {
    slug: 'drivefleet',
    name: 'DriveFleet',
    hash: 'b19d84',
    tagline: 'A premium car rental platform with real-time booking and fleet management.',
    cover: '/images/projects/drivefleet-home.png',
    gallery: [
      '/images/projects/drivefleet-home.png',
      '/images/projects/drivefleet-explore.png',
      '/images/projects/drivefleet-details.png',
    ],
    techStack: ['React', 'Vite', 'Firebase Auth', 'Node.js', 'Express', 'MongoDB Atlas'],
    mainStack: 'React (Vite) + Firebase Auth + Node.js + Express + MongoDB Atlas',
    description:
      'DriveFleet lets users explore, book, and manage a fleet of rental vehicles — from economy cars to trucks and buses — with real-time availability, seat capacity, pickup locations, and daily rates. Car owners can list their own vehicles for rent directly on the platform.',
    challenges:
      "One major challenge was handling MongoDB Atlas connection stability on Vercel's serverless environment — cold starts kept causing connection timeouts until a lazy-connection middleware pattern was implemented. Local development also faced intermittent MongoDB SRV/DNS resolution failures caused by ISP-level filtering, which required switching to direct shard connection strings as a workaround.",
    improvements:
      'Planning to add an online payment gateway for booking deposits, a real-time car availability calendar, and an admin analytics dashboard to track fleet utilization and revenue.',
    liveLink: 'https://drivefleet-client-nine.vercel.app',
    githubLink: 'https://github.com/fahim3101/drivefleet-client',
  },
  {
    slug: 'crowdfundhub',
    name: 'CrowdFundHub',
    hash: 'f52c0a',
    tagline: 'A credit-based crowdfunding platform for creators and supporters.',
    cover: '/images/projects/crowdfundhub-home.png',
    gallery: [
      '/images/projects/crowdfundhub-home.png',
      '/images/projects/crowdfundhub-explore.png',
      '/images/projects/crowdfundhub-dashboard.png',
      '/images/projects/crowdfundhub-addcampaign.png',
    ],
    techStack: ['React', 'Vite', 'Express.js', 'MongoDB', 'Firebase Auth', 'Stripe'],
    mainStack: 'React (Vite) + Express + MongoDB + Firebase Auth + Stripe',
    description:
      'CrowdFundHub is a crowdfunding platform where Creators launch campaigns for projects, causes, and products, and Supporters back them using platform credits. It features three role-based dashboards, a full campaign lifecycle with admin review, a credit-hold contribution flow, and Stripe-powered credit purchases.',
    challenges:
      "Building the credit-hold contribution flow was the trickiest part — credits had to be deducted the instant a supporter contributed but only fully confirmed or refunded based on the creator's later decision, which meant carefully handling partial and failed states without corrupting a user's balance. Coordinating three distinct role-based dashboards, each with its own permissions and UI, also required a solid authorization structure on both frontend and backend.",
    improvements:
      'Future plans include campaign milestone tracking with visual progress updates, a rewards and perks tier system for supporters at different contribution levels, and real-time chat between creators and supporters for campaign-related questions.',
    liveLink: 'https://crowd-fund-hub-client.vercel.app',
    githubLink: 'https://github.com/fahim3101/CrowdFundHub-client',
  },
]

export default projects
