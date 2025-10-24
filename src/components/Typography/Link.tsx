import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  underline?: 'none' | 'hover' | 'always';
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  variant = 'default',
  size = 'md',
  weight = 'normal',
  underline = 'hover',
  external = false,
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
    xl: '1.25rem',
  };

  // Cores das variantes
  const variantColors = {
    default: 'var(--primary-color)',
    primary: 'var(--primary-color)',
    secondary: 'var(--text-color-secondary)',
    accent: 'var(--purple-500)',
    muted: 'var(--surface-500)',
  };

  // Pesos da fonte
  const fontWeights = {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  };

  // Estilos de sublinhado
  const getTextDecoration = () => {
    switch (underline) {
      case 'none':
        return 'none';
      case 'always':
        return 'underline';
      case 'hover':
      default:
        return 'none';
    }
  };

  const linkStyle: React.CSSProperties = {
    fontSize: sizes[size],
    fontWeight: fontWeights[weight],
    color: variantColors[variant],
    textDecoration: getTextDecoration(),
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    ...style,
  };

  // Classe CSS para hover
  const linkClassName = `${className} typography-link ${underline === 'hover' ? 'hover-underline' : ''}`.trim();

  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer',
  } : {};

  return (
    <>
      <a
        className={linkClassName}
        style={linkStyle}
        {...externalProps}
        {...props}
      >
        {children}
        {external && (
          <span style={{ marginLeft: '0.25rem', display: 'inline-block' }}>
            <svg 
              width="12" 
              height="12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ verticalAlign: 'middle' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        )}
      </a>
      <style>
        {`
          .typography-link:hover {
            opacity: 0.8;
          }
          .typography-link.hover-underline:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </>
  );
};
