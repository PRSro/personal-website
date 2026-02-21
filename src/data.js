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
  'Cybersecurity Student',
  'Linux User',
  'Builder',
  'Researcher',
  'Automation Enthusiast'
]

// Skills section data
export const skills = [
  { icon: 'linux', name: 'Linux', desc: 'Arch BTW' },
  { icon: 'network', name: 'Networking', desc: 'TCP/IP, DNS, VPN' },
  { icon: 'code', name: 'Python', desc: 'Automation & Security' },
  { icon: 'shield', name: 'Web Security', desc: 'OWASP Top 10' },
  { icon: 'cpu', name: 'Automation', desc: 'Scripts & Bots' },
  { icon: 'flag', name: 'CTFs', desc: 'Capture The Flag' },
]

// Projects data with categories
export const projects = [
  {
    title: 'Doomsails: Battle for the Blackbrick',
    category: 'Game',
    desc: 'A Roblox naval battle game with custom gameplay mechanics, weapon systems, and player progression. Preparing for deploymeny',
    tech: ['Lua', 'Roblox Studio', 'Game Design'],
    link: '-'
  },
  {
    title: 'Obscuron Automation System',
    category: 'Automation',
    desc: 'A modular automation framework for task scheduling, system monitoring, and repetitive task handling.',
    tech: ['Python', 'Linux', 'APIs'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Cybersecurity Study Dashboard',
    category: 'Security',
    desc: 'An interactive dashboard for tracking CTF progress, study notes, and security research resources.',
    tech: ['JavaScript', 'HTML/CSS', 'Local Storage'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'AI Telegram Research Bot',
    category: 'AI',
    desc: 'A Telegram bot integrated with AI models for security research, automation, and information gathering.',
    tech: ['Python', 'Telegram API', 'AI/ML'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Network Scanner Tool',
    category: 'Security',
    desc: 'A Python-based network reconnaissance tool for discovering hosts and services on local networks.',
    tech: ['Python', 'Scapy', 'Nmap'],
    link: 'https://github.com/prsro'
  },
  {
    title: 'Keylogger Defense System',
    category: 'Security',
    desc: 'Educational tool for detecting and analyzing keylogging attempts on Windows systems.',
    tech: ['Python', 'Windows API', 'C++'],
    link: 'https://github.com/prsro'
  },
]

// Labs and experience data
export const labs = [
  {
    title: 'TryHackMe',
    type: 'Platform',
    desc: 'Completed multiple rooms covering penetration testing, network security, and privilege escalation.',
    tools: ['Kali Linux', 'Burp Suite', 'Metasploit'],
    progress: 10,
    link: 'https://tryhackme.com'
  },
  {
    title: 'HackTheBox',
    type: 'Platform',
    desc: 'Active participant in retired machines and challenges. Focus on CTF-style penetration testing.',
    tools: ['VPN', 'Various Tools', 'Custom Scripts'],
    progress: 2,
    link: 'https://hackthebox.eu'
  },
  {
    title: 'Home Lab',
    type: 'Personal',
    desc: 'Self-hosted lab environment for testing and learning various security concepts.',
    tools: ['VirtualBox', 'Docker', 'PfSense', 'ELK Stack'],
    progress: 100,
    link: '#'
  },
  {
    title: 'CTF Competitions',
    type: 'Competition',
    desc: 'Participated in various Capture The Flag competitions to sharpen skills.',
    tools: ['OSWAP', 'Reverse Engineering', 'Cryptography', 'Forensics'],
    progress: 2,
    link: '#'
  },
]

// Certifications and goals
export const certifications = [
  {
    name: 'CompTIA Security+',
    provider: 'CompTIA',
    status: 'planned',
    description: 'Foundational cybersecurity certification covering network security and threats.',
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
    description: 'Linux system administration and security fundamentals.',
    targetDate: '2032'
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
    period: 'Now',
    title: 'Student & Self-Learner',
    desc: 'Building foundations with Linux, networking, Python, and hands-on labs. Participating in CTFs and reading security research.'
  },
  {
    period: 'Next',
    title: 'Certifications, CTF player & Labs',
    desc: 'Planning: CompTIA Security+, eJPT, tryhackme/hackthebox pathways, and practical lab experience.'
  },
  {
    period: 'Future',
    title: 'Cybersecurity Engineer / Researcher / SOC',
    desc: 'Goal: Work in red teaming, penetration testing, or security research. Continuous learning and contributing to the community.'
  },
]

// Areas of interest
export const interests = [
  { icon: 'search', name: 'Digital Forensics' },
  { icon: 'shield', name: 'Network Security' },
  { icon: 'bug', name: 'Malware Analysis' },
  { icon: 'crosshair', name: 'Ethical Hacking' },
]

// Blog/Research section
export const blogPosts = [
  {
    title: 'Coming Soon',
    category: 'Research',
    excerpt: 'Security research and findings will be published here.',
    date: 'TBD',
    link: '#'
  },
  {
    title: 'CTF Writeups',
    category: 'Writeups',
    excerpt: 'Detailed solutions to Capture The Flag challenges.',
    date: 'TBD',
    link: '#'
  },
  {
    title: 'Security Notes',
    category: 'Notes',
    excerpt: 'Personal notes on tools, techniques, and learning resources.',
    date: 'TBD',
    link: '#'
  },
]

// Project categories for filtering
export const projectCategories = ['All', 'Game', 'Automation', 'Security', 'AI']
