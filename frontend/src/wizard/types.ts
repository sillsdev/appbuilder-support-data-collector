import type { Component } from "svelte";

/**
 * Describes one page of a wizard. Pages are shown in the order they are listed,
 * skipping any page whose `isShown()` returns false.
 */
export interface WizardPageDef {
  /** Unique name for the page. */
  id: string;
  /** Bold heading shown in the band at the top of the wizard. */
  title: string | (() => string);
  /** Line of explanation shown under the title. */
  subtitle?: string | (() => string);
  /** The Svelte component that renders the page's content. */
  component: Component<any, any>;
  /**
   * Return false to skip this page, usually based on choices made on earlier
   * pages (read from the shared wizard state). Defaults to true.
   */
  isShown?: () => boolean;
}

/**
 * Optional functions a page component can export to control the wizard, e.g.
 *
 *   export function canNext() { return state.uploadUrl !== ""; }
 *
 * The wizard re-checks the `can*` functions and `nextCaption` whenever any
 * state they read changes, so there is no need to tell it the page changed.
 *
 * A page component is recreated each time it is shown, so the component's own
 * setup code runs every time the page appears. Keep anything that must
 * survive Back and Next in the shared wizard state, not in the component.
 */
export interface WizardPageHooks {
  /** Whether the Next (or Finish) button is enabled. Defaults to true. */
  canNext?(): boolean;
  /** Whether the Back button is enabled. Defaults to true. */
  canBack?(): boolean;
  /** Whether the Cancel button is enabled. Defaults to true. */
  canCancel?(): boolean;
  /** Caption for the Next button. Defaults to "Next" ("Finish" on the last page). */
  nextCaption?(): string;
  /**
   * Called when Next is clicked. Save the page's choices to the shared state
   * here. Return false to stay on the page. May be async; the buttons are
   * disabled until it finishes.
   */
  onNext?(): boolean | Promise<boolean>;
  /** Called when Back is clicked. Return false to stay on the page. */
  onBack?(): boolean;
  /** Called when Cancel is clicked, e.g. to stop an upload. Return false to stay open. */
  onCancel?(): boolean;
}
