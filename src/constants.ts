import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'det-1',
    name: 'Dorron Liquid Detergent',
    category: 'Laundry Care',
    description: 'Professional grade liquid detergent that\'s gentle on clothes and hand, protecting colors with anti-germ protection.',
    image: '/images/dorron_det_photoshoot-2.png',
    sizes: ['1L Pouch', '1L Bottle', '5L Can'],
    attributes: ['Plant-based', 'Color Protect', 'Anti-Germ'],
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    id: 'dw-1',
    name: 'Dorron Dishwash Clean',
    category: 'Dish Care',
    description: 'Powerful grease-cutting performance that leaves no residue. Infused with smart clean lemon technology.',
    image: '/images/dorron-dishwash-1l.jpg',
    sizes: ['1L Pouch', '5L Can'],
    attributes: ['Grease Cut', 'Residue Free', 'Lemon Scent'],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'fc-1',
    name: 'Dorron Floor Cleaner Advance',
    category: 'Surface Care',
    description: 'Advance multi-surface floor cleaner for modern homes. Eliminates 99.9% of germs while leaving a long-lasting fragrance.',
    image: '/images/dorron_floor_photoshoot-1.png',
    sizes: ['1L Bottle', '5L Can'],
    attributes: ['Deep Clean', 'Shine Boost', 'Germ Kill'],
    gradient: 'from-pink-400 to-rose-600'
  },
  {
    id: 'wc-1',
    name: 'White Floor Cleaner PH',
    category: 'Surface Care',
    description: 'Neutral pH floor care positioning with high repeat-purchase appeal. Ideal for delicate surfaces.',
    image: '/images/white-floor-cleaner-1l.jpg',
    sizes: ['1L Bottle', '5L Bottle'],
    attributes: ['pH Neutral', 'Safe for Marble', 'Eco-friendly'],
    gradient: 'from-slate-200 to-slate-400'
  },
  {
    id: 'tc-1',
    name: 'Dorron Toilet Cleaner',
    category: 'Bathroom Care',
    description: 'Strong formulation for deep disinfection. Kills 99.9% bacteria with super strong cleaning power.',
    image: '/images/dorron-toilet-500ml.jpg',
    sizes: ['500ml', '1L Bottle', '5L Can'],
    attributes: ['Super Strong', '99.9% Germ Kill', 'Thick Gel'],
    gradient: 'from-blue-600 to-navy-900'
  },
  {
    id: 'gc-1',
    name: 'Dorron Glass Cleaner',
    category: 'Surface Care',
    description: 'Streak-free shine for all glass and shiny surfaces. Fast-acting formulation.',
    image: '/images/dorron-glass-500ml.jpg',
    sizes: ['500ml Spray', '5L Refill'],
    attributes: ['Streak Free', 'Quick Dry', 'Multi-Surface'],
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    id: 'hnd-1',
    name: 'Dorron Hand Cleanser',
    category: 'Hand Care',
    description: 'Professional hand cleanser that removes tough grime while keeping skin moisturized. Ideal for industrial and commercial use.',
    image: '/images/dorron-hand-cleanser-5l.jpg',
    sizes: ['5L Bottle'],
    attributes: ['Moisturizing', 'Tough Grime', 'Industrial Grade'],
    gradient: 'from-green-400 to-teal-600'
  },
  {
    id: 'til-1',
    name: 'Dorron Tile Cleaner',
    category: 'Surface Care',
    description: 'Powerful tile and grout cleaner that restores original shine. Effective on ceramic, porcelain, and natural stone surfaces.',
    image: '/images/dorron-tile-cleaner-1l.jpg',
    sizes: ['1L Bottle', '5L Can'],
    attributes: ['Deep Clean', 'Restores Shine', 'Multi-Surface'],
    gradient: 'from-purple-400 to-violet-600'
  }
];

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Distributors', path: '/distributors' },
  { name: 'Academy', path: '/academy' },
];
