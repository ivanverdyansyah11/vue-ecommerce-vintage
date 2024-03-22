<template>
    <main>
        <section class="auth">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-5 col-xl-4">
                        <div class="card-auth d-flex flex-column ">
                            <h6 class="auth-title">Login Account</h6>
                            <p class="auth-description">Enter your details below</p>
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email <span>*</span></label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email">
                                </div>
                                <div class="mb-4">
                                    <label for="password" class="form-label">Password <span>*</span></label>
                                    <input type="password" class="form-control" id="password" placeholder="Enter your password">
                                </div>
                                <router-link :to="{ name: 'profile' }" class="button-primary-small w-100 d-inline-block text-center ">Continue</router-link>
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