<template>
    <!-- HEADER -->
    <header class="hero" id="hero">
        <div class="container position-relative">
            <div class="hero-content d-flex flex-column">
                <h2 class="title">Step into Timelessness Vintage Fashion Delights Await</h2>
                <p class="paragraph">Indulge in the allure of yesteryears with our curated collection of vintage fashion. From elegant dresses to timeless accessories, discover pieces that transcend trends and speak to your unique style.</p>
                <a href="#popular" class="button-primary-small w-100 text-center">Shop Now</a>
            </div>
        </div>
    </header>
    <!-- END HEADER -->


    <!-- MAIN -->
    <main class="container section-gap">
        <section class="collection" id="popular">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="title">Popular Items</h2>
                </div>
                <div class="col-6 text-end d-none d-md-inline-block">
                    <router-link :to="{ name: 'products' }" class="link-primary">See All Items</router-link>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 content-gap">
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection mb-4 mb-lg-0">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea6cd8dd-0161-4386-b0ff-eb4ca50d3f07/dri-fit-fleece-long-sleeve-fitness-crew-g2cPHl.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 839,000</h6>
                        <p class="collection-name">Men's Dri-FIT Fleece Long-Sleeve Fitness Crew</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>12</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection mb-4 mb-lg-0">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1232fcd7-538c-40e2-9100-e94fcbbe7d77/hyverse-dri-fit-uv-short-sleeve-fitness-top-lWD12c.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 499,000</h6>
                        <p class="collection-name">Men's Dri-FIT UV Short-Sleeve Fitness Top</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>10</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection mb-4 mb-lg-0">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/480265ec-cd5c-4cce-a9bb-653f93b06a0a/sportswear-oversized-t-shirt-VJ6XFc.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 569,000</h6>
                        <p class="collection-name">Men's Oversized T-shirt</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>16</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/611b7efa-82f9-4815-abf6-3e77dd98d891/one-relaxed-dri-fit-short-sleeve-top-29BrXX.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 499,000</h6>
                        <p class="collection-name">Women's Dri-FIT Short-Sleeve Top</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>20</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d9f32b9-5e62-470e-8887-ccb457b04c97/sportswear-essentials-logo-t-shirt-MF2nms.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 369,000</h6>
                        <p class="collection-name">Women's Logo T-Shirt</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>24</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'products' }" class="card-collection-other d-flex align-items-center justify-content-center text-center">
                        <p>See All Product</p>
                    </router-link>
                </div>
            </div>
        </section>
        <section class="collection content-gap" id="popular">
            <div class="row align-items-center my-5 mt-md-0">
                <div class="col-12">
                    <h2 class="title">Shop by Brand</h2>
                </div>
                <div class="col-12 mt-4">
                    <div class="scroll-button">
                        <div class="button-group d-flex align-items-center gap-2">
                            <button class="button-category">Vans</button>
                            <button class="button-category">Bohoo</button>
                            <button class="button-category">Mango</button>
                            <button class="button-category">Reebok</button>
                            <button class="button-category">Convers</button>
                            <button class="button-category">Sandro</button>
                            <button class="button-category">Nike Adidas</button>
                            <button class="button-category">Dior</button>
                            <button class="button-category">Puma</button>
                            <button class="button-category">Zara</button>
                            <button class="button-category">Bershka</button>
                            <button class="button-category">American Eagle</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row content-gap">
                <div class="col-md-6">
                    <h2 class="title">New Product</h2>
                </div>
                <div class="col-6 text-end d-none d-md-inline-block">
                    <router-link :to="{ name: 'products' }" class="link-primary">See All Items</router-link>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 content-gap">
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection mb-4 mb-lg-0">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/454645d2-26fd-4a54-921d-0cde1cf4825a/victory-dri-fit-golf-polo-8Hhj7H.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 759,000</h6>
                        <p class="collection-name">Men's Dri-FIT Golf Polo</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>12</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection mb-4 mb-lg-0">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1af34256-8117-46eb-8579-dd56a8c3141f/sportswear-older-oversized-fleece-crew-neck-sweatshirt-8j9R32.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 549,000</h6>
                        <p class="collection-name">Older Kids' (Girls') Oversized Fleece Crew-Neck Sweatshirt</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>10</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection mb-4 mb-lg-0">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96078fac-39fd-4511-9a40-8092bc7613dd/sportswear-essentials-long-sleeve-t-shirt-HVdNRM.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 549,000</h6>
                        <p class="collection-name">Men's Long-Sleeve T-Shirt</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>16</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00d37479-5f18-43b3-92e0-cefb0f5790f9/one-classic-dri-fit-short-sleeve-top-QBchjt.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 429,000</h6>
                        <p class="collection-name">Women's Dri-FIT Short-Sleeve Top</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>20</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1592a4e8-fc66-492a-97fe-5b84a36e68c1/sportswear-tech-fleece-windrunner-hoodie-hXT8wQ.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 1,799,000</h6>
                        <p class="collection-name">Men's Full-Zip Hoodie</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>24</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col">
                    <router-link :to="{ name: 'products' }" class="card-collection-other d-flex align-items-center justify-content-center text-center">
                        <p>See All New Product</p>
                    </router-link>
                </div>
            </div>
        </section>
    </main>
    <!-- END MAIN -->
</template>

<script>
export default {

}
</script>

<style>

</style>