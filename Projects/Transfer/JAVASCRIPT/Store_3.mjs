import { navStoreBlueprint } from "./Nav&Footer_Blueprint.mjs";
import Product, { bluePrint, setProducts, setStoreName, setDocName, setNumProducts, getNavigator, validateNav, i } from "./Store_Blueprint.mjs";

// Product Attributes
bluePrint[i.price][0] = 24.99;
bluePrint[i.price][1] = 15.99;
bluePrint[i.price][2] = 34.99;
bluePrint[i.price][3] = 34.99;
bluePrint[i.price][4] = 13.99;
bluePrint[i.price][5] = 11.99;
bluePrint[i.price][6] = 10.25;
bluePrint[i.price][7] = 15.99;
bluePrint[i.price][8] = 39.99;
bluePrint[i.price][9] = 5.99;
bluePrint[i.price][10] = 3.99;
bluePrint[i.price][11] = 5.65;
bluePrint[i.price][12] = 15.25;
bluePrint[i.price][13] = 23.45;
bluePrint[i.price][14] = 10.25;
bluePrint[i.price][15] = 6.99;
bluePrint[i.price][16] = 12.99;
bluePrint[i.price][17] = 59.99;
bluePrint[i.price][18] = 15.59;
bluePrint[i.price][19] = 14.99;
bluePrint[i.price][20] = 35.99;
bluePrint[i.price][21] = 20.00;
bluePrint[i.price][22] = 6.40;
bluePrint[i.price][23] = 13.99;
bluePrint[i.price][24] = 25.89;

bluePrint[i.img][0] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_1.jpg`;
bluePrint[i.img][1] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_2.jpg`;
bluePrint[i.img][2] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_3.jpg`;
bluePrint[i.img][3] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_4.jpg`;
bluePrint[i.img][4] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_5.jpg`;
bluePrint[i.img][5] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_6.jpg`;
bluePrint[i.img][6] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_7.jpg`;
bluePrint[i.img][7] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_8.jpg`;
bluePrint[i.img][8] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_9.jpg`;
bluePrint[i.img][9] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_10.jpg`;
bluePrint[i.img][10] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_11.jpg`;
bluePrint[i.img][11] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_12.jpg`;
bluePrint[i.img][12] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_13.jpg`;
bluePrint[i.img][13] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_14.jpg`;
bluePrint[i.img][14] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_15.jpg`;
bluePrint[i.img][15] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_16.jpg`;
bluePrint[i.img][16] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_17.jpg`;
bluePrint[i.img][17] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_18.jpg`;
bluePrint[i.img][18] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_19.jpg`;
bluePrint[i.img][19] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_20.jpg`;
bluePrint[i.img][20] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_21.jpg`;
bluePrint[i.img][21] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_22.jpg`;
bluePrint[i.img][22] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_23.jpg`;
bluePrint[i.img][23] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_24.jpg`;
bluePrint[i.img][24] = `${navStoreBlueprint[12]}/IMG/Store Products/Store 3/Product_25.jpg`;

bluePrint[i.des][0] = 'Light Gray Palmer Hoodie';
bluePrint[i.des][1] = 'White Palmer T-Shirt - Hustlers';
bluePrint[i.des][2] = 'Keke Palmer Duvet Set (Purple)';
bluePrint[i.des][3] = 'Keke Palmer Duvet Set (Tan)';
bluePrint[i.des][4] = 'Keke Palmer T-Shirt (White)';
bluePrint[i.des][5] = 'Keke Do You Love Me T-Shirt';
bluePrint[i.des][6] = 'Black and Brown Exfoliating Cleanser';
bluePrint[i.des][7] = 'African Clarifying Mud Mask Oils and Spray';
bluePrint[i.des][8] = 'Skin Safe Manscaping Trimmer';
bluePrint[i.des][9] = 'Hair Sponge Brush for Twists and Locks (Black)';
bluePrint[i.des][10] = 'Classic Styling Essential Compact Comb (Black)';
bluePrint[i.des][11] = 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush';
bluePrint[i.des][12] = 'Savanna Grass - Album By Kes';
bluePrint[i.des][13] = 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)';
bluePrint[i.des][14] = 'Blueberry Bliss Curl Control Jelly';
bluePrint[i.des][15] = 'African  Black Soap 6 fl oz';
bluePrint[i.des][16] = 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)';
bluePrint[i.des][17] = 'Hair Picks (3 Count)';
bluePrint[i.des][18] = 'Conditioner, Treatment, Detangling Spray, and Shampoo';
bluePrint[i.des][19] = 'Buttah AHA | BHA Rosewater Toner';
bluePrint[i.des][20] = 'Champion Adult Mens Everyday Comfort Boxer Underwear';
bluePrint[i.des][21] = 'Womens Comfort Stretch Brief Panties (Black)';
bluePrint[i.des][22] = 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)';
bluePrint[i.des][23] = 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)';
bluePrint[i.des][24] = 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear';

bluePrint[i.link][0] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_1.html`;
bluePrint[i.link][1] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_2.html`;
bluePrint[i.link][2] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_3.html`;
bluePrint[i.link][3] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_4.html`;
bluePrint[i.link][4] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_5.html`;
bluePrint[i.link][5] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_6.html`;
bluePrint[i.link][6] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_7.html`;
bluePrint[i.link][7] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_8.html`;
bluePrint[i.link][8] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_9.html`;
bluePrint[i.link][9] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_10.html`;
bluePrint[i.link][10] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_11.html`;
bluePrint[i.link][11] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_12.html`;
bluePrint[i.link][12] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_13.html`;
bluePrint[i.link][13] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_14.html`;
bluePrint[i.link][14] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_15.html`;
bluePrint[i.link][15] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_16.html`;
bluePrint[i.link][16] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_17.html`;
bluePrint[i.link][17] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_18.html`;
bluePrint[i.link][18] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_19.html`;
bluePrint[i.link][19] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_20.html`;
bluePrint[i.link][20] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_21.html`;
bluePrint[i.link][21] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_22.html`;
bluePrint[i.link][22] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_23.html`;
bluePrint[i.link][23] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_24.html`;
bluePrint[i.link][24] = `${navStoreBlueprint[12]}/HTML/Store/Page 2/product_25.html`;

bluePrint[i.header][0].remove();
bluePrint[i.ad][0].remove();
bluePrint[i.body][0].classList.add("changeBody");
bluePrint[i.productMain].classList.add('positionMain');
bluePrint[i.storeNav].innerHTML = getNavigator(2);
validateNav(2);
setProducts(bluePrint[i.img]);
setNumProducts(bluePrint[i.productArr][0].length);
setDocName("Palmer Studios Store | Page 3");