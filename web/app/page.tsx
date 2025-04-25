import Image from "next/image"
import { BASIC_INFO } from '@/information';
import HomeCodeBitesList from "@/components/home-code-bites-list";

export default function Home() {

  return (
      <div>

        <div className="flex flex-col items-center mb-12 text-center">
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
          <p className="text-sm">{BASIC_INFO.quote}</p>
        </div>

        <section className="mb-2">
          <h2 className="text-lg font-medium text-black dark:text-white">About me</h2>
          <div className="text-sm text-muted-foreground">
            <p>
              I specialize in web development while also creating content and continuously expanding my skills. Explore
              my <a
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

        <section className="mb-2">
          <h2 className="text-lg font-medium text-black dark:text-white">My Tech Stacks</h2>
          <div className="break-wrods text-sm">
            <div className="flex items-center space-x-2">
              <p className="font-bold">
                Languages:
              </p>
              <p>
                {BASIC_INFO.technologies.languages.join(', ')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-bold">
                Web:
              </p>
              <p>
                {BASIC_INFO.technologies.web.join(', ')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-bold">
                Back-end:
              </p>
              <p>
                {BASIC_INFO.technologies.backend.join(', ')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-bold">
                Server:
              </p>
              <p>
                {BASIC_INFO.technologies.server.join(', ')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-bold">
                Mobile:
              </p>
              <p>
                {BASIC_INFO.technologies.mobile.join(', ')}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-medium text-black dark:text-white">
            Latest Code Bites
          </h2>
          <HomeCodeBitesList/>
        </section>

          <footer className="text-xs text-muted-forreground text-center pt-8">
            © 2025. All rights reserved.
          </footer>
      </div>
)
}