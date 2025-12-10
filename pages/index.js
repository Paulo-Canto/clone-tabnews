function Home() {
  return (
    <>
      <div className="container">
        <h1>Eu não quero voltar para a borracharia</h1>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          background: #0f172a; /* azul bem escuro */
          color: #e5e7eb; /* cinza clarinho */
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          text-align: center;
        }

        h1 {
          font-size: 32px;
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .subtitle {
          font-size: 16px;
          opacity: 0.8;
        }

        @media (min-width: 768px) {
          h1 {
            font-size: 42px;
          }

          .subtitle {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
