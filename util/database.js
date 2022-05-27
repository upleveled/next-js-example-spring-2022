// Simulate a Node.js server-side dependency
// to make the file fail if used in frontend
import fs from 'node:fs';

console.log(fs);
// End simulation

export const animalsDatabase = [
  { id: '1', name: 'Peter', type: 'Baboon', accessory: 'Banana' },
  { id: '2', name: 'Rita', type: 'Lion', accessory: 'Gold chain' },
  { id: '3', name: 'Severus', type: 'Snake', accessory: 'Maracas' },
  { id: '4', name: 'Polly', type: 'Crab', accessory: 'Knife' },
  { id: '5', name: 'Rebecca', type: 'Elephant', accessory: 'Pink bow' },
  { id: '6', name: 'Harry', type: 'Zebra-Eagle', accessory: 'Fishing rod' },
];

export const fruitsDatabase = [
  {
    id: '1',
    name: 'papaya',
    color: 'green',
    ripeness: 10,
    icon: '🫒',
  },
  {
    id: '2',
    name: 'apple',
    color: 'red',
    ripeness: 4,
    icon: '🍎',
  },
  {
    id: '3',
    name: 'lemon',
    color: 'yellow',
    ripeness: 1,
    icon: '🍋',
  },
  {
    id: '4',
    name: 'banana',
    color: 'black',
    ripeness: 'nope',
    icon: '🍌',
  },
];
