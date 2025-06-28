import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Award, BookOpen, Briefcase, User, Download, ChevronDown, Star, Calendar, Trophy } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['C++', 'C', 'Java', 'Python', 'HTML', 'JavaScript', 'SQL'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'REST APIs', 'Git', 'GitHub', 'MongoDB'],
    dataML: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Power BI', 'TensorFlow'],
    soft: ['Problem-solving', 'Team Collaboration', 'Adaptability', 'Time Management', 'Critical Thinking']
  };

  const projects = [
    {
      title: 'NexChat - Realtime Chat Application',
      description: 'A full-stack real-time chat application with bidirectional communication, user authentication, and responsive design.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
      github: 'https://github.com/Andy210904/NexChat',
      features: ['Real-time messaging', 'Multiple themes', 'User authentication', 'Responsive UI']
    }
  ];

  const achievements = [
    {
      title: 'LeetCode Excellence',
      description: 'Top 13% Contest Rating',
      details: '400+ problems solved, 200 Days Coding badge',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'CodeGame Competition',
      description: '3rd Place Winner',
      details: 'Mozilla Firefox Club - Gravitas tech fest 2023',
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const certifications = [
    'Accenture North America - Data Analytics and Visualization Job Simulation',
    'Microsoft Certified: Azure AI Fundamentals',
    'DeepLearning.AI: Supervised Machine Learning: Regression and Classification'
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Aditya Dhane
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-blue-400 transition-all duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="mt-13 min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className=" mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img src="/Me.jpg"alt="User Avatar"className="w-44 h-44 rounded-full object-cover"/>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Aditya Dhane
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            Aspiring Software Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable and efficient solutions with a strong foundation in 
            competitive programming, AI/ML, and data science. Focused on leveraging problem-solving 
            skills to drive innovation and growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:adityadhane553@gmail.com" className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 px-6 py-3 rounded-full border border-blue-500/30 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="/resume.pdf" download className="flex items-center gap-2 bg-purple-900 hover:bg-purple-500/30 px-6 py-3 rounded-full border border-purple-500/30 transition-all duration-300 hover:scale-105">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  Education
                </h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-blue-300">B.Tech in Computer Science</h4>
                  <p className="text-gray-300">Vellore Institute of Technology</p>
                  <p className="text-gray-400">Sept 2022 – Present</p>
                  <p className="text-green-400 font-semibold">CGPA: 9.21</p>
                </div>
              </div>
            
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Vellore, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:adityadhane553@gmail.com" className="hover:text-blue-400 transition-colors">
                    adityadhane553@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 83909 91996</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Languages</h3>
              <div className="space-y-2">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Technologies</h3>
              <div className="space-y-2">
                {skills.technologies.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-green-400">Data & ML</h3>
              <div className="space-y-2">
                {skills.dataML.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-pink-400">Soft Skills</h3>
              <div className="space-y-2">
                {skills.soft.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Key Features:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              
              <div className="border-l-2 border-blue-500/30 pl-6">
                <h4 className="text-xl font-semibold text-blue-300">Design Core Member</h4>
                <p className="text-purple-300 font-medium">Technology and Gaming Club (TAG)</p>
                <p className="text-gray-400 mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Apr 2024 – Jan 2025
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Designed visual content for TAG events, enhancing audience engagement</li>
                  <li>• Collaborated with team members for innovative design solutions</li>
                  <li>• Managed multiple projects with timely delivery</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-yellow-500/20 rounded-full">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-300">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
                <p className="text-gray-300">{achievement.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:adityadhane553@gmail.com" className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">adityadhane553@gmail.com</p>
            </a>
            
            <a href="https://www.linkedin.com/in/aditya-dhane" target="_blank" rel="noopener noreferrer"className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </a>
            
            <a href="https://github.com/Andy210904" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
              <Github className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-300">View my code</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Aditya Dhane. Built with React and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;