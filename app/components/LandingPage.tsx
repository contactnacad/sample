'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { 
  FaGraduationCap, FaChevronDown, FaChevronUp, FaShieldAlt, FaHandHoldingUsd, 
  FaBrain, FaUsers, FaChalkboardTeacher, FaBars, FaBan, FaHeart, FaPuzzlePiece,
  FaStar, FaCheck, FaArrowRight, FaTimes, FaChartLine, FaPlay, FaQuoteLeft,
  FaGlobe, FaLightbulb, FaBullseye, FaTrophy, FaRocket, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaCheckCircle, FaAward, FaUserGraduate, FaChevronRight,
  FaClock, FaListUl, FaGift, FaUserTie, FaDesktop, FaChartBar, FaVideo,
  FaPlayCircle, FaBookOpen, FaTools, FaCertificate
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
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      title: "Digital Safety & Fraud Prevention",
      content: "Scammers prey on kids, teens and senior citizens—don't let yours be the next victim. This powerful session arms students and parents with essential skills to detect and prevent digital frauds before it's too late.",
      itinerary: [
        "Understanding digital threats in 2026",
        "Recognizingvlatest and common scam techniques",
        "Social engineering and manipulation tactics",
        "Secure digital practices for daily life",
        "Protecting personal information online",
        "Digital rights and fraud blackmails",
        "Identifying phishing attempts",
        "Interactive and practical fraud detection exercises",
        "Certificate and free exercise platform"
      ],
      outcomes: [
        "80% reduction in student vulnerability to online scams",
        "Ability to identify and avoid 9 out of 10 common online threats",
        "Practical tools to verify information authenticity",
        "Improved digital citizenship and responsibility"
      ],
      testimonial: {
        content: "After implementing the Digital Safety workshop, reported incidents of students falling victim to online scams dropped to near zero. The interactive format kept students engaged while teaching critical skills that extend beyond the classroom.",
        author: "Dr. Rajesh Kumar",
        position: "Principal, Delhi Public School"
      },
      price: "₹1,299",
      duration: "Live + Platform Access",
      students: "500+",
      rating: 4.9
    },
    {
      id: "emotional-intelligence",
      icon: <FaBrain className="text-yellow-500 text-2xl" />,
      title: "Emotional Intelligence",
      content: "Academic excellence alone isn't enough—students must master self-awareness, empathy, and resilience to thrive in life and career. Learn how to always stay happy, manage anger, and build strong relationships through self-awareness, self-regulation, social awareness, and relationship management.",
      itinerary: [
        "The four pillars of emotional intelligence",
        "Self-awareness exercises and reflection",
        "Emotion regulation techniques on Anger, stress and guilt",
        "Building empathy through perspective-taking",
        "Conflict resolution strategies",
        "Stress management and resilience building",
        "Communication skills for healthy relationships",
        "Certificate and practice platform"
      ],
      outcomes: [
        "42% reduction in classroom conflicts and bullying incidents",
        "80% Improved behaivior and social presence ",
        "Enhanced cooperation and teamwork among students",
        "Development of leadership qualities and social skills"
      ],
      testimonial: {
        content: "The transformation in our school culture has been remarkable since introducing the Emotional Intelligence program. Students are more collaborative, conflicts are resolved constructively, and teachers report a more positive learning environment across all grades.",
        author: "Smt. Anita Sharma",
        position: "Principal, Kendriya Vidyalaya"
      },
      price: "₹1,399",
      duration: "Live + Platform Access",
      students: "750+",
      rating: 4.8
    },
    {
      id: "personal-finance",
      icon: <FaHandHoldingUsd className="text-yellow-500 text-2xl" />,
      title: "Personal Finance",
      content: "Equip students with essential money management skills from an early age. Learn budgeting, saving, and smart investments that can lay the foundation for a successful financial future.",
      itinerary: [
        "Fundamentals of money management",
        "Creating and maintaining a personal budget",
        "Saving strategies for different goals",
        "Why and how to avoid wasting money on unecessary things",
        "Introduction to banking and financial institutions",
        "Understanding debt and credit responsibly",
        "Assets vs liability and breaking uneccessary purchasing habits",
        "Practical financial decision-making exercises",
        "Certificate and practice platform"
      ],
      outcomes: [
        "95% of students create their first personal budget",
        "Students demonstrate ability to make informed financial decisions",
        "Development of healthy money attitudes and habits",
        "Increased awareness of financial planning for future goals"
      ],
      testimonial: {
        content: "Parents have reached out to thank us for introducing the Personal Finance seminar. Many reported their children initiating family budget discussions and even helping younger siblings understand the value of saving. It's teaching life skills that extend well beyond our campus.",
        author: "Shri Vikram Mehta",
        position: "Headmaster, Modern Academy"
      },
      price: "₹1,199",
      duration: "Live + Platform Access",
      students: "600+",
      rating: 4.9
    },
    {
      id: "startup-entrepreneurship",
      icon: <MdOutlineWork className="text-yellow-500 text-2xl" />,
      title: "Startup & Entrepreneurship",
      content: "Ignite entrepreneurial spirit—teach idea validation, business planning, and how to build their own venture.",
      itinerary: [
        "Entrepreneurial mindset development",
        "Problem identification and solution brainstorming",
        "Business model canvas creation",
        "Market research methodologies",
        "Minimum viable product development",
        "Pitch creation and presentation skills",
        "Team building and resource management",
        "Certificate and practice platform"
      ],
      outcomes: [
        "Students develop and pitch original business ideas",
        "Understanding of basic business economics and operations",
        "Improved creative problem-solving abilities",
        "Enhanced presentation and communication skills"
      ],
      testimonial: {
        content: "The Entrepreneurship program created a buzz unlike anything we've seen before. Students have formed innovation clubs, started small ventures within the school, and two teams even participated in national-level startup competitions. It's unlocked potential we didn't know existed.",
        author: "Mr. Sunil Agarwal",
        position: "Director, Sunrise International School"
      },
      price: "₹1,499",
      duration: "Live + Platform Access",
      students: "400+",
      rating: 4.7
    },
    {
      id: "leadership-responsibility",
      icon: <MdSupervisorAccount className="text-yellow-500 text-2xl" />,
      title: "Leadership & Responsibility",
      content: "Cultivate strong leaders—teach accountability, responsibility, and the mindset needed for future success.",
      itinerary: [
        "Core leadership values and principles",
        "Responsibility and accountability frameworks",
        "Decision-making under pressure",
        "Teamwork, delegation and jeolousy avoidance",
        "Effective communication for leaders",
        "Ethical leadership practices",
        "Project planning and execution",
        "Certificate and practice platform"
      ],
      outcomes: [
        "60% increase in student-led initiatives",
        "Development of ethical decision-making frameworks",
        "Enhanced ability to motivate and work with teams",
        "Improved planning and organizational skills"
      ],
      testimonial: {
        content: "We've seen remarkable growth in student ownership of school initiatives after the Leadership program. The student council has become more effective, and we've noticed increased participation in community service projects as students apply their leadership skills in meaningful ways.",
        author: "Dr. Meenakshi Gupta",
        position: "Principal, Heritage School"
      },
      price: "₹1,349",
      duration: "Live + Platform Access",
      students: "550+",
      rating: 4.8
    },
    {
      id: "ai-digital-literacy",
      icon: <MdTouchApp className="text-yellow-500 text-2xl" />,
      title: "AI & Digital Literacy in 2026",
      content: "Equip students with essential digital tools and skills, including AI technologies, required for success in today's tech-driven world. From using basic software to navigating online platforms and understanding AI's role, prepare them for the future workplace.",
      itinerary: [
        "Current AI landscape and applications",
        "Real exercise to build a website in 20 mins",
        "Critical evaluation of AI-generated content",
        "Practical AI tools for productivity and learning",
        "Digital research and information literacy",
        "Responsible AI usage and ethics",
        "Future of work in an AI-augmented world",
        "Hands-on experience with common AI platforms",
        "Real exercise to build a website in 20 mins",
        "Certificate and practice platform"
      ],
      outcomes: [
        "85% of students demonstrate proficiency with common AI tools",
        "Improved critical thinking when consuming digital content",
        "Enhanced productivity using digital organization tools",
        "Understanding of AI's capabilities, limitations and ethical considerations"
      ],
      testimonial: {
        content: "The AI & Digital Literacy program has transformed how our students engage with technology. They're now not just consumers but intelligent evaluators and creators, using AI tools responsibly while maintaining critical thinking. This is precisely the preparation they need for higher education and future careers.",
        author: "Mrs. Priyanka Joshi",
        position: "Principal, Springfield Academy"
      },
      price: "₹1,449",
      duration: "Live + Platform Access",
      students: "800+",
      rating: 4.9
    },
    {
      id: "mental-physical-health",
      icon: <FaHeart className="text-yellow-500 text-2xl" />,
      title: "Mental & Physical Health",
      content: "Teach students the importance of balancing mental and physical well-being. Learn stress management, mindfulness, Healthy Eating, nutrition, and exercise habits to lead a healthy and fulfilling life.",
      itinerary: [
        "Mind-body connection fundamentals",
        "Stress recognition and healthy management",
        "Mindfulness and meditation practices",
        "Nutrition basics for adolescents",
        "Developing sustainable exercise habits",
        "Sleep hygiene and its impact on performance",
        "Building healthy daily routines",
        "Certificate and practice platform"
      ],
      outcomes: [
        "7/10 students have Reduced stress levels and improved focus in class after seminar",
        "80% Adoption of healthier eating habits and physical activity",
        "80% Better sleep quality reported by students and parents",
        "Development of coping strategies for academic pressure"
      ],
      testimonial: {
        content: "The holistic approach of the Mental & Physical Health program resonated deeply with our school's philosophy. We've seen improvements in attendance, focus, and even academic performance as students implement the wellness practices. Parents particularly appreciate the practical nutrition guidance.",
        author: "Dr. Anjali Desai",
        position: "Principal, The Wellness Academy"
      },
      price: "₹1,249",
      duration: "Live + Platform Access",
      students: "650+",
      rating: 4.8
    },
    {
      id: "false-marketing-prevention",
      icon: <FaBan className="text-yellow-500 text-2xl" />,
      title: "False Marketing Prevention",
      content: "Empower students to identify and avoid false advertising, misleading claims, and manipulative marketing tactics. Develop critical thinking skills to make informed decisions as consumers.",
      itinerary: [
        "Psychology behind marketing and advertising",
        "Common persuasion and biases techniques in media",
        "Identifying misleading claims and statistics",
        "Digital advertising and targeted marketing",
        "Media literacy and critical evaluation",
        "Responsible consumption practices",
        "Case studies of false marketing campaigns",
        "Certificate and practice platform"
      ],
      outcomes: [
        "75% improvement in ability to identify misleading claims",
        "Development of analytical media consumption habits",
        "More informed consumer choices and spending patterns",
        "Reduced susceptibility to manipulative marketing"
      ],
      testimonial: {
        content: "In today's media-saturated environment, the False Marketing Prevention program has been invaluable. Our students now approach advertisements with healthy skepticism and apply critical thinking before making decisions. Parents have noted more thoughtful consumption habits at home as well.",
        author: "Mr. Rajeev Malhotra",
        position: "Director, Progressive Public School"
      },
      price: "₹1,149",
      duration: "Live + Platform Access",
      students: "450+",
      rating: 4.7
    },
    {
      id: "personality & communication",
      icon: <FaUsers />,
      title: "Personality & Communication",
      content: "Master the art of effective communication and develop a magnetic personality. Learn public speaking, active listening, body language, and interpersonal skills that open doors in both personal and professional life.",
      itinerary: [
        "Understanding personality types and self-awareness",
        "Verbal and non-verbal communication mastery",
        "Public speaking and presentation skills",
        "Active listening and empathy development",
        "Body language and confidence building",
        "Conversation skills and networking basics",
        "Handling criticism and giving constructive feedback",
        "Professional etiquette and first impressions",
        "Practical communication exercises and role-plays",
        "Certificate and practice platform"
      ],
      outcomes: [
        "70% improvement in public speaking confidence",
        "Enhanced ability to express ideas clearly and persuasively",
        "Better interpersonal relationships and social skills",
        "Development of professional communication habits",
        "Increased self-confidence in diverse social situations"
      ],
      testimonial: {
        content: "The Personality & Communication program transformed our students from hesitant speakers to confident communicators. We've seen remarkable improvement in their classroom participation, leadership roles, and even parent-teacher interactions. This is a skill set they'll use for life.",
        author: "Mrs. Kavita Menon",
        position: "Principal, Blue Bells International School"
      },
      price: "₹1,399",
      duration: "Live + Platform Access",
      students: "700+",
      rating: 4.9
    },
    {
      id: "career & domain Introduction",
      icon: <MdOutlineWork />,
      title: "Career & Domain Introduction",
      content: "Explore diverse career paths and industry domains early. From tech and healthcare to creative arts and business, help students discover their passion and make informed decisions about their future with real-world insights.",
      itinerary: [
        "Overview of major career domains and industries",
        "Technology sector: AI, software, cybersecurity, data science",
        "Healthcare and life sciences opportunities",
        "Creative fields: design, content, media, arts",
        "Business, finance, and consulting paths",
        "Engineering and manufacturing specializations",
        "Government, law, and public service careers",
        "Understanding skill requirements for different domains",
        "Career planning and goal-setting workshops",
        "Guest speaker sessions from industry professionals",
        "Certificate and career assessment tools"
      ],
      outcomes: [
        "85% of students identify 2-3 career paths aligned with their interests",
        "Clear understanding of skills needed for chosen domains",
        "Informed decision-making for stream and subject selection",
        "Reduced career confusion and anxiety about the future",
        "Early exposure to industry trends and opportunities"
      ],
      testimonial: {
        content: "The Career & Domain Introduction seminar was a game-changer for our students in grades 9-11. Many students had no idea about the breadth of career options available. After this program, we noticed more purposeful academic choices and increased motivation as students connected their studies to real-world careers.",
        author: "Mr. Sandeep Malhotra",
        position: "Career Counselor, Cambridge International School"
      },
      price: "₹999",
      duration: "Live + Platform Access",
      students: "550+",
      rating: 4.8
    },
    {
      id: "problem-solving",
      icon: <FaPuzzlePiece className="text-yellow-500 text-2xl" />,
      title: "Problem Solving & Critical Thinking",
      content: "Develop analytical and creative problem-solving skills to tackle real-world challenges. Learn techniques like brainstorming, decision-making frameworks, and logical reasoning to approach problems effectively and innovatively.",
      itinerary: [
        "Critical thinking fundamentals and frameworks",
        "Creative problem-solving methodologies with real examples",
        "Systems thinking and complex problem analysis",
        "Decision-making processes and biases",
        "Design thinking for student applications",
        "Collaborative problem-solving techniques",
        "Real-world challenge activities",
        "Certificate and practice platform"
      ],
      outcomes: [
        "Significant improvement in academic problem-solving tasks",
        "Enhanced ability to approach unfamiliar challenges",
        "Development of structured thinking processes",
        "Increased confidence in tackling complex issues"
      ],
      testimonial: {
        content: "The Problem Solving program transformed our students' approach to challenges both inside and outside the classroom. Teachers report more thoughtful discussions, more innovative project solutions, and greater persistence when faced with difficult tasks. These are truly future-ready skills.",
        author: "Prof. Sameer Khanna",
        position: "Principal, Excellence Academy"
      },
      price: "₹1,299",
      duration: "Live + Platform Access",
      students: "600+",
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
      answer: "Absolutely! We've priced our programs at ₹999-₹1,499 (cost of 1-2 restaurant meals) because we believe every child deserves these essential skills. We also offer payment plans and scholarships."
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
      <section id="hero" className="pt-16 pb-12 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Trust Signals Bar */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-12 py-4">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                <span className={signal.color}>{signal.icon}</span>
                <span className="text-gray-600 font-medium whitespace-nowrap">{signal.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <FaGlobe className="text-blue-600 mr-2 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">Global Classroom for Indian Youth</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  World-Class Skills
                </span>
                <span className="text-gray-900 block">for the New Era</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empower your child with practical skills that 95% of schools don't teach. 
                <span className="font-semibold text-gray-900"> Learn from IIT/IIM experts</span> and never stay behind in the global competition.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Start Learning Today
                </button>
                <button 
                  onClick={() => openModal('demo')}
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  Get Free Demo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
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

            <div className="relative order-1 lg:order-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-4 right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -z-10 bottom-4 left-4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-50 blur-xl"></div>
              
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-[4/3] w-full">
                  <Image 
                    src="/assets/seminar.jpg" 
                    alt="Students learning in global classroom" 
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
                    className="rounded-2xl shadow-2xl object-cover"
                    priority
                  />
                </div>
                
                {/* Quote Overlay - Overlapping bottom of image on all screen sizes */}
                <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 bg-white rounded-xl p-2 sm:p-3 md:p-4 shadow-lg border border-gray-100 z-20">
                  <p className="text-center text-gray-700 font-medium italic text-xs sm:text-sm leading-tight">
                    "Take ownership of your growth and join the top 1% globally. Master skills effortlessly, build a career that truly fulfills your dream!"
                  </p>
                </div>
                
                {/* Floating Elements - High z-index to appear above everything */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg z-30">
                  <FaTrophy className="text-sm sm:text-lg md:text-xl" />
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white p-2 sm:p-3 rounded-full shadow-lg z-30">
                  <FaRocket className="text-sm sm:text-lg md:text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Faculty Section - Horizontal Moving Carousel */}
      <section className="py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Learn under <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">World-Class Experts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty includes graduates from IIT, IIM, Harvard, and industry leaders from Microsoft, IBM, and top startups.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll-fast">
                {/* First set of teachers */}
                {teachers.map((teacher, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
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
                {/* Duplicate set for seamless loop */}
                {teachers.map((teacher, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
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
                {/* Third set for extra smoothness */}
                {teachers.map((teacher, index) => (
                  <div key={`third-${index}`} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
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
              <div key={card.id} className="bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
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
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1 min-h-[4.5rem]">{card.content}</p>

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
                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">What Your Child Will Gain:</h4>
                    <ul className="space-y-2 min-h-[5rem]">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-1 mt-auto"
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
            <h3 className="text-2xl font-bold mb-2">Not Sure Which Program is Right for Your Child?</h3>
            <p className="text-xl text-blue-200 mb-4">Or get a bundled program with all courses for maximum impact</p>
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

      {/* Invite Us to Your School Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-6 py-3 mb-6">
              <MdSchool className="text-orange-600 mr-3 text-xl" />
              <span className="font-semibold text-orange-800">For Educational Institutions</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bring World-Class Skills to 
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Your School</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your students' futures with our comprehensive life skills programs. Join 25+ partner schools 
              across India who are already preparing their students for global success.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bulk Enrollment</h3>
                <p className="text-gray-600 text-sm">Special pricing for schools with multiple student enrollments</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaChalkboardTeacher className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Programs</h3>
                <p className="text-gray-600 text-sm">Tailored curriculum to fit your school's specific needs</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaChartBar className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Progress Tracking</h3>
                <p className="text-gray-600 text-sm">Detailed analytics and reports for school administration</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
              <p className="text-orange-100 mb-6 text-lg">
                Let's discuss how we can bring these transformative programs to your students. 
                Get special institutional pricing and support.
              </p>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
              >
                Invite Us to Your School
                <FaArrowRight className="ml-2" />
              </button>
              
              <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm text-orange-100">
                <div className="flex items-center">
                  <FaCheckCircle className="text-orange-300 mr-2" />
                  <span>Free Demo Sessions</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-orange-300 mr-2" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-orange-300 mr-2" />
                  <span>Institutional Support</span>
                </div>
              </div>
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
              Enroll Now - Starting ₹999
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
      {activeModal && (() => {
        const selectedProgram = programCards.find(card => card.id === activeModal);
        if (!selectedProgram) return null;
        
        return (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}>
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                    {selectedProgram.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProgram.title}</h2>
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <FaTimes className="text-gray-500" />
                </button>
              </div>
              
              <div className="p-6">
                {/* Program Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{selectedProgram.content}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-blue-500" />
                      <span>1 month commitment</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="mr-2 text-green-500" />
                      <span>{selectedProgram.students} enrolled</span>
                    </div>
                    <div className="flex items-center">
                      <FaStar className="mr-2 text-yellow-500" />
                      <span>{selectedProgram.rating} rating</span>
                    </div>
                  </div>
                </div>

                {/* Program Itinerary */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaListUl className="mr-2 text-blue-500" />
                    What Your Child Will Learn
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                    <ul className="space-y-3">
                      {selectedProgram.itinerary.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* What You Get */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaGift className="mr-2 text-green-500" />
                    What You Get
                  </h3>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <FaUserTie className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Personal Counselling</h4>
                          <p className="text-gray-600 text-xs">One-on-one guidance sessions</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaDesktop className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Platform Access</h4>
                          <p className="text-gray-600 text-xs">24/7 learning portal access</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaChartBar className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Performance Reports</h4>
                          <p className="text-gray-600 text-xs">Separate reports to school & parents</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaVideo className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Live Classes</h4>
                          <p className="text-gray-600 text-xs">Interactive live sessions</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaPlayCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Recorded Lectures</h4>
                          <p className="text-gray-600 text-xs">Access anytime for revision</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaBookOpen className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Case Studies</h4>
                          <p className="text-gray-600 text-xs">Real-world examples & scenarios</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaTools className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Practical Exercises</h4>
                          <p className="text-gray-600 text-xs">Hands-on learning activities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaCertificate className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">Certificate</h4>
                          <p className="text-gray-600 text-xs">Course completion certificate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expected Outcomes */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaTrophy className="mr-2 text-yellow-500" />
                    Expected Outcomes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProgram.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start bg-green-50 rounded-xl p-4 border border-green-100">
                        <FaCheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProgram.testimonial && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FaQuoteLeft className="mr-2 text-purple-500" />
                      What Educators Say
                    </h3>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                      <p className="text-gray-700 italic leading-relaxed mb-4">"{selectedProgram.testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                          <FaUserGraduate className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{selectedProgram.testimonial.author}</p>
                          <p className="text-sm text-gray-600">{selectedProgram.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Child's Future?</h3>
                  <p className="text-blue-100 mb-6 text-lg">Join thousands of students already building tomorrow's skills today.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => { closeModal(); scrollToSection('contact'); }}
                      className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
                    >
                      Schedule a Call
                      <FaArrowRight className="ml-2" />
                    </button>
                    <button 
                      onClick={() => { closeModal(); scrollToSection('contact'); }}
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default LandingPage;
