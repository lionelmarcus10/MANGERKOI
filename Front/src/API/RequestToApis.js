let API_KEY_SPOONCULAR = "19755ba3103c4b549ae9eea21ed0b206"
let API_KEY_SPOONCULAR2 = "0779ffc16736401387035fc7fc83f6d7"
let API_KEY_SPOONCULAR3 =  "5e773dd22d5c48f38df7cc7ceced3cb7"
let API_KEY_SPOONCULAR4 =  "975ae81d293e40059d980c515b0e1ea5"
let API_KEY_SPOONCULAR5 =  "17a6d5b859eb4d52bb1ad2d73b54cacb"
let API_KEY_SPOONCULAR6 = "f1bfeed93f9b413284018064dbbd9dee"
let API_KEY_SPOONCULAR7 = "1985422c7a604b6e98aebcdc6c763b85"


let API_KEY_SPOONCULAR8 = "f3dac90d8e1c4301ae37ce46d4737c07"
let API_KEY_SPOONCULAR9 = "c236ee42d2c64509ba7a9e4f3df5c2a9"
let API_KEY_SPOONCULAR10 = "8df1e9df5d8e4e21a291ee366196648b"
let API_KEY_SPOONCULAR11 = "66b8250596d748bf8f514c11d09ce3a5"
let API_KEY_SPOONCULAR12 = "e374b49ead10457987e60a917236b6c3"
let API_KEY_SPOONCULAR13 = "19572c5cfa2b4b018c11642c78742abc"
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
    let url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY_SPOONCULAR11}&number=20`
    // fetch request
    let RandomReciepe = await fetch(url).then((response) => response.json())
    // parse json
    let RandomReciepeParsed = [];
    for(let rec in RandomReciepe.recipes){
      let [steps, ingredientIds] = this.extractStepsAndIngredients(RandomReciepe.recipes[rec])
      
      RandomReciepeParsed.push({
        id: RandomReciepe.recipes[rec].id,
        title: RandomReciepe.recipes[rec].title,
        image: RandomReciepe.recipes[rec].image,
        readyInMinutes: RandomReciepe.recipes[rec].readyInMinutes,
        allsteps: steps,
        allingredients: ingredientIds,
      })
    }
    // return essential data
    return (RandomReciepeParsed)
  }
  async ReciepeById(id) {
    
    let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY_SPOONCULAR9}`
    let infos = await fetch(url).then((response) => response.json())
    let [steps, ingredientIds] = this.extractStepsAndIngredients(infos)
    // titre , image , difficulté , minute , instructions pour preparer
    let infosParsed = {
      title: infos["title"],
      image: infos.image,
      readyInMinutes: infos.readyInMinutes,
      instructions : infos.instructions,
      allsteps: steps,
      allingredients: ingredientIds,
    };
    return infosParsed;
  }
  async MultipleReciepeByIds(ids){
    let url=`https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY_SPOONCULAR10}&ids=${ids.join(",")}`
    let MultipleReciepesByIds = await fetch(url).then((response) => response.json())
    
    let MultipleReciepesByIdsParsed = [];
    

    for(let rec in MultipleReciepesByIds){
      let [steps, ingredientIds] = this.extractStepsAndIngredients(MultipleReciepesByIds[rec]);  
           
      MultipleReciepesByIdsParsed.push({
        id: MultipleReciepesByIds[rec].id,
        title: MultipleReciepesByIds[rec].title,
        image: MultipleReciepesByIds[rec].image,
        readyInMinutes: MultipleReciepesByIds[rec].readyInMinutes,
        allsteps: steps,
        allingredients: ingredientIds,
      })
    }
    // return essential data
    return (MultipleReciepesByIdsParsed)
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
    console.log(ProductInfoByQrCode)
    // return essential data
  }

  extractStepsAndIngredients(data) {
    let stepList = [];
    let ingredientIdList = [];

    if (data.hasOwnProperty('analyzedInstructions') && data.analyzedInstructions.length > 0) {
        for (let instruction of data.analyzedInstructions) {
            if (instruction.hasOwnProperty('steps')) {
                for (let step of instruction.steps) {
                    // Add the step text to the stepList
                    if (step.hasOwnProperty('step')) {
                        stepList.push(step.step);
                    }
                }
            }
        }
    }
    // Add the ingredient ids to the ingredientIdList
    if (data.hasOwnProperty('extendedIngredients')) {
      for (let ingredient of data.extendedIngredients) {
          if (ingredient.hasOwnProperty('image') && ingredient.hasOwnProperty('name')) {
              ingredientIdList.push({id: ingredient.id ,image: ingredient.image,name: ingredient.name});
          }
      }
  }
    return [stepList, ingredientIdList];
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