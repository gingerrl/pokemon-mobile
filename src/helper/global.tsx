export const colorStatus = () => {

    var simbolos, color;
    simbolos= "0123456789ABCDEF";
    color= "#"

    for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

    return color;
}

export const getUrl = (url:string) => {
    let strs = url?.split('/', 20)
    return strs;
}