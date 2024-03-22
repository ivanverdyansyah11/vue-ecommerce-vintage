<template>
    <!-- MAIN -->
    <main class="container section-gap">
        <section class="collection" id="popular">
            <div class="row align-items-center">
                <div class="col-12 mt-4 mt-lg-0 ">
                    <h2 class="title">All Items</h2>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6 content-gap">
                <div class="col mb-4">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
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
                <div class="col mb-4">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
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
                <div class="col mb-4">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
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
                <div class="col mb-4">
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
                <div class="col mb-4">
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
                <div class="col mb-4">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
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
                <div class="col mb-4 mb-lg-0">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
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
                <div class="col mb-4 mb-lg-0">
                    <router-link :to="{ name: 'detail' }" class="card-collection">
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
                <div class="col mb-4 mb-lg-0">
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
                    <router-link :to="{ name: 'detail' }" class="card-collection">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa152fef-2e54-461c-9e82-b6b048b98aa5/rise-365-running-division-dri-fit-running-top-rDc0dw.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 649,000</h6>
                        <p class="collection-name">Men's Dri-FIT Running Top</p>
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
                    <router-link :to="{ name: 'detail' }" class="card-collection">
                        <div class="wrapper-image">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a9ffadf-9056-4ffb-95d5-77e7790795cb/running-division-running-jacket-tDkR3C.png" alt="Product Image" class="img-fluid">
                            <div class="icon-search d-flex align-items-center justify-content-center ">
                                <i class="fa-regular fa-paper-plane"></i>
                            </div>
                        </div>
                        <h6 class="collection-price">Rp 1,899,000</h6>
                        <p class="collection-name">Women's Running Jacket</p>
                        <div class="wrapper d-flex align-items-center justify-content-between">
                            <p class="collection-size">8 / M</p>
                            <div class="wrapper-like d-flex align-items-center gap-2">
                                <i class="fa-regular fa-heart"></i>
                                <span>24</span>
                            </div>
                        </div>
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