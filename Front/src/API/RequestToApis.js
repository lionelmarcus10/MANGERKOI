let API_KEY_SPOONCULAR = "19755ba3103c4b549ae9eea21ed0b206"
let API_KEY_SPOONCULAR2 = "0779ffc16736401387035fc7fc83f6d7"

/* template

  - first parameter => ? others => &

  - template exemple 
       
  - https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
  - Parameters for each function: [-intolerences-, -number-, cuisine,excludecuisine ]

1 - random reciepe with components:  
              - https://api.spoonacular.com/recipes/random?apiKey=0779ffc16736401387035fc7fc83f6d7

       can also add :      number={number of reciep wanted}
       default is 1

2 - reciep components by reciep id :
              - https://api.spoonacular.com/recipes/{reciepeid}/information?apiKey=0779ffc16736401387035fc7fc83f6d7

              - query parametters : query ( give reciepe of matching missed and unused => usedIngred ) ,-titlematch-, reciepeBoxId, -includeIngredients-, excludeIngredients, 

3 - reciep by word (input in title math):
              - https://api.spoonacular.com/recipes/complexSearch?apiKey=0779ffc16736401387035fc7fc83f6d7&titleMatch={word}


6 - reciep by ingredients: 
              - https://api.spoonacular.com/recipes/findByIngredients?apiKey=0779ffc16736401387035fc7fc83f6d7&ingredients={ingrediant},+{ingrdiant2},+{ingrediant3}
              - https://api.spoonacular.com/recipes/complexSearch?apiKey=0779ffc16736401387035fc7fc83f6d7&includeIngredients={ingrediant},+{ingrdiant2},+{ingrediant3}


7 - ingredient composition by id : 
             -https://api.spoonacular.com/food/ingredients/{id}/information?apiKey=0779ffc16736401387035fc7fc83f6d7

8 - summerize reciepe by id :
              - https://api.spoonacular.com/recipes/{id}/summary?apiKey=0779ffc16736401387035fc7fc83f6d7

Part 2 :

1 - get info of product by qr code
              - https://fr.openfoodfacts.org/api/v3/product/{code}

*/

class RequestToApis {
  constructor() {
    
  }
  async RandomReciepe() {
    // url 
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY_SPOONCULAR2}&number=20`
    // fetch request
    let RandomReciepe = await fetch(url).then((response) => response.json())
    // parse json
    let RandomReciepeParsed = [];
    for(let rec in RandomReciepe.recipes){
      RandomReciepeParsed.push({
        id: RandomReciepe.recipes[rec].id,
        title: RandomReciepe.recipes[rec].title,
        image: RandomReciepe.recipes[rec].image,
        readyInMinutes: RandomReciepe.recipes[rec].readyInMinutes,
        analyzedInstructions: RandomReciepe.recipes[rec].analyzedInstructions
      })
    }
    // return essential data
    return (RandomReciepeParsed)
  }
  async ReciepeById(id) {
    console.log("done")
    let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_SPOONCULAR}`
    let infos = await fetch(url).then((response) => response.json())
    // titre , image , difficulté , minute , instructions pour preparer
    let infosParsed = {
      title: infos["title"],
      image: infos.image,
      difficulty: "find difficulty",
      readyInMinutes: infos.readyInMinutes,
      instructions : infos.instructions,
    };
    return infosParsed;
  }
  ReciepeByWordMatchInTitle() {}
  ReciepeByIngredients() {}
  IngredientCompositionById() {}
  SummarizeReciepeById() {}

  async ProductInfoByQrCode(qrcode){
    // url
    let url = "https://fr.openfoodfacts.org/api/v3/product/"+qrcode
    // fetch request
    let ProductInfoByQrCode = await fetch(url).then((response) => response.json())
    // parse json
    
    // return essential data
  }
}

export default RequestToApis



/*

RandomReciepeParsed.push({
        id: rec.id,
        title: rec.title,
        image: rec.image,
        readyInMinutes: rec.readyInMinutes,
        analyzedInstructions: rec.analyzedInstructions
      })
    
*/