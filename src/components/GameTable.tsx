import React from 'react';
import { motion } from 'framer-motion';

const games = [
  { id: '155615604', name: 'Prison Life 🏢', status: 'Done' },
  { id: '142823291', name: 'Murder Mystery 2 🔪', status: 'Done' },
  { id: '2788229376', name: 'Da Hood 🔫', status: 'Done' },
  { id: '606849621', name: 'Jailbreak 🚔', status: 'Pending' },
  { id: '292439477', name: 'Phantom Forces 💥', status: 'Pending' },
  { id: '537413528', name: 'Build A Boat For Treasure 🚤', status: 'Pending' },
  { id: '2041312716', name: 'Super Golf ⛳', status: 'Pending' },
  { id: '189707', name: 'Natural Disaster Survival 🌪️', status: 'Pending' },
  { id: '3260590327', name: 'Arsenal 🔫', status: 'Pending' },
  { id: '292439477', name: 'Tower of Hell 🗼', status: 'Pending' },
  { id: '606849621', name: 'Bloxburg 🏡', status: 'Pending' },
  { id: '4616652839', name: 'Adopt Me! 🐶', status: 'Pending' },
  { id: '321541178', name: 'Anime Fighting Simulator 💪', status: 'Pending' },
  { id: '3233893879', name: 'Shindo Life 🍥', status: 'Pending' },
  { id: '4954755078', name: 'All Star Tower Defense 🌟', status: 'Pending' },
  { id: '12109643', name: 'Work at a Pizza Place 🍕', status: 'Pending' },
  { id: '286090429', name: 'Bee Swarm Simulator 🐝', status: 'Pending' },
  { id: '920587237', name: 'Rogue Lineage ⚔️', status: 'Pending' },
  { id: '4442272183', name: 'Ro Ghoul 👻', status: 'Pending' },
  { id: '13772394625', name: 'Blade Ball ⚔️', status: 'Pending' },
  { id: '488667523', name: 'Royale High 👑', status: 'Pending' },
  { id: '3306021185', name: 'Brookhaven 🏠', status: 'Pending' },
  { id: '552500546', name: 'Flee the Facility 🏃', status: 'Pending' },
  { id: '4605918737', name: 'King Piece 👑', status: 'Pending' },
  { id: '2046441765', name: 'Ninja Legends 🥷', status: 'Pending' },
  { id: '6884319169', name: 'Mic Up 🎙', status: 'Done' },
];

const GameTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-purple-900">
            <th className="px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider">
              Game ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider">
              Game Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-purple-100 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {games.map((game, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="hover:bg-gray-800 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {game.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                {game.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    game.status === 'Done'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {game.status}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameTable;