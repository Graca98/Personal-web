import Link from "next/link";
import Image from "next/image";
import { JSDOM } from "jsdom";
import Badge from "./Badge"

const extractMetaTags = async (url) => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
      (tags, meta) => {
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop");
        const content = meta.getAttribute("content");

        if (name && content) {
          tags[name] = content;
        }

        return tags;
      },
      {}
    );

    return {
      title:
        document.title || metaTags["og:title"] || metaTags["twitter:title"],
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"],
      image:
        metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
    };
  } catch (error) {
    console.error("Error fetching Open Graph details", error);
  }
};

const emptyImg = "/img/web-previews/Empty.png";

export default async function LinkPreview({ url, webImage = emptyImg, desc="", skills=[] }) {
  const data = await extractMetaTags(url);

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <Link
      href={url}
      target="_blank"
      className="cursor-pointer flex flex-col-reverse lg:flex-row items-start bg-[#0f172a] gap-3 text-left md:-mx-4 md:px-4 py-4 md:hover:bg-gray-800 md:hover:rounded-lg mb-4"
      style={{ textDecoration: "none" }}
    >
      <div className="pt-2 ">
        <Image
          src={webImage || ""}
          alt={`Náhled webové stránky ${data.title}`}
          width={200}
          height={48}
          className="m-0 border-2 rounded-md border-gray-700 md:hover:transform md:hover:scale-105 md:hover:duration-500 md:hover:ease-in-out"
        />
      </div>

      <div className="lg:px-4 lg:w-[60%]">
        <h3 className="text-xl text-slate-200 font-semibold mb-2">
          {data.title}
        </h3>
        <p className="text-sm mb-2">{desc}</p>
        <p className="text-xs opacity-50 mb-4">{url}</p>
        <ul className="flex flex-wrap gap-2">
        {skills.map((skillName, index) => {
          return <Badge key={`${skillName}-${index}`} skill={skillName}/>
        })}
        </ul>
      </div>
    </Link>
  );
}

//? Vysvětlení použité funkce
/* 
//Function to fetch Open Graph details for a given URL
const extractMetaTags = async (url) => {
  try {
    // Fetch the content of the URL
    const response = await fetch(url);
    const html = await response.text();

    // Parse the HTML using JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract meta tags from the document
    const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
      (tags, meta) => {
        // Get the name, property, or itemprop attribute of the meta tag
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop");

        // Get the content attribute of the meta tag
        const content = meta.getAttribute("content");

        // If both name and content exist, add them to the tags object
        if (name && content) {
          tags[name] = content;
        }

        return tags;
      },
      {}
    );

    // Return an object containing title, description, and image
    return {
      title:
        document.title || metaTags["og:title"] || metaTags["twitter:title"],
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"],
      image:
        metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
    };
  } catch (error) {
    // Handle errors if fetching or parsing fails
    console.error("Error fetching Open Graph details", error);
  }
}; 
https://www.creowis.com/blog/how-to-create-a-link-previewer-with-nextjs
*/
