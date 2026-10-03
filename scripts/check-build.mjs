import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const indexPath = resolve("dist/index.html");
const html = await readFile(indexPath, "utf8");

const checks = [
  [html.includes('<link rel="canonical" href="https://emdadneka.ir/"'), "canonical URL"],
  [html.includes('type="application/ld+json"'), "structured data"],
  [html.includes("<h1"), "prerendered H1"],
  [html.includes("امداد خودرو نکا"), "primary local keyword"],
  [!html.includes('<div id="root"></div>'), "prerendered React content"],
];

for (const [passed, label] of checks) {
  if (!passed) {
    throw new Error(`Build check failed: ${label}`);
  }
}

await Promise.all([
  access(resolve("dist/robots.txt")),
  access(resolve("dist/sitemap.xml")),
  access(resolve("dist/images/og-image.jpg")),
]);

console.log("Production and SEO build checks passed.");
