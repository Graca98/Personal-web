import Link from "next/link";
import { JSDOM } from "jsdom";

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

export default async function LinkPreview({ url }) {
  //here calling the function
  const data = await extractMetaTags(url);

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <Link
      href={url}
      target="_blank"
      className="cursor-pointer flex items-start bg-[#0f172a] gap-3 text-left p-4 hover:bg-gray-800 hover:rounded-lg"
      style={{ textDecoration: "none" }}
    >
      <div className="pt-2">
        <img
          src={data.image}
          alt="Link Preview"
          width={200}
          height={48}
          className="m-0"
        />
      </div>

      <div className="px-4 w-[60%]">
        <h3 className="text-xl text-slate-200 font-semibold mb-2">
          {data.title}
        </h3>
        <p className="text-sm mb-2">{data.description}</p>
        <span className="text-xs opacity-50">{url}</span>
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
