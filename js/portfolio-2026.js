/* Local-only translation and navigation: no analytics, external scripts or API calls. */
(() => {
  'use strict';
  const fr = {
    nav_about: 'À propos', nav_exp: 'Parcours', nav_skills: 'Expertises', nav_projects: 'Projets', nav_contact: 'Contact',
    hero_kicker: 'DATA SCIENCE · MODÉLISATION · RECHERCHE', hero_title_a: 'Comprendre la complexité.', hero_title_b: 'Éclairer les décisions.',
    hero_lead: 'Je suis Quentin Moreno-Gelos, Data Scientist et docteur en physique théorique. Je combine rigueur scientifique, modélisation et Machine Learning pour résoudre des problèmes concrets.',
    cta_work: 'Découvrir mes projets', cta_contact: 'Me contacter',
    hero_fact1_title: 'Air France', hero_fact1_detail: 'Mission Data Science · depuis 2025',
    hero_fact2_title: 'Doctorat', hero_fact2_detail: 'Physique théorique · Bordeaux',
    hero_fact3_title: 'Recherche', hero_fact3_detail: 'ELI Beamlines · Prague',
    floating_role: 'DATA SCIENTIST', scroll_down: 'Découvrir mon parcours',
    about_title_a: 'Une méthode scientifique.', about_title_b: 'Des applications concrètes.',
    about_intro: 'Mon parcours s’est construit dans la recherche en physique théorique et numérique, à travers la conception de modèles analytiques et de simulations de systèmes complexes.',
    about_body: 'J’applique aujourd’hui cette démarche à la Data Science : poser les bonnes questions, construire des modèles vérifiables et transformer des résultats techniques en éléments utiles à la décision. Clarté, reproductibilité et évaluation rigoureuse guident mon travail.',
    about_link: 'Découvrir mon parcours', exp_title: 'De la recherche aux enjeux métier.',
    exp_subtitle: 'Une expérience qui relie recherche scientifique internationale et Data Science appliquée.',
    exp_date_af: 'MAI 2025 — AUJOURD’HUI', exp_current: 'EN COURS', exp_af_type: 'MISSION DE CONSEIL VIA EMAGINE', exp_af_title: 'Data Scientist',
    exp_af_description: 'Data Science et modélisation statistique dans le secteur aérien : analyse de données complexes, développement d’approches de Machine Learning, validation du comportement des modèles et interprétation des résultats pour l’aide à la décision.',
    exp_af_note: 'Accompagnement et relation client : emagine · Portage salarial : Otherwise Portage',
    exp_date_postdoc: '2019 — 2023', exp_cz: 'PRAGUE, RÉPUBLIQUE TCHÈQUE',
    exp_postdoc_title: 'Chercheur postdoctoral',
    exp_postdoc_body: 'Études théoriques des ondes de choc et de l’astrophysique de laboratoire ; modèles analytiques, simulations magnétohydrodynamiques, calcul haute performance et analyse de données scientifiques.',
    exp_date_phd: '2015 — 2018', exp_bordeaux: 'UNIVERSITÉ DE BORDEAUX', exp_phd_title: 'Doctorant · Physique théorique',
    exp_phd_body: 'Recherche doctorale sur les chocs sans collisions en astrophysique de laboratoire, combinant théorie analytique, simulations particulaires et collaborations expérimentales.',
    tag_statistics: 'Statistiques', tag_modelling: 'Modélisation', tag_validation: 'Évaluation de modèles',
    skills_title: 'Des compétences complémentaires.', skills_subtitle: 'Statistiques, programmation, calcul scientifique et communication des résultats.',
    skill_ml_title: 'Statistiques & Machine Learning',
    skill_ml_body: 'Modélisation prédictive, tests statistiques, comparaison des modèles et évaluation robuste.',
    skill_compute_title: 'Calcul scientifique',
    skill_compute_body: 'Méthodes numériques, simulations de grande échelle, systèmes complexes et calcul haute performance.',
    skill_data_title: 'Analyse de données & ingénierie',
    skill_data_body: 'Exploration, préparation des données, analyses reproductibles et traitement de jeux de données complexes.',
    skill_vis_title: 'Visualisation & communication',
    skill_vis_body: 'Figures scientifiques, tableaux de bord analytiques, rédaction technique et pédagogie.',
    projects_title: 'Projets sélectionnés.', projects_subtitle: 'Des réalisations publiques représentatives de ma démarche d’analyse, de modélisation et de recherche.',
    project_eda_cat: 'ANALYSE EXPLORATOIRE', project_eda_title: 'Tableau de bord analytique interactif',
    project_eda_body: 'Un outil Python & Dash pour explorer des dataframes, effectuer des analyses statistiques et visualiser les données.',
    project_kaggle_cat: 'MODÉLISATION PRÉDICTIVE', project_kaggle_title: 'Études de cas en Machine Learning',
    project_kaggle_body: 'Des travaux de prédiction structurée et de prévision temporelle : variables, réglages et comparaison de modèles.',
    project_science_cat: 'RECHERCHE SCIENTIFIQUE', project_science_title: 'Physique des plasmas & astrophysique',
    project_science_body: 'Publications scientifiques sur la dynamique des chocs, les modèles analytiques et les simulations numériques à grande échelle.',
    project_detail: 'Voir le projet ↗', research_label: 'Recherche', research_title: 'La recherche façonne ma démarche.',
    research_desc: 'Avant la Data Science, j’ai étudié des questions fondamentales de physique des plasmas et d’astrophysique de laboratoire. Cette expérience continue de structurer mon approche : expliciter les hypothèses, confronter les modèles aux faits et tester la solidité des résultats.',
    research_publications: 'Explorer mes publications', contact_title: 'Donnons du sens\naux données complexes.',
    contact_body: 'Vous souhaitez échanger autour de la Data Science, de la modélisation ou de la recherche ? Contactez-moi.',
    contact_link:'Échanger sur LinkedIn', contact_elsewhere: 'RETROUVEZ-MOI', footer_tagline: 'Avec rigueur et curiosité.', footer_back: 'Retour en haut ↑',
    cv_link_home: 'Retour au portfolio', cv_print: 'Imprimer / Enregistrer en PDF', cv_top_title: 'Data Scientist · Docteur en physique',
    cv_summary: 'Data Scientist en mission chez Air France depuis mai 2025, docteur en physique théorique et ancien chercheur postdoctoral. Compétences en Machine Learning, statistiques, modélisation mathématique, simulation numérique, calcul scientifique et communication des résultats.',
    cv_professional: 'Expérience professionnelle', cv_skills: 'Compétences',cv_education:'Formation',cv_publications:'Recherche & publications',cv_languages:'Langues',
    cv_af_role:'Data Scientist — mission Air France',cv_af_meta:'Mai 2025 — aujourd’hui · via emagine · portage salarial Otherwise Portage',
    cv_af_desc:'Analyse de données, modélisation statistique et Machine Learning dans le secteur aérien. Développement et évaluation de modèles, interprétation des résultats et échanges avec les parties prenantes métiers.',
    cv_postdoc_role:'Chercheur postdoctoral — ELI Beamlines',cv_postdoc_meta:'Janvier 2019 — décembre 2023 · Prague, République tchèque',
    cv_postdoc_desc:'Modélisation théorique et simulation numérique de phénomènes de choc en astrophysique de laboratoire. Calcul haute performance, exploitation de grands jeux de données, collaborations internationales et publications.',
    cv_phd_role:'Chercheur doctorant — CELIA / Université de Bordeaux',cv_phd_meta:'Octobre 2015 — septembre 2018 · Bordeaux, France',
    cv_phd_desc:'Physique des plasmas et chocs sans collisions. Modèles analytiques, simulations Particle-In-Cell (PIC), validation scientifique et enseignement universitaire.',
    cv_degree:'Doctorat en physique — Université de Bordeaux',cv_degree_meta:'2015 — 2018 · Astrophysique de laboratoire',
    cv_master:'Master de physique — Université de Bordeaux',cv_master_meta:'2013 — 2015 · Astrophysique, lasers, matière et nanosciences',
    cv_licence:'Licence de physique pour l’ingénieur — Université de Bordeaux',cv_licence_meta:'2010 — 2013',
    cv_skill_ml:'Statistiques & Machine Learning',cv_skill_ml_tools:'Statistiques, validation de modèles, scikit-learn, XGBoost, SciPy',
    cv_skill_program:'Programmation & données',cv_skill_program_tools:'Python, NumPy, Pandas, Git, Linux',
    cv_skill_science:'Calcul scientifique',cv_skill_science_tools:'Fortran, simulations PIC / MHD, HPC, méthodes numériques',
    cv_skill_viz:'Visualisation',cv_skill_viz_tools:'Matplotlib, Plotly, Dash, LaTeX',
    cv_publications_body:'Publications en physique des plasmas et astrophysique de laboratoire ; liste détaillée accessible depuis ResearchGate et le portfolio.',
    cv_languages_body:'Français · Anglais (environnement professionnel et scientifique international)',
    cv_note:'Version de travail publique : informations de mission volontairement générales. Vérifier les coordonnées et les compétences avant publication.'
  };
  const en = {
    nav_about:'About',nav_exp:'Experience',nav_skills:'Expertise',nav_projects:'Projects',nav_contact:'Contact',
    hero_kicker:'DATA SCIENCE · MATHEMATICAL MODELING · RESEARCH',hero_title_a:'Turning complexity',hero_title_b:'into insight.',
    hero_lead:"I'm Quentin Moreno-Gelos, a Data Scientist with a PhD in theoretical physics. I combine scientific rigor and machine learning to address real-world problems.",
    cta_work:'Explore my work',cta_contact:'Get in touch',hero_fact1_title:'Air France',hero_fact1_detail:'Data science assignment · since 2025',
    hero_fact2_title:'PhD',hero_fact2_detail:'Theoretical physics · Bordeaux',hero_fact3_title:'Research',hero_fact3_detail:'ELI Beamlines · Prague',
    floating_role:'DATA SCIENTIST',scroll_down:'Scroll to explore',about_title_a:'Research mindset.',about_title_b:'Real-world impact.',
    about_intro:'My path began in theoretical and computational physics, developing analytical models and large-scale simulations to understand complex systems.',
    about_body:'Today I apply that foundation to data science: framing the right questions, building models that can be tested, and translating technical results into meaningful decisions. I value clarity, reproducibility and rigorous evaluation.',
    about_link:'Discover my background',exp_title:'Where rigor meets practice.',
    exp_subtitle:'From international scientific research to applied industry data science.',
    exp_date_af:'MAY 2025 — PRESENT',exp_current:'CURRENT',exp_af_type:'CONSULTING ASSIGNMENT VIA EMAGINE',exp_af_title:'Data Scientist',
    exp_af_description:'Applied data science and statistical modeling in the airline industry: complex data analysis, machine learning approaches, model validation and interpretation of results to support decisions.',
    exp_af_note:'Client coordination: emagine · Employment / payroll: Otherwise Portage',
    exp_date_postdoc:'2019 — 2023',exp_cz:'PRAGUE, CZECHIA',exp_postdoc_title:'Postdoctoral Research Fellow',
    exp_postdoc_body:'Theoretical studies of shock physics and laboratory astrophysics; analytical models, magnetohydrodynamic simulations, high-performance computing and scientific data analysis.',
    exp_date_phd:'2015 — 2018',exp_bordeaux:'UNIVERSITY OF BORDEAUX',exp_phd_title:'PhD Researcher · Theoretical Physics',
    exp_phd_body:'Doctoral research on collisionless shocks in laboratory astrophysics, combining analytical theory, particle-in-cell simulations and experimental collaborations.',
    tag_statistics:'Statistics',tag_modelling:'Modeling',tag_validation:'Model evaluation',
    skills_title:'A versatile technical toolkit.',skills_subtitle:'A combination of statistical reasoning, software skills and scientific depth.',
    skill_ml_title:'Statistics & machine learning',skill_ml_body:'Predictive modeling, statistical testing, model comparison and robust evaluation.',
    skill_compute_title:'Scientific computing',skill_compute_body:'Numerical methods, large-scale simulations, complex systems and HPC workflows.',
    skill_data_title:'Data analysis & engineering',skill_data_body:'Exploration, preprocessing, reproducible analysis and efficient handling of complex datasets.',
    skill_vis_title:'Visualization & communication',skill_vis_body:'Clear figures, analytical dashboards, research writing and technical explanations.',
    projects_title:'Selected work.',projects_subtitle:'Public projects showing my approach to analysis, modeling and research.',
    project_eda_cat:'DATA EXPLORATION',project_eda_title:'Interactive analytics dashboard',
    project_eda_body:'A Python & Dash tool for dataframe profiling, statistical analysis and flexible visual exploration.',
    project_kaggle_cat:'PREDICTIVE MODELING',project_kaggle_title:'Machine learning case studies',
    project_kaggle_body:'Structured prediction and time-series forecasting projects with feature engineering, tuning and model comparison.',
    project_science_cat:'SCIENTIFIC RESEARCH',project_science_title:'Plasma physics & astrophysics',
    project_science_body:'Peer-reviewed research on shock dynamics, analytical models and high-performance numerical simulations.',
    project_detail:'View project ↗',research_label:'Research',research_title:'Science is part of how I think.',
    research_desc:'Before working in data science, I investigated fundamental questions in plasma physics and laboratory astrophysics. That experience still shapes my approach: state assumptions, challenge models and test results against evidence.',
    research_publications:'Explore publications',contact_title:"Let's make the complex\nunderstandable.",
    contact_body:"Interested in data science, modeling or research? Let's connect.",contact_link:'Connect on LinkedIn',contact_elsewhere:'FIND ME ELSEWHERE',footer_tagline:'Built with clarity and curiosity.',footer_back:'Back to top ↑',
    cv_link_home:'Back to portfolio',cv_print:'Print / Save as PDF',cv_top_title:'Data Scientist · PhD in physics',
    cv_summary:'Data Scientist on assignment with Air France since May 2025, PhD in theoretical physics and former postdoctoral researcher. Expertise in machine learning, statistics, mathematical modeling, numerical simulations, scientific computing and communication.',
    cv_professional:'Professional experience',cv_skills:'Skills',cv_education:'Education',cv_publications:'Research & publications',cv_languages:'Languages',
    cv_af_role:'Data Scientist — Air France assignment',cv_af_meta:'May 2025 — present · via emagine · employment through Otherwise Portage',
    cv_af_desc:'Data analysis, statistical modeling and machine learning in the airline industry. Model development and evaluation, interpretation of results, communication with business stakeholders.',
    cv_postdoc_role:'Postdoctoral Research Fellow — ELI Beamlines',cv_postdoc_meta:'January 2019 — December 2023 · Prague, Czechia',
    cv_postdoc_desc:'Theoretical modeling and numerical simulation of shock phenomena in laboratory astrophysics. High-performance computing, large dataset analysis, international collaboration and publications.',
    cv_phd_role:'PhD Researcher — CELIA / University of Bordeaux',cv_phd_meta:'October 2015 — September 2018 · Bordeaux, France',
    cv_phd_desc:'Plasma physics and collisionless shocks. Analytical models, Particle-In-Cell (PIC) simulations, validation and university teaching.',
    cv_degree:'PhD in physics — University of Bordeaux',cv_degree_meta:'2015 — 2018 · Laboratory astrophysics',
    cv_master:'MSc in physics — University of Bordeaux',cv_master_meta:'2013 — 2015 · Astrophysics, lasers, matter and nanosciences',
    cv_licence:'BSc in engineering physics — University of Bordeaux',cv_licence_meta:'2010 — 2013',
    cv_skill_ml:'Statistics & machine learning',cv_skill_ml_tools:'Statistics, model evaluation, scikit-learn, XGBoost, SciPy',
    cv_skill_program:'Programming & data',cv_skill_program_tools:'Python, NumPy, Pandas, Git, Linux',
    cv_skill_science:'Scientific computing',cv_skill_science_tools:'Fortran, PIC / MHD simulations, HPC, numerical methods',
    cv_skill_viz:'Visualization',cv_skill_viz_tools:'Matplotlib, Plotly, Dash, LaTeX',
    cv_publications_body:'Scientific publications in plasma physics and laboratory astrophysics; full list available through ResearchGate and the portfolio.',
    cv_languages_body:'French · English (international professional and scientific environments)',
    cv_note:'Public draft: client work described only at a general level. Verify contact details and skill list before publishing.'
  };
  const toggle = document.getElementById('language-toggle');
  const label = document.getElementById('language-label');
  const mobileToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav');
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  let lang;
  try { lang = localStorage.getItem('portfolio_lang'); } catch (_) { lang = null; }
  if (lang !== 'fr' && lang !== 'en') lang = (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = next;
    const dict = next === 'fr' ? fr : en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dict,key)) {
        // Use textContent: localized text never contains HTML.
        el.textContent = dict[key];
      }
    });
    if (toggle) toggle.setAttribute('aria-label',next==='fr'?'Switch to English':'Passer en français');
    if (label) label.textContent=next==='fr'?'EN':'FR';
    try { localStorage.setItem('portfolio_lang',next); } catch(_) { /* storage unavailable */ }
  }
  setLanguage(lang);
  if (toggle) toggle.addEventListener('click', () => setLanguage(lang === 'fr' ? 'en' : 'fr'));
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('open',!expanded);
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open'); mobileToggle.setAttribute('aria-expanded','false');
    }));
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {mobileNav.classList.remove('open');mobileToggle.setAttribute('aria-expanded','false');}
    });
  }
  // Highlight visible section in navigation, without tracking or requests.
  if ('IntersectionObserver' in window) {
    const sections = [...document.querySelectorAll('main section[id]')];
    const links=[...document.querySelectorAll('.nav a[href^="#"]')];
    if (sections.length) {
      const observer=new IntersectionObserver(entries => {
        const active=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if (!active) return;
        links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+active.target.id));
      }, {rootMargin:'-18% 0px -56% 0px',threshold:[0,.2,.4,.6]});
      sections.forEach(section => observer.observe(section));
    }
  }
  const print = document.getElementById('print-cv');
  if (print) print.addEventListener('click',()=>window.print());
})();
