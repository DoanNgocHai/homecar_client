<template>
  <div class="navbar-container">
    <b-navbar toggleable="lg" type="light" variant="default">
      <b-container>
        <b-navbar-brand href="#">HomeCar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Mua xe</b-nav-item>
            <b-nav-item href="#">Bán xe</b-nav-item>
            <b-nav-item href="#">Dịch vụ</b-nav-item>
            <b-nav-item href="#">Giới thiệu</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                Tài khoản
              </template>
              <b-dropdown-item>
                <router-link to="/auth/register">Đăng ký</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/auth/login">Đăng nhập</router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<style>
.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  background: white;
  width: 100%;
}
</style>

<script>
export default {
  name: "NavbarComponent",
};
</script>
