import {buttonListener} from "./client-main-land.js"


// We need to create a data structure that stores all of our html content for that hidden html 
// So need the productname, description, price, quantity
const imageData = [{image:"../../assets/images/shrimp&squidink-pasta.avif",name:"shrimpandsquid",price:30,description:"Our Shrimp and Squid Delight combines plump shrimp and tender squid, sautéed to perfection with aromatic herbs and spices. Served with a luscious garlic butter sauce and fluffy rice, it's a culinary masterpiece celebrating the ocean's finest flavors. Dive into a symphony of seafood perfection at our restaurant today!"}, 
                {image:"../../assets/images/short-rib.avif",name:"shortrib",price:35,description:"Indulge in our mouthwatering short ribs, slow-cooked to perfection until they melt in your mouth. Each succulent bite is a symphony of rich, savory flavors that harmonize with a delectable glaze. Served with your choice of sides, our short ribs are the epitome of comfort and taste, making every bite a memorable experience."},
                {image:"../../assets/images/lamb-burger.avif",name:"baconburger",price:15,description:"Savor the ultimate burger experience with our Bacon Bliss Burger, featuring a juicy, handcrafted beef patty topped with crispy bacon strips. This culinary masterpiece is complemented by a melty cheese blend, fresh lettuce, and ripe tomatoes, all nestled in a toasted brioche bun. A symphony of flavors in every bite, it's a burger lover's dream come true."},
                {image:"../../assets/images/fries.avif",name:"frenchfries",price:10,description:"Our French fries are a celebration of simplicity done right, featuring hand-cut russet potatoes expertly fried to a perfect golden crispiness. Each bite offers a delightful contrast between the tender interior and the irresistible crunch of the exterior. Served with your choice of dipping sauces, these fries are the ideal sidekick to elevate any meal to a whole new level of satisfaction."},
                {image:"../../assets/images/steak.avif",name:"steakwithvegetables",price:35,description:"Our perfectly grilled steak takes center stage, cooked to your preferred level of doneness, and served with a medley of garden-fresh vegetables. Juicy and tender, the steak is a carnivore's dream come true, while the vegetables offer a burst of vibrant colors and flavors. This dish is a harmonious union of premium quality meat and nature's bounty, creating a memorable dining experience for every palate."},
                {image:"../../assets/images/salmon.avif",name:"salmonvegetables",price:35,description:"Our seared salmon dish is a culinary delight, featuring a succulent fillet of salmon expertly seasoned and cooked to flaky perfection. Accompanied by a colorful assortment of seasonal vegetables, each bite offers a delightful balance of rich, buttery fish and the crisp freshness of garden-picked produce. It's a symphony of flavors that brings the ocean and the garden together on your plate for a wholesome and satisfying dining experience."}, 
                {image:"../../assets/images/scallops.avif",name:"scallops",price:35,description:"Indulge in the ocean's finest with our scallop dish, where plump, tender scallops are seared to a caramelized perfection, creating a delightful contrast between their delicate interior and the golden crust. Served with a zesty citrus drizzle and a bed of seasoned greens, this dish offers a burst of refreshing flavors and a satisfying textural experience. Elevate your palate with our Scallop Sensation, a true celebration of the sea's treasures."},
                {image:"../../assets/images/spagetti.avif",name:"spagetti",price:15,description:"Dive into a timeless Italian favorite with our spaghetti, where al dente pasta is generously coated in a rich, homemade tomato sauce that's been simmered to perfection. Topped with a sprinkle of grated Parmesan cheese and fresh basil leaves, every twirl of your fork creates a harmonious symphony of flavors that's both comforting and satisfying. Our classic spaghetti is a culinary journey to Italy that never goes out of style."},
                {image:"../../assets/images/redwine.avif",name:"wine",price:10,description:"Our reserve wine is a testament to the art of winemaking, carefully crafted from handpicked grapes and aged to perfection. With its deep, complex flavors and a rich, velvety texture, it offers a sensorial journey that captivates the palate. This wine is the embodiment of elegance, making it the ideal companion for special occasions and moments of indulgence."},
                {image:"../../assets/images/liquor.avif",name:"shotofwhiskey",price:20,description:"Savor the bold and smooth character of our whiskey shot, carefully distilled and aged to perfection. With its warm amber hue and notes of caramel and oak, it delivers a rich and satisfying drinking experience that lingers on the palate. Take a moment to appreciate the timeless appeal of this classic spirit with every sip of our whiskey shot."},
                {image:"../../assets/images/pepsi.avif",name:"pepsicola",price:3,description:"Quench your thirst with the timeless refreshment of Pepsi-Cola. With its effervescent bubbles, this iconic cola delivers a crisp and satisfying burst of flavor, combining hints of caramel and citrus for a delightful, thirst-quenching experience. Enjoy the familiar and comforting taste of Pepsi-Cola, a classic beverage that never goes out of style."},
                {image:"../../assets/images/coffee.avif",name:"coffee",price:5,description:"Dive into a world of rich indulgence with our premium coffee, expertly brewed to perfection. Every sip reveals a symphony of robust flavors, with hints of chocolate and toasted nuts, perfectly balanced by a subtle acidity. Start your day or unwind with our meticulously crafted coffee, a comforting and invigorating elixir that elevates your coffee experience to new heights."},
                {image:"../../assets/images/cheesecake.avif",name:"cheesecake",price:20,description:"Indulge your taste buds in a slice of pure dessert heaven with our cheesecake. Creamy and velvety-smooth, our cheesecake is a decadent masterpiece crafted with the finest ingredients. Each forkful delivers a luscious combination of rich cream cheese and a buttery graham cracker crust, creating an unforgettable dessert experience that's both luxurious and comforting."},
                {image:"../../assets/images/chocolate-lava-cake.avif",name:"chocolatelavacake",price:20,description:"Prepare to be enchanted by our Chocolate Lava Cake, a dessert that's pure bliss for chocolate lovers. As you gently break through the warm, molten center, a river of velvety, dark chocolate erupts onto your plate, creating an irresistible symphony of flavors and textures. Served with a scoop of vanilla ice cream, it's a dessert experience that's equal parts sinful and delightful, perfect for satisfying your sweetest cravings."},
                {image:"../../assets/images/chocolate-spongecake.avif",name:"chocolatespongecake",price:20,description:"Our Chocolate Sponge Cake is a divine treat for those seeking a light and indulgent dessert experience. Each forkful unveils the delicate layers of airy, moist sponge cake enrobed in a rich, velvety chocolate ganache. This dessert is a perfect balance of sweetness and elegance, making it an ideal choice for those with a penchant for the finer pleasures in life."},
                {image:"../../assets/images/sundae.avif",name:"chocolatesundae",price:15,description:"Dive into a world of pure chocolate ecstasy with our Chocolate Sundae. This indulgent masterpiece features creamy chocolate ice cream generously topped with a velvety chocolate fudge sauce, crowned with a mountain of whipped cream, and sprinkled with chocolate shavings for the ultimate cocoa experience. It's a dessert lover's paradise that promises a sweet escape into the world of chocolatey bliss."}
                ]

