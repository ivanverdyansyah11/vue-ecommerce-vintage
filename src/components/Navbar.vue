<template>
  <!-- NAVIGATION -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container d-flex align-items-center justify-content-between py-2 gap-3">
            <router-link class="navbar-brand d-flex align-items-center gap-2" :to="{ name: 'mainpage' }">
                <img src="/src/assets/images/brand/brand-logo.png" alt="Brand Logo" width="42">
                <span class="brand-text">Vintage</span>
            </router-link>
            <div class="input-group d-none d-lg-flex">
                <span class="input-group-text" id="basic-addon1">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" class="form-control" aria-describedby="basic-addon1" placeholder="Search product">
            </div>
            <div class="wrapper d-flex align-items-center gap-3">
                <div class="button-group d-none d-md-flex gap-2">
                    <router-link :to="{ name: 'login' }" class="button-primary-small d-flex align-items-center ">Login</router-link>
                    <router-link :to="{ name: 'signup' }" class="button-reverse-small">Sign Up</router-link>
                </div>
                <select class="dropdown">
                    <option>EN</option>
                    <option>ID</option>
                </select>
            </div>
        </div>
    </nav>
    <!-- END NAVIGATION -->
</template>

<script>
export default {

}
</script>

<style>

</style>