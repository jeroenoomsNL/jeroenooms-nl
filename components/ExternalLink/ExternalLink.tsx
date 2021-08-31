import { ReactElement } from "react";
import { ArrowRight } from "../Icons/Icons";

interface ExternalLinkProps {
  href: string;
  label: string | ReactElement;
  title?: string;
  className?: string;
}

export const ExternalLink = ({
  href,
  title,
  label,
  className,
}: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
    className={className}
  >
    {label}
  </a>
);

export const ExternalLinkButton = ({
  href,
  title,
  label,
}: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
    className="button"
  >
    {label} <ArrowRight />
  </a>
);
