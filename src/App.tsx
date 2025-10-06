import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState<Array<{ text: string; color: string }>>([]);

  const colors = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500',
    'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-orange-500',
    'text-teal-500', 'text-cyan-500', 'text-lime-500', 'text-amber-500',
    'text-emerald-500', 'text-violet-500', 'text-fuchsia-500', 'text-rose-500',
    'text-sky-500', 'text-slate-500', 'text-zinc-500', 'text-neutral-500'
  ];

  const handleDoubleClick = () => {
    const newMessages = Array.from({ length: 50 }, (_, i) => ({
      text: i % 2 === 0 ? 'Sorry cheppaga' : 'teju says i am sorry',
      color: colors[i % colors.length]
    }));
    setMessages(newMessages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8">
      <button
        onDoubleClick={handleDoubleClick}
        className="mb-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 text-xl"
      >
        teju
      </button>

      <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${msg.color} text-lg font-bold text-center p-3 bg-white rounded-lg shadow-sm`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


export default App