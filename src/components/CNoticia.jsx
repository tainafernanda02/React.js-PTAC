import React from 'react'
import { Link } from 'react-router-dom';

import './cNoticia.css'

function CNoticia(props) {
	return (
		<div className="card-container">
			<Link  to={props.idNoticia} className="title">
				<h2>{props.titulo}</h2>
			</Link>
		</div>
	)
}

export default CNoticia