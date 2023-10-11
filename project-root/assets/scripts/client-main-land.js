          // collects html elements that have the class .category-button, so this is a list 
          const categoryButtons = document.querySelectorAll('.category-button');
            // iterates over each button in categoryButtons 
            categoryButtons.forEach(button => {
              // each button has a listener over it, so when it is clicked the function in it executes 
              button.addEventListener('click', () => {
                  // detects our menu category, and takes each dataset category from the data-* html attribute 
                  const category = button.dataset.category
                  // checks if all categories are selected - which is default menu
                  if (category === 'all')
                  {
                    // selects all of our categories to not be hidden 
                    const allItems = document.querySelectorAll('.main, .entree, .drink, .dessert')
                    allItems.forEach(item => {
                      item.removeAttribute('hidden');
                    })
                  }
                  else {
                    // removes hidden for the individual category 
                    const items = document.querySelectorAll(`.${category}`);
                    // loops and removes the hidden attribute from our items
                    items.forEach(item => {
                        item.removeAttribute('hidden');
                    });
                    // this filters from the buttons that are not clicked, as the buttons are placed into a array,
                    // and the button we clicked is filtered out in that last function
                    const otherCategories = Array.from(categoryButtons).filter(b => b !== button);
                    // iterates over our buttons that aren't chosen 
                    otherCategories.forEach(otherButton => {
                        // takes each dataset othercategory from the data-* html attribute 
                        const otherCategory = otherButton.dataset.category
                        // selects all the items related to those othercategories, and then makes them hidden 
                        const otherItems = document.querySelectorAll(`.${otherCategory}`);
                        otherItems.forEach(item => {
                            item.setAttribute('hidden', true);
                        });
                  })};
              });
          });

        const sortingButtons = document.querySelectorAll('.sort');

        sortingButtons.forEach(button => {
            button.addEventListener('click', (val) => {
                val.preventDefault();
                const sortname = button.dataset.sorter;

                if (sortname === 'Alphabetical-order') {
                    // Get all food items and convert them to an array
                    const foodItems = Array.from(document.querySelectorAll('#menu > a'));

                    // Sort the food items alphabetically based on their data-name attribute
                    foodItems.sort((a, b) => {
                        const nameA = a.dataset.name.toLowerCase();
                        const nameB = b.dataset.name.toLowerCase();

                        if (nameA < nameB) {
                            return -1;
                        } else if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });

                    // Clear the menu
                    const menu = document.getElementById("menu");
                    menu.innerHTML = '';

                    // Append the sorted food items back to the menu
                    foodItems.forEach(item => {
                        menu.appendChild(item);
                    });
                } else if (sortname === 'Price (low-to-high)') {
                    
                    const prices = Array.from(document.querySelectorAll('#menu > a'));

                    prices.sort((a,b) => {
                      const price1 = Number(a.dataset.price);
                      const price2 = Number(b.dataset.price); 

                      if (price1 < price2){
                        return -1;
                      } 
                      else if(price1 > price2){
                        return 1;
                      }
                      return 0;
                    })

                    const menu = document.getElementById("menu");
                    menu.innerHTML = ""; 

                    prices.forEach(item => {
                    menu.appendChild(item);
                  })
                } else if (sortname === 'Price (high-to-low)'){

                  const prices = Array.from(document.querySelectorAll('#menu > a'));

                  prices.sort((a,b) => {
                    const price1 = Number(a.dataset.price);
                    const price2 = Number(b.dataset.price); 

                    if (price1 > price2){
                      return -1;
                    } 
                    else if(price1 < price2){
                      return 1;
                    }
                    return 0; })

                    const menu = document.getElementById("menu");
                    menu.innerHTML = ""; 

                    prices.forEach(item => {
                    menu.appendChild(item);})

                }
            });
        });
        var products = [  {foodname: 'Shrimp And Squid', name: 'shrimpandsquid', price: 30, quantity: 0, image:'../../assets/images/shrimp&squidink-pasta.avif'},
                          {foodname: 'Short Rib', name: 'shortrib', price: 35, quantity: 0, image:'../../assets/images/short-rib.avif'}, 
                          {foodname: 'Bacon Burger', name: 'baconburger', price: 15, quantity: 0, image:'../../assets/images/lamb-burger.avif'},
                          {foodname: 'French Fries', name: 'frenchfries', price: 10, quantity: 0, image:'../../assets/images/fries.avif'},
                          {foodname: 'Steak With Vegetables', name: 'steakwithvegetables', price: 35, quantity: 0, image:'../../assets/images/steak.avif'},
                          {foodname: 'Salmon With Vegetables', name: 'salmonvegetables', price: 35, quantity: 0, image:'../../assets/images/salmon.avif'}, 
                          {foodname: 'Scallops', name: 'scallops', price: 35, quantity: 0, image:'../../assets/images/scallops.avif'},
                          {foodname: 'Spagetti', name: 'spagetti', price: 15, quantity: 0, image:'../../assets/images/spagetti.avif'},
                          {foodname: 'Wine', name: 'wine', price: 10, quantity: 0, image:'../../assets/images/redwine.avif'},
                          {foodname: 'Shot Of Whiskey', name: 'shotofwhiskey', price: 20, quantity: 0, image:'../../assets/images/liquor.avif'},
                          {foodname: 'Pepsi-Cola', name: 'pepsicola', price: 3, quantity: 0, image:'../../assets/images/pepsi.avif'},
                          {foodname: 'Coffee', name: 'coffee', price: 5, quantity: 0, image:'../../assets/images/coffee.avif'},
                          {foodname: 'Cheesecake', name: 'cheesecake', price: 20, quantity: 0, image:'../../assets/images/cheesecake.avif'},
                          {foodname: 'Chocolate Lava Cake', name: 'chocolatelavacake', price: 20, quantity: 0, image:'../../assets/images/chocolate-lava-cake.avif'},
                          {foodname: 'Chocolate Sponge Cake', name: 'chocolatespongecake', price: 20, quantity: 0, image:'../../assets/images/chocolate-spongecake.avif'},
                          {foodname: 'Chocolate Sundae', name: 'chocolatesundae', price: 15, quantity: 0, image:'../../assets/images/sundae.avif'}];

      function clearCart(){
          const cartsSelector = document.getElementById('cart-main-content');
          cartsSelector.innerHTML = ""
          const cartsSelector1 = document.getElementById('cart-main-content1');
          cartsSelector1.innerHTML = ""
          const placeordercontent = document.getElementById('order-content');
          placeordercontent.innerHTML = ""
        }

      function totalCreator(){
          const productTotal = products.map(item => {
          item.total = item.price * item.quantity
          return
        })
      }

      function subtotalCreate(){
        let total = 0; 
        products.map(item => {
          total += item.total; 
        })
        // const htmltag = document.getElementById('subtotal')
        const htmltag = document.getElementsByClassName('subtotal')
        for(var i = 0; i < htmltag.length; i++){
          htmltag[i].innerHTML = `Total: $ ${total}`
        }
      }

      function quantityAdder(x){
        const selectnumber = document.getElementsByClassName(x); 
        var contents; 
        for (let i = 1; i <= 20; i++){
          contents = `<option class="data-option-number" data-item=${x} data-value=${i}>` + i + `</option>`
          for(let i = 0; i < selectnumber.length; i++) {
            selectnumber[i].insertAdjacentHTML("beforeend", contents)
          }
        }
        return
      }

        function addtoCart(){
          for (var i = 0; i < products.length; i++){
            if (products[i].quantity >= 1){
               totalCreator()
               const cartSelector = document.getElementById('cart-main-content')   
               cartSelector.insertAdjacentHTML("beforeend", 
               `<div class="mb-10">
                  <p class="font-montserrat mb-4 text-left text-xl font-semibold">${products[i].foodname}</p>
                  <div class="grid grid-cols-2">
                    <h3 class="font-montserrat text-center text-lg mb-4 font-semibold">Quantity:</h3>
                    <div class="relative">
                      <select class="${products[i].name} block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
                          <option value="" disabled selected>${products[i].quantity}</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                        <svg class="w-4 h-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                        </svg>
                      </div>
                  </div>
                  </div>
                  <p class="font-montserrat text-lg mb-2 mt-2 font-semibold">Price: $ ${products[i].total}</p>
                  <div class="aspect-h-1 aspect-w-1 rounded-xl overflow-hidden mb-2">
                    <img src=${products[i].image} class=" h-full w-full object-cover object-center">
                  </div>
                  <a class="font-montserrat font-semibold text-lg text-red-600 hover:text-black active:text-violet-700 mt-2 remove-button" data-name=${products[i].name}>Remove</a>
               </div>`
               )  
               console.log(products[i].quantity)
               const cartSelector1 = document.getElementById('cart-main-content1')   
               cartSelector1.insertAdjacentHTML("beforeend", 
               `<div class="mb-10">
                  <p class="font-montserrat mb-4 text-left text-xl font-semibold">${products[i].foodname}</p>
                  <div class="grid grid-cols-2">
                    <h3 class="font-montserrat text-center text-lg mb-4 font-semibold">Quantity:</h3>
                    <div class="relative">
                      <select class="${products[i].name} block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
                          <option value="" disabled selected>${products[i].quantity}</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                        <svg class="w-4 h-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                        </svg>
                      </div>
                  </div>
                  </div>
                  <p class="font-montserrat text-lg mb-2 mt-2 font-semibold">Price: $ ${products[i].total}</p>
                  <div class="aspect-h-1 aspect-w-1 rounded-xl overflow-hidden mb-2">
                    <img src=${products[i].image} class=" h-full w-full object-cover object-center">
                  </div>
                  <a class="font-montserrat font-semibold text-lg text-red-600 hover:text-black active:text-violet-700 mt-2 remove-button" data-name=${products[i].name}>Remove</a>
               </div>`
               )
               const placeordercontent = document.getElementById('order-content')
               placeordercontent.insertAdjacentHTML("beforeend",
               `<div class=" aspect-h-1 aspect-1 xs:h-3/4 xs:w-3/4 h-full w-full overflow-hidden rounded-lg bg-gray-200 xs:mr-10 sm:mr-10 md:mr-20 lg:mr-20 xl:mr-20 shadow-xl shadow-black">
               <img src=${products[i].image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center">
             </div>
             <div class="flex flex-col w-3/6">
               <h1 class="font-montserrat xs:mb-10 sm:mb-10 md:mb-10 lg:mb-20 font-bold xs:text-md sm:text-xl">${products[i].foodname}</h1>
               <div class="flex flex-row">
                 <p class="font-montserrat font-semibold xs:text-sm sm:text-lg mt-1 mr-4">Quantity: </p> 
                 <div class="relative">
                   <select class="${products[i].name} block appearance-none w-full h-full font-montserrat text-sm bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
                       <option value="" disabled selected>${products[i].quantity}</option>
                   </select>
                   <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                     <svg class="w-4 h-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                       <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                     </svg>
                   </div>
                 </div>
               </div>
               <p class="font-montserrat xs:text-sm sm:text-lg mb-2 xs:mt-10 sm:mt-10 md:mt-10 lg:mt-20 font-semibold">Price: $ ${products[i].total}</p>
               <a class="font-montserrat font-semibold xs:text-sm md:text-md lg:text-lg text-red-600 hover:text-black active:text-violet-700 xs:mt-10 sm:mt-10 md:mt-10 lg:mt-20 remove-button" data-name=${products[i].name}>Remove</a>`)
               quantityAdder(products[i].name)
               subtotalCreate()
               quantityToggle()
               buttonListener()
               remover()
               return 
            }}
        }
        
        function quantityToggle() {
          // Loop over each product in the array
          products.forEach(item => {
            var listen = document.getElementsByClassName(item.name);
            
            for(let i = 0; i < listen.length; i++){
              listen[i].addEventListener('change', (option) => {
                console.log(item.quantity)
                item.quantity = option.target.value; 
                clearCart();
                addtoCart(); 
                remover();
                return
              })
            }
        });
      }

        function remover(){
          const removeButtons = document.querySelectorAll('.remove-button')
          //console.log(removeButton)
          removeButtons.forEach(button => {
              button.addEventListener('click', () => {
              const item = button.dataset.name
              for (var i = 0; i < products.length; i++){
                    if(products[i].name === item){
                      products[i].quantity = 0; 
                      clearCart();
                      totalCreator()
                      subtotalCreate() 
                      addtoCart()
                      remover();
                      return 
                    }
                }
              })
            })
        }


function buttonListener(){
        const cartButton = document.getElementsByClassName('cartButton');
        for(let i = 0; i < cartButton.length; i++){
          const button = cartButton[i]
          button.addEventListener('click', () =>{
            const menuItem = button.dataset.name 
            for (var i = 0; i < products.length; i++){
              if(products[i].name === menuItem){
                if(products[i].quantity === 0){
                  products[i].quantity += 1; 
                  totalCreator()
                  subtotalCreate()
                  clearCart()
                  addtoCart()
                  remover();
                  return
                }
                else{
                  products[i].quantity += 1;
                  totalCreator()
                  subtotalCreate()
                  clearCart()
                  addtoCart();
                  remover();
                  return
                }
              }}
          })
          }}; 

buttonListener()

export{buttonListener}


