import fs from "fs";
import path from "path";

import matter from "gray-matter";

const projectDirectory = path.join(process.cwd(), "projects");

export const getProjectFile = () => {
  return fs.readdirSync(projectDirectory);
};
export const projectData = (fileIdentifier) => {
  const projectSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectDirectory, `${projectSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const projectData = {
    slug: projectSlug,
    ...data,
    content,
  };
  return projectData;
};
export const getAllProjects = () => {
  const projectFiles = getProjectFile();
  const allProjects = projectFiles.map((projectFile) => {
    return projectData(projectFile);
  });
  return allProjects;
};

export const featuredProjects = () => {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter((project) => project.isFeatured);
  return featuredProjects;
};
