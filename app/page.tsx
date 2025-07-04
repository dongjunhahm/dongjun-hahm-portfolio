"use client";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  ExternalLink,
  Calendar,
  Youtube,
  Film,
  Tv,
  BarChart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmailCopyButton from "@/components/ui/email-copy-button";
import { profile } from "console";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Header/Navigation */}
      <header className="border-b bg-slate-50">
        <div className="container flex items-center h-14 px-4">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Education
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content (Left Side) */}
          <div className="md:col-span-2 space-y-8">
            <section id="about" className="space-y-4">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-slate-700 text-lg">
                Hi, I'm <span className="font-semibold">Dongjun Hahm</span> — a
                developer passionate about AI, full-stack engineering, and
                building tools that solve real problems. I’ve built everything
                from finance chatbots to scheduling apps, always focused on
                usability, performance, and real-world impact.
              </p>
            </section>

            <section id="skills" className="space-y-6">
              <h2 className="text-3xl font-bold">Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">
                    Languages & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      JavaScript
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      Python
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      C#
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      TypeScript
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      SQL
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      React/Next.js
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      FastAPI
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      TailwindCSS
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Data & Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Web Scraping
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Playwright
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      PostgresQL
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Firebase
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      ChromaDB
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      Pandas
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Development Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                      GitHub
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                      Azure
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                      Jira
                    </Badge>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                      Figma
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium">AI</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      AgenticAI
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      RAG
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      LLMS
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      scikit-learn
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      LangChain
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      Ollama
                    </Badge>
                  </div>
                </div>
              </div>
            </section>

            <section id="experience" className="space-y-6">
              <h2 className="text-3xl font-bold">Experience</h2>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg text-white font-bold text-lg flex items-center justify-center">
                      <Image
                        src="/eversana logo.jpg"
                        alt="Eversana Logo"
                        width={60}
                        height={60}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <CardTitle>Innovation/AI Intern</CardTitle>
                      <CardDescription>
                        Eversana • Jun 2025 - Aug 2025 (Incoming)
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-slate-700">
                    <li>
                      Developing and Fine-Tuning LLM-powered applications for
                      pharmaceutical clients
                    </li>
                    <li>
                      Implementing RAG-based solutions using enterprise data
                    </li>
                    <li>
                      Working on AI agents supporting drug commercialization and
                      procurement
                    </li>
                    <li>
                      Ensuring model efficiency and compliance with pharma
                      regulations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg text-white font-bold text-lg flex items-center justify-center">
                      <Image
                        src="/PolyglotLogo.png"
                        alt="Polyglot Logo"
                        width={75}
                        height={75}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle>Fullstack Engineer Intern</CardTitle>
                      <CardDescription>
                        Polyglot • Jan 2024 - May 2024
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 list-disc list-inside text-slate-700">
                    <li>
                      Worked on an education language learning model,
                      specializing in UX/UI design in Figma
                    </li>
                    <li>
                      Developed preliminary designs for the conversational AI
                      model and landing page
                    </li>
                    <li>Worked on refining voice recognition model</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="projects" className="space-y-6">
              <h2 className="text-3xl font-bold">Projects</h2>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BarChart className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          MarketBuddy
                          <a
                            href="https://github.com/dongjunhahm/MarketBuddy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                        <CardDescription>April 2025 - May 2025</CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex gap-2">
                        <Badge className="bg-purple-100 text-purple-800">
                          RAG
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800">
                          NLP
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800">
                          LangChain
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-800">
                          Web Scraping
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="md:hidden mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-800">RAG</Badge>
                    <Badge className="bg-purple-100 text-purple-800">NLP</Badge>
                    <Badge className="bg-purple-100 text-purple-800">
                      Web Scraping
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800">
                      Ollama
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800">
                      ChromaDB
                    </Badge>
                  </div>
                  <p className="text-slate-700 mb-3">
                    Finance chatbot RAG system built with Ollama, ChromaDB and
                    Langchain.
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    <li>Scrapes Yahoo Finance daily using BeautifulSoup</li>
                    <li>
                      Processed scraped articles by chunking and embedding them
                      with Ollama and storing embeddings in ChromaDB
                    </li>
                    <li>
                      Used LangChain for retrieval to fetch relevant financial
                      context and pass to the LLM
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-8 w-8 text-green-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          OpenHour
                          <a
                            href="https://open-hour.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                        <CardDescription>
                          February 2025 - April 2025
                        </CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex gap-2">
                        <Badge className="bg-blue-100 text-blue-800">
                          React.js
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          Next.js
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          PostgreSQL
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="md:hidden mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">
                      React.js
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">Next.js</Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      Google Calendar API
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      Tailwind CSS
                    </Badge>
                  </div>
                  <p className="text-slate-700 mb-3">
                    Smart app syncing Google Calendars to find shared free time
                    instantly.
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    <li>
                      Developed a full-stack web app using React, Next.js,
                      PostgreSQL, Render, and Firebase, hosted on Vercel
                    </li>
                    <li>
                      Created a real-time engine connecting to Google Calendars
                      to find shared open time slots
                    </li>
                    <li>
                      Integrated SendGrid for email alerts and used Tailwind CSS
                      for a responsive UI
                    </li>
                    <li>
                      Modern, automatic alternative to When2Meet focused on
                      speed and ease
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Youtube className="h-8 w-8 text-red-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Claude LLM MCP
                          <a
                            href="https://github.com/dongjunhahm/youtube-server-mcp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                        <CardDescription>March 2025</CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex gap-2">
                        <Badge className="bg-orange-100 text-orange-800">
                          LLM
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800">
                          TypeScript
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800">
                          MCP
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="md:hidden mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800">LLM</Badge>
                    <Badge className="bg-orange-100 text-orange-800">
                      TypeScript
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800">
                      API Development
                    </Badge>
                  </div>
                  <p className="text-slate-700 mb-3">
                    Model Context Protocol (MCP) server that allows LLMs to
                    search YouTube and access transcripts from a single text
                    prompt—in a much simpler way.
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    <li>
                      Integrated the YouTube API to automate video search and
                      transcript retrieval
                    </li>
                    <li>
                      Built a transcript analysis and summarization pipeline
                      using AI for real-time insights
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Film className="h-8 w-8 text-amber-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Movie Gross Income Predictor
                          <a
                            href="https://colab.research.google.com/drive/1F09w83H5hdg0UMB8yH0jAqRDifsHx8DS?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                        <CardDescription>
                          August 2024 • Yonsei University
                        </CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex gap-2">
                        <Badge className="bg-green-100 text-green-800">
                          Python
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          Pandas
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          Random Forest
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="md:hidden mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">
                      Python
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Pandas
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Random Forest
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Machine Learning
                    </Badge>
                  </div>
                  <p className="text-slate-700 mb-3">
                    Machine learning regression model to predict box office
                    gross income based on IMDb movie data.
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    <li>
                      Cleaned and preprocessed data using Pandas: removed null
                      values, converted runtime formats, and encoded categorical
                      features
                    </li>
                    <li>
                      Trained and evaluated a Random Forest Regressor, achieving
                      an R² score of 0.62, with MAE of ~$30M
                    </li>
                    <li>
                      Identified rating, runtime, and genre as the top
                      predictors of success through feature importance analysis
                    </li>
                    <li>
                      Visualized model performance with Matplotlib and extracted
                      insights to inform potential marketing strategies for
                      studios
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Tv className="h-8 w-8 text-purple-600" />
                      <div>
                        <CardTitle>TV Show Viewership Analytics</CardTitle>
                        <CardDescription>
                          July 2024 - August 2024 • Yonsei University
                        </CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex gap-2">
                        <Badge className="bg-blue-100 text-blue-800">
                          HiveQL
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          Hadoop
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-800">SQL</Badge>
                        <Badge className="bg-blue-100 text-blue-800">
                          Excel
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="md:hidden mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">HiveQL</Badge>
                    <Badge className="bg-blue-100 text-blue-800">Hadoop</Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      Microsoft Excel
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">SQL</Badge>
                  </div>
                  <p className="text-slate-700 mb-3">
                    Analysis of large data sets of anime viewership using Hive
                    QL and Hadoop.
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    <li>
                      Extracted insights such as genre popularity, watch time by
                      location, and top anime by watch days, while incorporating
                      metrics like gender, country, and location
                    </li>
                    <li>
                      Used Excel in order to visualize the extracted data for
                      analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-8 w-8 text-indigo-600" />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Cally
                          <a
                            href="https://cally-nu.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </CardTitle>
                        <CardDescription>May 2024 - June 2024</CardDescription>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex gap-2">
                        <Badge className="bg-indigo-100 text-indigo-800">
                          OpenAI API
                        </Badge>

                        <Badge className="bg-indigo-100 text-indigo-800">
                          React.js
                        </Badge>
                        <Badge className="bg-indigo-100 text-indigo-800">
                          Next.js
                        </Badge>
                        <Badge className="bg-indigo-100 text-indigo-800">
                          JavaScript
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="md:hidden mb-3 flex flex-wrap gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800">
                      React.js
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      Next.js
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      JavaScript
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      Tailwind CSS
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      API Development
                    </Badge>
                  </div>
                  <p className="text-slate-700 mb-3">
                    Making calendar management simple!
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    <li>
                      Built a React and Next.js application that extracts event
                      details from user prompts using the GPT API
                    </li>
                    <li>
                      Integrated with the Google Calendar API for seamless event
                      addition and management
                    </li>
                    <li>
                      Utilized Firebase for secure user authentication and
                      real-time data management
                    </li>
                    <li>
                      Focused on enhancing productivity and organization for
                      users by simplifying the scheduling process
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="education" className="space-y-6">
              <h2 className="text-3xl font-bold">Education</h2>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg text-white font-bold text-lg flex items-center justify-center">
                      <Image
                        src="/uc logo.png"
                        alt="UC Logo"
                        width={60}
                        height={60}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <CardTitle>University of California Santa Cruz</CardTitle>
                      <CardDescription>
                        September 2023 - Present • GPA: 3.89/4.0 - Junior
                        Standing
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-slate-800 mb-2">
                    Technology Information Management B.S. & Business Management
                    Economics B.A.
                  </p>
                  <p className="text-slate-600 text-sm">
                    <strong>Coursework:</strong> Data Structures and Algorithms,
                    Computer Systems and C Programming, Applied Discrete
                    Mathematics, Systems Analysis and Design
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg text-white font-bold text-lg flex items-center justify-center">
                      <Image
                        src="/yonsei logo.png"
                        alt="Yonsei Logo"
                        width={55}
                        height={55}
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <CardTitle>Yonsei University</CardTitle>
                      <CardDescription>
                        UCEAP Exchange Student • June 2024 - Aug 2024 • GPA:
                        3.87/4.0
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    <strong>Coursework:</strong> Machine Learning IEE1065,
                    Introduction to Big Data IEE3593
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* User Info (Right Side) */}
          <div className="md:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-slate-100">
                  <Image
                    src="/profile_pic.jpeg"
                    alt="Dongjun Hahm profile picture"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold">Dongjun Hahm</h1>
                <p className="text-slate-600 mb-2">Student & Developer</p>
                <div className="flex items-center text-slate-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Santa Cruz, CA</span>
                </div>
                <div className="space-y-2 text-sm text-slate-600 mb-6">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>dongjunathahm@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>949 414 1316</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <a
                    href="/DongjunHahm_Junior_Summer2025Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-slate-900 hover:bg-slate-800">
                      <FileText className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </a>
                  <a
                    href="https://github.com/dongjunhahm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dongjun-hahm/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>

                  {/* Email copy button with notification */}
                  <EmailCopyButton />
                </div>
              </div>

              {/* GitHub Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    GitHub Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Repositories</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Followers</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Following</span>
                      <span className="font-medium">1</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-xs text-slate-500 mb-2">
                      Github Repositories:
                    </p>
                    <div className="space-y-2">
                      <a
                        href="https://github.com/dongjunhahm/MarketBuddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-blue-600 hover:underline"
                      >
                        • MarketBuddy
                      </a>
                      <a
                        href="https://github.com/dongjunhahm/OpenHour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-blue-600 hover:underline"
                      >
                        • OpenHour
                      </a>
                      <a
                        href="https://github.com/dongjunhahm/Cally"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-blue-600 hover:underline"
                      >
                        • Cally
                      </a>
                      <a
                        href="https://github.com/dongjunhahm/youtube-server-mcp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-blue-600 hover:underline"
                      >
                        • youtube-server-mcp
                      </a>
                      <a
                        href="https://github.com/dongjunhahm/dongjun-hahm-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-blue-600 hover:underline"
                      >
                        • dongjun-hahm-portfolio
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">
                        Current Status:
                      </span>
                      <p className="text-slate-600">Junior at UC Santa Cruz</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">GPA:</span>
                      <p className="text-slate-600">3.89/4.0</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Next Role:
                      </span>
                      <p className="text-slate-600">AI Intern at Eversana</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">
                        Interests:
                      </span>
                      <p className="text-slate-600">
                        AI, Full-Stack Development, Data Analytics
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Project */}
              <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-lg">Featured Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <h3 className="font-medium text-blue-800 mb-1">
                      MarketBuddy
                    </h3>
                    <p className="text-sm text-slate-600 mb-3">
                      RAG-based finance chatbot that answers questions using
                      news scraped from Yahoo Finance
                    </p>
                    <div className="flex justify-center gap-2 mb-3">
                      <Badge className="bg-blue-100 text-blue-800">RAG</Badge>
                      <Badge className="bg-blue-100 text-blue-800">LLMs</Badge>
                      <Badge className="bg-blue-100 text-blue-800">
                        LangChain
                      </Badge>
                    </div>
                    <a
                      href="https://github.com/dongjunhahm/MarketBuddy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
