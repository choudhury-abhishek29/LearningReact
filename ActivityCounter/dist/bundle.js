'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


ReactDOM.render(React.createElement(
    'h1',
    { id: 'title', className: 'header', style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
    'HELLO WORLD'
), document.getElementById('react-container'));
