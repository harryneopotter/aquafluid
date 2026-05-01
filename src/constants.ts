import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'det-1',
    name: 'Dorron Liquid Detergent',
    category: 'Laundry Care',
    description: 'Professional grade liquid detergent that’s gentle on clothes and hand, protecting colors with anti-germ protection.',
    price: 12.99,
    image: 'https://aqua.bluepanda.cloud/images/dorron_det_photoshoot-2.png',
    sizes: ['1L Pouch', '1L Bottle', '5L Can'],
    attributes: ['Plant-based', 'Color Protect', 'Anti-Germ'],
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    id: 'dw-1',
    name: 'Dorron Dishwash Clean',
    category: 'Dish Care',
    description: 'Powerful grease-cutting performance that leaves no residue. Infused with smart clean lemon technology.',
    price: 6.50,
    image: 'https://aqua.bluepanda.cloud/images/IMG-20260417-WA0002.jpg',
    sizes: ['1L Pouch', '5L Can'],
    attributes: ['Grease Cut', 'Residue Free', 'Lemon Scent'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'fc-1',
    name: 'Floor Cleaner Advance',
    category: 'Surface Care',
    description: 'Advance multi-surface floor cleaner for modern homes. Eliminates 99.9% of germs while leaving a long-lasting fragrance.',
    price: 8.99,
    image: 'https://aqua.bluepanda.cloud/images/dorron_floor_photoshoot-1.png',
    sizes: ['1L Bottle', '5L Can'],
    attributes: ['Deep Clean', 'Shine Boost', 'Germ Kill'],
    gradient: 'from-pink-400 to-rose-600'
  },
  {
    id: 'wc-1',
    name: 'White Floor Cleaner PH',
    category: 'Surface Care',
    description: 'Neutral pH floor care positioning with high repeat-purchase appeal. Ideal for delicate surfaces.',
    price: 9.50,
    image: 'https://aqua.bluepanda.cloud/images/IMG-20260417-WA0033.jpg',
    sizes: ['1L Bottle', '5L Bottle'],
    attributes: ['pH Neutral', 'Safe for Marble', 'Eco-friendly'],
    gradient: 'from-slate-200 to-slate-400'
  },
  {
    id: 'tc-1',
    name: 'Dorron Toilet Cleaner',
    category: 'Bathroom Care',
    description: 'Strong formulation for deep disinfection. Kills 99.9% bacteria with super strong cleaning power.',
    price: 5.99,
    image: 'https://aqua.bluepanda.cloud/images/IMG-20260417-WA0010.jpg',
    sizes: ['500ml', '1L Bottle', '5L Can'],
    attributes: ['Super Strong', '99.9% Germ Kill', 'Thick Gel'],
    gradient: 'from-blue-600 to-navy-900'
  },
  {
    id: 'gc-1',
    name: 'Dorron Glass Cleaner',
    category: 'Surface Care',
    description: 'Streak-free shine for all glass and shiny surfaces. Fast-acting formulation.',
    price: 4.50,
    image: 'https://aqua.bluepanda.cloud/images/IMG-20260417-WA0022.jpg',
    sizes: ['500ml Spray', '5L Refill'],
    attributes: ['Streak Free', 'Quick Dry', 'Multi-Surface'],
    gradient: 'from-cyan-400 to-blue-500'
  }
];

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Distributors', path: '/distributors' },
  { name: 'Academy', path: '/academy' },
];
