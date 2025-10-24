import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'error' | 'success' | 'warning';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  as?: 'p' | 'span' | 'div';
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'default',
  size = 'md',
  weight = 'normal',
  align = 'left',
  as = 'p',
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

  // Cores das variantes usando variáveis CSS do PrimeReact
  const variantColors = {
    default: 'var(--text-color)',
    primary: 'var(--primary-color)',
    secondary: 'var(--text-color-secondary)',
    accent: 'var(--purple-500)',
    muted: 'var(--surface-500)',
    error: 'var(--red-500)',
    success: 'var(--green-500)',
    warning: 'var(--yellow-500)',
  };

  // Pesos da fonte
  const fontWeights = {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  };

  const textStyle: React.CSSProperties = {
    fontSize: sizes[size],
    fontWeight: fontWeights[weight],
    color: variantColors[variant],
    textAlign: align,
    margin: 0,
    lineHeight: 1.5,
    ...style,
  };

  return React.createElement(as, {
    className,
    style: textStyle,
    ...props,
  }, children);
};

// Convenience components
export const Paragraph: React.FC<Omit<TextProps, 'as'>> = (props) => (
  <Text as="p" {...props} />
);

export const Span: React.FC<Omit<TextProps, 'as'>> = (props) => (
  <Text as="span" {...props} />
);
