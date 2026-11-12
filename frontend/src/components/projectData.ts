import type { Component } from "svelte";
import type { ProjectInfo } from "../../bindings/github.com/sillsdev/appbuilder-support-data-collector";
import { m } from "../lib/paraglide/messages.js";
import TopicAppIcon from "../lib/icons/TopicAppIcon.svelte";
import TopicContentsIcon from "../lib/icons/TopicContentsIcon.svelte";

export type ProjectDataItemId =
  | "projectConfiguration"
  | "projectContent"
  | "mediaResources"
  | "customFiles"
  | "firebaseConfiguration"
  | "analyticsConfiguration"
  | "iosSigning"
  | "androidSigning"
  | "buildDiagnostics";

export type ProjectDataSelection = Record<ProjectDataItemId, boolean>;

export interface ProjectDataItem {
  id: ProjectDataItemId;
  title: () => string;
  description: (project: ProjectInfo) => string;
  sensitiveNote?: () => string;
  icon: Component;
  excluded?: boolean;
  fileName(project: ProjectInfo): string | undefined;
  isAvailable(project: ProjectInfo): boolean;
}

export function getExpectedContentFolderName(project: ProjectInfo): string {
  return project.name ? `${project.name}_data` : "";
}

/** MVP project data categories requested for support investigations. */
export const projectDataItems: ProjectDataItem[] = [
  {
    id: "projectConfiguration",
    title: m.project_data_configuration_title,
    description: (project) => m.project_data_configuration_description({
      appDefFileName: project.appDefFileName,
    }),
    sensitiveNote: m.project_data_configuration_sensitive_note,
    icon: TopicAppIcon,
    fileName: (project) => project.appDefFileName || undefined,
    isAvailable: (project) => Boolean(project.appDefFileName),
  },
  {
    id: "projectContent",
    title: m.project_data_content_title,
    description: (project) => m.project_data_content_description({
      appDefFileName: project.appDefFileName,
      contentFolderName: getExpectedContentFolderName(project),
    }),
    sensitiveNote: m.project_data_content_sensitive_note,
    icon: TopicContentsIcon,
    fileName: (project) => project.contentFolderName || undefined,
    isAvailable: (project) => Boolean(project.name && project.contentFolderName),
  },
  /*
  {
    id: "mediaResources",
    title: "Media and other project resources",
    description: "Images, audio, video, and other resources referenced by the project.",
    fileName: () => "project_media/",
  },
  {
    id: "customFiles",
    title: "Custom files and extensions",
    description: "Custom scripts, styles, templates, and other project-specific files and extensions.",
    fileName: () => "custom_files/",
  },
  {
    id: "firebaseConfiguration",
    title: "Firebase configuration",
    description: "Firebase configuration files for applicable platforms.",
    sensitiveNote: "May contain Firebase service configuration.",
    fileName: () => "firebase/",
  },
  {
    id: "analyticsConfiguration",
    title: "Analytics configuration",
    description: "Analytics service configuration and API keys, where applicable.",
    sensitiveNote: "May contain analytics API keys or service configuration.",
    fileName: () => "analytics/",
  },
  {
    id: "iosSigning",
    title: "iOS signing configuration",
    description: "Provisioning profiles and other relevant iOS signing files.",
    sensitiveNote: "May contain iOS signing credentials.",
    fileName: () => "ios_signing/",
  },
  {
    id: "androidSigning",
    title: "Android signing credentials",
    description: "Android keystores and passwords are not collected.",
    excluded: true,
    fileName: () => "Not collected",
  },
  {
    id: "buildDiagnostics",
    title: "Build and diagnostic information",
    description: "Build logs, error output, tool versions, and other diagnostic data.",
    fileName: () => "build_diagnostics/",
  },
  */
];

export function getSelectedProjectDataItems(
  selection: ProjectDataSelection,
  project: ProjectInfo | undefined,
): ProjectDataItem[] {
  if (!project) {
    return [];
  }
  return projectDataItems.filter(
    (item) => !item.excluded && selection[item.id] && item.isAvailable(project),
  );
}
