import type { ProjectInfo } from "../../bindings/github.com/sillsdev/appbuilder-support-data-collector";
import type { CollectionRequest, SupportDataItemId } from "@sil/support-data";

/**
 * Details shared between the pages of the upload wizard. Pages read and write
 * this instead of keeping their own state, so choices survive Back and Next,
 * and `isShown()` checks can depend on choices made on earlier pages.
 */
export const upload = $state({
  /** The project to upload, once it has been loaded. */
  project: undefined as ProjectInfo | undefined,
  /** Where the support data will be sent. */
  uploadUrl: "",
  /** Whether the mock access flow has been completed. */
  accessGranted: false,
  /** The validated portal request or local representative fixture. */
  collectionRequest: undefined as CollectionRequest | undefined,
  /** The user's authoritative final selection for collection. */
  selectedItems: [] as SupportDataItemId[],
});
