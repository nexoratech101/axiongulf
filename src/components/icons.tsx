type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M11 8h6l2 6-4 3c1.5 4 4.5 7 8.5 8.5l3-4 6 2v6c0 1-1 2-2 2-11 0-21-10-21-21 0-1 1-2 2-2Z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="6" y="10" width="28" height="20" rx="2" />
      <path d="M7 12l13 10 13-10" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 12v8l6 4" />
    </svg>
  );
}

export function IconPrinter3D({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M8 12h24l-3 5H11l-3-5Z" />
      <path d="M11 17v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V17" />
      <path d="M14 24h12M14 28h8" />
      <path d="M20 8v4" />
    </svg>
  );
}

export function IconRobotArm({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="10" cy="30" r="3" />
      <path d="M10 27v-6l10-4 8 3" />
      <circle cx="28" cy="20" r="2.5" />
      <path d="M28 20l4-8" />
      <path d="M32 12l3 1.5M32 12l1 3" />
    </svg>
  );
}

export function IconKiosk({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="12" y="6" width="16" height="20" rx="1.5" />
      <path d="M16 11h8M16 15h8M16 19h5" />
      <path d="M17 26v6M23 26v6M14 32h12" />
    </svg>
  );
}

export function IconAutonomousRobot({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="8" y="14" width="24" height="14" rx="2" />
      <circle cx="14" cy="32" r="3" />
      <circle cx="26" cy="32" r="3" />
      <path d="M16 14V9h8v5M18 21h4" />
    </svg>
  );
}

export function IconSurveillance({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M4 20s6-9 16-9 16 9 16 9-6 9-16 9-16-9-16-9Z" />
      <circle cx="20" cy="20" r="5" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconInspection({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="17" cy="17" r="10" />
      <path d="M24.5 24.5 33 33" />
      <path d="M12 17h10M17 12v10" />
    </svg>
  );
}

export function IconCompliance({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 5l13 5v9c0 8-5.5 14.5-13 16-7.5-1.5-13-8-13-16v-9l13-5Z" />
      <path d="M14 20l4 4 8-8" />
    </svg>
  );
}

export function IconDrone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="16" y="17" width="8" height="6" rx="1.5" />
      <path d="M16 20H9M24 20h7M18 17l-6-6M22 17l6-6M18 23l-6 6M22 23l6 6" />
      <circle cx="9" cy="20" r="3" />
      <circle cx="31" cy="20" r="3" />
      <circle cx="12" cy="11" r="3" />
      <circle cx="28" cy="11" r="3" />
      <circle cx="12" cy="29" r="3" />
      <circle cx="28" cy="29" r="3" />
    </svg>
  );
}

export function IconTracking({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 5c-6 0-11 4.7-11 11 0 8 11 19 11 19s11-11 11-19c0-6.3-5-11-11-11Z" />
      <circle cx="20" cy="16" r="4" />
    </svg>
  );
}

export function IconFacility({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M8 34V12l12-6 12 6v22" />
      <path d="M8 34h24M14 34v-8h5v8M21 34v-8h5v8" />
      <path d="M17 16h6M17 21h6" />
    </svg>
  );
}

export function IconDashboard({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="6" y="8" width="28" height="22" rx="1.5" />
      <path d="M12 24v-6M20 24v-10M28 24v-4" />
    </svg>
  );
}

export function IconIoT({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="20" cy="20" r="2.5" />
      <path d="M14 20a6 6 0 0 1 12 0M10 20a10 10 0 0 1 20 0M26 20a6 6 0 0 1-12 0" />
      <path d="M20 32v-4M20 12V8" />
    </svg>
  );
}

export function IconConsultation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M9 11h22v14H18l-5 4v-4h-4V11Z" />
      <path d="M14 17h12M14 21h8" />
    </svg>
  );
}

export function IconSourcing({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M8 13l12-5 12 5-12 5-12-5Z" />
      <path d="M8 13v14l12 5 12-5V13M20 18v14" />
    </svg>
  );
}

export function IconSupport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="20" cy="20" r="10" />
      <circle cx="20" cy="20" r="4" />
      <path d="M13 13l3.5 3.5M27 13l-3.5 3.5M13 27l3.5-3.5M27 27l-3.5-3.5" />
    </svg>
  );
}

export function IconProjectManagement({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="9" y="10" width="22" height="20" rx="1.5" />
      <path d="M9 16h22M15 10v-2M25 10v-2" />
      <path d="M14 22l3 3 7-7" />
    </svg>
  );
}

export function IconTraining({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 10 6 16l14 6 14-6-14-6Z" />
      <path d="M12 19v7c0 2 4 4 8 4s8-2 8-4v-7" />
    </svg>
  );
}

export function IconPartnership({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M13 20l-4 4a3 3 0 0 0 4 4l6-6" />
      <path d="M27 20l4-4a3 3 0 0 0-4-4l-6 6" />
      <path d="M15 18l4 4 6-6" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <path d="M20 6l3 10 10 3-10 3-3 10-3-10-10-3 10-3 3-10Z" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <circle cx="20" cy="20" r="14" />
      <path d="M6 20h28M20 6a21 21 0 0 1 0 28M20 6a21 21 0 0 0 0 28" />
    </svg>
  );
}

export function IconCNC({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="7" y="8" width="26" height="18" rx="1.5" />
      <path d="M20 8v-3M14 26v6h12v-6" />
      <circle cx="20" cy="17" r="4" />
      <path d="M20 13v-2M20 21v2M16 17h-2M24 17h2" />
    </svg>
  );
}

export function IconLaser({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} {...base}>
      <rect x="6" y="8" width="14" height="8" rx="1.5" />
      <path d="M13 16v6l8 8h9" />
      <circle cx="30" cy="30" r="2" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
