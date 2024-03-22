<template>
  <!-- NAVBAR -->
    <nav class="navbar-top container">
        <a href="#register" class="navbar-link">
            Register
            <img src="/src/assets/images/icon/register.svg" alt="Register Icon" width="14">
        </a>
        <p>Free Shipping On Orders Over Us</p>
        <a href="#login" class="navbar-link">
            Login
            <img src="/src/assets/images/icon/login.svg" alt="Login Icon" width="14">
        </a>
    </nav>
    <nav class="navbar container">
        <router-link :to="{ name: 'mainpage' }" class="navbar-brand">
            <img src="/src/assets/images/brand/logo-brand-dark.svg" alt="Brand Logo Dark" height="24">
        </router-link>
        <label class="hamburger" for="hamburger">
            <div class="hamburger-icon"></div>
        </label>
        <input type="checkbox" id="hamburger" class="checkbox-hamburger">
        <ul class="navbar-link">
            <li class="link-item link-item-featured">New & Featured</li>
            <li class="popup-featured container">
                <ul class="popup-list">
                    <li>New & Featured</li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Latest Shoes</a></li>
                    <li><a href="#">Latest Clothing</a></li>
                    <li><a href="#">SNKRS Launch Calendar</a></li>
                    <li><a href="#">Get 'Em in SNKRS</a></li>
                    <li><a href="#">Customize with Oreon By You</a></li>
                    <li><a href="#">Best Seller</a></li>
                    <li><a href="#">Member Exclusive</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Shop Icons</li>
                    <li><a href="#">Air Force 1</a></li>
                    <li><a href="#">Air Jordan 1</a></li>
                    <li><a href="#">Air Max</a></li>
                    <li><a href="#">Dunk</a></li>
                    <li><a href="#">Cortez</a></li>
                    <li><a href="#">Pegasus</a></li>
                </ul>
                <ul class="popup-list">
                    <li>New For Men</li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Shop ALl New</a></li>
                </ul>
                <ul class="popup-list">
                    <li>New For Women</li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Shop ALl New</a></li>
                </ul>
                <ul class="popup-list">
                    <li>New For Kids</li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Shop ALl New</a></li>
                </ul>
            </li>
            <li class="link-item link-item-men">Men</li>
            <li class="popup-men container">
                <ul class="popup-list">
                    <li>Featured</li>
                    <li><a href="#">New Releases</a></li>
                    <li><a href="#">Bestsellers</a></li>
                    <li><a href="#">Member Exclusive</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Retro Running</a></li>
                    <li><a href="#">Customize with Oreon By You</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Running Shoe Finder</a></li>
                    <li><a href="#">Sustainable Materials</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Shoes</li>
                    <li><a href="#">All Shoes</a></li>
                    <li><a href="#">Newest Sneakers</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Gym & Training</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Sandals and Slides</a></li>
                    <li><a href="#">Last Sizes Available</a></li>
                    <li><a href="#">Customize with Oreon By You</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Clothing</li>
                    <li><a href="#">All Clothing</a></li>
                    <li><a href="#">Tops and T-Shirt</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Pants and Lenggings</a></li>
                    <li><a href="#">Hoodies and Sweetshirts</a></li>
                    <li><a href="#">Jacket and Gilets</a></li>
                    <li><a href="#">Jersey and Kits</a></li>
                    <li><a href="#">Jordan</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Shop By Sport</li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Golf</a></li>
                    <li><a href="#">Tennis</a></li>
                    <li><a href="#">Gym and Tranning</a></li>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Skateboarding</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Jordan</li>
                    <li><a href="#">All Jordan</a></li>
                    <li><a href="#">New Jordan</a></li>
                    <li><a href="#">Jordan Shoes</a></li>
                    <li><a href="#">Jordan Clothing</a></li>
                    <li><a href="#">Jordan Basketball</a></li>
                    <li><a href="#">Jordan Lifestyle</a></li>
                </ul>
            </li>
            <li class="link-item link-item-women">Women</li>
            <li class="popup-women container">
                <ul class="popup-list">
                    <li>Featured</li>
                    <li><a href="#">New Releases</a></li>
                    <li><a href="#">Bestsellers</a></li>
                    <li><a href="#">Member Exclusive</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Retro Running</a></li>
                    <li><a href="#">Bra and Lengging Duos</a></li>
                    <li><a href="#">Customize with Oreon By You</a></li>
                    <li><a href="#">Sale</a></li>
                    <li><a href="#">Running Shoe Finder</a></li>
                    <li><a href="#">Sustainable Materials</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Shoes</li>
                    <li><a href="#">All Shoes</a></li>
                    <li><a href="#">Newest Sneakers</a></li>
                    <li><a href="#">Platform Sneakers</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Gym & Training</a></li>
                    <li><a href="#">Sandals and Slides</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Last Sizes Available</a></li>
                    <li><a href="#">Customize with Oreon By You</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Clothing</li>
                    <li><a href="#">All Clothing</a></li>
                    <li><a href="#">Performance Essentials</a></li>
                    <li><a href="#">Tops and T-Shirt</a></li>
                    <li><a href="#">Sport Bras</a></li>
                    <li><a href="#">Pants and Lenggings</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Hoodies and Sweetshirts</a></li>
                    <li><a href="#">Jacket and Gilets</a></li>
                    <li><a href="#">Skirts and Dresses</a></li>
                    <li><a href="#">Modest Wear</a></li>
                    <li><a href="#">Nike Maternity</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Shop By Sport</li>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Gym and Tranning</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Tennis</a></li>
                    <li><a href="#">Golf</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Skateboarding</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Accessories and Equipment</li>
                    <li><a href="#">All Accessories and Equipment</a></li>
                    <li><a href="#">Bags and Backpacks</a></li>
                    <li><a href="#">Shocks</a></li>
                    <li><a href="#">Hats and Headwear</a></li>
                </ul>
            </li>
            <li class="link-item link-item-kids">Kids</li>
            <li class="popup-kids container">
                <ul class="popup-list">
                    <li>Featured</li>
                    <li><a href="#">New Releases</a></li>
                    <li><a href="#">Newest Sneakers</a></li>
                    <li><a href="#">Easy On & Off</a></li>
                    <li><a href="#">Bestsellers</a></li>
                    <li><a href="#">Member Exclusive</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Last Sizes Available</a></li>
                    <li><a href="#">Back and Backpacks</a></li>
                    <li><a href="#">Sale</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Boy's Shoes</li>
                    <li><a href="#">All Shoes</a></li>
                    <li><a href="#">Older Boys (7 - 14 years)</a></li>
                    <li><a href="#">Younger Boys (4 - 7 years)</a></li>
                    <li><a href="#">Bables and Toodlers (0 - 4 years)</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Sandals and Slides</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Girl's Shoes</li>
                    <li><a href="#">All Shoes</a></li>
                    <li><a href="#">Older Boys (7 - 14 years)</a></li>
                    <li><a href="#">Younger Boys (4 - 7 years)</a></li>
                    <li><a href="#">Bables and Toodlers (0 - 4 years)</a></li>
                    <li><a href="#">Lifestyle</a></li>
                    <li><a href="#">Jordan</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Sandals and Slides</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Shop By Sport</li>
                    <li><a href="#">Football</a></li>
                    <li><a href="#">Running</a></li>
                    <li><a href="#">Basketball</a></li>
                    <li><a href="#">Gym and Tranning</a></li>
                    <li><a href="#">Tennis</a></li>
                </ul>
                <ul class="popup-list">
                    <li>Accessories and Equipment</li>
                    <li><a href="#">All Accessories and Equipment</a></li>
                    <li><a href="#">Bags and Backpacks</a></li>
                    <li><a href="#">Shocks</a></li>
                    <li><a href="#">Hats and Headwear</a></li>
                </ul>
            </li>
        </ul>
        <ul class="navbar-link-image">
            <li class="link-image">
                <img src="/src/assets/images/icon/like.svg" alt="Like Icon" width="15">
            </li>
            <li class="link-image">
                <img src="/src/assets/images/icon/cart.svg" alt="Cart Icon" width="15">
            </li>
            <li class="link-image">
                <img src="/src/assets/images/icon/search.svg" alt="Search Icon" width="15">
            </li>
        </ul>
    </nav>
    <nav class="navbar-category container">
        <div class="button-group">
            <a href="#new_arrivals" class="category-link">New Arrivals</a>
            <a href="#shoes" class="category-link">Shoes</a>
            <a href="#clothing" class="category-link">Clothing</a>
            <a href="#accessories" class="category-link">Accessories</a>
            <a href="#collaboration" class="category-link">Collaboration</a>
            <a href="#sale" class="category-link">Sale</a>
        </div>
    </nav>
    <!-- END NAVBAR -->
</template>

<script>
export default {

}
</script>

<style>

</style>