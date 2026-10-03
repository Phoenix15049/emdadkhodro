import { readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const clientIndexPath = resolve("dist/index.html");
const serverEntryPath = resolve("dist-ssr/entry-server.js");

const template = await readFile(clientIndexPath, "utf8");
const { render } = await import(pathToFileURL(serverEntryPath).href);
const appHtml = render();

const rootPlaceholder = '<div id="root"></div>';

if (!template.includes(rootPlaceholder)) {
  throw new Error("Prerender failed: root placeholder was not found in dist/index.html.");
}

const renderedDocument = template.replace(
  rootPlaceholder,
  `<div id="root">${appHtml}</div>`,
);

await writeFile(clientIndexPath, renderedDocument, "utf8");
await rm(resolve("dist-ssr"), { recursive: true, force: true });

console.log("Static HTML prerendered successfully.");
