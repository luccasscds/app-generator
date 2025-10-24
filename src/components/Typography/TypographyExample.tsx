import React from 'react';
import {
  H1, H2, H3, H4, H5, H6,
  Text, Paragraph, Span,
  Link,
  InlineCode, CodeBlock,
  Label,
  Blockquote
} from './index';

export const TypographyExample: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '2rem',
  };

  const groupStyle: React.CSSProperties = {
    marginTop: '1rem',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      {/* Headings */}
      <section style={sectionStyle}>
        <H2 variant="primary">Títulos (Headings)</H2>
        <div style={groupStyle}>
          <H1>Título H1 - Principal</H1>
          <H2>Título H2 - Seção</H2>
          <H3>Título H3 - Subseção</H3>
          <H4>Título H4 - Menor</H4>
          <H5>Título H5 - Muito Menor</H5>
          <H6>Título H6 - Mínimo</H6>
        </div>
        
        <div style={groupStyle}>
          <H3>Variações de Títulos</H3>
          <H2 variant="primary">Título Primário</H2>
          <H2 variant="secondary">Título Secundário</H2>
          <H2 variant="accent">Título Accent</H2>
          <H3 weight="light">Título Leve</H3>
          <H3 weight="bold">Título Negrito</H3>
        </div>
      </section>

      {/* Text */}
      <section style={sectionStyle}>
        <H2 variant="primary">Texto (Text)</H2>
        <div style={groupStyle}>
          <Paragraph>
            Este é um parágrafo normal com texto padrão. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
          
          <Paragraph variant="secondary" size="sm">
            Parágrafo secundário menor.
          </Paragraph>
          
          <div style={{ marginTop: '1rem' }}>
            <Span variant="primary" weight="semibold">Texto em span primário</Span>{' '}
            <Span variant="muted">com texto normal</Span>{' '}
            <Span variant="error" weight="bold">e texto de erro.</Span>
          </div>
          
          <Text variant="success" size="lg" weight="medium">
            Texto de sucesso grande
          </Text>
          
          <Text variant="warning" align="center">
            Texto de aviso centralizado
          </Text>
        </div>
      </section>

      {/* Links */}
      <section style={sectionStyle}>
        <H2 variant="primary">Links</H2>
        <div style={groupStyle}>
          <div style={{ marginBottom: '0.5rem' }}>
            <Link href="#" style={{ marginRight: '1rem' }}>Link padrão</Link>
            <Link href="#" variant="primary" style={{ marginRight: '1rem' }}>Link primário</Link>
            <Link href="#" variant="secondary" style={{ marginRight: '1rem' }}>Link secundário</Link>
            <Link href="#" variant="accent">Link accent</Link>
          </div>
          
          <div style={{ marginBottom: '0.5rem' }}>
            <Link href="https://example.com" external style={{ marginRight: '1rem' }}>
              Link externo
            </Link>
            <Link href="#" underline="always" style={{ marginRight: '1rem' }}>
              Sempre sublinhado
            </Link>
            <Link href="#" underline="none">
              Sem sublinhado
            </Link>
          </div>
          
          <div>
            <Link href="#" size="xs" style={{ marginRight: '1rem' }}>Link pequeno</Link>
            <Link href="#" size="lg" style={{ marginRight: '1rem' }}>Link grande</Link>
            <Link href="#" weight="bold">Link negrito</Link>
          </div>
        </div>
      </section>

      {/* Code */}
      <section style={sectionStyle}>
        <H2 variant="primary">Código</H2>
        <div style={groupStyle}>
          <Paragraph>
            Use <InlineCode>console.log()</InlineCode> para debug ou{' '}
            <InlineCode>npm install</InlineCode> para instalar pacotes.
          </Paragraph>
          
          <div style={{ marginTop: '1rem' }}>
            <CodeBlock language="javascript">
{`function exemplo() {
  const mensagem = "Olá, mundo!";
  console.log(mensagem);
  return mensagem;
}`}
            </CodeBlock>
          </div>
          
          <div style={{ marginTop: '1rem' }}>
            <CodeBlock language="css" size="sm">
{`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* Labels */}
      <section style={sectionStyle}>
        <H2 variant="primary">Labels</H2>
        <div style={groupStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <Label htmlFor="nome">Nome</Label>
            <input 
              id="nome" 
              type="text" 
              style={{ 
                border: '1px solid var(--surface-300)', 
                borderRadius: '0.25rem', 
                padding: '0.5rem', 
                width: '200px',
                fontSize: '1rem'
              }} 
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <Label htmlFor="email" required variant="primary">Email</Label>
            <input 
              id="email" 
              type="email" 
              style={{ 
                border: '1px solid var(--surface-300)', 
                borderRadius: '0.25rem', 
                padding: '0.5rem', 
                width: '200px',
                fontSize: '1rem'
              }} 
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <Label htmlFor="senha" variant="error" size="sm">Senha (erro)</Label>
            <input 
              id="senha" 
              type="password" 
              style={{ 
                border: '1px solid var(--red-300)', 
                borderRadius: '0.25rem', 
                padding: '0.5rem', 
                width: '200px',
                fontSize: '1rem'
              }} 
            />
          </div>
          
          <div>
            <Label htmlFor="confirmacao" variant="success" weight="bold">Confirmação</Label>
            <input 
              id="confirmacao" 
              type="password" 
              style={{ 
                border: '1px solid var(--green-300)', 
                borderRadius: '0.25rem', 
                padding: '0.5rem', 
                width: '200px',
                fontSize: '1rem'
              }} 
            />
          </div>
        </div>
      </section>

      {/* Blockquotes */}
      <section style={sectionStyle}>
        <H2 variant="primary">Citações (Blockquote)</H2>
        <div style={groupStyle}>
          <Blockquote style={{ marginBottom: '1rem' }}>
            A imaginação é mais importante que o conhecimento. 
            O conhecimento é limitado, a imaginação abraça o mundo inteiro.
          </Blockquote>
          
          <Blockquote 
            variant="primary" 
            author="Albert Einstein"
            cite="https://example.com"
            style={{ marginBottom: '1rem' }}
          >
            Duas coisas são infinitas: o universo e a estupidez humana; 
            e eu não tenho certeza sobre o universo.
          </Blockquote>
          
          <Blockquote 
            variant="accent" 
            size="lg"
            author="Steve Jobs"
            style={{ marginBottom: '1rem' }}
          >
            Innovation distinguishes between a leader and a follower.
          </Blockquote>
          
          <Blockquote variant="secondary" size="sm">
            Citação pequena e secundária para demonstração.
          </Blockquote>
        </div>
      </section>
    </div>
  );
};
