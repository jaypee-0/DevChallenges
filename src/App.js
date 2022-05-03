import React from "react";
import './App.scss'
import RecipesSteps from "./Components/RecipeSteps";
import photo1 from "./Assets/photo1.png"
import sixDots from "./Assets/6dots.svg"

function App() {
  return (
    <div className="App py-4 container">
      <h2 className="fw-bolder">Classic Cheesecake Recipe</h2>
      <div className="d-flex">
        <img className="mr-3 align-self-start pt-2" src={sixDots} alt="" />
        <p className="fst-italic col-11 col-md-8">Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
      </div>
      <img className="img-fluid rounded my-3" src={photo1} alt="" />
      <div className="mt-5 d-flex flex-column-reverse flex-md-row justify-content-md-between
      ">
        <div className="col-12 col-md-7">
          <h3 className="mb-3">Ingredients</h3>
          <h5 className="mb-4">Graham Cracker Crust</h5>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>1 and 1/2 cups (150g) <span className="fw-bold">graham cracker crumbs</span> (about 10 full sheet graham crackers)</p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>5 Tablespoons (70g) <span className="fw-bold">unsalted butter</span>, melted</p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>1/4 cup (50g) <span className="fw-bold">granulated sugar</span></p>
          </div>

          {/* Cheesecake */}
          <h5 className="my-4">Cheesecake</h5>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>four 8-ounce blocks (904g) full-fat <span className="fw-bold">cream cheese</span>, softened to room temperature</p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>1 cup (200g) <span className="fw-bold">granulated sugar</span></p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>1 cup (240g) full-fat <span className="fw-bold">sour cream</span>, at room temperature</p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>1 teaspoon <span className="fw-bold">pure vanilla extract</span></p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>2 teaspoons <span className="fw-bold">fresh lemon juice</span> (optional, but recommended)</p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>3 large <span className="fw-bold">eggs</span>, at room temperature</p>
          </div>
          <div className="d-flex">
          <input class="mr-3 form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <p>topping suggestions: <span className="fst-italic"> salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce </span>(recipe in notes)</p>
          </div>

          {/* Instructions */}
          <h3 className="my-3">Instructions</h3>
          <div className="d-flex mb-3">
            <div className="number mr-3">1</div>
            <p>Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</p>
          </div>
          <div className="d-flex mb-3">
            <div className="number mr-3">2</div>
            <p><span className="fw-bold">Make the crust</span>: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</p>
          </div>
          <div className="d-flex mb-3">
            <div className="number mr-3">3</div>
            <p><span className="fw-bold">Make the filling</span>: Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.</p>
          </div>
          <div className="d-flex mb-3">
            <div className="number mr-3">4</div>
            <p><span className="fw-bold">Prepare the simple water bath (see note)</span> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)</p>
          </div>
          <div className="d-flex mb-3">
            <div className="number mr-3">5</div>
            <p>Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</p>
          </div>
          <div className="d-flex mb-3">
            <div className="number mr-3">6</div>
            <p>Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.</p>
          </div>
          <div className="d-flex mb-3">
            <div className="number mr-3">7</div>
            <p>Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</p>
          </div>
          <div className="mt-4 footerB">
          Source: https://sallysbakingaddiction.com/classic-cheesecake/ 
          </div>
        </div>
        <div className="col-12 col-md-3 justify-content-end">
          <RecipesSteps />          
        </div>
      </div>
    </div>
  );
}

export default App;
