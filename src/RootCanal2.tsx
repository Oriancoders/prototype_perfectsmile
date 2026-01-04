import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  Calendar,
  Shield,
  Award,
  Clock,
  Heart,
  CheckCircle,
  XCircle,
  ChevronDown,
  MapPin,
  Mail,
  Star,
  Stethoscope,
  Sparkles,
  Users,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

// Data
const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Process", href: "#process" },
  { label: "Myths & Facts", href: "#myths" },
  { label: "FAQ", href: "#faq" },
  { label: "Cost", href: "#cost" },
  { label: "Contact", href: "#contact" },
];

const trustItems = [
  { icon: Award, label: "Board Certified", sublabel: "Endodontists" },
  { icon: Users, label: "15,000+", sublabel: "Patients Treated" },
  { icon: Shield, label: "99%", sublabel: "Success Rate" },
  { icon: Star, label: "4.9/5", sublabel: "Patient Rating" },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation & Diagnosis",
    description:
      "We'll take digital X-rays and thoroughly examine your tooth. You'll receive a clear explanation of the procedure and all your questions answered before we begin.",
    duration: "30 minutes",
  },
  {
    number: "02",
    title: "Local Anesthesia",
    description:
      "We use the most advanced numbing techniques to ensure complete comfort. Many patients tell us they feel nothing more than mild pressure during the entire procedure.",
    duration: "5-10 minutes",
  },
  {
    number: "03",
    title: "Access & Cleaning",
    description:
      "A small opening is made in the crown of the tooth. Using specialized instruments, we carefully remove the infected pulp and thoroughly clean the root canals.",
    duration: "45-60 minutes",
  },
  {
    number: "04",
    title: "Shaping & Disinfection",
    description:
      "The canals are precisely shaped and irrigated with antibacterial solutions to eliminate any remaining bacteria and prevent future infection.",
    duration: "20-30 minutes",
  },
  {
    number: "05",
    title: "Filling & Sealing",
    description:
      "The cleaned canals are filled with a biocompatible material called gutta-percha and sealed to prevent reinfection. A temporary filling protects your tooth.",
    duration: "15-20 minutes",
  },
  {
    number: "06",
    title: "Crown Placement",
    description:
      "In a follow-up visit (usually 2 weeks later), we place a custom crown to restore your tooth's full strength and natural appearance. This step is crucial for long-term success.",
    duration: "Second visit",
  },
];

const mythsVsFacts = [
  {
    myth: "Root canals are extremely painful",
    fact: "Modern root canals are virtually painless. With today's anesthetics and techniques, most patients report feeling comfortable throughout the procedure—no worse than getting a filling.",
  },
  {
    myth: "It's better to just pull the tooth",
    fact: "Saving your natural tooth is almost always the best option. Extraction leads to bone loss, shifting teeth, and costly replacements. A treated tooth can last a lifetime with proper care.",
  },
  {
    myth: "Root canals cause illness",
    fact: "This myth is based on debunked research from the 1920s. Modern science confirms root canal treatment is safe and effective, with no link to systemic disease.",
  },
  {
    myth: "The procedure takes many long visits",
    fact: "Most root canals are completed in just 1-2 visits, each lasting about 90 minutes. Complex cases may require an additional visit, but multi-week treatments are rare.",
  },
  {
    myth: "If the tooth doesn't hurt, I don't need treatment",
    fact: "A tooth can be infected without causing pain. Regular checkups catch problems early. By the time severe pain occurs, the infection may have spread significantly.",
  },
  {
    myth: "Root canals don't last very long",
    fact: "With proper restoration (crown) and oral hygiene, a root canal-treated tooth can last your entire lifetime. Success rates exceed 95% at the 10-year mark.",
  },
];

