import styles from './Home.module.css';

export default function Home() {
  return (
    <div className="container">
      {/* Seção de Introdução */}
      <section className="section">
        <div className="center-text">
          <h1>Bem-vindo ao Meu Portfólio</h1>
          <p>Explore meu trabalho e veja como transformo ideias em soluções digitais incríveis.</p>
          <a href="#projects" className="button">Veja meus Projetos</a>
        </div>
      </section>

      {/* Seção de Projetos */}
      <section className="section" id="projects">
        <div className="center-text">
          <h2>Meus Projetos Recentes</h2>
          <p>Aqui estão alguns dos projetos que eu desenvolvi, com tecnologias modernas e design inovador.</p>
        </div>

        <div className="projectCard">
          <h3>Projeto 1: E-commerce de Moda</h3>
          <img src="https://via.placeholder.com/600x400/3498db/ffffff?text=E-commerce+Moda" alt="E-commerce de Moda" />
          <p>Desenvolvimento de uma plataforma de e-commerce de moda, com funcionalidades como filtro de produtos, pagamento seguro, e integração com API de envio.</p>
          <a href="#" className="button">Ver Projeto</a>
        </div>

        <div className="projectCard">
          <h3>Projeto 2: Aplicativo de Gestão de Tarefas</h3>
          <img src="https://via.placeholder.com/600x400/e74c3c/ffffff?text=App+Gest%C3%A3o+Tarefas" alt="Aplicativo de Gestão de Tarefas" />
          <p>Um aplicativo móvel para gerenciamento de tarefas diárias, com notificações, organização por categorias e sincronização em tempo real com dispositivos.</p>
          <a href="#" className="button">Ver Projeto</a>
        </div>

        <div className="projectCard">
          <h3>Projeto 3: Blog Pessoal</h3>
          <img src="https://via.placeholder.com/600x400/2ecc71/ffffff?text=Blog+Pessoal" alt="Blog Pessoal" />
          <p>Um blog pessoal com temas personalizáveis, integração com redes sociais, e recursos de comentários e compartilhamento de postagens.</p>
          <a href="#" className="button">Ver Projeto</a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2025 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
