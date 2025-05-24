// import React from 'react';
// import { X } from 'lucide-react';

// const SettingsScreen = ({
//   soundEnabled,
//   setSoundEnabled,
//   musicEnabled,
//   setMusicEnabled,
//   currentScreen,
//   setCurrentScreen,
// }) => (
//   <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
//     <div className="max-w-md mx-auto">
//       <div className="flex items-center mb-6">
//         <button
//           onClick={() => setCurrentScreen(currentScreen === 'game' ? 'game' : 'home')}
//           className="mr-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-all"
//         >
//           <X className="text-green-600" size={20} />
//         </button>
//         <h1 className="text-3xl font-bold text-green-800">Settings</h1>
//       </div>
//       <div className="space-y-4">
//         <div className="bg-white rounded-2xl p-6 shadow-lg">
//           <h3 className="text-xl font-semibold text-green-800 mb-4">Audio Settings</h3>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-green-700">Sound Effects</span>
//               <button
//                 onClick={() => setSoundEnabled(!soundEnabled)}
//                 className={`w-12 h-6 rounded-full relative transition-all ${
//                   soundEnabled ? 'bg-green-500' : 'bg-gray-300'
//                 }`}
//               >
//                 <div
//                   className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
//                     soundEnabled ? 'left-6' : 'left-0.5'
//                   }`}
//                 />
//               </button>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-green-700">Background Music</span>
//               <button
//                 onClick={() => setMusicEnabled(!musicEnabled)}
//                 className={`w-12 h-6 rounded-full relative transition-all ${
//                   musicEnabled ? 'bg-green-500' : 'bg-gray-300'
//                 }`}
//               >
//                 <div
//                   className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
//                     musicEnabled ? 'left-6' : 'left-0.5'
//                   }`}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default SettingsScreen;
import React from 'react';
import { X } from 'lucide-react';

const SettingsScreen = ({
  soundEnabled,
  setSoundEnabled,
  currentScreen,
  setCurrentScreen,
}) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
    <div className="max-w-md mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentScreen(currentScreen === 'game' ? 'game' : 'home')}
          className="mr-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-all"
        >
          <X className="text-green-600" size={20} />
        </button>
        <h1 className="text-3xl font-bold text-green-800">Settings</h1>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Audio Settings</h3>
          <div className="flex justify-between items-center">
            <span className="text-green-700">Sound Effects</span>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-12 h-6 rounded-full relative transition-all ${
                soundEnabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                  soundEnabled ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsScreen;
