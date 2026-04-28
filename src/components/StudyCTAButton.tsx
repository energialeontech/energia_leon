"use client";

interface StudyCTAButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
  onClick?: () => void;
}

export default function StudyCTAButton({
  className,
  style,
  children,
  id,
  onClick,
}: StudyCTAButtonProps) {
  const handleClick = () => {
    onClick?.();
    window.dispatchEvent(new CustomEvent("open-study-modal"));
  };

  return (
    <button
      id={id}
      className={className}
      style={{ border: "none", cursor: "pointer", ...style }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
