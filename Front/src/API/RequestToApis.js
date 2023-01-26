let API_KEY_SPOONCULAR = "0779ffc16736401387035fc7fc83f6d7"


/* template

  - first parameter => ? others => &

  - template exemple 
       
       https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
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
    let url = "https://api.spoonacular.com/recipes/random?apiKey=0779ffc16736401387035fc7fc83f6d7"
    // fetch request
    let RandomReciepe = await fetch(url).then((response) => response.json())
    // parse json

    // return essential data
    
  }
  ReciepeById() {}
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