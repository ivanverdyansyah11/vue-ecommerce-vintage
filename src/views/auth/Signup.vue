<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <main>
        <section class="auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-5 col-xl-4">
                        <div class="card-auth d-flex flex-column ">
                            <h6 class="auth-title">Signup Account</h6>
                            <p class="auth-description">Enter your details below</p>
                            <form>
                                <div class="mb-3">
                                    <label for="fullname" class="form-label">Fullname <span>*</span></label>
                                    <input type="text" class="form-control" id="fullname" placeholder="Enter your fullname">
                                </div>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username <span>*</span></label>
                                    <input type="text" class="form-control" id="username" placeholder="Enter your username">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email <span>*</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password <span>*</span></label>
                                    <input type="password" class="form-control" id="password" placeholder="Enter your password">
                                </div>
                                <div class="mb-3">
                                    <label for="confirmation_password" class="form-label">Confirmation Password <span>*</span></label>
                                    <input type="password" class="form-control" id="confirmation_password" placeholder="Enter your password">
                                </div>
                                <div class="form-check mb-4">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        By clicking sign up, I hereby agree and consent to <span class="primary">Term Condition</span>; I confirm that I have read <span class="primary">Privacy Policy.</span>
                                    </label>
                                </div>
                                <router-link :to="{ name: 'login' }" class="button-primary-small w-100 d-inline-block text-center ">Sign up</router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>