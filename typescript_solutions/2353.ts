/**
 * @author  Mathias Brosens
 * @date    2023-12-17
 */
class FoodRatings {
  private foodRating: Map<string, Map<string, number>> = new Map<
    string,
    Map<string, number>
  >();
  private cuisineHash: Map<string, string[]> = new Map<string, []>();
  private highestRatedFoods: Map<string, string> = new Map();

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    for (let i = 0; i < foods.length; i++) {
      const cuisine = cuisines[i];
      const food = foods[i];
      const rating = ratings[i];

      if (!this.foodRating.has(cuisine)) {
        this.foodRating.set(cuisine, new Map<string, number>());
        this.cuisineHash.set(cuisine, []);
      }
      this.foodRating.get(cuisine)!.set(food, rating);
      this.cuisineHash.get(cuisine)!.push(food);
    }
    this.calculateHighestRatedFoods();
  }

  changeRating(food: string, newRating: number): void {
    for (const [cuisine, foods] of this.cuisineHash) {
      const foodIndex = foods.indexOf(food);
      if (foodIndex !== -1) {
        this.foodRating.get(cuisine)!.set(food, newRating);
        const oldRating = this.foodRating
          .get(cuisine)!
          .get(this.highestRatedFoods.get(cuisine)!)!;
        const oldFood = this.highestRated(cuisine);
        if (
          newRating > oldRating ||
          (newRating === oldRating && food < oldFood)
        ) {
          this.highestRatedFoods.set(cuisine, food);
        } else if (oldFood === food) {
          this.calculateHighestRatedFoods();
        }
        return;
      }
    }
    return;
  }

  private calculateHighestRatedFoods(cuisine?: string): void {
    if (cuisine) {
      const foodsMap = this.foodRating.get(cuisine)!;
      let maxFood = "";
      let maxValue = -Infinity;
      for (const [food, rating] of foodsMap) {
        if (rating > maxValue || (rating === maxValue && food < maxFood)) {
          maxValue = rating;
          maxFood = food;
        }
      }
      this.highestRatedFoods.set(cuisine, maxFood);
    } else {
      for (const [cuisine, foodsMap] of this.foodRating.entries()) {
        let maxFood = "";
        let maxValue = -Infinity;
        for (const [food, rating] of foodsMap) {
          if (rating > maxValue || (rating === maxValue && food < maxFood)) {
            maxValue = rating;
            maxFood = food;
          }
        }
        this.highestRatedFoods.set(cuisine, maxFood);
      }
    }
  }

  highestRated(cuisine: string): string {
    return this.highestRatedFoods.get(cuisine) || "";
  }
}
