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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#090908] via-[#1a1510] to-[#090908]">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(246, 246, 243, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(246, 246, 243, 0.05) 0%, transparent 50%)'
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Your Block, From the Sky</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
            FAST. SAFE. LOCAL.
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto font-light">
            Aerial media & inspections from the heart of Inglewood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
              Book a Free Consultation
            </Button>
            <Button size="lg" variant="ghost" className="text-lg px-8 py-6 rounded-xl text-primary hover:text-primary/80 group">
              See the Work
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60 uppercase tracking-wider">
            <span>FAA Part 107 Certified</span>
            <span>•</span>
            <span>Insured</span>
            <span>•</span>
            <span>Based in Inglewood, CA</span>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
            <Icon name="ChevronDown" size={32} className="text-primary/60" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6">
          From roofs to reels — we fly what matters.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <Card className="group p-8 rounded-[24px] bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold mb-3">Roofing & Construction</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Aerial inspections, progress tracking, and visual documentation that keeps builds moving and stakeholders aligned.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link">
                Explore examples
                <Icon name="ArrowRight" size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>

          <Card className="group p-8 rounded-[24px] bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3">Real Estate</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Elevate listings with cinematic flyovers, neighborhood context, and crisp property reveals that drive showings and offers.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link">
                See real listings
                <Icon name="ArrowRight" size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>

          <Card className="group p-8 rounded-[24px] bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold mb-3">Marketing & Storytelling</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                FPV flythroughs and branded reels that cut through the noise and make local businesses unforgettable.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link">
                Watch reels
                <Icon name="ArrowRight" size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>

          <Card className="group p-8 rounded-[24px] bg-card border-border hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-4xl mb-4">🌴</div>
              <h3 className="text-2xl font-bold mb-3">Community Projects</h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                "Your Block, From the Sky" — capturing the pride, people, and places that make Inglewood unique.
              </p>
              <button className="text-primary hover:text-primary/80 font-medium inline-flex items-center group/link">
                See community work
                <Icon name="ArrowRight" size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="ghost" className="text-primary hover:text-primary/80 text-lg group">
            🎞 Full Portfolio
            <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-3">Why IDS</h2>
            <p className="text-foreground/60 text-lg">Proudly based in Inglewood.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-4xl">⚡</span>
              </div>
              <h4 className="text-3xl font-bold mb-3">Fast.</h4>
              <p className="text-foreground/70 text-lg">
                Same-day local flights. 72-hour delivery.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-4xl">🔒</span>
              </div>
              <h4 className="text-3xl font-bold mb-3">Safe.</h4>
              <p className="text-foreground/70 text-lg">
                Licensed, insured, FAA Part 107 compliant.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-4xl">📍</span>
              </div>
              <h4 className="text-3xl font-bold mb-3">Local.</h4>
              <p className="text-foreground/70 text-lg">
                Inglewood roots. Neighborhood-first service.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-16 text-sm text-foreground/60 uppercase tracking-wider">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">FAA 107</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">Insured</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">LA Class B Experienced</span>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">The Local Advantage</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Based in Inglewood. No travel fees. Fast turnarounds. We know the airspace, the neighborhoods, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">🏘️</div>
              <h4 className="font-semibold mb-2">Know the Streets</h4>
              <p className="text-sm text-foreground/60">Every block, every angle.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="font-semibold mb-2">Quick Response</h4>
              <p className="text-sm text-foreground/60">Same-day flights available.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">✈️</div>
              <h4 className="font-semibold mb-2">LA Airspace Expert</h4>
              <p className="text-sm text-foreground/60">Class B certified operations.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2">Community First</h4>
              <p className="text-sm text-foreground/60">Your block, our priority.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-3">What Clients Say</h2>
            <p className="text-foreground/60 text-lg">Real feedback from real projects.</p>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
              <Card className="flex-shrink-0 w-[90%] md:w-[450px] p-8 snap-center">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Derrica</div>
                    <div className="text-sm text-foreground/60">Property Manager</div>
                  </div>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  "Jason made our listings look like they belonged in a movie. Booked twice as fast."
                </p>
              </Card>

              <Card className="flex-shrink-0 w-[90%] md:w-[450px] p-8 snap-center">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Martin</div>
                    <div className="text-sm text-foreground/60">Contractor</div>
                  </div>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  "Professional, local, and fast. Perfect combo."
                </p>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
                <Icon name="User" size={64} className="text-primary" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Jason Brooks</h3>
                <div className="flex flex-col gap-2 text-foreground/70">
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Icon name="Award" size={18} className="text-primary" />
                    <span>FAA-Certified Operator</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Icon name="Plane" size={18} className="text-primary" />
                    <span>Private Pilot in Training</span>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-2">
                    <Icon name="Users" size={18} className="text-primary" />
                    <span>Founder, Inglewood Drone Services</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            A city seen from above is a city reimagined.
          </h2>
          <p className="text-foreground/60 text-lg italic">— Jason Brooks</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-[20px] bg-gradient-to-br from-muted to-muted/50 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Play" size={48} className="text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 rounded-full bg-background/80 text-xs font-medium">
                  {i % 3 === 0 ? 'Community' : i % 3 === 1 ? 'Commercial' : 'FPV Reels'}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-bold mb-6">Book Your Block</h2>
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                Turn curiosity into a flight plan. Tell us what you need — we'll confirm your path within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center animate-fade-in">
                  <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-primary">
                    Thanks for booking your block. IDS will confirm your flight path within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/80 mb-2 block">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="bg-background border-border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="business" className="text-foreground/80 mb-2 block">Business / Property</Label>
                    <Input
                      id="business"
                      placeholder="Company or property name"
                      className="bg-background border-border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground/80 mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="bg-background border-border rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-foreground/80 mb-2 block">Service Type</Label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border rounded-xl">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roofing">Roofing</SelectItem>
                        <SelectItem value="realestate">Real Estate</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="fpv">FPV</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-foreground/80 mb-3 block">Add-ons</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="editing" />
                        <label htmlFor="editing" className="text-sm text-foreground/70 cursor-pointer">
                          Editing
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="subscription" />
                        <label htmlFor="subscription" className="text-sm text-foreground/70 cursor-pointer">
                          Subscription
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="social" />
                        <label htmlFor="social" className="text-sm text-foreground/70 cursor-pointer">
                          Social Package
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-foreground/80 mb-2 block">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      className="bg-background border-border rounded-xl"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
                    🚁 Book My Block
                  </Button>

                  <div className="text-center">
                    <Button type="button" variant="ghost" className="text-primary hover:text-primary/80">
                      Pick a Time on Calendly →
                    </Button>
                  </div>
                </form>
              )}
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-[24px] bg-gradient-to-br from-[#8b5a3c] via-[#2d1810] to-[#090908] overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Plane" size={120} className="text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <Icon name="Plane" size={32} className="text-primary" />
              <span className="text-2xl font-bold">IDS</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-8 mb-8 text-foreground/70">
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#book" className="hover:text-primary transition-colors">Book a Flight</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          <div className="text-center space-y-2 text-sm text-foreground/60">
            <p>© 2025 Inglewood Drone Services | Operated by Jason Brooks | FAA 107 Certified</p>
            <p>
              <a href="mailto:info@inglewooddrones.com" className="hover:text-primary transition-colors">
                info@inglewooddrones.com
              </a>
              {' • '}
              <a href="tel:+13233979698" className="hover:text-primary transition-colors">
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