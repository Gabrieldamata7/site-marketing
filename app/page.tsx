'use client'; // Indica que este componente é do lado do cliente

import React, { useState } from 'react';

export default function MeuComponente() {
  const [showContent, setShowContent] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #2f80ed, #000000)', // Gradiente azul escuro para preto
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      boxSizing: 'border-box' as 'border-box', // Correção para o tipo
      overflowY: 'auto',
      paddingBottom: '20px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    curiosityText: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      margin: '20px 0',
      color: '#fff', // Sem laranja, cor branca para o texto
    },
    importantText: {
      color: '#003366', // Azul escuro para as frases importantes
      fontWeight: 'normal', // Remover negrito
      marginTop: '20px', // Ajuste para dar mais espaçamento no topo
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#1a73e8', // Botão "Saiba Mais" com cor azul
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#155a8a', // Cor do botão quando passar o mouse
    },
    content: {
      fontSize: '1.2rem',
      marginTop: '20px',
      lineHeight: '1.5',
    },
    contentHidden: {
      display: 'none',
    },
    balloon: {
      backgroundColor: '#1a73e8',
      color: '#fff',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    buyButton: {
      marginTop: '30px',
      padding: '15px 30px',
      fontSize: '1.2rem',
      backgroundColor: '#003366', // Botão de compra com cor azul escuro
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buyButtonHover: {
      backgroundColor: '#002240', // Cor do botão de compra ao passar o mouse
    },
    titleWithoutBorders: {
      backgroundColor: 'transparent', // Remover fundo cinza dos títulos
      padding: '0', // Remover espaçamento extra
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Você Está Prestes a Descobrir Como a <span style={styles.highlight}>Inteligência Artificial</span> Pode Transformar Seu Mundo! 🚀
      </h1>

      {/* Curiosidade sobre Inteligência Artificial */}
      <div style={styles.curiosityText}>
        Já parou para pensar que a Inteligência Artificial pode mudar radicalmente a forma como você trabalha, aprende e até ganha dinheiro? 🤔
      </div>

      {/* Mostrar ou esconder o conteúdo ao clicar no botão */}
      <button
        style={styles.button}
        onClick={() => setShowContent(!showContent)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1a73e8')}
      >
        Saiba Mais
      </button>

      {/* Conteúdo extra que aparece ao clicar */}
      <div style={showContent ? styles.content : styles.contentHidden}>
        <div style={styles.balloon}>
          🧠 <span style={styles.importantText}>Você quer saber como a IA pode ajudar a acelerar seus estudos?</span>
          <p>A IA pode ser sua parceira para aprender mais rápido, melhorar a retenção de conteúdo e até otimizar o seu tempo de estudo! O futuro da educação está em suas mãos. 🧑‍🏫</p>
        </div>
        <div style={styles.balloon}>
          💼 <span style={styles.importantText}>E como a IA pode transformar seu trabalho?</span>
          <p>De ferramentas para aumentar a produtividade até maneiras inovadoras de gerar mais resultados: a IA pode te ajudar a estar à frente no mercado de trabalho! 💡</p>
        </div>
        <div style={styles.balloon}>
          💸 <span style={styles.importantText}>Você sabia que a IA pode abrir novas fontes de renda?</span>
          <p>Com a IA, você pode explorar novas oportunidades de negócios, criar produtos digitais ou até gerar conteúdo viral! O que está esperando para aproveitar essas oportunidades? 💥</p>
        </div>
      </div>

      {/* Botão de compra com novo nome */}
      <button
        style={styles.buyButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buyButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#003366')}
        onClick={() => window.location.href = 'https://pay.kiwify.com.br/36vnFrK'} // Link para a página de pagamento
      >
        Como usar IA para trabalhar, estudar ou até ganhar dinheiro
      </button>
    </div>
  );
}
