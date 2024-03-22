<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />

    <!-- HEADER HERO -->
    <header class="hero" id="hero">
        <div class="container">
            <h1 class="title">New Season fashion</h1>
            <p class="paragraph">where every ensemble becomes a statement of your sartorial sophistication.</p>
            <a href="#products" class="button-reverse-light">Explore Now</a>
        </div>
    </header>
    <!-- END HEADER HERO -->

    <!-- MAIN -->
    <main>
        <!-- SECTION TRENDING -->
        <section class="trending section-gap-small container" id="trending">
            <div class="section-header">
                <h1 class="title">Oreon Trendsetters</h1>
                <p class="paragraph">Discover the pulse of fashion with Oreon Trendsetters, where style meets innovation and trends are born.</p>
            </div>
            <div class="section-content-4 content-gap">
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-1.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan</h6>
                        <p class="card-price">Rp 2,399,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-2.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Essentials</h6>
                        <p class="card-price">Rp 1,169,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-3.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Flight MVP 85</h6>
                        <p class="card-price">Rp 529,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-4.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Flight Heritage</h6>
                        <p class="card-price">Rp 529,000</p>
                    </div>
                </router-link>
            </div>
            <div class="button-group-center">
                <a href="#products" class="button-primary content-gap">More Trending</a>
            </div>
        </section>
        <!-- END SECTION TRENDING -->


        <!-- SECTION CATEGORY -->
        <section class="category container section-gap" id="category">
            <div class="section-header">
                <h1 class="title">Oreon Collections</h1>
                <p class="paragraph">Explore our meticulously curated categories, each crafted to cater to your unique style cravings.</p>
            </div>
            <div class="section-content-2 content-gap">
                <router-link :to="{ name: 'detail' }" class="card-category">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/category/category-1.jpg" alt="Category Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                        <h5 class="card-title">Shoes Collection</h5>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-category">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/category/category-2.jpg" alt="Category Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                        <h5 class="card-title">Product Collection</h5>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-category">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/category/category-3.jpg" alt="Category Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                        <h5 class="card-title">Accessories Collection</h5>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-category">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/category/category-4.jpg" alt="Category Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                        <h5 class="card-title">Collaboration Collection</h5>
                    </div>
                </router-link>
            </div>
        </section>
        <!-- END SECTION CATEGORY -->


        <!-- SECTION FEATURED -->
        <section class="featured section-gap container" id="featured">
            <div class="section-header">
                <h1 class="title">Oreon's Signature Selections</h1>
                <p class="paragraph">Welcome to Oreon's Signature Selections, where curated elegance meets timeless style.</p>
            </div>
            <div class="section-content-4 content-gap">
                <div class="card-featured">
                    <div class="wrapper-icon">
                        <img src="/src/assets/images/featured/featured-1.svg" alt="Featured Icon" width="24">
                    </div>
                    <h6 class="card-title">Luxury Collection</h6>
                    <p class="card-paragraph">Elevate your everyday wardrobe with our Luxury Essentials Collection. Discover impeccably crafted basics made from the finest materials, designed to offer comfort without compromising on style. From luxurious cashmere sweaters to tailored cotton shirts, each piece exudes sophistication and versatility.</p>
                    <button type="button" class="card-redirect">
                        More Detail
                        <img src="/src/assets/images/icon/arrow-primary.svg" alt="Arrow Primary" width="24">
                    </button> <!-- REDIRECT POPUP MODAL -->
                </div>
                <div class="card-featured">
                    <div class="wrapper-icon">
                        <img src="/src/assets/images/featured/featured-2.svg" alt="Featured Icon" width="24">
                    </div>
                    <h6 class="card-title">Accessories Showcase</h6>
                    <p class="card-paragraph">Make a bold statement with our Statement Accessories Showcase. Explore a curated selection of eye-catching accessories that add flair and personality to any outfit. From statement jewelry to chic handbags and stylish scarves, these accessories are sure to elevate your look and make heads turn.</p>
                    <button type="button" class="card-redirect">
                        More Detail
                        <img src="/src/assets/images/icon/arrow-primary.svg" alt="Arrow Primary" width="24">
                    </button> <!-- REDIRECT POPUP MODAL -->
                </div>
                <div class="card-featured">
                    <div class="wrapper-icon">
                        <img src="/src/assets/images/featured/featured-3.svg" alt="Featured Icon" width="24">
                    </div>
                    <h6 class="card-title">Chic Workwear Edit</h6>
                    <p class="card-paragraph">Transition seamlessly from desk to dinner with our Chic Workwear Edit. Explore a range of sophisticated yet contemporary workwear pieces designed to take you from the boardroom to after-work cocktails effortlessly. From tailored blazers to sleek dresses and polished trousers, these versatile pieces will keep you looking sharp and stylish throughout the day.</p>
                    <button type="button" class="card-redirect">
                        More Detail
                        <img src="/src/assets/images/icon/arrow-primary.svg" alt="Arrow Primary" width="24">
                    </button> <!-- REDIRECT POPUP MODAL -->
                </div>
                <div class="card-featured">
                    <div class="wrapper-icon">
                        <img src="/src/assets/images/featured/featured-2.svg" alt="Featured Icon" width="24">
                    </div>
                    <h6 class="card-title">Weekend Casual Collection</h6>
                    <p class="card-paragraph">Embrace laid-back luxury with our Weekend Casual Collection. Discover relaxed yet refined pieces perfect for weekends spent brunching with friends or exploring the city. From cozy knits to stylish denim and comfortable athleisure wear, these pieces strike the perfect balance between comfort and style, ensuring you look effortlessly chic no matter the occasion.</p>
                    <button type="button" class="card-redirect">
                        More Detail
                        <img src="/src/assets/images/icon/arrow-primary.svg" alt="Arrow Primary" width="24">
                    </button> <!-- REDIRECT POPUP MODAL -->
                </div>
            </div>
        </section>
        <!-- END SECTION FEATURED -->


        <!-- SECTION ABOUT -->
        <section class="about section-gap-small" id="about">
            <div class="container">
                <div class="about-content">
                    <h1 class="title">Get to know more about fashion ecommerce with oreon</h1>
                    <div class="paragraph-group">
                        <p class="paragraph">At Oreon, fashion is not just about clothing; it's a lifestyle. We believe in empowering individuals to express themselves through style, embracing diversity, and celebrating uniqueness.</p>
                        <p class="paragraph">With a commitment to quality, innovation, and customer satisfaction, Oreon is more than just a fashion brand; we're a community dedicated to helping you look and feel your best.</p>
                    </div>
                    <div class="button-group">
                        <a href="#trending" class="button-primary">All Collection</a>
                        <a href="#documentation" class="button-light">Discover Gallery</a>
                    </div>
                </div>
                <div class="wrapper-image">
                    <div class="wrapper">
                        <img src="/src/assets/images/about/banner-about.jpg" alt="Banner About" class="banner-about">
                    </div>
                </div>
            </div>
        </section>
        <!-- END SECTION ABOUT -->


        <!-- SECTION PRODUCT -->
        <section class="trending section-gap-small container" id="products">
            <div class="section-header">
                <h1 class="title">Explore Oreon's Fashion Universe</h1>
                <p class="paragraph">Embark on a journey through Oreon's Fashion Universe, where every garment tells a story of style and quality.</p>
            </div>
            <div class="section-button">
                <div class="wrapper">
                    <button type="button" class="button-small">Shoes</button>
                    <button type="button" class="button-small">Clothing</button>
                    <button type="button" class="button-small">Accessories</button>
                    <button type="button" class="button-small">Collaboration</button>
                </div>
            </div>
            <div class="section-content-4">
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-1.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan</h6>
                        <p class="card-price">Rp 2,399,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-2.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Essentials</h6>
                        <p class="card-price">Rp 1,169,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-3.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Flight MVP 85</h6>
                        <p class="card-price">Rp 529,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-4.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Flight Heritage</h6>
                        <p class="card-price">Rp 529,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-5.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Flight MVP</h6>
                        <p class="card-price">Rp 999,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-6.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan Essentials</h6>
                        <p class="card-price">Rp 399,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-7.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan x Awake NY</h6>
                        <p class="card-price">Rp 10,999,000</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'detail' }" class="card-product">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/product/product-8.jpg" alt="Product Image">
                        <div class="background-dark">
                            <div class="wrapper-arrow">
                                <img src="/src/assets/images/icon/arrow-light.svg" alt="Arrow Icon" width="20">
                            </div>
                        </div>
                    </div>
                    <div class="wrapper-content">
                        <h6 class="card-title">Jordan x Awake NY</h6>
                        <p class="card-price">Rp 4,299,000</p>
                    </div>
                </router-link>
            </div>
            <div class="button-group-center">
                <a href="#products" class="button-primary content-gap">More Product</a>
            </div>
        </section>
        <!-- END SECTION PRODUCT -->


        <!-- SECTION GALLERY -->
        <section class="gallery section-gap-small container" id="gallery">
            <div class="section-header">
                <h1 class="title">Oreon Documentation</h1>
                <p class="paragraph">Welcome to Oreon Documentation, your ultimate guide to navigating our platform with ease.</p>
            </div>
            <div class="section-content-4 content-gap">
                <div class="content-gallery">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-1.jpg" alt="Documentation Gallery">
                    </div>
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-2.jpg" alt="Documentation Gallery">
                    </div>
                </div>
                <div class="content-gallery">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-3.jpg" alt="Documentation Gallery">
                    </div>
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-4.jpg" alt="Documentation Gallery">
                    </div>
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-5.jpg" alt="Documentation Gallery">
                    </div>
                </div>
                <div class="content-gallery">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-6.jpg" alt="Documentation Gallery">
                    </div>
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-7.jpg" alt="Documentation Gallery">
                    </div>
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-8.jpg" alt="Documentation Gallery">
                    </div>
                </div>
                <div class="content-gallery">
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-9.jpg" alt="Documentation Gallery">
                    </div>
                    <div class="wrapper-image">
                        <img src="/src/assets/images/documentation/documentation-10.jpg" alt="Documentation Gallery">
                    </div>
                </div>
            </div>
            <div class="button-group-center">
                <a href="#gallery" class="button-primary content-gap">more Documentation</a>
            </div>
        </section>  
        <!-- END SECTION GALLERY -->

        <!-- SECTION TESTIMONIAL -->
        <section class="testimonial section-gap-small" id="testimonial">
            <div class="container">
                <div class="wrapper-image">
                    <div class="wrapper">
                        <img src="/src/assets/images/testimonial/banner-testimonial.jpg" alt="Banner About" class="banner-about">
                    </div>
                </div>
                <div class="testimonial-content">
                    <h1 class="title">Oreon Echoes Resonating Stories of Style and Satisfaction</h1>
                    <p class="paragraph">Discover what our customers have to say about their Oreon experience with Oreon's Style Stories. Dive into a collection of heartfelt testimonials and reviews that showcase the impact of our fashion on real lives.</p>
                    <div class="scroll-testimonial">
                        <div class="wrapper-testimonial">
                            <div class="card-testimonial">
                                <img src="/src/assets/images/icon/quote.svg" alt="Quote Icon" width="32">
                                <p class="card-message">“Oreon isn't just a fashion brand; it's a revolution in style! Their curated collections have completely transformed my wardrobe. From everyday essentials to statement pieces, Oreon always delivers top-notch quality and style.”</p>
                                <div class="card-profile">
                                    <img src="/src/assets/images/testimonial/testimonial-1.jpg" alt="Testimonial Profile" width="42">
                                    <div class="wrapper">
                                        <p class="username">Sarah Marina</p>
                                        <p class="job">Outdoor Enthusiast</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-testimonial">
                                <img src="/src/assets/images/icon/quote.svg" alt="Quote Icon" width="32">
                                <p class="card-message">“I stumbled upon Oreon while searching for unique fashion finds, and I'm so glad I did! Their attention to detail and commitment to quality truly sets them apart. Each piece feels like it was made just for me. Plus, their customer service is exceptional! Oreon has become my go-to destination for all things fashion, and I couldn't be happier with my shopping experience.”</p>
                                <div class="card-profile">
                                    <img src="/src/assets/images/testimonial/testimonial-2.jpg" alt="Testimonial Profile" width="42">
                                    <div class="wrapper">
                                        <p class="username">James Wirawan</p>
                                        <p class="job">Startup Entrepreneur</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-testimonial">
                                <img src="/src/assets/images/icon/quote.svg" alt="Quote Icon" width="32">
                                <p class="card-message">“Oreon has completely exceeded my expectations! Not only do they offer a wide range of stylish options, but their dedication to inclusivity and diversity is truly inspiring. As someone who struggles to find clothing that fits my unique style and body type, Oreon has been a game-changer. I finally feel seen and represented in the fashion world. Thank you, Oreon, for celebrating individuality and helping me embrace my true self through fashion.”</p>
                                <div class="card-profile">
                                    <img src="/src/assets/images/testimonial/testimonial-3.jpg" alt="Testimonial Profile" width="42">
                                    <div class="wrapper">
                                        <p class="username">Emily Ricardo</p>
                                        <p class="job">Established Company CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END SECTION TESTIMONIAL -->


        <!-- SECTION CTA -->
        <section class="cta container" id="cta">
            <div class="section-header">
                <h1 class="title">Experience Oreon Your Style Journey Begins Here</h1>
                <div class="button-group">
                    <a href="#products" class="button-dark">Explore Product</a>
                    <a href="#documentation" class="button-light">Discover Gallery</a>
                </div>
            </div>
        </section>
        <!-- END SECTION CTA -->
    </main>
    <!-- END MAIN -->

    <Footer />
</template>

<script>
export default {

}
</script>

<style>

</style>