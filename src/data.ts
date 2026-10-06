import { IconType } from 'react-icons'
import { AiOutlineJava } from 'react-icons/ai'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { SiDotnet, SiJenkins } from 'react-icons/si'
import {
  TbBrandCSharp,
  TbBrandDocker,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandPython,
  TbBrandReact,
} from 'react-icons/tb'

export interface Skill {
  name: string
  icon: IconType
}

const skills = {
  react: { name: 'React', icon: TbBrandReact },
  csharp: { name: 'C#', icon: TbBrandCSharp },
  dotnet: { name: '.NET', icon: SiDotnet },
  mongodb: { name: 'MongoDB', icon: TbBrandMongodb },
  mysql: { name: 'MySQL', icon: TbBrandMysql },
  docker: { name: 'Docker', icon: TbBrandDocker },
  java: { name: 'Java', icon: AiOutlineJava },
  jenkins: { name: 'Jenkins', icon: SiJenkins },
  spring: { name: 'Spring Boot', icon: BiLogoSpringBoot },
  python: { name: 'Python', icon: TbBrandPython },
} satisfies Record<string, Skill>

export const profile = {
  name: 'Adithya Ajith',
  role: 'Full Stack Software Engineer',
  email: 'adithya@satyaloka.org',
  resume: '/adithya_ajith_resume.pdf',
  headshot: '/headshot.webp',
  bio: 'Full-stack developer with 4+ years of experience building financial, healthcare and enterprise applications. Specialized in React/TypeScript development with expertise in creating scalable software solutions. Proven track record in implementing secure systems and working with distributed teams.',
}

export const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adithya-ajith/', icon: '/linkedin.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/a.dhar.mic/', icon: '/instagram.svg' },
  { name: 'GitHub', href: 'https://github.com/adharmic', icon: '/github.svg' },
]

export interface Job {
  id: string
  company: string
  position: string
  years: string
  description: string
  logo: string
  skills: Array<Skill>
}

export const jobs: Array<Job> = [
  {
    id: 'jpmc',
    company: 'JPMorgan Chase',
    position: 'Software Engineer',
    years: '2025 – Present',
    description: 'Full-stack development of financial reporting and regulatory systems.',
    logo: '/jpmc.png',
    skills: [skills.react, skills.csharp, skills.dotnet],
  },
  {
    id: 'kantime',
    company: 'KanTime',
    position: 'Software Engineer',
    years: '2023 – 2025',
    description:
      'Development of a healthcare PWA with EMR system serving providers, using React, .NET and Kafka for real-time medical reporting.',
    logo: '/kantime.svg',
    skills: [skills.react, skills.csharp, skills.dotnet, skills.mongodb, skills.mysql, skills.docker],
  },
  {
    id: 'comcast',
    company: 'Comcast',
    position: 'Software/Security Engineer',
    years: '2022 – 2023',
    description:
      'Developed and maintained full-stack inventory management system with automated CI/CD pipelines and SSL certification processes, significantly improving deployment security.',
    logo: '/comcast.svg',
    skills: [skills.react, skills.java, skills.jenkins, skills.spring],
  },
  {
    id: 'prohashing',
    company: 'PROHASHING',
    position: 'Backend Engineer',
    years: '2021 – 2022',
    description:
      'Built distributed transaction processing systems and APIs, implementing monitoring solutions that substantially reduced system outages.',
    logo: '/prohashing.png',
    skills: [skills.python],
  },
]

export type Media =
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'youtube'; id: string; title: string }

export interface ProjectEntry {
  id: string
  name: string
  description: string
  source: string
  live: string
  liveLabel?: string
  tags: Array<string>
  media: Array<Media>
}

export const projects: Array<ProjectEntry> = [
  {
    id: 'ferox',
    name: 'ferox',
    description:
      'An offline path-tracing image renderer coded entirely in Rust. Capable of reflections, refractions, shading, and other physically-based image rendering processes. Runs from the command line and can take custom scene configurations and environment maps.',
    source: 'https://github.com/adharmic/ferox',
    live: 'https://crates.io/crates/ferox',
    liveLabel: 'crates.io',
    tags: ['rust', 'graphics', 'cli', 'linalg'],
    media: [
      { kind: 'image', src: '/ferox_3.webp', alt: 'ferox render of a billiards room with a glass goblet, seashell and reflective spheres' },
      { kind: 'image', src: '/ferox_1.webp', alt: 'ferox render of glass, mirror and matte spheres floating over a coastal environment map' },
      { kind: 'image', src: '/ferox_2.webp', alt: 'ferox render of reflective spheres and a cube on a green plane under a cloudy sky' },
    ],
  },
  {
    id: 'treeline',
    name: 'Treeline',
    description:
      'A narrative horror game created in Blender and Godot. Made as part of a month-long solo-development game jam, with mostly hand-made assets.',
    source: 'https://github.com/adharmic/treeline',
    live: 'https://adharmic.itch.io/treeline',
    liveLabel: 'itch.io',
    tags: ['godot', 'blender', 'game programming'],
    media: [
      { kind: 'image', src: '/treeline_1.webp', alt: 'Treeline screenshot: a dim red-lit room with a checkered floor' },
      { kind: 'image', src: '/treeline_2.webp', alt: 'Treeline screenshot: a snowy gas station at night' },
      { kind: 'image', src: '/treeline_3.webp', alt: 'Treeline screenshot: a car parked on a snowy forest road' },
    ],
  },
  {
    id: 'adios',
    name: 'adiOS',
    description:
      'A mock operating system inspired by Windows XP and written using React and Typescript. Handcrafted vector and 3D assets made in Blender and Affinity Designer.',
    source: 'https://github.com/adharmic/adiOS',
    live: 'https://adi-os.vercel.app',
    tags: ['typescript', 'nextjs', 'blender', 'affinity designer'],
    media: [{ kind: 'image', src: '/adios.webp', alt: 'adiOS desktop with Windows XP-style icons, rolling green hill wallpaper and Start bar' }],
  },
  {
    id: 'hells-fury',
    name: "Hell's Fury",
    description:
      'A feature-complete, dungeon-crawling web game written entirely in Typescript with home-made art and musical assets. Second place winner of the 2021 Stony Brook University Game Programming Competition.',
    source: 'https://github.com/Ed-joe/Hells-Fury/tree/master/Source%20Game',
    live: 'https://hells-fury.firebaseapp.com/',
    tags: ['typescript', 'gamedev', 'aseprite'],
    media: [
      { kind: 'youtube', id: 'C4GsruPaAgs', title: "Hell's Fury gameplay trailer" },
      { kind: 'image', src: '/hells_fury.webp', alt: "Hell's Fury pixel-art title screen" },
    ],
  },
]
