"use client";

interface StudyCTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Opcional: puedes añadir un callback extra si quieres, pero usaremos el onClick estándar
}

export default function StudyCTAButton({
  className,
  style,
  children,
  id,
  onClick,
  ...props
}: StudyCTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Abrir el modal
    window.dispatchEvent(new CustomEvent("open-study-modal"));
    
    // 2. Ejecutar el onClick que se le pase (si existe)
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      id={id}
      className={className}
      style={{ border: "none", cursor: "pointer", ...style }}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
