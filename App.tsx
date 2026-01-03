import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
  Users,
  Zap,
  Leaf,
  Clock,
  LayoutTemplate,
  Home,
  MapPin,
  Maximize2
} from 'lucide-react';

// --- COMPONENTS ---

const SectionHeader = ({ subtitle, title }: { subtitle: string, title: React.ReactNode }) => (
  <div className="mb-12 md:mb-16">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-[2px] bg-primary"></div>
      <span className="text-dark font-bold tracking-[0.2em] text-xs uppercase">{subtitle}</span>
    </div>
    <h2 className="text-3xl md:text-5xl font-display font-bold text-dark leading-tight">{title}</h2>
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0 bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 px-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors group"
      >
        <span className="text-lg font-bold font-display text-dark group-hover:text-primary transition-colors">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-2">
          <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 border border-gray-200 hover:border-primary transition-colors duration-300 group">
    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
      <Icon size={24} className="text-dark group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-display font-bold text-dark mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-dark selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      <Header />
      
      <main>
        {/* --- HERO: Sharp & Technical --- */}
        <section className="relative pt-32 pb-0 lg:pt-48 lg:pb-0 px-6 border-b border-gray-100">
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-dark text-white mb-8">
                  <span className="w-1.5 h-1.5 bg-primary animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Filozofia StarterHome</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-dark mb-8 leading-[1.05]">
                  DOMY<br/>
                  BEZ DOKTORATU<br/>
                  <span className="text-primary">Z BUDOWNICTWA</span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg mb-10 pl-6 border-l-2 border-primary">
                  Przekształciliśmy chaotyczny plac budowy w precyzyjny proces produkcyjny. <strong>3 miesiące</strong> realizacji. Stała cena. Zero stresu.
                </p>
                <div className="flex flex-col sm:flex-row gap-0">
                   <button className="bg-primary text-white px-10 py-5 font-bold hover:bg-primaryHover transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest">
                     Zobacz Modele
                     <ArrowRight size={16} />
                   </button>
                   <button className="bg-white text-dark border border-gray-200 px-10 py-5 font-bold hover:bg-dark hover:text-white transition-all text-xs uppercase tracking-widest">
                     Umów Rozmowę
                   </button>
                </div>
              </div>
              
              <div className="relative h-full min-h-[400px] lg:min-h-[600px] w-full bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1600596542815-e32c215962b1?q=80&w=2574&auto=format&fit=crop" 
                    alt="Modern Wooden House" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  />
                  {/* Floating Stats - Sharp */}
                  <div className="absolute bottom-0 left-0 bg-white p-8 border-t border-r border-gray-100 max-w-xs">
                    <p className="text-5xl font-display font-bold text-dark mb-1">30</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Lat Gwarancji Konstrukcji</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOUNDER STORY: Editorial Grid --- */}
        <section className="py-24 bg-white border-b border-gray-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                 <div className="lg:col-span-5">
                    <div className="relative">
                      <img 
                        src="https://i.postimg.cc/qB3LpwKx/Krystian.jpg" 
                        alt="Krystian Pogorzelski" 
                        className="w-full grayscale contrast-125"
                      />
                      <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 w-48 text-center">
                         <span className="block text-2xl font-bold font-display">7+</span>
                         <span className="text-[10px] uppercase tracking-widest">Lat w branży</span>
                      </div>
                    </div>
                 </div>
                 <div className="lg:col-span-7 flex flex-col justify-center">
                    <SectionHeader 
                      subtitle="Historia Założyciela" 
                      title="Od sprzedaży do odpowiedzialności." 
                    />
                    <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                       <p>
                          Założyłem firmę budującą domy, ponieważ od ponad 7 lat pracuję w sprzedaży, a ostatnie 2 lata specjalizowałem się w sprzedaży domów drewnianych. Widziałem, jak skomplikowany bywa ten proces dla klienta.
                       </p>
                       <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 font-display font-bold text-dark text-xl">
                          "Po zdobyciu doświadczenia i poznaniu potrzeb klientów postanowiłem stworzyć własną markę, łącząc siły z inżynierami mającymi 10 lat praktyki."
                       </blockquote>
                       <p>
                          Podział jest jasny: Ja odpowiadam za sprzedaż i bezpieczny kontakt, a moi wspólnicy za perfekcyjną stronę techniczną. Razem zrealizowaliśmy już ponad 100 domów.
                       </p>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-4">
                       <div className="w-12 h-[1px] bg-dark"></div>
                       <p className="font-bold text-dark uppercase tracking-widest text-sm">Krystian Pogorzelski, CEO</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- NEW SECTION: MODELS SHOWCASE (Added per request) --- */}
        <section className="bg-dark text-white py-24">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                 <div>
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Nasza Oferta</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">Projekty StarterHome</h2>
                 </div>
                 <p className="text-gray-400 max-w-sm text-sm leading-relaxed text-right md:text-left">
                    Trzy przemyślane linie projektowe. Zoptymalizowane pod kątem kosztów, funkcjonalności i designu.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                 {/* Model 1: Haven */}
                 <div className="group relative h-[500px] overflow-hidden border-r border-white/10 last:border-r-0">
                    <img 
                       src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" 
                       alt="Haven House" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8">
                       <h3 className="text-3xl font-display font-bold mb-2">Haven</h3>
                       <p className="text-sm text-gray-400 mb-6 line-clamp-2">Idealny start. Kompaktowy dom parterowy dla pary lub singla.</p>
                       <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                          Zobacz rzut <ArrowRight size={14} />
                       </button>
                    </div>
                 </div>

                 {/* Model 2: Balance */}
                 <div className="group relative h-[500px] overflow-hidden border-r border-white/10 last:border-r-0">
                    <img 
                       src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80" 
                       alt="Balance House" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8">
                       <h3 className="text-3xl font-display font-bold mb-2">Balance</h3>
                       <p className="text-sm text-gray-400 mb-6 line-clamp-2">Harmonia przestrzeni. Dom rodzinny z oddzieloną strefą nocną.</p>
                       <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                          Zobacz rzut <ArrowRight size={14} />
                       </button>
                    </div>
                 </div>

                 {/* Model 3: Vista */}
                 <div className="group relative h-[500px] overflow-hidden">
                    <img 
                       src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80" 
                       alt="Vista House" 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-8">
                       <h3 className="text-3xl font-display font-bold mb-2">Vista</h3>
                       <p className="text-sm text-gray-400 mb-6 line-clamp-2">Przestrzeń i światło. Duże przeszklenia i otwarta strefa dzienna.</p>
                       <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                          Zobacz rzut <ArrowRight size={14} />
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- DREAM RESULT --- */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div>
                  <SectionHeader 
                     subtitle="Twój Cel" 
                     title={<span>Więcej niż ściany.<br/>Sprzedajemy spokój.</span>}
                  />
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                     Nikt nie kupuje "usługi budowlanej". Kupujesz transformację swojego życia. Zamiast użerać się z ekipami, planujesz grilla w ogrodzie.
                  </p>
                  <div className="flex flex-col gap-6">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center shrink-0">
                           <Clock className="text-primary" size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-dark text-lg">Czas dla Ciebie</h4>
                           <p className="text-sm text-gray-500 mt-1">Zamieszkasz rok wcześniej niż sąsiad budujący "tradycyjnie".</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center shrink-0">
                           <ShieldCheck className="text-primary" size={24} />
                        </div>
                        <div>
                           <h4 className="font-bold text-dark text-lg">Bezpieczeństwo</h4>
                           <p className="text-sm text-gray-500 mt-1">Znasz cenę końcową przed startem. Żadnych niespodzianek.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="h-full w-full bg-white border border-gray-200 p-8 flex flex-col justify-center">
                     <div className="mb-8">
                        <Maximize2 size={40} className="text-dark mb-4" strokeWidth={1} />
                        <h3 className="text-2xl font-bold font-display mb-2">Indywidualne podejście</h3>
                        <p className="text-gray-500">
                           "Każdy klient otrzymuje dom zgodny z jego potrzebami. Nie adaptujesz się do budynku – to budynek adaptuje się do Ciebie."
                        </p>
                     </div>
                     <div className="w-full h-64 bg-gray-100 overflow-hidden relative">
                         <img 
                           src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80" 
                           alt="Interior" 
                           className="object-cover w-full h-full hover:scale-110 transition-transform duration-1000"
                         />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- PERSONAS: Sharp Cards --- */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeader 
               subtitle="Dla kogo?" 
               title="Rozwiązania szyte na miarę." 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Persona 1 */}
              <div className="bg-white border border-gray-200 p-12 hover:border-dark transition-colors duration-300">
                <div className="flex justify-between items-start mb-10">
                  <Users size={40} className="text-dark" strokeWidth={1.5} />
                  <span className="text-[10px] font-bold uppercase bg-gray-100 px-3 py-1 text-dark tracking-widest">28-40 Lat</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-dark mb-2">Rodzina na starcie</h3>
                <p className="text-primary font-bold text-xs mb-8 uppercase tracking-widest">Alternatywa dla bloku</p>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  Dla tych, którzy marzą o ogrodzie, ale boją się kredytów i biurokracji. Chcą uciec z 60m² w bloku do 100m² pod miastem w tej samej cenie.
                </p>
                <ul className="space-y-4 border-t border-gray-100 pt-8">
                   <li className="flex items-center gap-3 text-sm font-bold text-dark"><div className="w-2 h-2 bg-primary"></div> Bezpieczny proces kredytowy</li>
                   <li className="flex items-center gap-3 text-sm font-bold text-dark"><div className="w-2 h-2 bg-primary"></div> Szybka wyprowadzka na swoje</li>
                </ul>
              </div>

              {/* Persona 2 */}
              <div className="bg-dark text-white p-12 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Leaf size={120} />
                 </div>
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <Leaf size={40} className="text-white" strokeWidth={1.5} />
                  <span className="text-[10px] font-bold uppercase bg-white/10 px-3 py-1 text-white tracking-widest">50+ Lat</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2 relative z-10">Inwestor Świadomy</h3>
                <p className="text-primary font-bold text-xs mb-8 uppercase tracking-widest relative z-10">Komfort i Ekonomia</p>
                <p className="text-gray-400 mb-10 leading-relaxed relative z-10">
                  Dla osób szukających spokoju. Stary dom jest za duży. Szukają nowoczesnej, energooszczędnej parterówki, taniej w utrzymaniu.
                </p>
                <ul className="space-y-4 border-t border-white/10 pt-8 relative z-10">
                   <li className="flex items-center gap-3 text-sm font-bold text-white"><div className="w-2 h-2 bg-primary"></div> Niskie rachunki za ogrzewanie</li>
                   <li className="flex items-center gap-3 text-sm font-bold text-white"><div className="w-2 h-2 bg-primary"></div> Brak barier architektonicznych</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON: Table Layout --- */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Dlaczego StarterHome?</h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs">Porównanie z tradycyjną budową</p>
            </div>

            <div className="border border-gray-200">
               <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 p-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <div>Kryterium</div>
                  <div className="hidden md:block">Tradycyjna Budowa</div>
                  <div className="text-primary">StarterHome</div>
               </div>
               
               {/* Rows */}
               {[
                 { label: "Czas", bad: "18-36 miesięcy", good: "3-4 miesiące" },
                 { label: "Cena", bad: "Ciągłe dopłaty", good: "Stała i gwarantowana" },
                 { label: "Formalności", bad: "Na głowie inwestora", good: "Pełna obsługa" },
                 { label: "Technologia", bad: "Mokra (zależna od pogody)", good: "Prefabrykacja (sucha)" },
                 { label: "Gwarancja", bad: "Rozmyta na ekipy", good: "Jeden Partner" },
               ].map((row, idx) => (
                 <div key={idx} className="grid grid-cols-2 md:grid-cols-3 p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors items-center group">
                    <div className="font-bold text-dark text-sm">{row.label}</div>
                    <div className="hidden md:block text-gray-400 text-sm line-through decoration-gray-300">{row.bad}</div>
                    <div className="text-dark font-bold text-sm flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary"></div>
                      {row.good}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* --- TECH & VALUES --- */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <SectionHeader 
                 subtitle="Technologia" 
                 title="Fundamenty oferty." 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <FeatureCard 
                    icon={Zap}
                    title="25cm Izolacji"
                    desc="Wełna mineralna o grubości 25cm. Dom działa jak termos – ciepły zimą, chłodny latem."
                 />
                 <FeatureCard 
                    icon={Leaf}
                    title="Drewno C24"
                    desc="Certyfikowane drewno konstrukcyjne. Suszone komorowo, bez chemii, odporne na grzyby."
                 />
                 <FeatureCard 
                    icon={ShieldCheck}
                    title="Gwarancja Ceny"
                    desc="Cena w umowie jest święta. Żadnych aneksów inflacyjnych w trakcie budowy."
                 />
                 <FeatureCard 
                    icon={Home}
                    title="Jeden Wykonawca"
                    desc="Od fundamentów po dach. Jedna firma, jedna umowa, jedna odpowiedzialność."
                 />
              </div>
           </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-white">
           <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-display font-bold mb-4">FAQ</h2>
                 <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Odpowiedzi na obawy z briefu</p>
              </div>
              <div className="border border-gray-200">
                 <AccordionItem 
                    question="Czy dom drewniany jest trwały?" 
                    answer="Tak. Budujemy z certyfikowanego drewna C24. Przy prawidłowej eksploatacji trwałość jest porównywalna z domem murowanym."
                 />
                 <AccordionItem 
                    question="Czy cena jest ostateczna?" 
                    answer="Tak. Podpisujemy umowę na stałą kwotę. Ewentualne zmiany są wyceniane tylko na Twoje życzenie przed realizacją."
                 />
                 <AccordionItem 
                    question="Czy pomagacie z kredytem?" 
                    answer="Oczywiście. Współpracujemy z doświadczonymi doradcami, którzy procesują kredyty na domy modułowe w większości banków."
                 />
                 <AccordionItem 
                    question="Jak wygląda ogrzewanie?" 
                    answer="Nasze domy są energooszczędne (WT2021). Możesz wybrać pompę ciepła, maty grzewcze lub inne rozwiązanie dopasowane do modelu."
                 />
              </div>
           </div>
        </section>

        {/* --- CTA: Visual --- */}
        <section className="relative h-[600px] flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?auto=format&fit=crop&q=80')" }}>
           <div className="absolute inset-0 bg-dark/70"></div>
           <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                 Sprawdź jakość na żywo.
              </h2>
              <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                 Nie kupuj kota w worku. Umów się na bezpłatną konsultację lub odwiedź dom pokazowy. Zobacz, jak budujemy przyszłość.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button className="bg-primary hover:bg-primaryHover text-white px-12 py-5 font-bold transition-all uppercase tracking-widest text-sm">
                    Umów Konsultację
                 </button>
                 <button className="bg-transparent border border-white hover:bg-white hover:text-dark text-white px-12 py-5 font-bold transition-all uppercase tracking-widest text-sm">
                    Pobierz Katalog
                 </button>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;