import { useState } from "react";
import SiteInformation from "@content/collection/site-information.ts";

type SiteInformation = {
  id: number;
  key: string;
  value: string;
  created_at: string;
  updated_at: string;
};

export default function HomeHero() {
  const [header, setHeader] = useState("");
  const [homeQuoteContent, setHomeQuoteContent] = useState("");
  const [homeQuoteAuthor, setHomeQuoteAuthor] = useState("");

  SiteInformation.list().then(siteInformations => {
    try {
      const getSiteInformation = (key: string) =>
        siteInformations.find((item: SiteInformation) => item.key === key)
          .value;

      setHeader(getSiteInformation("header"));
      setHomeQuoteContent(getSiteInformation("home_quote_content"));
      setHomeQuoteAuthor(getSiteInformation("home_quote_author"));
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <div
      id="hero"
      className="flex flex-col items-center pt-8 sm:flex-row sm:items-start"
    >
      <img
        className="mb-5 block w-1/3"
        src="/assets/profile.png"
        alt="Profile"
      />

      <div className="sm:pl-8">
        <div className="text-center sm:text-left">
          <h1 className="inline-block text-3xl font-bold sm:text-5xl">
            {header}
          </h1>
        </div>

        <p className="my-4 text-center font-bold sm:text-left">
          {homeQuoteContent}
          <span className="mt-2 block text-right italic sm:text-left">
            - {homeQuoteAuthor}
          </span>
        </p>

        <div className="text-center sm:text-left">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-skin-accent underline"
            href="/assets/files/resume.pdf"
          >
            View resume...
          </a>
        </div>
      </div>
    </div>
  );
}
