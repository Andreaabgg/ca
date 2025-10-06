const descripciones = [
    "Una chica francesa y un chico estadunidense se encuentran en un tren camino a Vienna, pasan toda la noche explorando y conversando ya que probablemente sera su unica noche - I like to feel his eyes on me when i look away",
    "Molly se convierte en la niñera de Ray, Molly le enseña a Ray a ser una niña y Ray le enseña a Molly a ser una adulta - Why dont you forget them and do something for yourself",
    "Un profesor de ingles inspira a sus estudiantes a rebelarse contra lo convensional y aprovechar sus dias con lo que los apaciona - Words and ideas can change the world",
    "Andie tiene que hacer sufrir a un hombre por 10 dias para su revista y Ben tiene que estar con una mujer por 10 dias para ganar una oportunidad en su trabajo - I am not running away.  Bullshit.",
    "Andy se muda a Nueva York y empieza a trabajar en una revista de moda, su jefa es cruel y no la va a dejar en paz hasta que Andy entre en los estandares de su revista - Dont be ridiculous Andrea everybody wants this"
];

function mostrarDescripcion(index) {
    const descripcionElemento = document.getElementById("descripcion");
    descripcionElemento.innerHTML = `<p>${descripciones[index]}</p>`;
}