// select query all for image-shower 
// We need to find a way to check if the image is clicked, so add addeventlistener?
// Then find the data-name of that image that is clicked, in same tag 
// After we need a if statement that takes dataname that enters particular html inner text 
// Then we hide our main food menu, and unhide our menu item description 

var imagesSelected = document.getElementsByClassName("image-shower")
const mainMenu = document.getElementById("main-menu")
const itemDescription = document.getElementById("item-description")

Array.from(imagesSelected).forEach((image) => {
image.addEventListener("click", () => {
    const foodName = image.dataset.name
    imageData.forEach((item) => {
    if(foodName === item.name){
        const descriptionHTML = document.getElementById("description-content")
        descriptionHTML.innerHTML=""
        descriptionHTML.insertAdjacentHTML("beforeend", 
        `<div class="xs:aspect-h-8 xs:aspect-w-8 sm:aspect-h-8 sm:aspect-w-8 md:aspect-h-6 md:aspect-w-6 lg:aspect-h-1 lg:aspect-1 h-full w-full overflow-hidden rounded-lg bg-gray-200 mr-10 shadow-xl shadow-black">
            <img src=${item.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center">
        </div>
        <div class="flex flex-col w-3/6">
            <h1 class="font-montserrat mb-10 font-bold text-xl">${item.name}</h1>
            <p class="font-montserrat mb-5">${item.description}</p> 
            <p class="font-montserrat font-semibold">Quantity: </p> 
            <p class="font-montserrat font-semibold">Price: ${item.price}</p>
            <button class="cartButton bg-blue-500 text-white rounded w-3/6 hover:bg-blue-600 mb-2 font-montserrat ml-auto mt-20" data-name=${item.name}>Add to cart</button>
        </div>`)
        mainMenu.setAttribute("hidden","")
        itemDescription.removeAttribute("hidden")
        buttonListener()
    }
    })
})
} )

const backTrack = document.getElementById("backButton")

backTrack.addEventListener("click", ()=>{
itemDescription.setAttribute("hidden", "")
mainMenu.removeAttribute("hidden")
})