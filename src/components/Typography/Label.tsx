import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'error' | 'success' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  weight = 'medium',
  required = false,
  className = '',
  style = {},
  ...props
}) => {
  // Tamanhos
  const sizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
  };

  // Cores das variantes
  const variantColors = {
    default: 'var(--text-color)',
    primary: 'var(--primary-color)',
    secondary: 'var(--text-color-secondary)',
    accent: 'var(--purple-500)',
    error: 'var(--red-500)',
    success: 'var(--green-500)',
    warning: 'var(--yellow-600)',
  };

  // Pesos da fonte
  const fontWeights = {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: sizes[size],
    fontWeight: fontWeights[weight],
    color: variantColors[variant],
    display: 'block',
    marginBottom: '0.25rem',
    ...style,
  };

  return (
    <label className={className} style={labelStyle} {...props}>
      {children}
      {required && (
        <span style={{ color: 'var(--red-500)', marginLeft: '0.25rem' }}>*</span>
      )}
    </label>
  );
};
