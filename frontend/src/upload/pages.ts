import type { WizardPageDef } from "../wizard/types";
import ProjectPage from "./pages/ProjectPage.svelte";
import SupportDataPage from "./pages/SupportDataPage.svelte";
import UploadPage from "./pages/UploadPage.svelte";
import CompletePage from "./pages/CompletePage.svelte";
import { m } from "../lib/paraglide/messages.js";

/** The pages of the upload wizard, in order. */
export const pages: WizardPageDef[] = [
  {
    id: "project",
    title: () => m.project_page_title(),
    subtitle: () => m.project_page_subtitle(),
    component: ProjectPage,
  },
  {
    id: "support-data",
    title: "Support Data",
    subtitle: "Choose which data to include in the upload",
    component: SupportDataPage,
  },
  {
    id: "upload",
    title: () => m.upload_page_title(),
    subtitle: () => m.upload_page_subtitle(),
    component: UploadPage,
  },
  {
    id: "complete",
    title: () => m.complete_page_title(),
    subtitle: () => m.complete_page_subtitle(),
    component: CompletePage,
  },
];
