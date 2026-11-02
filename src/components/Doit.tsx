'use client';

import { AnimatedSection } from './ScrollAnimation';

// Cada producto se explica con la misma estructura: problema, qué hace y qué valor le da al cliente.
const products = [
  {
    name: 'DoIT Sodería',
    status: 'En desarrollo · piloto con una sodería real',
    problem:
      'Un sodero reparte a decenas de clientes y los pedidos llegan por WhatsApp, mezclados en distintos chats. Todo el orden vive en su cabeza.',
    solution:
      'App web instalable (PWA) que registra clientes con su ubicación en el mapa y sus dispensers (código, GPS y foto), y organiza el reparto por barrios y días. Lo siguiente: leer los pedidos de WhatsApp y anotarlos en un calendario.',
    value:
      'El sodero solo maneja y pregunta una vez al día. Gana orden y control, y no depende de nadie más para tener sus datos.',
    tech: ['Next.js', 'PWA', 'WhatsApp'],
  },
  {
    name: 'DoIT Comercial',
    status: 'En diseño · se construye sobre DoIT Sodería',
    problem:
      'Los vendedores pierden ventas por falta de seguimiento: el contexto de cada cliente queda desparramado en conversaciones.',
    solution:
      'Un CRM inteligente conectado a WhatsApp: un agente de IA lee las conversaciones y organiza tareas por cliente. El núcleo es el mismo para cualquier rubro; lo único que cambia es la configuración.',
    value:
      'Datos propios y ordenados desde el primer día, sin cargar nada a mano y sin depender del sistema de terceros.',
    tech: ['IA', 'WhatsApp', 'CRM'],
  },
];

const principles = [
  {
    title: 'Primero escucho',
    text: 'Entiendo cómo trabaja la persona antes de elegir la tecnología.',
  },
  {
    title: 'Automatizo lo repetitivo',
    text: 'La IA lee, ordena y anota. Las decisiones siguen siendo de la persona.',
  },
  {
    title: 'El control es tuyo',
    text: 'La IA nunca manda mensajes en tu nombre: lo importante lo decide una persona.',
  },
];

export function Doit() {
  return (
    <section id="doit" className="py-24 sm:py-32 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-12">
            <span className="font-mono text-[#00d4ff] text-sm">// Producto propio</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3">
              <span className="gradient-text">DoIT</span>: ordenar las ventas por WhatsApp
            </h2>
            <p className="font-body text-gray-400 mt-4 max-w-2xl">
              En mi experiencia vendiendo y en el trato con empresas vi el mismo problema una y otra vez:
              la información de los clientes está en chats y planillas sueltas. DoIT busca ordenarla
              sin cambiar la forma de trabajar de quien vende.
            </p>
          </div>
        </AnimatedSection>

        {/* Productos */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 100}>
              <article
                className="h-full bg-[#0a0a10] border border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:border-[#00d4ff]/30 transition-all duration-300"
                data-hoverable
              >
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                  {product.name}
                </h3>
                <span className="inline-block px-2 py-0.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded text-xs text-[#00d4ff] font-mono mb-6">
                  {product.status}
                </span>

                <dl className="space-y-4 font-body text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-xs text-gray-500 mb-1">El problema</dt>
                    <dd className="text-gray-400">{product.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-gray-500 mb-1">Qué hace</dt>
                    <dd className="text-gray-400">{product.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-[#00d4ff] mb-1">Valor para el cliente</dt>
                    <dd className="text-white">{product.value}</dd>
                  </div>
                </dl>

                <div className="flex flex-wrap gap-2 mt-6">
                  {product.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#12121a] border border-gray-800/50 rounded-md text-gray-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Cómo transmito valor */}
        <AnimatedSection delay={200}>
          <div className="mt-12">
            <span className="font-mono text-gray-500 text-xs">// Cómo trabajo con el cliente</span>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {principles.map((item, i) => (
                <div
                  key={item.title}
                  className="p-5 bg-[#0c0c14] rounded-xl border border-gray-800/50"
                >
                  <div className="font-mono text-[#00d4ff] text-sm mb-2">.0{i + 1}</div>
                  <div className="font-display font-semibold text-white text-sm">{item.title}</div>
                  <div className="font-body text-xs text-gray-500 mt-1 leading-relaxed">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
