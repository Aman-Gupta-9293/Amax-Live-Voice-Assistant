import React from 'react';
import { Mic, MicOff, Loader2, AlertCircle, XCircle } from 'lucide-react';
import { useLiveSession } from '../hooks/useLiveSession';
import Visualizer from './Visualizer';

const VoiceChat: React.FC = () => {
  const { 
    connect, 
    disconnect, 
    isConnected, 
    isConnecting, 
    error, 
    volume 
  } = useLiveSession();

  const handleToggle = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-md mx-auto p-6">
      
      {/* Status or Visualizer Area */}
      <div className="mb-12 h-24 flex items-center justify-center">
        {isConnected ? (
          <div className="flex flex-col items-center animate-in fade-in duration-500">
            <span className="text-blue-400 text-sm font-medium mb-4 uppercase tracking-wider">Listening</span>
            <Visualizer volume={volume} isActive={true} />
          </div>
        ) : isConnecting ? (
          <div className="flex flex-col items-center text-slate-400">
             <Loader2 className="w-8 h-8 animate-spin mb-2" />
             <span className="text-sm">Connecting to Gemini...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center text-slate-500">
             <span className="text-sm font-medium">Ready to chat</span>
          </div>
        )}
      </div>

      {/* Main Control Button */}
      <div className="relative group">
        <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 ${isConnected ? 'animate-pulse' : ''}`}></div>
        <button
          onClick={handleToggle}
          disabled={isConnecting}
          className={`relative flex items-center justify-center w-24 h-24 rounded-full border-4 transition-all duration-300 shadow-xl
            ${isConnected 
              ? 'bg-red-500 border-red-600 hover:bg-red-600' 
              : 'bg-slate-800 border-slate-700 hover:border-blue-500 hover:bg-slate-750'
            }
            ${isConnecting ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}
          `}
        >
          {isConnected ? (
            <XCircle className="w-10 h-10 text-white" />
          ) : (
            <Mic className={`w-10 h-10 ${isConnecting ? 'text-slate-400' : 'text-blue-400 group-hover:text-white transition-colors'}`} />
          )}
        </button>
      </div>

      {/* Helper Text */}
      <div className="mt-8 text-center space-y-2">
        <h2 className="text-xl font-semibold text-slate-100">
          {isConnected ? "Conversation Active" : "Start Conversation"}
        </h2>
        <p className="text-slate-400 text-sm max-w-xs mx-auto">
          {isConnected 
            ? "Speak naturally. Gemini listens and responds in real-time." 
            : "Tap the microphone to start a live voice chat with Gemini."}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 rounded-lg flex items-center gap-3 text-red-400 text-sm max-w-sm animate-in slide-in-from-bottom-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceChat;