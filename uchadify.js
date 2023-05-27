
// cargo images that will be used
let ayudanteImg = "https://media.licdn.com/dms/image/C5603AQF9V7rulvhcGw/profile-displayphoto-shrink_800_800/0/1648538863146?e=2147483647&v=beta&t=adF9VspgE-A8s_PnLvt8pjs3D6MpbZrcM5FQInUnvAA";
let catedraImg = "https://img2.rtve.es/i/?w=1600&i=1633090530832.jpg";
let auxiliarImg = "https://img2.rtve.es/i/?w=1600&i=1633090530832.jpg";
let coordinadorImg = "https://img2.rtve.es/i/?w=1600&i=1633090530832.jpg";
let oyenteImg = "https://img2.rtve.es/i/?w=1600&i=1633090530832.jpg";
let estudianteImg = "https://img2.rtve.es/i/?w=1600&i=1633090530832.jpg";
let comunidadImg = "https://img2.rtve.es/i/?w=1600&i=1633090530832.jpg";

// change each cargo icon accordingly
let cargos = document.getElementsByClassName('cargo');
for (let i = 0; i < cargos.length; i++) {
    let cargo = cargos[i];

    if (cargo.title === "Ayudante") {
        cargo.src = ayudanteImg;
    } else if (cargo.title === "Profesor de Cátedra") {
        cargo.src = catedraImg;
    } else if (cargo.title === "Profesor Auxiliar") {
        cargo.src = auxiliarImg;
    } else if (cargo.title === "Profesor Coordinador") {
        cargo.src = coordinadorImg
    } else if (cargo.title === "Oyente") {
        cargo.src = oyenteImg;
    } else if (cargo.title === "Estudiante") {
        cargo.src = estudianteImg;
    } else if (cargo.title === "Miembro de Comunidad") {
        cargo.src = comunidadImg;
    }
    
};