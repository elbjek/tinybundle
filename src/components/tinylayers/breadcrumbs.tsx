import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

export type Crumb = { label: string; href?: string };

export function LayersBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-layers-muted">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-layers-blue hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? "text-layers-ink" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
