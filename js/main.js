import { renderPhotos } from './pictures.js';
import './forms.js';
import './photo-effects.js';
import { getServerData } from './api.js';
import { renderFilters } from './filters.js';

getServerData((photo) => {
  renderFilters(photo);
  renderPhotos(photo);
});

