export default { extends: ['@commitlint/config-conventional'] };

/*
explicação de cada tipo de commit:
    feat: uma nova funcionalidade para o usuário final
    fix: uma correção de bug para o usuário final
    docs: mudanças na documentação
    style: mudanças que não afetam o significado do código (espaços em branco, formatação, etc.)
    refactor: uma mudança de código que não corrige um bug nem adiciona uma funcionalidade
    perf: uma mudança de código que melhora o desempenho
    test: adicionar ou corrigir testes
    chore: mudanças na construção do processo ou ferramentas auxiliares e bibliotecas, como geração de documentação
    ci: mudanças nos arquivos e scripts de configuração do CI (Integração Contínua)
    build: mudanças que afetam o sistema de build ou dependências externas
    revert: reverter um commit anterior

Para versionamento automático:
    feat: → versão minor (1.0.0 → 1.1.0)
    fix: → versão patch (1.0.0 → 1.0.1)
    feat!: ou BREAKING CHANGE → versão major (1.0.0 → 2.0.0)
    Outros tipos → não alteram versão automaticamente
*/