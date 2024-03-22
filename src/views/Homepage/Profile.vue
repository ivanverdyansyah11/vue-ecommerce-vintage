<template>
    <!-- MAIN -->
    <main>
        <section class="profile section-gap">
            <div class="container">
                <div class="row justify-content-center content-gap">
                    <div class="col-lg-4 col-xxl-3 order-2 order-lg-1">
                        <div class="card-profile">
                            <h2 class="title">Settings</h2>
                            <ul>
                                <li><a href="#profile" class="active">Profile details</a></li>
                                <li><a href="#change_password">Change Password</a></li>
                                <li><a href="#transaction">Transaction History</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-6 order-1 order-lg-2 mb-4 mb-lg-0 mt-4 mt-lg-0">
                        <div class="card-profile">
                            <p class="subtitle">Edit Profile</p>
                            <form class="d-flex flex-column align-items-end  ">
                                <div class="mb-3 w-100">
                                    <label for="formFile" class="form-label">Photo</label>
                                    <input class="form-control" type="file" id="formFile">
                                </div>
                                <div class="mb-3 w-100">
                                    <label for="fullname" class="form-label">Fullname</label>
                                    <input type="text" class="form-control" id="fullname" placeholder="Enter your fullname">
                                </div>
                                <div class="mb-3 w-100">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" class="form-control" id="username" placeholder="Enter your username">
                                </div>
                                <div class="mb-4 w-100">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email">
                                </div>
                                <a href="#save" class="button-primary-small">Update profile</a>
                            </form>
                        </div>
                    </div>
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