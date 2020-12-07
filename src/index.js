import Phaser from 'phaser';
import './main.scss';

import config from './app/config';
import { render } from './app/componentService';

render();
const game = new Phaser.Game(config);