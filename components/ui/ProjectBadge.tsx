interface ProjectBadgeProps {
  label: string;
  color?: string;
}

export default function ProjectBadge({ label, color = "var(--text-faint)" }: ProjectBadgeProps) {
  return (
    <span
      className="inline-flex items-center rounded-[4px] px-2 py-[3px] font-mono text-[11px]"
      style={{
        color,
        background: `color-mix(in srgb, ${color} 12%, transparent)`,
      }}
    >
      {label} ✓
    </span>
  );
}
