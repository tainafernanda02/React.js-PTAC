import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'


import api from '../servidor/api'
import './Noticia.css'
import CNoticia from './CNoticia';

function Noticia() {

	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<main className='news-container'>

			{
				noticias.map(noticia => {
					return (
						<div key={noticia._id}>
							<CNoticia 
              titulo={noticia.titulo} 
              autor={noticia.autor} 
              idNoticia={noticia._id} 
              publishData={noticia.datapublicacao} />
						</div>
					)
				})
			}

		</main>
	)
}

export default Noticia