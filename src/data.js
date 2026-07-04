// Terminal intro animation lines
export const terminalLines = [
  'Initializing connection...',
  'Loading portfolio modules...',
  'Establishing secure connection...',
  'Verifying user identity...',
  'Access granted.',
  'Welcome to obscuron@portfolio'
]

// Typing animation phrases in hero
export const typingPhrases = [
  'C++ Developer',
  'Game Developer',
  'Security Researcher',
  'Full-Stack Builder',
  'Linux User',
  'Automation Enthusiast'
]

// Skills section data
export const skills = [
  { icon: 'cpp', name: 'C++', desc: 'Qt, SFML, SDL2, CLI' },
  { icon: 'code', name: 'Python', desc: 'FastAPI, Automation, Crypto' },
  { icon: 'react', name: 'React', desc: 'Vite, Tailwind, TypeScript' },
  { icon: 'unity', name: 'Unity', desc: 'C#, Game Mechanics' },
  { icon: 'linux', name: 'Linux', desc: 'Arch BTW' },
  { icon: 'network', name: 'Networking', desc: 'TCP/IP, DNS, VPN' },
  { icon: 'database', name: 'Databases', desc: 'PostgreSQL, Prisma' },
  { icon: 'docker', name: 'DevOps', desc: 'Docker, CI/CD, Linux' },
  { icon: 'shield', name: 'Web Security', desc: 'OWASP Top 10' },
  { icon: 'gamepad', name: 'Game Dev', desc: 'Unity, SDL2, SFML' },
  { icon: 'cpu', name: 'Automation', desc: 'Scripts & Bots' },
  { icon: 'flag', name: 'CTFs', desc: 'Capture The Flag' },
]

