<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <Navbar />

    <!-- MAIN -->
    <main>
        <!-- SECTION DETAIL PRODUCT -->
        <section class="detail content-gap container">
            <div class="wrapper-image">
                <img src="/src/assets/images/product/detail-product.jpg" alt="Detail Product" class="detail-product">
            </div>
            <div class="detail-content">
                <h5 class="detail-price">Rp 2,379,000</h5>
                <h2 class="title">Jordan Flight Heritage</h2>
                <p class="paragraph">You already know the vibe. An absolutely classic graphic on a relaxed tee with a slightly boxy cut. That's all you need.</p>
                <ul>
                    <li>Jumpman screen print on sleeve</li>
                    <li>100% cotton</li>
                    <li>Machine wash</li>
                    <li>Imported</li>
                    <li>Colour Shown: Jade Smoke/Barely Green</li>
                    <li>Style: FQ3240-304</li>
                    <li>Country/Region of Origin: China</li>
                </ul>
                <form>
                    <div class="input-group">
                        <label for="size">Select Size</label>
                        <select id="size" class="input">
                            <option selected>Select Size</option>
                            <option value="sx">SX</option>
                            <option value="sm">SM</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                        <p class="caption">If you can’t find your sizes, please kindly input here</p>
                    </div>
                    <div class="input-group">
                        <label for="request">Special Request</label>
                        <input type="text" id="request" class="input" placeholder="Input your special request">
                    </div>
                    <div class="input-group">
                        <label for="packaging">Packaging</label>
                        <div class="wrapper-packaging">
                            <label class="button-packaging">
                                <input type="radio" name="packaging">
                                <span>Normal</span>
                            </label>
                            <label class="button-packaging">
                                <input type="radio" name="packaging">
                                <span>Bubble Wrap</span>
                            </label>
                            <label class="button-packaging">
                                <input type="radio" name="packaging">
                                <span>Wooden Box</span>
                            </label>
                        </div>
                    </div>
                    <button type="button" class="button-primary">Add to Cart Now</button>
                </form>
            </div>
        </section>
        <!-- END SECTION DETAIL PRODUCT -->


        <!-- SECTION OTHER PRODUCT -->
        <section class="trending container" id="other">
            <div class="section-header other-product">
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
                <a href="index.html#products" class="button-primary content-gap">More Product</a>
            </div>
        </section>
        <!-- END SECTION OTHER PRODUCT -->


        <!-- SECTION CTA -->
        <section class="cta container section-gap" id="cta">
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