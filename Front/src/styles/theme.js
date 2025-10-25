export const theme = {
  // Cores principais do sistema
  colors: {
    primary: '#626262ff', // cor principal (botões, links)
    primaryhover: '#eeeeeeff', // variação escura da principal (hover)
    primaryactivate: '#e0e0e0ff', // variação escura da principal (hover)
    secondary: '#ff6600', // cor secundária (avisos, destaque)
    background: '#ffffffff', // fundo geral da aplicação
    surface: '#ffffff', // fundo de cards, inputs, modais
    border: '#e0e0e0', // bordas sutis

    text: {
      primary: '#1c1c1c', // texto principal
      secondary: '#666666', // texto auxiliar
      inverse: '#ffffff', // texto sobre fundo escuro
    },
    feedback: {
      success: '#28a745', // sucesso (ex: alerta verde)
      error: '#dc3545', // erro (ex: alerta vermelho)
      warning: '#ffc107', // aviso (amarelo)
      info: '#17a2b8', // informação (azul claro)
    },
  },

  // Tipografia global
  typography: {
    font: "'Inter', sans-serif", // fonte base do app
    sizes: {
      // tamanhos padronizados
      xs: '0.75rem', // pequeno
      sm: '0.875rem', // normal pequeno
      md: '1rem', // padrão
      lg: '1.25rem', // grande
      xl: '1.5rem', // título
    },
    weights: {
      // pesos de fonte
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  // 📏 Espaçamentos padrão (margem, padding etc.)
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '2rem', // 32px
    xl: '4rem', // 64px
  },

  // Bordas arredondadas
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px', // formato circular (ex: avatar)
  },

  // Sombras padronizadas
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)', // leve
    md: '0 2px 4px rgba(0,0,0,0.1)', // média
    lg: '0 4px 8px rgba(0,0,0,0.15)', // forte
  },

  // Breakpoints (responsividade)
  breakpoints: {
    sm: '480px', // celular
    md: '768px', // tablet
    lg: '1024px', // notebook
    xl: '1280px', // desktop grande
  },
};
