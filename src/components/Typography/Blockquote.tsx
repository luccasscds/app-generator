import React from 'react';

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  cite?: string;
  author?: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({
  children,
  variant = 'default',
  size = 'md',
  cite,
  author,
  className = '',
  style = {},
  ...props
}) => {
  // Tamanhos
  const sizes = {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  };

  // Cores das variantes
  const variantStyles = {
    default: {
      borderColor: 'var(--surface-300)',
      color: 'var(--text-color)',
      backgroundColor: 'var(--surface-50)',
    },
    primary: {
      borderColor: 'var(--primary-color)',
      color: 'var(--primary-color)',
      backgroundColor: 'var(--primary-50)',
    },
    secondary: {
      borderColor: 'var(--surface-400)',
      color: 'var(--text-color)',
      backgroundColor: 'var(--surface-100)',
    },
    accent: {
      borderColor: 'var(--purple-400)',
      color: 'var(--purple-700)',
      backgroundColor: 'var(--purple-50)',
    },
  };

  const blockquoteStyle: React.CSSProperties = {
    fontSize: sizes[size],
    borderLeft: `4px solid ${variantStyles[variant].borderColor}`,
    paddingLeft: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontStyle: 'italic',
    margin: 0,
    ...variantStyles[variant],
    ...style,
  };

  const authorStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: 'var(--text-color-secondary)',
    marginTop: '0.5rem',
    fontStyle: 'normal',
  };

  return (
    <blockquote className={className} style={blockquoteStyle} cite={cite} {...props}>
      {children}
      {author && (
        <footer style={authorStyle}>
          — {author}
        </footer>
      )}
    </blockquote>
  );
};
