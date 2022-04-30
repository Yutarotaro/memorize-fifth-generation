import config from './config';

function display(checked){
	var target = "";

	for(var i = 0;i < config.generations;++i){
		if(checked & (1 << i)){
			if(target != ""){
				target += ",";
			}

			target += String(i+1);
		}
	}

	target += "期生タイピング";
	
	return target;

}

export default display;
