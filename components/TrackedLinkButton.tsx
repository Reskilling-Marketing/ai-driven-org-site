"use client";

import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  label: string;
  eventName: string;
  variant: "a" | "b";
  className: string;
};

export default function TrackedLinkButton({
  href,
  label,
  eventName,
  variant,
  className,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, { variant, label })}
    >
      {label}
    </a>
  );
}
