import React from 'react';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'inline' | 'block';
  language?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const Code: React.FC<CodeProps> = ({
  children,
  variant = 'inline',
  language,
  size = 'sm',
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

  if (variant === 'inline') {
    const inlineStyle: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: sizes[size],
      backgroundColor: 'var(--surface-100)',
      color: 'var(--text-color)',
      padding: '0.125rem 0.375rem',
      borderRadius: '0.25rem',
      border: '1px solid var(--surface-300)',
      ...style,
    };

    return (
      <code className={className} style={inlineStyle} {...props}>
        {children}
      </code>
    );
  }

  // Block variant
  const blockStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: sizes[size],
    backgroundColor: 'var(--surface-900)',
    color: 'var(--surface-0)',
    padding: '1rem',
    borderRadius: '0.5rem',
    overflowX: 'auto',
    display: 'block',
    margin: 0,
    ...style,
  };

  return (
    <pre className={className} style={blockStyle} {...props}>
      <code data-language={language}>
        {children}
      </code>
    </pre>
  );
};

// Convenience components
export const InlineCode: React.FC<Omit<CodeProps, 'variant'>> = (props) => (
  <Code variant="inline" {...props} />
);

export const CodeBlock: React.FC<Omit<CodeProps, 'variant'>> = (props) => (
  <Code variant="block" {...props} />
);
