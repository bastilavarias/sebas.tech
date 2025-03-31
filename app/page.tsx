import Image from "next/image"
import { cn } from "@/lib/utils"
import ThemeToggle from '@/components/theme-toggle';
import { BASIC_INFO } from '@/information';

export default function Home() {

  return (
      <div
          className={cn(
              "min-h-screen w-full transition-colors duration-200",
              "bg-white dark:bg-black text-muted-foreground",
          )}
      >
        <main className="max-w-[576px] mx-auto px-4 py-12 md:py-16">
          <ThemeToggle />

          <div className="flex flex-col items-center mb-12">
            <div className="w-16 h-16 md:w-17 md:h-17 rounded-full bg-gray-200 dark:bg-gray-700 mb-4 overflow-hidden">
              <Image
                  src="/images/me.jpg"
                  alt="Me :)"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-medium mb-1 text-black dark:text-white">
              {BASIC_INFO.name} <span className="inline-block ml-1"></span>
            </h1>
            <p>{BASIC_INFO.work}</p>
          </div>

          <section className="mb-12">
            <h2 className="text-lg font-medium text-black dark:text-white">About me</h2>
            <div className="text-sm text-muted-foreground">
              <p>
                A Programmer. Content Creator (kinda). Lifelong learner. Feel free to view my <a
                  className="underline mr-1" href="/documents/resume.pdf" target="_blank">resume,</a>and
                follow my
                {
                  BASIC_INFO.socials.map(
                      (social, index) => (
                          <a key={index} className="underline ml-1" href={social.url} target="_blank">{social.text}</a>
                      )
                  )
                }.
              </p>
            </div>
          </section>

          {/*<section className="mb-12">*/}
          {/*  <h2 className="text-lg font-medium mb-4">Experience</h2>*/}
          {/*  <div className="space-y-4">*/}
          {/*    <ProjectCard*/}
          {/*        title="Interfaces Design System"*/}
          {/*        description="The Interfaces Design System is currently in the alpha stage and still under active development. If you're interested in gaining early access and are willing to provide valuable feedback to help shape its future, we'd love to have you on board!"*/}
          {/*    />*/}
          {/*    <ProjectCard*/}
          {/*        title="Charts Supply"*/}
          {/*        description="Charts solution for Figma helps you build data-driven charts. It seamlessly integrates with Google Sheets and empowers, allowing you to tell compelling stories with real data."*/}
          {/*    />*/}
          {/*    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">*/}
          {/*      <div className="flex justify-between items-center">*/}
          {/*        <h3 className="text-sm font-medium">Dimensions Supply</h3>*/}
          {/*        <span className="text-xs text-gray-500 dark:text-gray-400">Coming soon</span>*/}
          {/*      </div>*/}
          {/*      <p className="text-xs mt-2 text-muted-foreground dark:text-gray-400">*/}
          {/*        A 3D asset store. Resources for digital product designers. Coming in Q1 2025.*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/*<section className="mb-12">*/}
          {/*  <h2 className="text-lg font-medium mb-4">What I build</h2>*/}
          {/*  <div className="space-y-4">*/}
          {/*    <ProjectCard*/}
          {/*        title="Interfaces Design System"*/}
          {/*        description="The Interfaces Design System is currently in the alpha stage and still under active development. If you're interested in gaining early access and are willing to provide valuable feedback to help shape its future, we'd love to have you on board!"*/}
          {/*    />*/}
          {/*    <ProjectCard*/}
          {/*        title="Charts Supply"*/}
          {/*        description="Charts solution for Figma helps you build data-driven charts. It seamlessly integrates with Google Sheets and empowers, allowing you to tell compelling stories with real data."*/}
          {/*    />*/}
          {/*    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">*/}
          {/*      <div className="flex justify-between items-center">*/}
          {/*        <h3 className="text-sm font-medium">Dimensions Supply</h3>*/}
          {/*        <span className="text-xs text-gray-500 dark:text-gray-400">Coming soon</span>*/}
          {/*      </div>*/}
          {/*      <p className="text-xs mt-2 text-muted-foreground dark:text-gray-400">*/}
          {/*        A 3D asset store. Resources for digital product designers. Coming in Q1 2025.*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/*<section className="mb-12">*/}
          {/*  <h2 className="text-lg font-medium mb-6">What I use</h2>*/}
          {/*  <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-6">*/}
          {/*    <ToolIcon name="Figma" />*/}
          {/*    <ToolIcon name="Rive" />*/}
          {/*    <ToolIcon name="Zitter" />*/}
          {/*    <ToolIcon name="Blender" />*/}
          {/*    <ToolIcon name="ZBrush" />*/}
          {/*    <ToolIcon name="NEXT.JS" />*/}
          {/*  </div>*/}
          {/*  <div className="grid grid-cols-3 gap-6">*/}
          {/*    <ToolIcon name="Tailwind" />*/}
          {/*    <ToolIcon name="Stripe.js" />*/}
          {/*    <ToolIcon name="Vercel" />*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/*<section className="mb-12">*/}
          {/*  <h2 className="text-lg font-medium mb-6">What I use</h2>*/}
          {/*  <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 mb-6">*/}
          {/*    <ToolIcon name="Figma" />*/}
          {/*    <ToolIcon name="Rive" />*/}
          {/*    <ToolIcon name="Zitter" />*/}
          {/*    <ToolIcon name="Blender" />*/}
          {/*    <ToolIcon name="ZBrush" />*/}
          {/*    <ToolIcon name="NEXT.JS" />*/}
          {/*  </div>*/}
          {/*  <div className="grid grid-cols-3 gap-6">*/}
          {/*    <ToolIcon name="Tailwind" />*/}
          {/*    <ToolIcon name="Stripe.js" />*/}
          {/*    <ToolIcon name="Vercel" />*/}
          {/*  </div>*/}
          {/*</section>*/}

          <footer className="text-xs text-muted-forreground text-center pt-8">
            © 2025. All rights reserved.
          </footer>
        </main>
      </div>
  )
}

