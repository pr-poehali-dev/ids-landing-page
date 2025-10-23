import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5E6D3]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#2d1810] to-black" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 mb-8">
            <Icon name="MapPin" size={16} className="text-[#FF6B35]" />
            <span className="text-sm font-medium text-[#F5E6D3]">Your Block, From the Sky</span>
          </div>

          <h1 className="text-[7rem] md:text-[9rem] leading-[0.9] tracking-wider mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            FAST. SAFE. LOCAL.
          </h1>

          <p className="text-xl md:text-2xl text-[#F5E6D3]/90 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Aerial media & inspections from the heart of Inglewood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 rounded-none bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-all hover:scale-105 uppercase tracking-wider font-medium"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-base px-8 py-6 rounded-none text-[#F5E6D3] hover:text-[#FF6B35] border border-[#F5E6D3] hover:border-[#FF6B35] group uppercase tracking-wider"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            >
              See the Work
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#F5E6D3]/60 uppercase tracking-widest">
            <span>FAA Part 107 Certified</span>
            <span>•</span>
            <span>Insured</span>
            <span>•</span>
            <span>Based in Inglewood, CA</span>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-gentle">
            <Icon name="ChevronDown" size={32} className="text-[#FF6B35]/60" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <h2 
          className="text-6xl text-center mb-20 tracking-wider" 
          style={{ fontFamily: 'Bebas Neue, sans-serif', lineHeight: '1.1' }}
        >
          From roofs to reels — we fly what matters.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="group p-10 rounded-none bg-[#F5E6D3] border-none hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35] clip-triangle" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            <div className="relative">
              <div className="w-16 h-16 mb-6">
                <Icon name="Home" size={48} className="text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <h3 
                className="text-3xl text-[#0A0A0A] mb-4 tracking-wide" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Roofing & Construction
              </h3>
              <p className="text-[#0A0A0A]/80 mb-6 leading-relaxed text-sm">
                Aerial inspections, progress tracking, and visual documentation that keeps builds moving and stakeholders aligned.
              </p>
              <button className="text-[#0A0A0A] border border-[#0A0A0A] px-6 py-2 rounded-none uppercase text-xs tracking-wider hover:bg-[#0A0A0A] hover:text-[#F5E6D3] transition-all inline-flex items-center group/btn">
                Consultation
                <Icon name="ArrowRight" size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>

          <Card className="group p-10 rounded-none bg-[#F5E6D3] border-none hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            <div className="relative">
              <div className="w-16 h-16 mb-6">
                <Icon name="Building2" size={48} className="text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <h3 
                className="text-3xl text-[#0A0A0A] mb-4 tracking-wide" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Real Estate
              </h3>
              <p className="text-[#0A0A0A]/80 mb-6 leading-relaxed text-sm">
                Elevate listings with cinematic flyovers, neighborhood context, and crisp property reveals that drive showings and offers.
              </p>
              <button className="text-[#0A0A0A] border border-[#0A0A0A] px-6 py-2 rounded-none uppercase text-xs tracking-wider hover:bg-[#0A0A0A] hover:text-[#F5E6D3] transition-all inline-flex items-center group/btn">
                Consultation
                <Icon name="ArrowRight" size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>

          <Card className="group p-10 rounded-none bg-[#F5E6D3] border-none hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            <div className="relative">
              <div className="w-16 h-16 mb-6">
                <Icon name="Video" size={48} className="text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <h3 
                className="text-3xl text-[#0A0A0A] mb-4 tracking-wide" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Marketing & Storytelling
              </h3>
              <p className="text-[#0A0A0A]/80 mb-6 leading-relaxed text-sm">
                FPV flythroughs and branded reels that cut through the noise and make local businesses unforgettable.
              </p>
              <button className="text-[#0A0A0A] border border-[#0A0A0A] px-6 py-2 rounded-none uppercase text-xs tracking-wider hover:bg-[#0A0A0A] hover:text-[#F5E6D3] transition-all inline-flex items-center group/btn">
                Consultation
                <Icon name="ArrowRight" size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>

          <Card className="group p-10 rounded-none bg-[#F5E6D3] border-none hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B35]" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
            <div className="relative">
              <div className="w-16 h-16 mb-6">
                <Icon name="Users" size={48} className="text-[#0A0A0A]" strokeWidth={1.5} />
              </div>
              <h3 
                className="text-3xl text-[#0A0A0A] mb-4 tracking-wide" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Community Projects
              </h3>
              <p className="text-[#0A0A0A]/80 mb-6 leading-relaxed text-sm">
                "Your Block, From the Sky" — capturing the pride, people, and places that make Inglewood unique.
              </p>
              <button className="text-[#0A0A0A] border border-[#0A0A0A] px-6 py-2 rounded-none uppercase text-xs tracking-wider hover:bg-[#0A0A0A] hover:text-[#F5E6D3] transition-all inline-flex items-center group/btn">
                Consultation
                <Icon name="ArrowRight" size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="ghost" 
            className="text-[#FF6B35] hover:text-[#FF6B35]/80 text-lg group uppercase tracking-wider border border-[#FF6B35] rounded-none px-8 py-3"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', letterSpacing: '0.1em' }}
          >
            🎞 Full Portfolio
            <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-6xl mb-3 tracking-wider" 
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Why IDS
            </h2>
            <p className="text-[#F5E6D3]/60 text-base">Proudly based in Inglewood.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-7xl mb-6">⚡</div>
              <h4 
                className="text-5xl mb-4 tracking-wider" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Fast.
              </h4>
              <p className="text-[#F5E6D3]/70 text-base leading-relaxed">
                Same-day local flights. 72-hour delivery.
              </p>
            </div>

            <div className="text-center group">
              <div className="text-7xl mb-6">🔒</div>
              <h4 
                className="text-5xl mb-4 tracking-wider" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Safe.
              </h4>
              <p className="text-[#F5E6D3]/70 text-base leading-relaxed">
                Licensed, insured, FAA Part 107 compliant.
              </p>
            </div>

            <div className="text-center group">
              <div className="text-7xl mb-6">📍</div>
              <h4 
                className="text-5xl mb-4 tracking-wider" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Local.
              </h4>
              <p className="text-[#F5E6D3]/70 text-base leading-relaxed">
                Inglewood roots. Neighborhood-first service.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-20 text-xs text-[#F5E6D3]/60 uppercase tracking-widest">
            <span className="px-5 py-2 rounded-none bg-transparent border border-[#FF6B35]/50">FAA 107</span>
            <span className="px-5 py-2 rounded-none bg-transparent border border-[#FF6B35]/50">Insured</span>
            <span className="px-5 py-2 rounded-none bg-transparent border border-[#FF6B35]/50">LA Class B Experienced</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 
            className="text-5xl md:text-6xl mb-6 tracking-wider max-w-4xl mx-auto" 
            style={{ fontFamily: 'Bebas Neue, sans-serif', lineHeight: '1.1' }}
          >
            A city seen from above is a city reimagined.
          </h2>
          <p className="text-[#F5E6D3]/60 text-base italic">— Jason Brooks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Community', icon: 'Users' },
            { label: 'Commercial', icon: 'Building2' },
            { label: 'FPV Reels', icon: 'Video' },
            { label: 'Aerial Inspections', icon: 'Eye' },
            { label: 'Real Estate', icon: 'Home' },
            { label: 'Construction', icon: 'HardHat' }
          ].map((item, i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-none bg-gradient-to-br from-[#2d1810] to-[#0A0A0A] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 border border-[#F5E6D3]/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name={item.icon as any} size={64} className="text-[#FF6B35]/30 group-hover:text-[#FF6B35] group-hover:scale-110 transition-all" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block px-4 py-1 rounded-none bg-[#FF6B35] text-white text-xs font-medium uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#FF6B35]/0 group-hover:bg-[#FF6B35]/10 transition-all" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="text-base px-10 py-6 rounded-none bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-all hover:scale-105 uppercase tracking-wider"
            style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.1em' }}
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <h2 
                className="text-6xl mb-6 tracking-wider" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                Book Your Block
              </h2>
              <p className="text-[#F5E6D3]/70 text-base mb-10 leading-relaxed">
                Turn curiosity into a flight plan. Tell us what you need — we'll confirm your path within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-[#FF6B35]/10 border-2 border-[#FF6B35] rounded-none p-8 text-center animate-fade-in">
                  <Icon name="CheckCircle" size={48} className="text-[#FF6B35] mx-auto mb-4" />
                  <p className="text-lg font-medium text-[#F5E6D3]">
                    Thanks for booking your block. IDS will confirm your flight path within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#F5E6D3]/80 mb-2 block text-sm uppercase tracking-wider">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="bg-[#0A0A0A] border-[#F5E6D3]/20 rounded-none text-[#F5E6D3] placeholder:text-[#F5E6D3]/40 h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="business" className="text-[#F5E6D3]/80 mb-2 block text-sm uppercase tracking-wider">Business / Property</Label>
                    <Input
                      id="business"
                      placeholder="Company or property name"
                      className="bg-[#0A0A0A] border-[#F5E6D3]/20 rounded-none text-[#F5E6D3] placeholder:text-[#F5E6D3]/40 h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#F5E6D3]/80 mb-2 block text-sm uppercase tracking-wider">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="bg-[#0A0A0A] border-[#F5E6D3]/20 rounded-none text-[#F5E6D3] placeholder:text-[#F5E6D3]/40 h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-[#F5E6D3]/80 mb-2 block text-sm uppercase tracking-wider">Service Type</Label>
                    <Select value={selectedService} onValueChange={setSelectedService} required>
                      <SelectTrigger className="bg-[#0A0A0A] border-[#F5E6D3]/20 rounded-none text-[#F5E6D3] h-12">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-[#F5E6D3]/20 rounded-none">
                        <SelectItem value="roofing" className="text-[#F5E6D3]">Roofing</SelectItem>
                        <SelectItem value="realestate" className="text-[#F5E6D3]">Real Estate</SelectItem>
                        <SelectItem value="marketing" className="text-[#F5E6D3]">Marketing</SelectItem>
                        <SelectItem value="fpv" className="text-[#F5E6D3]">FPV</SelectItem>
                        <SelectItem value="other" className="text-[#F5E6D3]">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-[#F5E6D3]/80 mb-3 block text-sm uppercase tracking-wider">Add-ons</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Checkbox id="editing" className="border-[#F5E6D3]/40 rounded-none" />
                        <label htmlFor="editing" className="text-sm text-[#F5E6D3]/70 cursor-pointer">
                          Editing
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="subscription" className="border-[#F5E6D3]/40 rounded-none" />
                        <label htmlFor="subscription" className="text-sm text-[#F5E6D3]/70 cursor-pointer">
                          Subscription
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox id="social" className="border-[#F5E6D3]/40 rounded-none" />
                        <label htmlFor="social" className="text-sm text-[#F5E6D3]/70 cursor-pointer">
                          Social Package
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-[#F5E6D3]/80 mb-2 block text-sm uppercase tracking-wider">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      className="bg-[#0A0A0A] border-[#F5E6D3]/20 rounded-none text-[#F5E6D3] h-12"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-base py-6 rounded-none bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 transition-all hover:scale-105 uppercase tracking-wider"
                    style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.1em' }}
                  >
                    🚁 Book My Block
                  </Button>

                  <div className="text-center">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      className="text-[#F5E6D3] hover:text-[#FF6B35] border border-[#F5E6D3]/30 rounded-none px-6 py-2 uppercase text-xs tracking-wider"
                    >
                      Pick a Time on Calendly →
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-none bg-gradient-to-br from-[#8b5a3c] via-[#2d1810] to-[#090908] overflow-hidden shadow-2xl border border-[#F5E6D3]/10">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255, 107, 53, 0.1) 0%, transparent 60%)'
                  }} />
                  <Icon name="Plane" size={140} className="text-[#FF6B35]/20" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-[#F5E6D3]/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-8">
              <Icon name="Plane" size={36} className="text-[#FF6B35]" />
              <span 
                className="text-3xl tracking-wider" 
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                IDS
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-8 mb-8 text-[#F5E6D3]/60 text-sm uppercase tracking-wider">
              <a href="#services" className="hover:text-[#FF6B35] transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-[#FF6B35] transition-colors">Portfolio</a>
              <a href="#book" className="hover:text-[#FF6B35] transition-colors">Book a Flight</a>
              <a href="#contact" className="hover:text-[#FF6B35] transition-colors">Contact</a>
            </nav>

            <div className="flex justify-center gap-6 mb-10">
              <a href="#" className="text-[#F5E6D3]/60 hover:text-[#FF6B35] transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-[#F5E6D3]/60 hover:text-[#FF6B35] transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          <div className="text-center space-y-3 text-xs text-[#F5E6D3]/50 uppercase tracking-wider">
            <p>© 2025 Inglewood Drone Services | Operated by Jason Brooks | FAA 107 Certified</p>
            <p>
              <a href="mailto:info@inglewooddrones.com" className="hover:text-[#FF6B35] transition-colors">
                info@inglewooddrones.com
              </a>
              {' • '}
              <a href="tel:+13233979698" className="hover:text-[#FF6B35] transition-colors">
                (323) 397-9698
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