const faqItems = [
  {
    question: "How do I know if I need a root canal?",
    answer:
      "Common signs include persistent toothache, prolonged sensitivity to hot or cold, darkening of the tooth, swelling or tenderness in nearby gums, and a recurring pimple on the gums. However, some infected teeth show no symptoms at all, which is why regular dental checkups are essential.",
  },
  {
    question: "Will I feel pain during the procedure?",
    answer:
      "No. We use powerful local anesthetics that completely numb the treatment area. Most patients describe the sensation as similar to having a filling placed. If you have dental anxiety, we also offer sedation options to help you feel relaxed and comfortable.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Most patients return to normal activities the same day or the next day. You may experience mild discomfort for 2-3 days, easily managed with over-the-counter pain relievers like ibuprofen. Avoid chewing on the treated tooth until your permanent crown is placed.",
  },
  {
    question: "Do I really need a crown after the root canal?",
    answer:
      "In most cases, yes. After root canal treatment, the tooth becomes more brittle and prone to fracture. A crown protects and strengthens the tooth, significantly improving its long-term survival. Skipping the crown is the most common reason for root canal failure.",
  },
  {
    question: "What happens if I delay treatment?",
    answer:
      "Delaying treatment allows the infection to spread, potentially leading to abscess formation, bone loss, and systemic infection. What might be treatable with a root canal today could require extraction or surgery later. Early treatment is always less invasive and more successful.",
  },
  {
    question: "Can a root canal fail? What then?",
    answer:
      "While root canals have a 95%+ success rate, failures can occur. Signs include persistent pain, swelling, or recurrent infection. Options include retreatment (opening and re-cleaning the canals), apicoectomy (surgical removal of the root tip), or extraction as a last resort.",
  },
  {
    question: "Is root canal treatment safe during pregnancy?",
    answer:
      "Yes, root canal treatment is generally safe during pregnancy, especially in the second trimester. Untreated dental infections pose a greater risk to both mother and baby than the treatment itself. We use pregnancy-safe anesthetics and take additional precautions with X-rays.",
  },
  {
    question: "How much does a root canal cost?",
    answer:
      "Costs vary based on which tooth is affected and complexity. Front teeth typically cost less than molars. Most dental insurance plans cover 50-80% of root canal treatment. We offer flexible payment plans and can help you understand your benefits before treatment.",
  },
];

const costRanges = [
  { tooth: "Front Teeth (Incisors, Canines)", range: "$700 – $1,100" },
  { tooth: "Premolars (Bicuspids)", range: "$800 – $1,200" },
  { tooth: "Molars", range: "$1,000 – $1,500" },
  { tooth: "Crown (after root canal)", range: "$1,000 – $1,800" },
];

