"use client";

import { useCallback } from "react";
import type { BlogFilters } from "@/lib/blog-filters";

type BlogFilterControlsProps = {
  availableTags: string[];
  availableTopics: string[];
  filters: BlogFilters;
  onFiltersChange: (filters: BlogFilters) => void;
};

export function BlogFilterControls({
  availableTags,
  availableTopics,
  filters,
  onFiltersChange,
}: BlogFilterControlsProps) {
  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onFiltersChange({
        ...filters,
        search: event.target.value,
      });
    },
    [filters, onFiltersChange],
  );

  const handleDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      onFiltersChange({
        ...filters,
        [name]: value || undefined,
      });
    },
    [filters, onFiltersChange],
  );

  const handleToggleValue = useCallback(
    (field: "tags" | "topics", value: string) => {
      const currentValues = filters[field] ?? [];
      const nextValues = toggleSetValue(currentValues, value);

      onFiltersChange({
        ...filters,
        [field]: nextValues,
      });
    },
    [filters, onFiltersChange],
  );

  const handleReset = useCallback(() => {
    onFiltersChange({
      search: "",
      tags: [],
      topics: [],
      startDate: undefined,
      endDate: undefined,
    });
  }, [onFiltersChange]);

  return (
    <form
      className="glass-panel p-6"
      aria-label="Blog filters"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wide muted-copy">
            Search
          </span>
          <input
            aria-label="Search blog posts"
            className="glass-input w-full"
            name="search"
            placeholder="Search titles, tags, or descriptions"
            type="search"
            value={filters.search ?? ""}
            onChange={handleSearchChange}
          />
        </label>

        <FiltersGroup
          legend="Tags"
          ariaLabelPrefix="Filter by tag"
          values={availableTags}
          selectedValues={filters.tags ?? []}
          onToggle={(value) => handleToggleValue("tags", value)}
        />

        <FiltersGroup
          legend="Topics"
          ariaLabelPrefix="Filter by topic"
          values={availableTopics}
          selectedValues={filters.topics ?? []}
          onToggle={(value) => handleToggleValue("topics", value)}
        />

        <fieldset className="grid gap-3 sm:grid-cols-2">
          <legend className="mb-2 text-sm font-semibold uppercase tracking-wide muted-copy">
            Date range
          </legend>
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
              From
            </span>
            <input
              aria-label="Filter posts from date"
              className="glass-input w-full py-2"
              type="date"
              name="startDate"
              value={filters.startDate ?? ""}
              onChange={handleDateChange}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] subtle-copy">
              To
            </span>
            <input
              aria-label="Filter posts to date"
              className="glass-input w-full py-2"
              type="date"
              name="endDate"
              value={filters.endDate ?? ""}
              onChange={handleDateChange}
            />
          </label>
        </fieldset>

        <button
          aria-label="Reset blog filters"
          className="brand-button self-start"
          type="button"
          onClick={handleReset}
        >
          Clear filters
        </button>
      </div>
    </form>
  );
}

type FiltersGroupProps = {
  legend: string;
  ariaLabelPrefix: string;
  values: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
};

function FiltersGroup({
  legend,
  ariaLabelPrefix,
  values,
  selectedValues,
  onToggle,
}: FiltersGroupProps) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold uppercase tracking-wide muted-copy">
        {legend}
      </legend>
      {values.length === 0 ? (
        <p className="text-sm subtle-copy">
          No {legend.toLowerCase()} available yet.
        </p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {values.map((value) => {
            const id = `${legend}-${value}`.toLowerCase().replace(/\s+/g, "-");
            const checked = selectedValues.includes(value);
            return (
              <label
                key={value}
                className="glass-panel flex items-center gap-2 rounded-full px-3 py-1 text-sm transition hover:border-[color:var(--brand-primary)]"
                data-tone="subtle"
              >
                <input
                  aria-label={`${ariaLabelPrefix} ${value}`}
                  checked={checked}
                  className="h-4 w-4 accent-[color:var(--brand-primary)]"
                  id={id}
                  type="checkbox"
                  onChange={() => onToggle(value)}
                />
                <span>{value}</span>
              </label>
            );
          })}
        </div>
      )}
    </fieldset>
  );
}

function toggleSetValue(values: string[], value: string): string[] {
  // Deduplicate value toggles so filters remain predictable on every click.
  if (values.includes(value)) {
    return values.filter((existing) => existing !== value);
  }

  return [...values, value];
}

