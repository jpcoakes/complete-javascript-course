import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    
    _generateMarkUp() {
        return this._data.map(bookmark => previewView.render(bookmark, false));
        
    }
}

export default new BookmarksView();