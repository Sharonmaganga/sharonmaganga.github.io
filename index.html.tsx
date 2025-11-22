<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AxiaAnalytics - AI & Data Analytics Solutions in Nairobi</title>
    <meta name="description" content="Transform your business with AI and data analytics. Expert consultation, machine learning, and data engineering services in Nairobi, Kenya.">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .gradient-bg { background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%); }
        .fade-in { animation: fadeIn 0.5s ease-in; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hidden { display: none !important; }
    </style>
</head>
<body class="font-sans antialiased">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
                    <div class="gradient-bg w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                    <span class="text-2xl font-bold">AxiaAnalytics</span>
                </div>
                
                <nav class="hidden md:flex items-center gap-6">
                    <button onclick="showPage('home')" class="nav-link font-semibold text-gray-700 hover:text-blue-600 transition">Home</button>
                    <button onclick="showPage('about')" class="nav-link font-semibold text-gray-700 hover:text-blue-600 transition">About</button>
                    <button onclick="showPage('services')" class="nav-link font-semibold text-gray-700 hover:text-blue-600 transition">Services</button>
                    <button onclick="showPage('blog')" class="nav-link font-semibold text-gray-700 hover:text-blue-600 transition">Blog</button>
                    <button onclick="showPage('contact')" class="nav-link font-semibold text-gray-700 hover:text-blue-600 transition">Contact</button>
                    <button onclick="showPage('payment')" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
                </nav>

                <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-2xl">☰</button>
            </div>

            <nav id="mobile-menu" class="hidden md:hidden mt-4 pb-4 space-y-2">
                <button onclick="showPage('home'); toggleMobileMenu()" class="block w-full text-left px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">Home</button>
                <button onclick="showPage('about'); toggleMobileMenu()" class="block w-full text-left px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">About</button>
                <button onclick="showPage('services'); toggleMobileMenu()" class="block w-full text-left px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">Services</button>
                <button onclick="showPage('blog'); toggleMobileMenu()" class="block w-full text-left px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">Blog</button>
                <button onclick="showPage('contact'); toggleMobileMenu()" class="block w-full text-left px-4 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">Contact</button>
                <button onclick="showPage('payment'); toggleMobileMenu()" class="block w-full text-left px-4 py-2 rounded-lg font-semibold bg-blue-50 text-blue-600">Get Started</button>
            </nav>
        </div>
    </header>

    <!-- Home Page -->
    <div id="page-home" class="page">
        <section class="gradient-bg text-white py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-5xl font-bold mb-6 leading-tight">Transform Your Business with Data & AI</h1>
                        <p class="text-xl mb-8 text-blue-100">AxiaAnalytics delivers cutting-edge AI solutions and data analytics services that drive real business results in Nairobi and beyond.</p>
                        <div class="flex gap-4 flex-wrap">
                            <button onclick="showPage('contact')" class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">Get Started</button>
                            <button onclick="showPage('services')" class="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">Our Services</button>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <div class="grid grid-cols-2 gap-6 text-center">
                                <div><div class="text-4xl font-bold">100+</div><div class="text-blue-200">Projects</div></div>
                                <div><div class="text-4xl font-bold">50+</div><div class="text-blue-200">Clients</div></div>
                                <div><div class="text-4xl font-bold">95%</div><div class="text-blue-200">Success Rate</div></div>
                                <div><div class="text-4xl font-bold">24/7</div><div class="text-blue-200">Support</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 px-4 bg-gray-50">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center mb-4">Our Core Services</h2>
                <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive AI and data solutions designed to accelerate your digital transformation journey</p>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-4xl mb-4">🧠</div>
                        <h3 class="text-xl font-bold mb-3">AI & Machine Learning</h3>
                        <p class="text-gray-600 mb-4">Custom ML models, predictive analytics, and intelligent automation</p>
                        <button onclick="showPage('services')" class="text-blue-600 font-semibold">Learn More</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-4xl mb-4">📊</div>
                        <h3 class="text-xl font-bold mb-3">Data Engineering</h3>
                        <p class="text-gray-600 mb-4">Robust data pipelines and scalable infrastructure</p>
                        <button onclick="showPage('services')" class="text-blue-600 font-semibold">Learn More</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-4xl mb-4">📈</div>
                        <h3 class="text-xl font-bold mb-3">Business Intelligence</h3>
                        <p class="text-gray-600 mb-4">Interactive dashboards and real-time analytics</p>
                        <button onclick="showPage('services')" class="text-blue-600 font-semibold">Learn More</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-4xl mb-4">⚙️</div>
                        <h3 class="text-xl font-bold mb-3">Process Automation</h3>
                        <p class="text-gray-600 mb-4">Streamline operations with intelligent automation</p>
                        <button onclick="showPage('services')" class="text-blue-600 font-semibold">Learn More</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-4xl mb-4">🤖</div>
                        <h3 class="text-xl font-bold mb-3">AI Agent Workflows</h3>
                        <p class="text-gray-600 mb-4">Custom AI agents for autonomous operations</p>
                        <button onclick="showPage('services')" class="text-blue-600 font-semibold">Learn More</button>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div class="text-4xl mb-4">👥</div>
                        <h3 class="text-xl font-bold mb-3">Expert Consultation</h3>
                        <p class="text-gray-600 mb-4">Strategic guidance and implementation support</p>
                        <button onclick="showPage('services')" class="text-blue-600 font-semibold">Learn More</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
                    <div class="text-sm font-semibold mb-2 text-purple-200">CASE STUDY</div>
                    <h2 class="text-3xl font-bold mb-4">80% Reduction in Manual Processing</h2>
                    <p class="text-lg mb-6 text-purple-100">How we helped a leading Kenyan logistics company automate operations, saving 200+ hours per month.</p>
                    <button onclick="showPage('blog')" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">Read Full Story</button>
                </div>
            </div>
        </section>

        <section class="py-20 px-4 bg-gray-50">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p class="text-xl text-gray-600 mb-8">Let's discuss how AI and data analytics can drive your next breakthrough</p>
                <div class="flex gap-4 justify-center flex-wrap">
                    <button onclick="showPage('contact')" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">Schedule Consultation</button>
                    <button onclick="showPage('payment')" class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">View Packages</button>
                </div>
            </div>
        </section>
    </div>

    <!-- About Page -->
    <div id="page-about" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-5xl font-bold mb-8">About AxiaAnalytics</h1>
                <div class="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 class="text-3xl font-bold mb-6 text-blue-600">Our Story</h2>
                        <p class="text-lg text-gray-700 mb-4">AxiaAnalytics was founded with a vision to democratize AI and data analytics for businesses across Africa. Based in Nairobi, Kenya, we recognized the transformative power of data-driven decision making.</p>
                        <p class="text-lg text-gray-700 mb-4">What started as a small consultancy has grown into a full-service AI and data analytics firm, serving clients across industries.</p>
                        <p class="text-lg text-gray-700">Today, we're at the forefront of Africa's AI revolution, helping businesses leverage cutting-edge technology.</p>
                    </div>
                    <div class="gradient-bg rounded-2xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-6">By The Numbers</h3>
                        <div class="space-y-6">
                            <div><div class="text-4xl font-bold mb-2">100+</div><div class="text-blue-100">Projects Completed</div></div>
                            <div><div class="text-4xl font-bold mb-2">50+</div><div class="text-blue-100">Enterprise Clients</div></div>
                            <div><div class="text-4xl font-bold mb-2">15+</div><div class="text-blue-100">Industries Served</div></div>
                            <div><div class="text-4xl font-bold mb-2">95%</div><div class="text-blue-100">Client Satisfaction</div></div>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-8 mb-20">
                    <div class="bg-blue-50 p-8 rounded-xl">
                        <h2 class="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
                        <p class="text-lg text-gray-700">To empower businesses with intelligent, data-driven solutions that unlock growth, optimize operations, and create competitive advantages.</p>
                    </div>
                    <div class="bg-purple-50 p-8 rounded-xl">
                        <h2 class="text-3xl font-bold mb-4 text-purple-600">Our Vision</h2>
                        <p class="text-lg text-gray-700">To be Africa's leading AI and analytics partner, recognized for innovation, impact, and transforming businesses through technology.</p>
                    </div>
                </div>

                <h2 class="text-4xl font-bold mb-12 text-center">Our Values</h2>
                <div class="grid md:grid-cols-4 gap-6 mb-20">
                    <div class="text-center"><div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div><h3 class="text-xl font-bold mb-2">Excellence</h3><p class="text-gray-600">Exceptional quality</p></div>
                    <div class="text-center"><div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🧠</div><h3 class="text-xl font-bold mb-2">Innovation</h3><p class="text-gray-600">Cutting-edge tech</p></div>
                    <div class="text-center"><div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🤝</div><h3 class="text-xl font-bold mb-2">Partnership</h3><p class="text-gray-600">Lasting relationships</p></div>
                    <div class="text-center"><div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">💡</div><h3 class="text-xl font-bold mb-2">Impact</h3><p class="text-gray-600">Measurable value</p></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Services Page -->
    <div id="page-services" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-5xl font-bold mb-6 text-center">Our Services</h1>
                <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Comprehensive AI and data solutions designed to transform your business</p>

                <section class="mb-16">
                    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-10">
                        <div class="flex items-start gap-6 mb-6">
                            <div class="text-4xl">🧠</div>
                            <div><h2 class="text-3xl font-bold mb-3">AI & Machine Learning Solutions</h2><p class="text-lg text-gray-700">Custom ML models, predictive analytics, and intelligent automation.</p></div>
                        </div>
                        <button onclick="showPage('contact')" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Request Consultation</button>
                    </div>
                </section>

                <section class="mb-16">
                    <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-10">
                        <div class="flex items-start gap-6 mb-6">
                            <div class="text-4xl">📊</div>
                            <div><h2 class="text-3xl font-bold mb-3">Data Engineering & Architecture</h2><p class="text-lg text-gray-700">Build robust data pipelines and scalable infrastructure.</p></div>
                        </div>
                        <button onclick="showPage('contact')" class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Request Consultation</button>
                    </div>
                </section>

                <section class="mb-16">
                    <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-10">
                        <div class="flex items-start gap-6 mb-6">
                            <div class="text-4xl">📈</div>
                            <div><h2 class="text-3xl font-bold mb-3">Business Intelligence & Dashboards</h2><p class="text-lg text-gray-700">Transform data into actionable insights with interactive dashboards.</p></div>
                        </div>
                        <button onclick="showPage('contact')" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Request Consultation</button>
                    </div>
                </section>
            </div>
        </div>
    </div>

    <!-- Blog Page -->
    <div id="page-blog" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-5xl font-bold mb-6 text-center">Blog & Insights</h1>
                <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Stay updated with AI, data analytics, and digital transformation trends</p>

                <div class="grid md:grid-cols-2 gap-8">
                    <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                        <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                        <div class="p-6">
                            <span class="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">AI Trends</span>
                            <h2 class="text-2xl font-bold my-3">The Rise of AI Agents in Enterprise Workflows</h2>
                            <p class="text-gray-600 mb-4">Discover how autonomous AI agents are transforming business operations.</p>
                            <span class="text-sm text-gray-500">Nov 15, 2025</span>
                        </div>
                    </article>

                    <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                        <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-600"></div>
                        <div class="p-6">
                            <span class="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Data Strategy</span>
                            <h2 class="text-2xl font-bold my-3">Building a Data-Driven Culture</h2>
                            <p class="text-gray-600 mb-4">Transform your company into a data-driven powerhouse.</p>
                            <span class="text-sm text-gray-500">Nov 10, 2025</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Page -->
    <div id="page-contact" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-5xl font-bold mb-6 text-center">Get In Touch</h1>
                <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Ready to transform your business? Let's start a conversation</p>

                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <form id="contact-form" class="space-y-6">
                            <div>
                                <label class="block text-sm font-semibold mb-2">Name *</label>
                                <input type="text" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">Organization</label>
                                <input type="text" name="organization" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">Email *</label>
                                <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">Service Interest</label>
                                <select name="service" class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                    <option value="">Select a service</option>
                                    <option value="ai-ml">AI & Machine Learning</option>
                                    <option value="data-engineering">Data Engineering</option>
                                    <option value="business-intelligence">Business Intelligence</option>
                                    <option value="automation">Process Automation</option>
                                    <option value="ai-agents">AI Agent Workflows</option>
                                    <option value="consultation">Consultation Services</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-2">Message *</label>
                                <textarea name="message" required rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
                        </form>
                    </div>

                    <div>
                        <div class="gradient-bg rounded-2xl p-8 text-white mb-6">
                            <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
                            <div class="space-y-6">
                                <div class="flex items-start gap-4">
                                    <span class="text-2xl">📍</span>
                                    <div><div class="font-semibold mb-1">Location</div><div class="text-blue-100">Nairobi, Kenya</div></div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <span class="text-2xl">📞</span>
                                    <div><div class="font-semibold mb-1">Phone / WhatsApp</div><a href="tel:+254728702495" class="text-blue-100 hover:text-white transition">+254 728 702 495</a></div>
                                </div>
                                <div class="flex items-start gap-4">
                                    <span class="text-2xl">✉️</span>
                                    <div><div class="font-semibold mb-1">Email</div><a href="mailto:contact@axiaanalytics.com" class="text-blue-100 hover:text-white transition">contact@axiaanalytics.com</a></div>
                                </div>
                            </div>
                            <div class="mt-8 pt-8 border-t border-white/20">
                                <h3 class="font-semibold mb-4">Follow Us</h3>
                                <div class="flex gap-4">
                                    <a href="https://instagram.com/AxiaAnalytics" target="_blank" class="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">Instagram</a>
                                    <a href="https://linkedin.com/company/AxiaAnalytics" target="_blank" class="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Payment Page -->
    <div id="page-payment" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-5xl font-bold mb-6 text-center">Get Started Today</h1>
                <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">Choose the package that fits your needs</p>

                <div class="grid md:grid-cols-2 gap-8 mb-16">
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div class="gradient-bg p-6 text-white">
                            <h2 class="text-2xl font-bold mb-2">AI Consultation Call</h2>
                            <div class="text-4xl font-bold">$50</div>
                            <p class="text-blue-100">KES 6,500 / 1 Hour</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-6">Get expert advice on your AI and data strategy</p>
                            <button onclick="alert('Payment integration ready. Add your Stripe/Flutterwave keys to activate.')" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Choose Package</button>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                            <h2 class="text-2xl font-bold mb-2">AI Agent Setup</h2>
                            <div class="text-4xl font-bold">$500</div>
                            <p class="text-purple-100">KES 65,000 / Starter Package</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-6">Custom AI agent for your workflow</p>
                            <button onclick="alert('Payment integration ready. Add your Stripe/Flutterwave keys to activate.')" class="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">Choose Package</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Privacy Policy Page -->
    <div id="page-privacy" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl font-bold mb-6">Privacy Policy</h1>
                <p class="text-gray-600 mb-8">Last Updated: November 21, 2025</p>
                <div class="prose max-w-none">
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                        <p class="text-gray-700 mb-4">We use your information to provide services, respond to inquiries, process transactions, and improve our offerings.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">4. Contact Us</h2>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="text-gray-700">Email: contact@axiaanalytics.com</p>
                            <p class="text-gray-700">Phone: +254 728 702 495</p>
                            <p class="text-gray-700">Location: Nairobi, Kenya</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <!-- Terms of Service Page -->
    <div id="page-terms" class="page hidden">
        <div class="py-20 px-4">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl font-bold mb-6">Terms of Service</h1>
                <p class="text-gray-600 mb-8">Last Updated: November 21, 2025</p>
                <div class="prose max-w-none">
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                        <p class="text-gray-700 mb-4">By accessing AxiaAnalytics services, you agree to be bound by these Terms of Service.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">2. Services Description</h2>
                        <p class="text-gray-700 mb-4">AxiaAnalytics provides AI, machine learning, data engineering, business intelligence, and consultation services.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">3. Payment Terms</h2>
                        <p class="text-gray-700 mb-4">All prices are listed in USD and KES. Payment must be received before services commence.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">4. Contact Information</h2>
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <p class="text-gray-700">Email: contact@axiaanalytics.com</p>
                            <p class="text-gray-700">Phone: +254 728 702 495</p>
                            <p class="text-gray-700">Location: Nairobi, Kenya</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4">
        <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-2xl font-bold mb-4">AxiaAnalytics</h3>
                    <p class="text-gray-400 mb-4">Transforming businesses with AI and data analytics.</p>
                    <div class="flex gap-3">
                        <a href="https://instagram.com/AxiaAnalytics" target="_blank" class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition">IG</a>
                        <a href="https://linkedin.com/company/AxiaAnalytics" target="_blank" class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition">LI</a>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Services</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" onclick="showPage('services')" class="hover:text-white transition">AI & Machine Learning</a></li>
                        <li><a href="#" onclick="showPage('services')" class="hover:text-white transition">Data Engineering</a></li>
                        <li><a href="#" onclick="showPage('services')" class="hover:text-white transition">Business Intelligence</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Company</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" onclick="showPage('about')" class="hover:text-white transition">About Us</a></li>
                        <li><a href="#" onclick="showPage('blog')" class="hover:text-white transition">Blog</a></li>
                        <li><a href="#" onclick="showPage('contact')" class="hover:text-white transition">Contact</a></li>
                        <li><a href="#" onclick="showPage('privacy')" class="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" onclick="showPage('terms')" class="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Contact</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li>Nairobi, Kenya</li>
                        <li><a href="tel:+254728702495" class="hover:text-white transition">+254 728 702 495</a></li>
                        <li><a href="mailto:contact@axiaanalytics.com" class="hover:text-white transition">contact@axiaanalytics.com</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2025 AxiaAnalytics. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Navigation
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(function(page) {
                page.classList.add('hidden');
            });
            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.remove('hidden');
            }
            window.scrollTo(0, 0);
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
                menu.classList.toggle('hidden');
            }
        }

        // Contact Form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you within 24 hours.');
                this.reset();
            });
        }

        // Payment Integration Functions
        function initStripePayment(packageType, amountUSD) {
            alert('Stripe Payment\n\nPackage: ' + packageType + '\nAmount: -2xl font-bold mb-4">1. Introduction</h2>
                        <p class="text-gray-700 mb-4">AxiaAnalytics is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">2. Information We Collect</h2>
                        <p class="text-gray-700 mb-4">We collect information you provide directly, including name, email, organization, and messages through our contact forms.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text + amountUSD + '\n\nTo activate:\n1. Get Stripe key from stripe.com\n2. Add backend endpoint\n3. Configure webhooks');
        }

        function initFlutterwavePayment(packageType, amountKES) {
            alert('Flutterwave Payment\n\nPackage: ' + packageType + '\nAmount: KES ' + amountKES + '\n\nTo activate:\n1. Sign up at flutterwave.com\n2. Get public key\n3. Add payment callback');
        }

        function initMpesaPayment(packageType, amountKES) {
            alert('M-PESA Payment\n\nPackage: ' + packageType + '\nAmount: KES ' + amountKES + '\n\nTo activate:\n1. Register at developer.safaricom.co.ke\n2. Or use Flutterwave for M-PESA');
        }

        // Initialize
        showPage('home');
    </script>
</body>
</html>-2xl font-bold mb-4">1. Introduction</h2>
                        <p class="text-gray-700 mb-4">AxiaAnalytics is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-bold mb-4">2. Information We Collect</h2>
                        <p class="text-gray-700 mb-4">We collect information you provide directly, including name, email, organization, and messages through our contact forms.</p>
                    </section>
                    <section class="mb-8">
                        <h2 class="text