import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Heart,
  Award,
  Users,
  Phone,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  Mail,
  ChevronDown,
} from 'lucide-react';

const RootCanalTherapyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showMobileCta, setShowMobileCta] = useState(false);

  const trustPoints = [
    { icon: Shield, text: 'Advanced Pain-Free Technology' },
    { icon: Award, text: '20+ Years Experience' },
    { icon: Heart, text: '98% Patient Satisfaction' },
    { icon: Users, text: '10,000+ Successful Procedures' },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Consultation & Diagnosis',
      description:
        'We examine your tooth with digital X-rays to assess the infection and create a personalized treatment plan.',
    },
    {
      number: 2,
      title: 'Anesthesia & Access',
      description:
        'Local anesthesia ensures complete comfort. We create a small opening to access the infected pulp chamber.',
    },
    {
      number: 3,
      title: 'Cleaning & Shaping',
      description:
        'Using precision instruments, we remove infected tissue, clean the canals, and shape them for filling.',
    },
    {
      number: 4,
      title: 'Filling & Sealing',
      description:
        'Canals are filled with biocompatible material and sealed to prevent future infection.',
    },
    {
      number: 5,
      title: 'Restoration & Crown',
      description:
        'A crown is typically placed to protect and restore the tooth to full function and appearance.',
    },
  ];

  const mythsFacts = [
    {
      myth: 'Root canals are extremely painful',
      fact: 'Modern anesthesia and techniques make root canals no more uncomfortable than getting a filling.',
    },
    {
      myth: 'It\'s better to just extract the tooth',
      fact: 'Saving your natural tooth preserves jaw bone, prevents shifting, and avoids costly implants.',
    },
    {
      myth: 'Root canals cause illness',
      fact: 'This myth has been thoroughly debunked. Root canals remove infection and promote overall health.',
    },
    {
      myth: 'Recovery takes weeks',
      fact: 'Most patients return to normal activities the next day with only mild tenderness for 2-3 days.',
    },
  ];

  const faqs = [
    {
      question: 'What symptoms indicate I might need a root canal?',
      answer:
        'Common signs include severe toothache when chewing, prolonged sensitivity to hot or cold, tooth discoloration, swollen or tender gums, and a persistent pimple on the gums. However, some infected teeth show no symptoms, which is why regular dental checkups are crucial.',
    },
    {
      question: 'How long does a root canal procedure take?',
      answer:
        'Most root canals are completed in 1-2 appointments, each lasting 60-90 minutes. Simple cases may be finished in one visit, while teeth with multiple canals or severe infection may require a second appointment.',
    },
    {
      question: 'Will I be in pain during the procedure?',
      answer:
        'No. We use advanced local anesthesia that completely numbs the area. Most patients report feeling nothing during the procedure. If you\'re anxious, we also offer sedation options to help you relax completely.',
    },
    {
      question: 'What should I expect after my root canal?',
      answer:
        'You may experience mild tenderness or sensitivity for 2-3 days, easily managed with over-the-counter pain medication. Avoid chewing on the treated tooth until the permanent crown is placed. Most patients return to work or school the next day.',
    },
    {
      question: 'How much does a root canal cost?',
      answer:
        'Costs typically range from $800-$1,500 depending on the tooth (front teeth are simpler than molars). Most dental insurance covers 50-80% of the procedure. We offer flexible payment plans and will work with your insurance to maximize benefits.',
    },
    {
      question: 'Why is a crown necessary after root canal therapy?',
      answer:
        'Root canal treatment removes the tooth\'s nerve and blood supply, making it more brittle. A crown protects the tooth from fractures and restores it to full strength and function. Front teeth sometimes only need a filling, but back teeth almost always require crowns.',
    },
    {
      question: 'How successful are root canals?',
      answer:
        'Root canal therapy has a 95% success rate. With proper care and a crown, a treated tooth can last a lifetime. Regular checkups and good oral hygiene are key to long-term success.',
    },
    {
      question: 'What happens if I delay or avoid treatment?',
      answer:
        'The infection will worsen, potentially causing severe pain, abscess, bone loss, and spreading infection to other areas. Eventually, the tooth may be unsaveable, requiring extraction. Early treatment is always less invasive and more cost-effective.',
    },
  ];

  const AnimatedSection = ({ children, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useState(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="bg-white">
      {/* Floating Mobile CTA */}
      <button
       
        
        className=" fixed bottom-6 right-6  bg-orange-500  text-white px-8 py-4 rounded-full shadow-2xl z-50 flex items-center gap-2  text-center "
      >
        Prototype Made By <span className='font-bold italic'>ShiftDeploy </span>
      </button>

      {/* Hero Section */}
      <section className="relative pt-10 pb-20  overflow-hidden">
        
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-7xl px-4 mx-auto"
          >
            <div className="inline-block  text-blue-900   text-md  mb-4">
              Services {'>'}  <span className='font-semibold px-4 italic'>Root Canal Therapy</span>
            </div>
            <h1 className="text-3xl text-blue-900 md:text-6xl lg:text-7xl font-bold  mb-6 leading-tight font-sans">
              Root Canal Therapy
              
           
            </h1>
            <p className="text-xl font-semibold text-gray-700 mb-10 leading-relaxed">
              Experience advanced root canal therapy that eliminates pain and saves your natural tooth. Our expert team uses modern techniques for comfortable, lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white bg-blue-900 px-8 py-4 rounded-lg text-lg font-semibold  transition-all  flex justify-center items-center gap-x-3"
              >
                <Calendar className="" size={20} />
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="inline mr-2" size={20} />
                Call (555) 123-4567
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-center"
              >
                <point.icon className="mx-auto mb-3 text-blue-900" size={40} />
                <p className="text-gray-700 font-medium">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <AnimatedSection id="overview" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">What Is Root Canal Therapy?</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Root canal therapy is a dental procedure that saves infected or damaged teeth by removing the inflamed
                or infected pulp (nerve) inside the tooth, cleaning and disinfecting the inner chambers, then sealing it
                to prevent future infection.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Despite its intimidating reputation, modern root canal treatment is remarkably comfortable and no more
                painful than getting a routine filling. The procedure actually relieves the severe pain caused by
                infection.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "We understand dental anxiety is real. Our team specializes in creating a calm, reassuring
                  environment where your comfort is our priority. You'll feel cared for every step of the way."
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-900 mb-3">When You Need Treatment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Severe, persistent toothache</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Prolonged sensitivity to hot or cold</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Darkening or discoloration of the tooth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Swollen or tender gums near the tooth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Abscess or pimple on the gums</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Act Early, Save Your Tooth</h3>
                <p className="text-gray-700">
                  Early treatment prevents complications and is less invasive. Don't wait until pain becomes unbearable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Process Timeline */}
      <AnimatedSection id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Your Treatment Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined 5-step process ensures predictable results with minimal appointments—usually completed in
              just 1-2 visits.
            </p>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <Clock className="inline text-blue-900 mr-2" size={24} />
              <span className="text-lg text-gray-700">
                <strong>Total time:</strong> Most treatments completed in 1-2 visits of 60-90 minutes each
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Myths vs Facts */}
      <AnimatedSection id="myths" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Myths vs. Facts</h2>
            <p className="text-xl text-gray-600">Let's clear up common misconceptions about root canal therapy</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {mythsFacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-red-50 p-6 border-b-2 border-red-200">
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="text-sm font-bold text-red-600 uppercase mb-1">Myth</div>
                      <p className="text-gray-800 font-semibold">{item.myth}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="text-sm font-bold text-green-600 uppercase mb-1">Fact</div>
                      <p className="text-gray-800">{item.fact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about root canal therapy</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-blue-900 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Cost & Insurance */}
      <AnimatedSection id="cost" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Cost & Insurance</h2>
            <p className="text-xl text-gray-600">Transparent pricing and flexible payment options</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-blue-900"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Front Teeth</h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">$800-$1,000</div>
              <p className="text-gray-600">Single canal, simpler access</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-yellow-500"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Premolars</h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">$900-$1,200</div>
              <p className="text-gray-600">1-2 canals, moderate complexity</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-blue-700"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Molars</h3>
              <div className="text-4xl font-bold text-gray-800 mb-2">$1,000-$1,500</div>
              <p className="text-gray-600">3-4 canals, most complex</p>
            </motion.div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Insurance & Payment</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Most dental insurance plans cover 50-80% of root canal therapy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>We accept all major insurance providers and submit claims directly</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Flexible payment plans available with 0% interest financing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                <span>Free insurance verification before your appointment</span>
              </li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-r text-sm text-gray-700">
              <strong>Important:</strong> Crown placement (typically $1,000-$1,500) is usually required 2-4 weeks after
              root canal therapy and is billed separately. We'll discuss all costs upfront with no surprises.
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Save Your Tooth?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Don't let tooth pain control your life. Our experienced team is here to provide gentle, expert care that
              saves your natural tooth and restores your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl"
              >
                <Calendar className="inline mr-2" size={20} />
                Book Your Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="inline mr-2" size={20} />
                (555) 123-4567
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Perfect Smile Dental Clinic</h3>
              <p className="text-gray-400 mb-4">
                Expert dental care with a focus on comfort, quality, and preserving your natural smile.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Thursday: 8:00 AM - 6:00 PM</p>
                <p>Friday: 8:00 AM - 4:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-yellow-400 mt-3">Emergency appointments available</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-start">
                  <MapPin className="mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>
                    123 Dental Plaza, Dubai ...
                    <br />
                    
                  </span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2 flex-shrink-0" size={20} />
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2 flex-shrink-0" size={20} />
                  <span>care@perfectsmile.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Perfect Smile. All rights reserved. Restoring smiles, one tooth at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootCanalTherapyPage;
