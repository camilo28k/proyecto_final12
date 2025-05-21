"use client";

import React from "react";
import Aside from "../components/aside.component";
import { useLayout } from "../hooks/useLayout";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "../../app/globals.css";



interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();
  const { title, route } = useLayout(pathname);

  return (
    <main className="bg-gradient-to-br from-amber-50 min-h-screen font-sans overflow-auto no-scrollbar h-screen">
      <Aside />

      <section className="max-w-5xl mx-auto mt-16 p-10 bg-white shadow-2xl rounded-3xl transition-all">
        <header className="mb-10">
          <nav className="flex flex-wrap gap-6 mb-6">
            {route.map((route) => (
              <Link 
                key={route.path}
                href={route.path}
                className={`text-base font-semibold transition duration-200 px-2 py-1 rounded-lg ${
                  pathname === route.path
                    ? "bg-yellow-400 text-gray-900 "
                    : "text-gray-500"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-1">
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-500 text-sm">Sección actual: {title}</p>
          </div>
        </header>

        <div className="space-y-6">{children}</div>
      </section>
    </main>
  );
}


