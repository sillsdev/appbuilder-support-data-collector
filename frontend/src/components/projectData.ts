export type ProjectDataItemId = "projectConfiguration" | "projectContent";

export type ProjectDataSelection = Record<ProjectDataItemId, boolean>;

export interface ProjectDataItem {
  id: ProjectDataItemId;
  title: string;
  description: string;
  sensitiveNote?: string;
  fileName(projectName: string): string;
}

/** MVP project data categories requested for support investigations. */
export const projectDataItems: ProjectDataItem[] = [
  {
    id: "projectConfiguration",
    title: "Project configuration",
    description: "The App Builder project definition.",
    sensitiveNote: "May contain service configuration or integration details.",
    fileName: (projectName) => `${projectName}.appDef`,
  },
  {
    id: "projectContent",
    title: "Project content",
    description: "The files in the project's content folder.",
    sensitiveNote: "May contain unpublished or otherwise sensitive project content.",
    fileName: () => "project_data/",
  },
];

export function getSelectedProjectDataItems(
  selection: ProjectDataSelection,
): ProjectDataItem[] {
  return projectDataItems.filter((item) => selection[item.id]);
}
