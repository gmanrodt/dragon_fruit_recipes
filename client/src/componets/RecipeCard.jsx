// TO DO: import API content

// TO DO: check that these match what we want to display of the API
function RecipeCard({props}){

   return(
      <div className="card">
         <h2>{props?.name}</h2>
         <h4>Ingredients</h4>
         <p>{props?.measurements}{props?.ingredients}</p>
         <h4>Instructions</h4>
         <p>{props?.instructions}</p>
      </div>
   )
}
export default RecipeCard;