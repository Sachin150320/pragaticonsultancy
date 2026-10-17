
import fs from "node:fs";
import path from "node:path";

const appDirectory = path.resolve("app");
const publicDirectory = path.resolve("public");
const outputFile = path.join(
  publicDirectory,
  "college-search-index.json"
);

const collegeDirectoryNames = new Set([
  "engineering-colleges",
  "engineeringcolleges",
  "medical-colleges",
  "medicalcolleges",
  "management-colleges",
  "managementcolleges",
  "nursing-colleges",
  "nursingcolleges",
]);

function formatTitle(slug) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function getPageFile(directory) {
  const files = [
    "page.tsx",
    "page.jsx",
    "page.ts",
    "page.js",
  ];

  for (const file of files) {
    const fullPath = path.join(directory, file);

    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}

function getCollegeTitle(directory, slug) {
  const pageFile = getPageFile(directory);

  if (!pageFile) {
    return formatTitle(slug);
  }

  const source = fs.readFileSync(pageFile, "utf8");

  // Try to find a page title in metadata
  const metadataMatch = source.match(
    /title\s*:\s*["'`]([^"'`]+)["'`]/
  );

  if (metadataMatch) {
    return metadataMatch[1]
      .replace(/\s*\|\s*Pragati.*$/i, "")
      .trim();
  }

  // Try to find a heading containing the college name
  const headingMatch = source.match(
    /<h1\b[^>]*>([\s\S]*?)<\/h1>/i
  );

  if (headingMatch) {
    const heading = headingMatch[1]
      .replace(/<[^>]+>/g, " ")
      .replace(/\{[^}]*\}/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (heading && !heading.includes("<")) {
      return heading;
    }
  }

  return formatTitle(slug);
}

function walkDirectory(directory, routeSegments, results) {
  if (!fs.existsSync(directory)) return;

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;

    // Skip Next.js special folders
    if (
      name.startsWith("_") ||
      name.startsWith("(") ||
      name.startsWith("[") ||
      name.startsWith(".")
    ) {
      continue;
    }

    const childDirectory = path.join(directory, name);
    const childSegments = [...routeSegments, name];
    const pageFile = getPageFile(childDirectory);

    if (pageFile) {
      results.push({
        label: getCollegeTitle(childDirectory, name),
        href: `/${childSegments.join("/")}`,
      });
    }

    walkDirectory(childDirectory, childSegments, results);
  }
}

function main() {
  if (!fs.existsSync(appDirectory)) {
    console.error("Could not find the app directory:", appDirectory);
    process.exitCode = 1;
    return;
  }

  fs.mkdirSync(publicDirectory, { recursive: true });

  const results = [];

  const topLevelEntries = fs.readdirSync(appDirectory, {
    withFileTypes: true,
  });

  for (const entry of topLevelEntries) {
    if (!entry.isDirectory()) continue;

    if (!collegeDirectoryNames.has(entry.name.toLowerCase())) {
      continue;
    }

    walkDirectory(
      path.join(appDirectory, entry.name),
      [entry.name],
      results
    );
  }

  // Remove duplicate URLs and sort college names
  const uniqueResults = Array.from(
    new Map(results.map((page) => [page.href, page])).values()
  ).sort((a, b) => a.label.localeCompare(b.label));

  fs.writeFileSync(
    outputFile,
    JSON.stringify(uniqueResults, null, 2),
    "utf8"
  );

  console.log(
    `Generated college search index with ${uniqueResults.length} colleges.`
  );
}

main();
