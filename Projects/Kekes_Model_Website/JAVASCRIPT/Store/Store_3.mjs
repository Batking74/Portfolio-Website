import {setProducts, setStoreName, setDocName, setNumProducts, getNavigator, validateNav, main, body, header, ad, productCount, productMainContainer, storeNavigation, sideNavigation, openMenu, pageName, storeTitle, pageLink, price, productLink, description, img, myProductArray, rating } from "../Store/Store_Blueprint.mjs";
import { navStoreBlueprint, i2 } from "../Nav&Footer_Blueprint.mjs";

// Product Attributes
price[0] = 24.99;
price[1] = 15.99;
price[2] = 34.99;
price[3] = 34.99;
price[4] = 13.99;
price[5] = 11.99;
price[6] = 10.25;
price[7] = 15.99;
price[8] = 39.99;
price[9] = 5.99;
price[10] = 3.99;
price[11] = 5.65;
price[12] = 15.25;
price[13] = 23.45;
price[14] = 10.25;
price[15] = 6.99;
price[16] = 12.99;
price[17] = 59.99;
price[18] = 15.59;
price[19] = 14.99;
price[20] = 35.99;
price[21] = 20.00;
price[22] = 6.40;
price[23] = 13.99;
price[24] = 25.89;

img[0] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_1.jpg`;
img[1] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_2.jpg`;
img[2] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_3.jpg`;
img[3] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_4.jpg`;
img[4] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_5.jpg`;
img[5] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_6.jpg`;
img[6] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_7.jpg`;
img[7] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_8.jpg`;
img[8] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_9.jpg`;
img[9] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_10.jpg`;
img[10] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_11.jpg`;
img[11] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_12.jpg`;
img[12] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_13.jpg`;
img[13] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_14.jpg`;
img[14] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_15.jpg`;
img[15] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_16.jpg`;
img[16] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_17.jpg`;
img[17] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_18.jpg`;
img[18] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_19.jpg`;
img[19] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_20.jpg`;
img[20] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_21.jpg`;
img[21] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_22.jpg`;
img[22] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_23.jpg`;
img[23] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_24.jpg`;
img[24] = `${navStoreBlueprint[i2.path]}/IMG/Store Products/Store 3/Product_25.jpg`;

description[0] = 'Light Gray Palmer Hoodie';
description[1] = 'White Palmer T-Shirt - Hustlers';
description[2] = 'Keke Palmer Duvet Set (Purple)';
description[3] = 'Keke Palmer Duvet Set (Tan)';
description[4] = 'Keke Palmer T-Shirt (White)';
description[5] = 'Keke Do You Love Me T-Shirt';
description[6] = 'Black and Brown Exfoliating Cleanser';
description[7] = 'African Clarifying Mud Mask Oils and Spray';
description[8] = 'Skin Safe Manscaping Trimmer';
description[9] = 'Hair Sponge Brush for Twists and Locks (Black)';
description[10] = 'Classic Styling Essential Compact Comb (Black)';
description[11] = 'Hair Brush Wooden Paddle Hairbrush Detangling Hairbrush';
description[12] = 'Savanna Grass - Album By Kes';
description[13] = 'Nyraju Natural Skincare Serum For Acne (Cleanser and Toner)';
description[14] = 'Blueberry Bliss Curl Control Jelly';
description[15] = 'African  Black Soap 6 fl oz';
description[16] = 'Curl Love Moisture Milk (Rice Milk and Macadamia Oil)';
description[17] = 'Hair Picks (3 Count)';
description[18] = 'Conditioner, Treatment, Detangling Spray, and Shampoo';
description[19] = 'Buttah AHA | BHA Rosewater Toner';
description[20] = 'Champion Adult Mens Everyday Comfort Boxer Underwear';
description[21] = 'Womens Comfort Stretch Brief Panties (Black)';
description[22] = 'Womens Underwear Soft Breathable Panties Stretch Hipsters (Black)';
description[23] = 'Mens Black Boxer Briefs Cotton Stretchy Underwear (5 Pack)';
description[24] = 'Womens Padded Butt Lifter Hip Enhancer Shaper Panties Underwear';

productLink[0] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_1.html`;
productLink[1] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_2.html`;
productLink[2] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_3.html`;
productLink[3] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_4.html`;
productLink[4] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_5.html`;
productLink[5] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_6.html`;
productLink[6] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_7.html`;
productLink[7] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_8.html`;
productLink[8] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_9.html`;
productLink[9] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_10.html`;
productLink[10] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_11.html`;
productLink[11] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_12.html`;
productLink[12] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_13.html`;
productLink[13] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_14.html`;
productLink[14] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_15.html`;
productLink[15] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_16.html`;
productLink[16] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_17.html`;
productLink[17] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_18.html`;
productLink[18] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_19.html`;
productLink[19] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_20.html`;
productLink[20] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_21.html`;
productLink[21] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_22.html`;
productLink[22] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_23.html`;
productLink[23] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_24.html`;
productLink[24] = `${navStoreBlueprint[i2.path]}/HTML/Store/Page 2/product_25.html`;

header[0].remove();
ad[0].remove();
body[0].classList.add("changeBody");
productMainContainer.classList.add('positionMain');
storeNavigation.innerHTML = getNavigator(2);
validateNav(2);
setProducts(img);
setNumProducts(myProductArray[0].length);
setDocName("Palmer Studios Store | Page 3");