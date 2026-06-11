/* App composition + mount */
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <MetodoLeitura />
        <Metodo />
        <Professores />
        <Investimento />
        <Inscricao />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
