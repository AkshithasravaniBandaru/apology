import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; color: string }>>([]);

  const colors = [
    'text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500',
    'text-purple-500', 'text-pink-500', 'text-indigo-500', 'text-orange-500',
    'text-teal-500', 'text-cyan-500', 'text-lime-500', 'text-amber-500',
    'text-emerald-500', 'text-violet-500', 'text-fuchsia-500', 'text-rose-500',
    'text-sky-500', 'text-slate-500', 'text-zinc-500', 'text-neutral-500'
  ];

  const handleClick = () => {
    const newMessages = Array.from({ length: 50 }, (_, i) => ({
      text: 'teju says i am sorry',
      color: colors[i % colors.length]
    }));
    setMessages(newMessages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-8">
      <div className="mb-8 flex flex-col items-center gap-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type anything here..."
          className="px-6 py-3 w-80 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
        />
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 text-xl"
        >
          teju
        </button>
      </div>

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
