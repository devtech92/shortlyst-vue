<template>
  <header class="main-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="header-logo">
            <router-link to="/">
              <img src="@/assets/images/logo.png" />
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="main-menu">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/product">
                  Product
                  <img src="@/assets/images/down-arrow.png" class="ml-2" />
                </router-link>
              </li>
              <li>
                <router-link to="/pricing"> Pricing </router-link>
              </li>
              <li>
                <router-link to="/contact-us"> Contact us </router-link>
              </li>
            </ul>
            <div class="login-manu mobile-menus">
              <ul>
               
                <li>
                  <router-link to="/contact-sales"> Get started for free </router-link>
                </li>
                 <li>
                    <router-link to="/login"> Login </router-link>
                  </li>
              </ul>
            </div>
          </div>
          <div class="manu-btn">
            <span class="sr-onlys"></span>
            <span class="sr-onlys"></span>
            <span class="sr-onlys"></span>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="login-manu desktop-menus">
            <ul>
              <li>
                <router-link to="/login"> Login </router-link>
              </li>
              <li>
                <router-link to="/contact-sales"> Get started for free </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>