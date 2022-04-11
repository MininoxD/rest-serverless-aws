export const Translateobject = <T>(object:T, idiom:string) => {
	const returnObject = {}
	if(idiom === 'SPA'){
		for (const property in object) {
			if(property === 'name') returnObject['nombre'] = object[property]
			/* 			if(property === '_id') returnObject['_id'] = object[property] */
			if(property === 'birth_year') returnObject['anio_nacimiento'] = object[property]
			if(property === 'eye_color') returnObject['color_ojos'] = object[property]
			if(property === 'gender') returnObject['genero'] = object[property]
			if(property === 'hair_color') returnObject['color_pelo'] = object[property]
			if(property === 'height') returnObject['altura'] = object[property]
			if(property === 'mass') returnObject['peso'] = object[property]
			if(property === 'skin_color') returnObject['color_piel'] = object[property]
		}
		return returnObject
	}
    
	if(idiom === 'ENG'){
		for (const property in object) {
			if(property === 'nombre') returnObject['name'] = object[property]
			if(property === '_id') returnObject['_id'] = object[property]
			if(property === 'anio_nacimiento') returnObject['birth_year'] = object[property]
			if(property === 'color_ojos') returnObject['eye_color'] = object[property]
			if(property === 'genero') returnObject['gender'] = object[property]
			if(property === 'color_pelo') returnObject['hair_color'] = object[property]
			if(property === 'altura') returnObject['height'] = object[property]
			if(property === 'peso') returnObject['mass'] = object[property]
			if(property === 'color_piel') returnObject['skin_color'] = object[property]
		}
		return returnObject
	}
	return {}
}