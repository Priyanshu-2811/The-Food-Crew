const cityList = document.getElementById('cities').querySelector('ul');
const restaurantList = document.getElementById('restaurant-list');

const restaurants = {
  "Mumbai": ["Pizza Palace", "Pasta Paradise", "Sushi Delight"],
  "Delhi": ["Taco Fiesta", "Burger Barn", "Healthy Bowls"],
  "Kolkata": ["Deep Dish Pizza", "Italian Trattoria", "Korean BBQ"],
  "Varanasi": ["Dim Sum House", "Pho Noodle Bar", "Vegan Bistro"],
};

cityList.addEventListener('click', (event) => {
  let selectedCity = event.target.dataset.city;
  
  // Check if the clicked element is a child of an element with the data-city attribute
  if (!selectedCity) {
    const cityElement = event.target.closest('[data-city]');
    if (cityElement) {
      selectedCity = cityElement.dataset.city;
    }
  }

  restaurantList.innerHTML = ""; // Clear previous list

  if (selectedCity) {
    const cityRestaurants = restaurants[selectedCity];
    cityRestaurants.forEach((restaurant) => {
      const listItem = document.createElement('li');
      listItem.textContent = restaurant;
      restaurantList.appendChild(listItem);
    });
  }
});
