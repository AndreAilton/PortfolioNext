"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "./ui/section-heading";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { FolderGit2, Star, GitBranch } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
};

export default function GithubContributions() {
  const { theme, resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'calendar' | 'repos'>('calendar');
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); // Novo estado para a largura da tela

  useEffect(() => {
    setMounted(true);
    fetchRepos();

    // Lida com o tamanho da tela no client-side para ajustar os blocos
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/AndreAilton/repos?sort=updated&per_page=6");
      if (res.ok) {
        const data = await res.json();
        setRepos(data);
      }
    } catch (error) {
      console.error("Failed to fetch repos", error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <motion.section
      id="github"
      className="mb-28 max-w-[53rem] w-full scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.github.title}</SectionHeading>
      
      <div className="flex justify-center mb-8">
        <div className="flex bg-white/60 dark:bg-white/10 rounded-full p-1">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'calendar' 
                ? 'bg-white text-black shadow-sm dark:bg-white/20 dark:text-white' 
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {t.github.chartTab}
          </button>
          <button
            onClick={() => setActiveTab('repos')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'repos' 
                ? 'bg-white text-black shadow-sm dark:bg-white/20 dark:text-white' 
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {t.github.reposTab}
          </button>
        </div>
      </div>

      {activeTab === 'calendar' ? (
        <div className="flex justify-center items-center p-4 sm:p-8 bg-white/60 dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/10 w-full overflow-hidden">
          {/* A div abaixo possui as classes novas para scroll horizontal invisível */}
          <div className="w-full [&_.react-activity-calendar__scroll-container]:flex [&_.react-activity-calendar__scroll-container]:justify-end [&_.react-activity-calendar__scroll-container]:overflow-x-auto [&_.react-activity-calendar__scroll-container]:pb-2 [&_.react-activity-calendar__scroll-container::-webkit-scrollbar]:hidden [&_.react-activity-calendar__scroll-container]:[-ms-overflow-style:none] [&_.react-activity-calendar__scroll-container]:[scrollbar-width:none]">
            <GitHubCalendar 
              username="AndreAilton" 
              colorScheme={isDark ? "dark" : "light"}
              
              // Tamanhos ajustados dinamicamente para mobile e desktop
              blockSize={windowWidth < 640 ? 10 : 15}
              blockMargin={windowWidth < 640 ? 3 : 5}
              fontSize={windowWidth < 640 ? 12 : 14}
              
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              labels={{
                totalCount: t.github.contribText,
              }}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {loading ? (
            <p className="col-span-full text-center text-gray-500">{t.github.loading}</p>
          ) : repos.length > 0 ? (
            repos.map((repo) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/60 dark:bg-white/10 p-5 rounded-2xl border border-black/5 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition group flex flex-col h-full"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FolderGit2 className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">{repo.name}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-2">
                  {repo.description || t.github.noDesc}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="w-3 h-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </a>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">{t.github.noRepos}</p>
          )}
        </div>
      )}
    </motion.section>
  );
}