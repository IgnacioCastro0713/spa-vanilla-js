import { mainComponent } from './config/mainComponent.js';
import { enableRouting } from './config/router.js';

const routes = [
  'home/index',
  'home/about',
  'home/contact',
  'product/index',
];


mainComponent("layout/main");

enableRouting(routes, 'home/index', 'root');



