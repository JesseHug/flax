import type * as React from "react";

import { ChevronDown } from "lucide-react";

/** One collapsible group of settings: title and current values, then fields. */
export function ConfigSection({
  id,
  title,
  summary,
  changed,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  /** Current values, shown under the title. */
  summary?: React.ReactNode;
  /** Has edits that are not saved yet. */
  changed?: boolean;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section
      className="scroll-mt-4 border-b border-divider"
      id={`config-${id}`}
    >
      <button
        aria-controls={`config-${id}-body`}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-1 py-3.5 text-left transition-colors hover:bg-default-50"
        type="button"
        onClick={onToggle}
      >
        <div className="min-w-0 flex-1">
          <h2 className="flex items-baseline gap-2 text-sm font-medium">
            {title}
            {changed && (
              <span className="text-xs font-normal text-warning-600">
                未保存
              </span>
            )}
          </h2>
          {summary && (
            <p className="mt-0.5 truncate text-xs text-default-400">
              {summary}
            </p>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-default-300 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="space-y-4 px-1 pb-6 pt-2" id={`config-${id}-body`}>
          {children}
        </div>
      )}
    </section>
  );
}

/** Label above the control with a line of help; `inline` puts the control on the right (switches). */
export function Field({
  label,
  help,
  inline,
  children,
}: {
  label: React.ReactNode;
  help?: React.ReactNode;
  inline?: boolean;
  children: React.ReactNode;
}) {
  if (inline) {
    return (
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm">{label}</p>
          {help && <p className="text-xs text-default-400">{help}</p>}
        </div>
        <div className="shrink-0">{children}</div>
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <p className="text-sm">{label}</p>
      {children}
      {help && <p className="text-xs text-default-400">{help}</p>}
    </div>
  );
}

/** Small heading inside a section, for a group of fields. */
export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-t border-divider pt-3 text-xs font-semibold text-default-500 first:border-t-0 first:pt-0">
      {children}
    </p>
  );
}
