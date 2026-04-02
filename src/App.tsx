import React, { useState } from 'react';
import { GraduationCap, Lock, Mail, ChevronRight, Target, Gift, Users, ArrowRight, LayoutDashboard, Trophy, Share2, Mic, Briefcase } from 'lucide-react';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'demo' && password === 'demo') {
      onLogin();
    } else {
      setError('Identifiants incorrects. Utilisez demo / demo');
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Firebase Google Login
    console.log('Google login requested');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-alumni-blue p-3 rounded-full">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Portail Alumni
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Connectez-vous pour accéder à vos quêtes et récompenses
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-alumni-red/10 border border-alumni-red/20 text-alumni-red px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Identifiant ou e-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-alumni-blue focus:border-alumni-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="demo"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:ring-alumni-blue focus:border-alumni-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="demo"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-alumni-blue focus:ring-alumni-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-alumni-blue hover:text-alumni-blue/80">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-alumni-blue hover:bg-alumni-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alumni-blue"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alumni-blue"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Se connecter avec Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Onboarding = ({ onFinish }: { onFinish: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Bienvenue dans votre nouvel espace Alumni",
      description: "Gardez le lien avec votre école, développez votre réseau et valorisez votre engagement au quotidien.",
      icon: <Users className="w-12 h-12 text-alumni-blue" />,
      bgColor: "bg-blue-50"
    },
    {
      title: "Réalisez des quêtes impactantes",
      description: "Mentorat, conférences, réseaux sociaux... Chaque action compte et vous rapporte des points d'engagement.",
      icon: <Target className="w-12 h-12 text-alumni-petrol" />,
      bgColor: "bg-teal-50"
    },
    {
      title: "Profitez de récompenses exclusives",
      description: "Convertissez vos points en avantages partenaires, goodies ou même en récompenses financières.",
      icon: <Gift className="w-12 h-12 text-[#1F1F1F]" />,
      bgColor: "bg-alumni-yellow"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[600px]">
        <div className="flex-1 flex flex-col p-8 items-center text-center justify-center relative">
          {/* Progress indicators */}
          <div className="absolute top-8 flex space-x-2">
            {steps.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-alumni-blue' : 'w-2 bg-gray-200'}`} />
            ))}
          </div>

          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 transition-colors duration-500 ${steps[currentStep].bgColor}`}>
            {steps[currentStep].icon}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <button
            onClick={nextStep}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-alumni-blue hover:bg-alumni-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-alumni-blue transition-colors"
          >
            {currentStep === steps.length - 1 ? (
              <>
                Accéder à mon Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                Suivant
                <ChevronRight className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
          {currentStep < steps.length - 1 && (
            <button
              onClick={onFinish}
              className="mt-4 w-full text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            >
              Passer l'introduction
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const DashboardContent = ({ onNavigate }: { onNavigate: (view: string) => void }) => (
  <div className="space-y-8">
    {/* Overview / Points */}
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Bonjour, Jean ! 👋</h2>
        <p className="text-gray-600 mt-1">Vous êtes à <span className="font-bold text-alumni-petrol">250 points</span> de votre prochaine récompense.</p>
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <button className="flex-1 md:flex-none bg-alumni-yellow text-[#1F1F1F] px-6 py-3 rounded-xl font-medium hover:bg-alumni-yellow/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
          <Gift className="h-5 w-5" />
          Voir les récompenses
        </button>
      </div>
    </section>

    {/* Quick Actions */}
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Actions rapides</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-alumni-petrol transition-colors cursor-pointer group">
          <div className="h-10 w-10 bg-alumni-petrol/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-alumni-petrol/20 transition-colors">
            <Share2 className="h-5 w-5 text-alumni-petrol" />
          </div>
          <h4 className="font-bold text-gray-900">Partager sur LinkedIn</h4>
          <p className="text-sm text-gray-500 mt-1 mb-3">Relayez l'actualité de l'école.</p>
          <div className="flex items-center text-sm font-medium text-alumni-green">
            + 50 pts
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-alumni-petrol transition-colors cursor-pointer group">
          <div className="h-10 w-10 bg-alumni-petrol/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-alumni-petrol/20 transition-colors">
            <Users className="h-5 w-5 text-alumni-petrol" />
          </div>
          <h4 className="font-bold text-gray-900">Parrainer un étudiant</h4>
          <p className="text-sm text-gray-500 mt-1 mb-3">Recommandez notre formation.</p>
          <div className="flex items-center text-sm font-medium text-alumni-green">
            + 500 pts
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-alumni-petrol transition-colors cursor-pointer group">
          <div className="h-10 w-10 bg-alumni-petrol/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-alumni-petrol/20 transition-colors">
            <Mic className="h-5 w-5 text-alumni-petrol" />
          </div>
          <h4 className="font-bold text-gray-900">Animer une conférence</h4>
          <p className="text-sm text-gray-500 mt-1 mb-3">Partagez votre expertise.</p>
          <div className="flex items-center text-sm font-medium text-alumni-green">
            + 300 pts
          </div>
        </div>
      </div>
    </section>

    {/* Recommended Quests */}
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">Quêtes recommandées</h3>
        <button onClick={() => onNavigate('quests')} className="text-sm font-medium text-alumni-blue hover:text-alumni-blue/80 flex items-center">
          Voir tout <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-100">
          {[
            { title: "Mettre à jour son profil", desc: "Ajoutez votre poste actuel et votre entreprise.", pts: 20, icon: <Briefcase className="h-5 w-5 text-gray-400" /> },
            { title: "Participer au Job Dating", desc: "Venez recruter nos futurs diplômés lors de l'événement annuel.", pts: 150, icon: <Users className="h-5 w-5 text-gray-400" /> },
          ].map((quest, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  {quest.icon}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{quest.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-1">{quest.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-4 shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-alumni-green/10 text-alumni-green">
                  +{quest.pts} pts
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const QuestsHub = () => {
  const categories = [
    {
      title: "Réseaux sociaux",
      description: "Partagez l'actualité de l'école et valorisez votre diplôme sur LinkedIn, Twitter, etc.",
      icon: <Share2 className="h-6 w-6 text-alumni-petrol" />,
      available: 3,
      completed: 12
    },
    {
      title: "Conférences & Événements",
      description: "Prenez la parole, participez aux tables rondes et partagez votre expérience.",
      icon: <Mic className="h-6 w-6 text-alumni-petrol" />,
      available: 2,
      completed: 1
    },
    {
      title: "Vie de l'école",
      description: "Devenez mentor, participez aux jurys ou aidez les étudiants entrepreneurs.",
      icon: <GraduationCap className="h-6 w-6 text-alumni-petrol" />,
      available: 5,
      completed: 3
    },
    {
      title: "Referral (Parrainage)",
      description: "Recommandez nos formations à votre réseau et gagnez des récompenses exclusives.",
      icon: <Users className="h-6 w-6 text-alumni-petrol" />,
      available: 1,
      completed: 0
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Hub des quêtes</h2>
          <p className="text-gray-600 mt-1">Découvrez toutes les missions disponibles pour vous engager et gagner des points.</p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
            <span className="text-gray-500">En cours :</span> <span className="font-bold text-alumni-blue">11 quêtes</span>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
            <span className="text-gray-500">Terminées :</span> <span className="font-bold text-alumni-green">16 quêtes</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group overflow-hidden flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="h-12 w-12 bg-alumni-petrol/10 rounded-xl flex items-center justify-center group-hover:bg-alumni-petrol/20 transition-colors">
                  {cat.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-alumni-blue">
                    {cat.available} disponibles
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-alumni-blue transition-colors">{cat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between mt-auto">
              <span className="text-sm font-medium text-gray-500">
                {cat.completed} quête{cat.completed > 1 ? 's' : ''} accomplie{cat.completed > 1 ? 's' : ''}
              </span>
              <span className="text-sm font-bold text-alumni-blue flex items-center group-hover:translate-x-1 transition-transform">
                Voir les quêtes <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MainLayout = ({ children, currentTab, setCurrentTab }: { children: React.ReactNode, currentTab: string, setCurrentTab: (tab: string) => void }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-alumni-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-white" />
            <h1 className="text-xl font-bold hidden sm:block">Portail Alumni</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => setCurrentTab('dashboard')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentTab === 'dashboard' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentTab('quests')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentTab === 'quests' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
            >
              Quêtes
            </button>
            <button 
              onClick={() => setCurrentTab('rewards')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentTab === 'rewards' ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
            >
              Récompenses
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full">
            <Trophy className="h-5 w-5 text-alumni-yellow" />
            <span className="font-medium">1 250 pts</span>
          </div>
          <div className="h-9 w-9 bg-alumni-petrol rounded-full flex items-center justify-center font-bold text-sm shadow-sm border-2 border-white/20 cursor-pointer hover:border-white transition-colors">
            JD
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Navigation */}
    <div className="md:hidden bg-white border-b border-gray-200">
      <nav className="flex overflow-x-auto">
        <button 
          onClick={() => setCurrentTab('dashboard')}
          className={`flex-1 py-3 px-4 text-center text-sm font-medium border-b-2 whitespace-nowrap ${currentTab === 'dashboard' ? 'border-alumni-blue text-alumni-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => setCurrentTab('quests')}
          className={`flex-1 py-3 px-4 text-center text-sm font-medium border-b-2 whitespace-nowrap ${currentTab === 'quests' ? 'border-alumni-blue text-alumni-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Quêtes
        </button>
        <button 
          onClick={() => setCurrentTab('rewards')}
          className={`flex-1 py-3 px-4 text-center text-sm font-medium border-b-2 whitespace-nowrap ${currentTab === 'rewards' ? 'border-alumni-blue text-alumni-blue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          Récompenses
        </button>
      </nav>
    </div>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </main>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'onboarding' | 'app'>('login');
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <>
      {currentView === 'login' && <Login onLogin={() => setCurrentView('onboarding')} />}
      {currentView === 'onboarding' && <Onboarding onFinish={() => setCurrentView('app')} />}
      {currentView === 'app' && (
        <MainLayout currentTab={currentTab} setCurrentTab={setCurrentTab}>
          {currentTab === 'dashboard' && <DashboardContent onNavigate={setCurrentTab} />}
          {currentTab === 'quests' && <QuestsHub />}
          {currentTab === 'rewards' && (
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
              <Gift className="w-12 h-12 text-alumni-yellow mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Récompenses</h2>
              <p className="text-gray-600">L'espace récompenses est en cours de construction.</p>
            </div>
          )}
        </MainLayout>
      )}
    </>
  );
}
