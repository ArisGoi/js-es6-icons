const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

/**
 * FUNZIONE
 * Ritorna un colore per ogni categoria
 */
function setColor(categ){
    switch(categ){
        case 'beverage':
            return "#EB4414"; //red
        
        case 'food':
            return "#F0C105"; //yellow

        case 'animal':
            return "#04C477"; //green
        
        default:
            return "black"
    }
}


/**
 * FUNZIONE
 * inserisce nell'HTML i box delle icone
 * specificare array di partenza e container in cui inserire
 */
function printIcons(arr, containerId){
    let getContainer = document.getElementById(containerId);

    getContainer.innerHTML = "";

    arr.forEach(
        (elm) => {
        getContainer.innerHTML += `
          <div class="icon-box">
              <i class="${elm.family} ${elm.prefix}${elm.name}" style="color:${setColor(elm.category)}"></i>
              <p>${elm.name}</p>
          </div>`
        }
    );
};

// genero tutte le icone
printIcons(icons, "iconsContainer");

// Compilo la select dell'HTML con tutte le categorie dell'array
const inSelect = [];
const getSelect = document.getElementById('filtraPer');
icons.forEach(
    (elm) => {
        if (inSelect.includes(elm.category) == false){
            inSelect.push(elm.category)
            getSelect.innerHTML += `<option value="${elm.category}">${elm.category}</option>`
        }
    }
);

// Alla modifica del select filtro le icone nella pagina
getSelect.addEventListener("change",
function(){

    const filtered = icons.filter(
        (elm) => {
            if (getSelect.value == "all" || getSelect.value == elm.category){
                return true
            }
            return false
        }
    );

    printIcons(filtered, "iconsContainer");
}
);