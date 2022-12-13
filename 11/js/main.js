import { renderPhotos } from './pictures.js';
import './forms.js';
import './photoEffects.js';
import { getServerData } from './api.js';

getServerData(renderPhotos);
