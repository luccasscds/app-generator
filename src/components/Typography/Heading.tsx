import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  variant = 'default',
  size,
  weight = 'semibold',
  align = 'center',
  className = '',
  style = {},
  ...props
}) => {
  // Tamanhos padrão baseados no nível
  const defaultSizes = {
    1: '2.5rem',
    2: '2rem',
    3: '1.75rem',
    4: '1.5rem',
    5: '1.25rem',
    6: '1rem',
  };

  // Tamanhos customizados
  const customSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  };

  // Cores das variantes
  const variantColors = {
    default: 'var(--text-color)',
    primary: 'var(--primary-color)',
    secondary: 'var(--text-color-secondary)',
    accent: 'var(--purple-500)',
  };

  // Pesos da fonte
  const fontWeights = {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: size ? customSizes[size] : defaultSizes[level],
    fontWeight: fontWeights[weight],
    color: variantColors[variant],
    textAlign: align,
    width: '100%',
    margin: 0,
    lineHeight: 1.2,
    ...style,
  };

  const headingProps = {
    className,
    style: headingStyle,
    ...props,
  };

  switch (level) {
    case 1:
      return <h1 {...headingProps}>{children}</h1>;
    case 2:
      return <h2 {...headingProps}>{children}</h2>;
    case 3:
      return <h3 {...headingProps}>{children}</h3>;
    case 4:
      return <h4 {...headingProps}>{children}</h4>;
    case 5:
      return <h5 {...headingProps}>{children}</h5>;
    case 6:
      return <h6 {...headingProps}>{children}</h6>;
    default:
      return <h1 {...headingProps}>{children}</h1>;
  }
};

// Convenience components
export const H1: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level={1} {...props} />
);

export const H2: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level={2} {...props} />
);

export const H3: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level={3} {...props} />
);

export const H4: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level={4} {...props} />
);

export const H5: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level={5} {...props} />
);

export const H6: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level={6} {...props} />
);
