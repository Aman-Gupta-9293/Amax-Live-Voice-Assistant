import React from 'react';
import { Sparkles, Activity } from 'lucide-react';
import VoiceChat from './components/VoiceChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-100">Gemini Live</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 ml-2">
              Preview
            </span>
          </div>
          
          <a 
            href="#" 
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            <Activity className="w-4 h-4" />
            <span className="hidden sm:inline">System Status: Operational</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative w-full max-w-2xl bg-slate-900/50 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden">
          <VoiceChat />
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-slate-500 text-xs">
                Powered by Gemini 2.5 Flash Native Audio Model
            </p>
        </div>
      </main>
    </div>
  );
};

export default App;