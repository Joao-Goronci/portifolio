import { Instagram } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              JG
            </h1>
            <div className="flex items-center gap-6">
              <a href="#sobre" className="hover:text-cyan-400 transition-colors">
                Sobre
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="hover:text-cyan-400 transition-colors">
                Contato
              </a>
              <a
                href="https://www.instagram.com/jotageeee?igsh=MTUzd3FnbjVmbWhkaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            João Guilherme Goronci Siqueira
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8">Editor Audiovisual | VFX Artist | Motion Designer</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-colors"
            >
              Ver Trabalhos
            </a>
            <a
              href="https://www.instagram.com/jotageeee?igsh=MTUzd3FnbjVmbWhkaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-full font-semibold transition-colors"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-8 text-center">Sobre Mim</h3>
          <p className="text-lg text-zinc-300 leading-relaxed text-center">
            Sou um profissional especializado em audiovisual, com foco em edição de fotos e vídeos. Minha paixão é
            transformar ideias em experiências visuais impactantes, utilizando as melhores ferramentas do mercado para
            criar conteúdo de alta qualidade. Com expertise em efeitos visuais e motion graphics, busco sempre elevar o
            padrão criativo de cada projeto.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Minhas Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blender */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-2xl font-bold">
                B
              </div>
              <h4 className="text-2xl font-bold mb-4">Blender</h4>
              <p className="text-zinc-400 leading-relaxed">
                Modelagem 3D, animação e renderização de alta qualidade. Criação de elementos visuais complexos e
                integração perfeita com projetos audiovisuais.
              </p>
            </div>

            {/* VFX */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center text-2xl font-bold">
                VFX
              </div>
              <h4 className="text-2xl font-bold mb-4">VFX</h4>
              <p className="text-zinc-400 leading-relaxed">
                Efeitos visuais cinematográficos, composição avançada e motion graphics. Transformo cenas comuns em
                experiências visuais extraordinárias.
              </p>
            </div>

            {/* DaVinci Resolve */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center text-2xl font-bold">
                DR
              </div>
              <h4 className="text-2xl font-bold mb-4">DaVinci Resolve</h4>
              <p className="text-zinc-400 leading-relaxed">
                Edição profissional de vídeo, color grading e finalização. Domínio completo do fluxo de trabalho para
                entregar projetos com qualidade cinematográfica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-zinc-900/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold mb-12 text-center">Meu Portfólio</h3>

          <div className="mb-16 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-3 mb-6">
              <div className="px-4 py-1 bg-cyan-500 rounded-full text-sm font-semibold">Projeto Destaque</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-3xl font-bold mb-4">Design Gráfico - SESA/ES</h4>
                <p className="text-lg text-zinc-300 mb-4 leading-relaxed">
                  Trabalho prestado para a{" "}
                  <span className="text-cyan-400 font-semibold">
                    Secretaria da Saúde do Estado do Espírito Santo (SESA)
                  </span>
                  , desenvolvendo sinalização visual para o estacionamento da sede Beira Mar.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Criação de placas de identificação para vagas especiais (portadores de deficiência física, idosos,
                  gestantes, crianças de colo e chefias), incluindo credenciais de estacionamento com identidade visual
                  institucional.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/sesa-vagas-pdf.png"
                  alt="Projeto SESA - Sinalização de Estacionamento"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-square bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/portfolio-1.jpeg"
                alt="O Prego que se Destacou"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">O Prego que se Destacou</h4>
                  <p className="text-sm text-zinc-300">Fotografia & Edição</p>
                </div>
              </div>
            </div>

            <div className="group relative aspect-square bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/portfolio-2.jpeg"
                alt="Batman - Poster Cinematográfico"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Batman</h4>
                  <p className="text-sm text-zinc-300">Design Gráfico & VFX</p>
                </div>
              </div>
            </div>

            <div className="group relative aspect-square bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer">
              <img
                src="/sesa-vagas-pdf.png"
                alt="SESA - Sinalização"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">SESA - Sinalização</h4>
                  <p className="text-sm text-zinc-300">Design Institucional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Vamos Trabalhar Juntos?</h3>
          <p className="text-xl text-zinc-400 mb-12">Entre em contato comigo através das redes sociais</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/jotageeee?igsh=MTUzd3FnbjVmbWhkaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
            >
              <Instagram size={24} />
              @jotageeee
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="container mx-auto text-center text-zinc-500">
          <p>© 2025 João Guilherme Goronci Siqueira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