// Projects data with categories
export const projects = [
  {
    title: 'Obscuron-Crypto-Suite',
    category: 'Security',
    desc: 'Comprehensive cryptographic toolkit with 100+ CLI commands and a full Qt6 desktop GUI. Implements classical ciphers, modern crypto (AES, ChaCha20), cryptanalysis tools, RSA attack suite, elliptic curve DLP attacks, TLS analysis, and LSB steganography.',
    tech: ['C++17', 'Qt6', 'NTL', 'OpenSSL', 'Python'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Shadow Empire: 1800',
    category: 'Game Dev',
    desc: 'A Unity-based historical strategy game set in 1800s Europe. Players control secret societies competing for territory and influence through card-based actions on a historically-accurate map.',
    tech: ['Unity', 'C#', 'Game Design'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'viitor-educat (Obscuron Educational Platform)',
    category: 'Web App',
    desc: 'Modern full-stack learning management system with course management, progress tracking, gamification, quizzes, flashcards, forum, and multi-language support.',
    tech: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'Docker'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'obsCTF Platform',
    category: 'Security',
    desc: 'Full-stack Capture The Flag competition platform inspired by CTFd. Supports challenge management, flag submission, JWT auth, leaderboards, hints, first-blood tracking, and role-based access.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Cpp-Physics-Engine',
    category: 'Game Dev',
    desc: '2D physics engine built from scratch with SFML 3.x. Implements rigid body dynamics, AABB collision detection, material system, polygon approximation, and force-based interactions.',
    tech: ['C++17', 'SFML 3', 'CMake'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Dacia Libera (Umbra Daciei)',
    category: 'Game Dev',
    desc: 'A narrative-driven 2D game about conspiracy, ancient mystery, and Romanian folklore. Features scene-based architecture, entity system, dialogue system, and paranoia mechanics.',
    tech: ['C++17', 'SDL2', 'nlohmann/json', 'CMake'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Calc-Ult',
    category: 'Tools',
    desc: 'From-scratch terminal calculator without <cmath>. Implements Newton-Raphson, Taylor series, big-number arithmetic (1000+ digits), 2D geometry, statistics, finance, and unit conversions.',
    tech: ['C++11/17', 'Makefile'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Obscure-Trading Engine',
    category: 'Tools',
    desc: 'C++ trading bot engine with Python bridge via pybind11. Includes market data feeds, technical indicators (SMA, MACD, RSI), risk management, and encrypted audit logging.',
    tech: ['C++17', 'pybind11', 'HMAC-SHA256', 'AES-256-GCM'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Doomsails: Battle for the Blackbrick',
    category: 'Game Dev',
    desc: 'A Roblox naval battle game with custom gameplay mechanics, weapon systems, and player progression.',
    tech: ['Lua', 'Roblox Studio', 'Game Design'],
    link: 'https://github.com/prsro'
  },
]

// Labs and experience data
export const labs = [
  {
    title: 'TryHackMe',
    type: 'Platform',
    desc: 'Completed rooms covering penetration testing, network security, privilege escalation, and web exploitation.',
    tools: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap'],
    progress: 15,
    link: 'https://tryhackme.com'
  },
  {
    title: 'Home Lab',
    type: 'Personal',
    desc: 'Self-hosted lab environment running Arch Linux with Docker, QEMU/KVM, and various security testing tools.',
    tools: ['Arch Linux', 'Docker', 'QEMU/KVM', 'Wireshark'],
    progress: 100,
    link: '#'
  },
  {
    title: 'C++ Systems Development',
    type: 'Focus',
    desc: 'Active development across multiple C++17 projects: physics engines, cryptographic suites, trading engines, and game development with various frameworks.',
    tools: ['C++17', 'Qt6', 'SFML', 'SDL2', 'CMake', 'Make'],
    progress: 85,
    link: 'https://github.com/prsro'
  },
  {
    title: 'Full-Stack Web Development',
    type: 'Focus',
    desc: 'Building modern web applications with React, TypeScript, Fastify/Node.js, PostgreSQL, and Docker deployment.',
    tools: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Docker'],
    progress: 60,
    link: 'https://github.com/prsro'
  },
]

// Certifications and goals
export const certifications = [
  {
    name: 'CompTIA Security+',
    provider: 'CompTIA',
    status: 'planned',
    description: 'Foundational cybersecurity certification covering network security, threats, and risk management.',
    targetDate: '2030'
  },
  {
    name: 'eJPT',
    provider: 'eLearnSecurity',
    status: 'planned',
    description: 'Junior Penetration Tester certification for practical penetration testing skills.',
    targetDate: '2030'
  },
  {
    name: 'CompTIA Linux+',
    provider: 'CompTIA',
    status: 'planned',
    description: 'Linux system administration, scripting, and security fundamentals.',
    targetDate: '2031'
  },
  {
    name: 'OSCP',
    provider: 'Offensive Security',
    status: 'future',
    description: 'Advanced penetration testing certification for professional security roles.',
    targetDate: '2032'
  },
]

// Timeline data
export const timeline = [
  {
    period: 'Present',
    title: 'Cybersecurity Student & Builder',
    desc: 'Building real projects: crypto suites, physics engines, games, and full-stack platforms. Deep-diving into C++, reverse engineering, and offensive security.'
  },
  {
    period: 'Near',
    title: 'Certifications & Advanced Tools',
    desc: 'Working toward Security+, eJPT, and OSCP. Expanding the Obscuron ecosystem with production-ready tools and security research.'
  },
  {
    period: 'Future',
    title: 'Security Engineer / Tooling Developer',
    desc: 'Goal: Red teaming, malware analysis, tool development, and contributing to the security community. Building things that matter.'
  },
]

// Areas of interest
export const interests = [
  { icon: 'search', name: 'Reverse Engineering' },
  { icon: 'shield', name: 'Cryptography' },
  { icon: 'bug', name: 'Malware Analysis' },
  { icon: 'crosshair', name: 'Offensive Security' },
  { icon: 'gamepad', name: 'Game Development' },
  { icon: 'cpu', name: 'Systems Programming' },
]

// Blog/Research section
export const blogPosts = [
  {
    title: 'Building a Crypto Suite in C++/Qt6',
    category: 'Dev Log',
    excerpt: 'Lessons learned from building a 100+ command cryptographic toolkit with a Qt6 GUI, cryptanalysis tools, and AI-assisted solving.',
    date: '2026',
    link: '#'
  },
  {
    title: 'CTF Writeups & Solutions',
    category: 'Writeups',
    excerpt: 'Detailed solutions to Capture The Flag challenges covering crypto, reverse engineering, and exploitation.',
    date: 'TBD',
    link: '#'
  },
  {
    title: 'From Scratch: Physics Engine',
    category: 'Dev Log',
    excerpt: 'Building a 2D physics engine with SFML 3 — rigid body dynamics, collision detection, and rendering from zero dependencies.',
    date: '2026',
    link: '#'
  },
  {
    title: 'Security Research Notes',
    category: 'Notes',
    excerpt: 'Personal notes on tools, techniques, CVEs, and learning resources from labs and self-study.',
    date: 'TBD',
    link: '#'
  },
]

// Project categories for filtering
export const projectCategories = ['All', 'Game Dev', 'Security', 'Web App', 'Tools']
