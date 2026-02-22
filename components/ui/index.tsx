'use client';

// ─── Button ───────────────────────────────────────────────────────────────

interface ButtonProps {
  children:  React.ReactNode;
  onClick?:  () => void;
  variant?:  'primary' | 'ghost';
  disabled?: boolean;
  id?:       string;
}

export function Button({ children, onClick, variant = 'primary', disabled, id }: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
}

// ─── IconButton ───────────────────────────────────────────────────────────

interface IconButtonProps {
  icon:     React.ReactNode;
  label:    string;
  onClick?: () => void;
  active?:  boolean;
  id?:      string;
}

export function IconButton({ icon, label, onClick, active, id }: IconButtonProps) {
  return (
    <button
      id={id}
      title={label}
      onClick={onClick}
      className={`icon-btn ${active ? 'active' : ''}`}
    >
      {icon}
    </button>
  );
}

// ─── Toggle ───────────────────────────────────────────────────────────────

interface ToggleProps {
  on:       boolean;
  onToggle: () => void;
  id?:      string;
}

export function Toggle({ on, onToggle, id }: ToggleProps) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={on}
      onClick={onToggle}
      className={`toggle ${on ? 'on' : ''}`}
    />
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────

interface PanelProps {
  children:   React.ReactNode;
  className?: string;
}

export function Panel({ children, className = '' }: PanelProps) {
  return <div className={`panel ${className}`}>{children}</div>;
}

// ─── Avatar ───────────────────────────────────────────────────────────────

interface AvatarProps {
  name:  string;
  color: string;
}

export function Avatar({ name, color }: AvatarProps) {
  return (
    <div className="avatar" style={{ background: color }}>
      {name[0].toUpperCase()}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────

interface CardProps {
  onClick?:  () => void;
  thumb:     React.ReactNode;
  title:     string;
  subtitle?: string;
  isNew?:    boolean;
  selected?: boolean;
}

export function Card({ onClick, thumb, title, subtitle, isNew, selected }: CardProps) {
  return (
    <div
      className={`card ${isNew ? 'card-new' : ''} ${selected ? 'card-selected' : ''}`}
      onClick={onClick}
    >
      <div className="card-thumb">{thumb}</div>
      <div className="card-info">
        <div className="card-title">{title}</div>
        {subtitle && <div className="card-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}