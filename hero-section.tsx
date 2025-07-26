"use client"

import { Button } from "@/components/ui/button"
import { MessageSquareText, Sparkles, School, Clock, ArrowRight, Bot } from "lucide-react"
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground"

export default function HeroSection() {

  return (
    <div className="relative overflow-hidden min-h-screen pt-12">

      <AnimatedHeroBackground />

      <div className="container relative z-10 px-4 py-20 mx-auto sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl space-y-8 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
              <Bot size={16} />
              <span>Inteligencia Artificial Educativa</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-heading leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 pb-1">
                  La conversación inteligente
                </span>
                <span className="block text-white pb-1">que acelera tu institución</span>
              </h1>

              <p className="text-xl text-white/90">Soluciones de IA para acelerar la atención institucional</p>
            </div>

            <p className="text-white/80 text-lg">
              Herramienta de inteligencia artificial diseñada para asesorar de manera inmediata y personalizada a
              potenciales estudiantes, aumentando la conversión y mejorando la experiencia del usuario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white hover:bg-white/90 text-purple-700 px-8 py-6 rounded-xl group transition-all duration-300">
                <span>Solicitar demo</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 rounded-xl"
              >
                Conocer más
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Chat interface with glassmorphism effect */}
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 p-6 overflow-hidden">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <MessageSquareText className="w-5 h-5 text-white" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-white">Asistente IA</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <p className="text-sm text-white/80">En línea</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 max-w-[80%] border-l-2 border-white/30">
                  <p className="text-sm text-white/90">
                    Hola, me gustaría información sobre las carreras disponibles y becas.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 ml-auto max-w-[80%] border-r-2 border-white/40">
                  <p className="text-sm text-white">
                    ¡Claro! Puedo ayudarte con información sobre nuestras carreras y opciones de becas. ¿Qué área de
                    estudio te interesa?
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 max-w-[80%] border-l-2 border-white/30">
                  <p className="text-sm text-white/90">
                    Me interesa ingeniería de software. ¿Qué becas tienen disponibles?
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 ml-auto max-w-[80%] border-r-2 border-white/40">
                  <p className="text-sm text-white">
                    Para Ingeniería de Software ofrecemos varias becas: por excelencia académica (hasta 50%), por
                    talento tecnológico (hasta 40%) y convenios empresariales. ¿Te gustaría conocer los requisitos
                    específicos?
                  </p>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Escribe tu pregunta..."
                  className="w-full rounded-xl border border-white/30 bg-white/10 backdrop-blur-md py-3 pl-4 pr-12 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center transition-transform hover:scale-105">
                  <Sparkles className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Animated typing indicator */}
              <div className="absolute bottom-20 left-10 flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Floating elements with glassmorphism */}
            <div className="absolute -bottom-4 -left-4 bg-white/15 backdrop-blur-xl rounded-xl shadow-lg p-4 border border-white/20 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2">
                <School className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">+200 instituciones</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white/15 backdrop-blur-xl rounded-xl shadow-lg p-4 border border-white/20 transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Respuestas inmediatas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="bg-white/15 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
              <MessageSquareText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Respuestas precisas</h3>
            <p className="text-white/80">Información detallada sobre carreras, requisitos de admisión y becas.</p>
          </div>

          <div className="bg-white/15 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Atención 24/7</h3>
            <p className="text-white/80">Disponible en todo momento para resolver dudas de potenciales estudiantes.</p>
          </div>

          <div className="bg-white/15 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/20 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Personalización</h3>
            <p className="text-white/80">Experiencia adaptada a las necesidades específicas de cada institución.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
