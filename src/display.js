import config from './config';
import {Alert} from 'react-bootstrap';

function display(checked){
	var target = "";

	for(var i = 0;i < config.generations.number;++i){
		if(checked & (1 << i)){
			if(target !== ""){
				target += ",";
			}

			target += config.generations.label[i];
		}
	}

	target += "タイピング";
	
	return(<Alert> {target} </Alert>);
}

export default display;
