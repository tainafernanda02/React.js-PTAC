import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Noticia from './components/Noticia'
import Menu from './components/Menu'
import CNoticia from './components/CNoticia'
import './App.css';

function App() {
	return (
		<BrowserRouter>
    <div id="cabecalho"> <h1> Noticias  </h1> </div>
     <div id="cabecalho"> <h3> Site da Tainá Fernanda   </h3> </div>
    <div>
			<div className='grid-container'>
				<Routes>
					<Route path='/' element={<Noticia />} />
						<Route path=':idNoticia' element={<Menu />} />
				</Routes>
			</div>
      </div>
		</BrowserRouter>

	);
}

export default App;