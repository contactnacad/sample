'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { 
  FaGraduationCap, FaChevronDown, FaChevronUp, FaShieldAlt, FaHandHoldingUsd, 
  FaBrain, FaUsers, FaChalkboardTeacher, FaBars, FaBan, FaHeart, FaPuzzlePiece,
  FaStar, FaCheck, FaArrowRight, FaTimes, FaChartLine, FaPlay, FaQuoteLeft,
  FaGlobe, FaLightbulb, FaBullseye, FaTrophy, FaRocket, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaCheckCircle, FaAward, FaUserGraduate, FaChevronRight
} from 'react-icons/fa';
import { MdOutlineWork, MdTouchApp, MdSupervisorAccount, MdVerified, MdSchool } from 'react-icons/md';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false);
    }
  }, []);

  const openModal = (id: string) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Modern data structures optimized for conversion
  const teachers = [
    { name: "Chetan Verma", credentials: "IIT Madras, Microsoft", expertise: "AI & Digital Literacy", image: "/assets/chetan.jpeg", verified: true },
    { name: "Sai Krishnan", credentials: "MS, Northeastern University", expertise: "AI/ML Expert, Ex-IBM", useIcon: true, verified: true },
    { name: "Krishna Bajpai", credentials: "Founder Posterwa", expertise: "Startup & Entrepreneurship", image: "/assets/krishnabajpai.jpg", verified: true },
    { name: "Bibhu Ranjan", credentials: "Ex Blackline, Ieltsappeal", expertise: "Product Management", image: "/assets/bibhu.jpeg", verified: true },
    { name: "Kaustav Choubey", credentials: "MSc, University of Cambridge", expertise: "Analytics & Mathematics", useIcon: true, verified: true },
    { name: "Tarun Jain", credentials: "Senior Developer, SAP Labs", expertise: "Full Stack Development", image: "/assets/tarun.jpeg", verified: true }
  ];

  const approachSteps = [
    { icon: <FaUserGraduate />, title: "Learn from the Best", desc: "World-class mentors with real industry experience", color: "from-blue-500 to-blue-600" },
    { icon: <FaLightbulb />, title: "Real Case Studies", desc: "Learn from actual success stories and examples", color: "from-purple-500 to-purple-600" },
    { icon: <FaBullseye />, title: "Hands-on Practice", desc: "Apply knowledge through interactive exercises", color: "from-green-500 to-green-600" },
    { icon: <FaChartLine />, title: "Track Progress", desc: "Monitor growth with detailed analytics", color: "from-orange-500 to-orange-600" },
    { icon: <FaTrophy />, title: "Real Challenges", desc: "Test skills in real-world scenarios", color: "from-red-500 to-red-600" },
    { icon: <FaRocket />, title: "Global Success", desc: "Apply skills worldwide and achieve excellence", color: "from-indigo-500 to-indigo-600" }
  ];

  const programCards = [
    {
      id: "digital-safety",
      icon: <FaShieldAlt />,
      title: "Digital Safety & Fraud Prevention",
      content: "Protect your child from digital threats with essential cybersecurity skills that 95% of schools don't teach.",
      outcomes: ["80% reduction in vulnerability", "Recognize 9/10 common scams", "Practical protection tools"],
      price: "₹2,999",
      duration: "2 hours",
      students: "500+",
      rating: 4.9
    },
    {
      id: "emotional-intelligence",
      icon: <FaBrain />,
      title: "Emotional Intelligence & Leadership",
      content: "Build confidence, empathy, and leadership skills that determine 90% of career success.",
      outcomes: ["42% reduction in conflicts", "Enhanced social skills", "Leadership development"],
      price: "₹3,499",
      duration: "2.5 hours",
      students: "750+",
      rating: 4.8
    },
    {
      id: "personal-finance",
      icon: <FaHandHoldingUsd />,
      title: "Smart Money Management",
      content: "Financial literacy that 85% of adults wish they learned in school. Start early, succeed faster.",
      outcomes: ["Create personal budgets", "Smart spending habits", "Investment basics"],
      price: "₹2,799",
      duration: "2 hours",
      students: "600+",
      rating: 4.9
    },
    {
      id: "startup-entrepreneurship",
      icon: <MdOutlineWork />,
      title: "Entrepreneurship & Innovation",
      content: "Develop the entrepreneurial mindset that creates tomorrow's business leaders and innovators.",
      outcomes: ["Business idea validation", "Pitch presentation skills", "Problem-solving mindset"],
      price: "₹3,999",
      duration: "3 hours",
      students: "400+",
      rating: 4.7
    },
    {
      id: "ai-digital-literacy",
      icon: <MdTouchApp />,
      title: "AI & Future Skills",
      content: "Master AI tools and digital skills that will be essential for 75% of future jobs.",
      outcomes: ["AI tool proficiency", "Digital productivity", "Future-ready skills"],
      price: "₹3,799",
      duration: "2.5 hours",
      students: "800+",
      rating: 4.9
    },
    {
      id: "leadership-responsibility",
      icon: <MdSupervisorAccount />,
      title: "Leadership & Character Building",
      content: "Develop ethical leadership and responsibility that shapes confident, principled individuals.",
      outcomes: ["Leadership initiatives", "Ethical decision-making", "Team collaboration"],
      price: "₹3,299",
      duration: "2 hours",
      students: "550+",
      rating: 4.8
    }
  ];

  const studentTestimonials = [
    {
      name: "Arjun Sharma",
      grade: "Class 11",
      school: "DPS Delhi",
      content: "The AI course completely changed my perspective on technology. I'm now building my own apps and helping classmates with their projects!",
      image: "/assets/student1.jpg",
      video: true,
      improvement: "Improved tech skills by 300%"
    },
    {
      name: "Priya Patel",
      grade: "Class 10",
      school: "Kendriya Vidyalaya Mumbai",
      content: "Digital safety session literally saved me from a ₹15,000 scam. Now I'm the go-to person in my family for online safety!",
      image: "/assets/student2.jpg",
      improvement: "Prevented major financial loss"
    },
    {
      name: "Rohit Kumar",
      grade: "Class 12",
      school: "Modern Academy Bangalore",
      content: "Started my own tutoring business after the entrepreneurship program. Already earning ₹8,000/month while studying!",
      image: "/assets/student3.jpg",
      video: true,
      improvement: "₹8,000/month income"
    }
  ];

  const parentTestimonials = [
    {
      name: "Mrs. Sunita Agarwal",
      relation: "Mother of Ananya (Class 9)",
      location: "Delhi",
      content: "My daughter's confidence skyrocketed after emotional intelligence training. She's handling peer pressure beautifully and her grades improved by 15%.",
      image: "/assets/parent1.jpg",
      result: "15% grade improvement"
    },
    {
      name: "Mr. Rajesh Gupta",
      relation: "Father of Vikash (Class 11)",
      location: "Mumbai",
      content: "The finance course taught my son budgeting skills I never learned. He's managing ₹2,000 pocket money like a CFO and even started saving!",
      image: "/assets/parent2.jpg",
      result: "Started saving money"
    },
    {
      name: "Dr. Meera Joshi",
      relation: "Mother of Twins (Class 10)",
      location: "Pune",
      content: "Both children became more responsible and focused after leadership training. Teachers noticed immediate positive changes in behavior.",
      image: "/assets/parent3.jpg",
      result: "Improved behavior & focus"
    }
  ];

  const trustSignals = [
    { icon: <MdVerified />, text: "Verified by 25+ Schools", color: "text-blue-500" },
    { icon: <FaAward />, text: "94% Parent Satisfaction", color: "text-green-500" },
    { icon: <FaUsers />, text: "5,000+ Students Trained", color: "text-purple-500" },
    { icon: <MdSchool />, text: "IIT/IIM Expert Faculty", color: "text-orange-500" }
  ];

  const impactStats = [
    { value: "25+", label: "Partner Schools", sublabel: "Across India" },
    { value: "5,000+", label: "Students Impacted", sublabel: "And growing" },
    { value: "15+", label: "Skill Programs", sublabel: "Industry-relevant" },
    { value: "94%", label: "Parent Satisfaction", sublabel: "Verified reviews" }
  ];

  const faqs = [
    {
      question: "How do these programs complement my child's regular studies?",
      answer: "Our programs focus on practical life skills that traditional curriculum doesn't cover - like digital safety, financial literacy, and emotional intelligence. These skills actually improve academic performance by 15-20% on average."
    },
    {
      question: "Are the courses affordable for middle-class families?",
      answer: "Absolutely! We've priced our programs at ₹2,799-₹3,999 (cost of 2-3 restaurant meals) because we believe every child deserves these essential skills. We also offer payment plans and scholarships."
    },
    {
      question: "How do I know if my child will actually benefit?",
      answer: "We provide detailed progress reports and practical assignments. 94% of parents report visible improvements within 2 weeks. Plus, we offer a 100% satisfaction guarantee."
    },
    {
      question: "Can schools integrate these programs into their curriculum?",
      answer: "Yes! We work with 25+ schools already. Our programs are designed to fit into existing schedules and complement academic learning with practical skills."
    }
  ];

  return (
    <div className="font-inter bg-white text-gray-900 overflow-x-hidden">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nonacad
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('programs')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Programs
              </button>
              <button onClick={() => scrollToSection('approach')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Our Approach
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Success Stories
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                Get Free Demo
              </button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsNavOpen(!isNavOpen)}>
              <FaBars className="text-gray-600 text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-2">
                Programs
              </button>
              <button onClick={() => scrollToSection('approach')} className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-2">
                Our Approach
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-600 hover:text-blue-600 font-medium py-2">
                Success Stories
              </button>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium">
                Get Free Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Modern & Conversion-Focused */}
      <section id="hero" className="pt-16 pb-12 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Trust Signals Bar */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 py-4">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <span className={signal.color}>{signal.icon}</span>
                <span className="text-gray-600 font-medium">{signal.text}</span>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
                <FaGlobe className="text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Global Classroom for Indian Youth</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  World-Class Skills
                </span>
                <br />
                <span className="text-gray-900">for the New Era</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empower your child with practical skills that 95% of schools don't teach. 
                <span className="font-semibold text-gray-900"> Learn from IIT/IIM experts</span> and never stay behind in the global competition.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore Programs
                  <FaArrowRight className="inline ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Get Free Demo
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>No Long-term Commitment</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/assets/seminar.jpg" 
                  alt="Students learning in global classroom" 
                  width={600} 
                  height={400} 
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <p className="text-center text-gray-700 font-medium italic">
                    "Learn from the world's best mentors and never stay behind"
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg">
                <FaTrophy className="text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-3 rounded-full shadow-lg">
                <FaRocket className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Faculty Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learn from <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">World-Class Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty includes graduates from IIT, IIM, Harvard, and industry leaders from Microsoft, IBM, and top startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    {teacher.useIcon || !teacher.image ? (
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <FaUserGraduate className="text-white text-2xl" />
                      </div>
                    ) : (
                      <Image 
                        src={teacher.image} 
                        alt={teacher.name} 
                        width={80} 
                        height={80} 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    )}
                    {teacher.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                        <MdVerified className="text-white text-sm" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{teacher.credentials}</p>
                  <p className="text-gray-600 text-sm">{teacher.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced for Conversion */}
      <section id="programs" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Premium Programs</span> That Transform Lives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical skills that 95% of schools don't teach, designed by experts from top institutions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programCards.map((card, index) => (
              <div key={card.id} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                      {card.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{card.price}</div>
                      <div className="text-sm text-gray-500">{card.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{card.content}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <FaUsers className="mr-1" />
                      {card.students} enrolled
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <FaStar className="mr-1" />
                      {card.rating} rating
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What Your Child Will Gain:</h4>
                    <ul className="space-y-2">
                      {card.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <FaCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => openModal(card.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-1"
                  >
                    Learn More & Enroll
                    <FaChevronRight className="inline ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Program is Right for Your Child?</h3>
            <p className="text-blue-100 mb-6">Get a free consultation with our education experts</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* From India to World Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <FaGlobe className="text-yellow-400 mr-3 text-xl" />
              <span className="font-semibold">From India, to the World</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Preparing Indian Students to 
              <span className="block text-yellow-400">Lead Globally</span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your child learns from world-renowned experts and joins a global community of learners. 
              These courses are designed for Indians to excel worldwide and become tomorrow's creators and leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Expertise</h3>
              <p className="text-gray-300 leading-relaxed">Learn from industry leaders at Microsoft, Google, Harvard, and top Indian institutions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Community</h3>
              <p className="text-gray-300 leading-relaxed">Join thousands of ambitious students building the future together</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Impact</h3>
              <p className="text-gray-300 leading-relaxed">Create solutions and innovations that make a difference worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proven Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic 6-step methodology that transforms students into confident, skilled individuals ready for global success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                
                {index < approachSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <FaChevronRight className="text-gray-300 text-xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge & Skills Impact Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Knowledge & Skills That Actually Matter
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Build unshakeable confidence with practical skills that create real-world impact
          </p>
          
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <FaLightbulb className="text-white text-4xl mx-auto mb-2" />
              <p className="text-yellow-100 font-medium">Innovation</p>
            </div>
            <div className="text-center">
              <FaTrophy className="text-white text-4xl mx-auto mb-2" />
              <p className="text-yellow-100 font-medium">Excellence</p>
            </div>
            <div className="text-center">
              <FaRocket className="text-white text-4xl mx-auto mb-2" />
              <p className="text-yellow-100 font-medium">Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section id="testimonials" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Success Stories from <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Students</span>
            </h2>
            <p className="text-xl text-gray-600">See how our programs are transforming young lives across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {studentTestimonials.map((student, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    {student.image ? (
                      <Image 
                        src={student.image} 
                        alt={student.name} 
                        width={60} 
                        height={60} 
                        className="w-15 h-15 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-15 h-15 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <FaUserGraduate className="text-white text-xl" />
                      </div>
                    )}
                    {student.video && (
                      <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                        <FaPlay className="text-white text-xs" />
                      </div>
                    )}
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <h3 className="font-bold text-gray-900">{student.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{student.grade}</p>
                    <p className="text-gray-500 text-xs">{student.school}</p>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                </div>

                <p className="text-gray-700 italic mb-4 leading-relaxed">"{student.content}"</p>
                
                {student.improvement && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {student.improvement}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Still Not Convinced?
            </h2>
            <h3 className="text-2xl font-semibold text-purple-200 mb-6">
              Here's What Parents Are Saying
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from parents who've seen remarkable transformations in their children
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parentTestimonials.map((parent, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-purple-300 text-2xl mr-4" />
                  <div>
                    <h3 className="font-bold text-white">{parent.name}</h3>
                    <p className="text-purple-200 text-sm">{parent.relation}</p>
                    <p className="text-gray-300 text-xs">{parent.location}</p>
                  </div>
                </div>

                <p className="text-gray-200 italic leading-relaxed mb-4">"{parent.content}"</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {parent.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growing Impact</span>
            </h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Parents Ask</span>
            </h2>
            <p className="text-xl text-gray-600">Get answers to common concerns about our programs</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-6 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <FaChevronUp className="text-blue-600" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Child's Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 5,000+ students who are already building tomorrow's skills today. 
            Get started with a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="https://wa.me/919153488985?text=Hello%20Nonacad,%20I%20want%20to%20enroll%20my%20child%20in%20your%20programs.%20Please%20provide%20more%20information."
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
            >
              Enroll Now - Starting ₹2,799
              <FaArrowRight className="ml-2" />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-blue-100">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Money-back Guarantee</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Expert Support</span>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Have questions? Want to discuss which program is best for your child? 
                Our education experts are here to help.
              </p>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const nameInput = document.getElementById('name') as HTMLInputElement;
                const phoneInput = document.getElementById('phone') as HTMLInputElement;
                const name = nameInput?.value || "";
                const phone = phoneInput?.value || "";
                if (!name || !phone) return;
                const message = `Hello Nonacad, I'm ${name} (${phone}). I'm interested in your programs for my child. Please contact me for more information.`;
                const whatsappUrl = `https://wa.me/919153488985?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Parent's Name *</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Free Consultation on WhatsApp
                </button>
              </form>

              <div className="mt-8 text-center text-gray-500">
                <p>Or call us directly at</p>
                <a href="tel:+919153488985" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                  +91 91534 88985
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contactnonacad@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 91534 88985</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Bengaluru, India</p>
                    <p className="text-sm text-gray-500">(Serving schools across India)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-gray-600">We respond to all inquiries within 2 hours during business hours (9 AM - 7 PM IST)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-white text-lg" />
                </div>
                <span className="text-xl font-bold">Nonacad</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Indian students with world-class practical skills for global success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Digital Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emotional Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Personal Finance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Entrepreneurship</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-400">For Schools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Enrollments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Programs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nonacad. All rights reserved. Made with ❤️ for Indian students.</p>
          </div>
        </div>
      </footer>

      {/* Program Detail Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}>
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Program Details</h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FaTimes className="text-gray-500" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Enroll?</h3>
                <p className="text-gray-600 mb-6">Get detailed program information and start your child's transformation journey.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/919153488985?text=Hello%20Nonacad,%20I%20want%20detailed%20information%20about%20your%20programs%20and%20enrollment%20process."
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Get Program Details
                    <FaArrowRight className="ml-2" />
                  </a>
                  <button 
                    onClick={() => { closeModal(); scrollToSection('contact'); }}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