// Animated Section Wrapper
const AnimatedSection = ({
  children,
  className = "",
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// FAQ Accordion Item
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <motion.div
    variants={fadeUpVariants}
    className="border-b border-border last:border-0"
  >
    <button
      onClick={onClick}
      className="w-full py-5 flex items-center justify-between text-left group"
    >
      <span className="font-medium text-foreground group-hover:text-primary transition-colors pr-4">
        {question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="pb-5 text-muted-foreground leading-relaxed">{answer}</p>
    </motion.div>
  </motion.div>
);

const RootCanal2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground hidden sm:block">
                Perfect Smile Dental
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (800) 555-1234
              </a>
              <a
                href="#contact"
                className="btn-primary text-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0 }}
          className="lg:hidden overflow-hidden bg-card border-t border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-foreground font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Floating Mobile CTA */}
      <motion.a
        href="#contact"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden btn-gold shadow-hover flex items-center gap-2 text-sm"
      >
        <Calendar className="w-4 h-4" />
        Book Appointment
      </motion.a>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Gentle, Expert Care
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Root Canal Therapy
              <span className="block text-gold-light mt-2">
                Save Your Tooth, Stop the Pain
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl"
            >
              Experience comfortable, modern root canal treatment from our
              board-certified specialists. We've helped over 15,000 patients
              save their natural teeth with our gentle approach and advanced
              techniques.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="btn-gold flex items-center justify-center gap-2 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Your Consultation
              </a>
              <a
                href="tel:+18005551234"
                className="btn-secondary flex items-center justify-center gap-2 text-base"
              >
                <Phone className="w-5 h-5" />
                Call (800) 555-1234
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-sm text-primary-foreground/60 flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Same-day emergency appointments available
            </motion.p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <AnimatedSection id="overview" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What is Root Canal Therapy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A gentle procedure that saves infected teeth and relieves pain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeUpVariants} className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Root canal therapy is a dental procedure designed to treat
                infection at the center of a tooth (the root canal system).
                Inside each tooth is a soft tissue called the pulp, which
                contains nerves and blood vessels. When this pulp becomes
                infected due to decay, cracks, or trauma, it can cause severe
                pain and lead to abscess formation.
              </p>
              <p className="text-foreground leading-relaxed">
                During treatment, our specialists carefully remove the infected
                pulp, clean and disinfect the canal system, then fill and seal
                the space. This eliminates infection, stops pain, and saves your
                natural tooth—which is almost always preferable to extraction.
              </p>
              <div className="p-4 bg-cream rounded-xl border border-gold/20">
                <p className="text-sm text-foreground italic flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  "We understand dental anxiety. Our entire team is trained in
                  gentle techniques and patient comfort. You're in caring hands."
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <div className="card-premium">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Signs You May Need a Root Canal
                </h3>
                <ul className="space-y-3">
                  {[
                    "Persistent toothache, especially when chewing",
                    "Prolonged sensitivity to hot or cold temperatures",
                    "Darkening or discoloration of the tooth",
                    "Swelling and tenderness in nearby gums",
                    "A recurring pimple (fistula) on the gums",
                    "Chipped or cracked tooth with deep decay",
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Timeline Section */}
      <AnimatedSection id="process" className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Your Treatment Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A step-by-step look at what to expect during your root canal
              procedure
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeUpVariants}
                  className={`relative lg:flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2 lg:px-8">
                    <motion.div
                      variants={scaleOnHover}
                      initial="rest"
                      whileHover="hover"
                      className="card-premium"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-display text-3xl font-bold text-gold">
                          {step.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            {step.description}
                          </p>
                          <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                            <Clock className="w-4 h-4" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="mt-12 p-6 bg-card rounded-2xl border border-border text-center"
          >
            <p className="text-foreground">
              <strong>Most treatments are completed in 1-2 visits.</strong> Each
              appointment typically lasts 60-90 minutes. You'll be comfortable
              throughout with modern anesthesia, and most patients return to
              normal activities the same day.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Myths vs Facts Section */}
      <AnimatedSection id="myths" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Myths vs. Facts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's clear up common misconceptions about root canal treatment
            </p>
          </motion.div>

          <div className="grid gap-6">
            {mythsVsFacts.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="grid md:grid-cols-2 gap-4 md:gap-0"
              >
                {/* Myth */}
                <div className="bg-destructive/5 border border-destructive/10 rounded-xl md:rounded-r-none p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-destructive mb-1 block">
                        Myth
                      </span>
                      <p className="text-foreground font-medium">{item.myth}</p>
                    </div>
                  </div>
                </div>

                {/* Fact */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl md:rounded-l-none p-5 md:p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                        Fact
                      </span>
                      <p className="text-muted-foreground">{item.fact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Answers to common questions from our patients
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="card-premium">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Cost Section */}
      <AnimatedSection id="cost" className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Cost & Insurance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with flexible payment options
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="card-premium mb-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Typical Price Ranges
            </h3>
            <div className="divide-y divide-border">
              {costRanges.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 first:pt-0 last:pb-0"
                >
                  <span className="text-foreground">{item.tooth}</span>
                  <span className="font-display text-lg font-semibold text-primary">
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                Insurance Coverage
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most dental insurance plans cover 50-80% of root canal costs as
                a major restorative procedure. We're in-network with most major
                insurers and will help verify your benefits before treatment.
              </p>
            </div>
            <div className="p-6 bg-gold/10 rounded-xl border border-gold/20">
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                Payment Options
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We accept all major credit cards, HSA/FSA accounts, and offer
                interest-free payment plans through CareCredit. Don't let cost
                delay necessary treatment—we'll work with you.
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUpVariants}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            * Prices vary based on complexity and individual cases. A detailed
            estimate will be provided at your consultation. Final costs may
            differ from estimates.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Contact/CTA Section */}
      <AnimatedSection
        id="contact"
        className="section-padding"
        style={{ background: "var(--gradient-hero)" } as React.CSSProperties}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4"
          >
            Ready to Stop the Pain?
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Our compassionate team is here to help. Schedule your consultation
            today and take the first step toward relief. Same-day emergency
            appointments available.
          </motion.p>
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="tel:+18005551234"
              className="btn-gold flex items-center justify-center gap-2 text-base"
            >
              <Phone className="w-5 h-5" />
              Call (800) 555-1234
            </a>
            <a
              href="mailto:appointments@premierdental.com"
              className="btn-secondary flex items-center justify-center gap-2 text-base"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </motion.div>
          <motion.p
            variants={fadeUpVariants}
            className="text-sm text-primary-foreground/60"
          >
            Or request an appointment online and we'll call you within 1
            business hour
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-navy-dark text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Branding */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-gold" />
                </div>
                <span className="font-display text-xl font-semibold">
                  Perfect Smile Dental
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Providing exceptional dental care with a gentle touch since
                1998. Our board-certified specialists at Perfect Smile Dental combine expertise with
                compassion.
              </p>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">
                Office Hours
              </h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li className="flex justify-between">
                  <span>Monday – Thursday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span>8:00 AM – 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM – 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
              <p className="mt-3 text-sm text-gold">
                Emergency appointments available
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-gold" />
                  <span>
                    123 Dental Plaza, Suite 200
                    <br />
                    Beverly Hills, CA 90210
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+18005551234"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    (800) 555-1234
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@premierdental.com"
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gold" />
                    info@premierdental.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
            <p>
              © {new Date().getFullYear()} Perfect Smile Dental. All rights
              reserved.
            </p>
            <p className="mt-2">
              This website is for informational purposes only and does not
              constitute medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootCanal2;
