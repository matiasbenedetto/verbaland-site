import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 text-white mt-20">
            {/* Big Verbaland text spanning the width */}
            <div className="relative overflow-hidden border-b border-white/10 py-12">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <span className="text-[20vw] font-brand font-bold text-white/5 whitespace-nowrap select-none">
                        Verbaland
                    </span>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-brand text-white">Verbaland</Link>
                        <p className="text-white/70 mt-2">
                            Soluciones de IA para acelerar la atención institucional y mejorar la experiencia educativa.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Soluciones</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Asistente Virtual
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Atención Estudiantil
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Admisiones
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Analítica Educativa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Empresa</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Casos de Éxito
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contacto</h3>
                        <p className="text-white/70">
                            ¿Tienes preguntas? Estamos aquí para ayudarte.
                        </p>
                        <Link 
                            href="mailto:info@verbaland.com" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium transition-colors"
                        >
                            <Mail size={16} />
                            <span>info@verbaland.com</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Verbaland. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Términos de Servicio
                        </Link>
                        <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                            Política de Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
