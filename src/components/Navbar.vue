<template>
  <div class="header bg-base-100">
    <div class="header-content container mx-auto flex justify-between items-center">
      <div class="logo">
        <a href="/">
          <img src="/path/to/your/logo.png" alt="Logo" class="h-8 w-auto" />
        </a>
      </div>
      <div class="menu whitespace-nowrap text-neutral text-ellipsis">
        <ul class="flex space-x-4 ">
          <li><router-link to="/">Trang chủ</router-link></li>
          <li><router-link to="/">Mua xe</router-link></li>
          <li><router-link to="/sale-car">Bán xe</router-link></li>
        </ul>
      </div>
      <div data-id="account" @click="toggleDropdown" class="h-[40px] rounded-full border-gray-200 border px-4 py-2 hidden lg:flex items-center nav-hover-item cursor-pointer group font-bold text-ellipsis overflow-hidden whitespace-nowrap mr-3 max-w-[200px]">
      <img src="https://files-cdn.carpla.vn/carpla-assets/carplavn/img/account_icon.18ea330.png" width="24" height="24" alt="Tài khoản" class="inline-flex">
      <span title=" " class="text-neutral hidden lg:inline ml-2 mr-2 text-ellipsis overflow-hidden whitespace-nowrap">Tài khoản</span>

      <!-- Dropdown content -->
      <transition name="fade">
        <div v-if="dropdownOpen" class="menu-dropdown-nav py-0 top-14 w-40 group-hover:block drop-shadow-lg bg-white dropdown-menu absolute hidden h-auto rounded-md z-50">
          <div class="menu-dropdown-nav py-4 bg-white">
            <ul class="list-none top-2 text-gray-700 pt-1 mx-4">
              <li>
                <router-link to="/login" class="w-full py-2 px-4 hover:bg-slate-200 block whitespace-no-wrap rounded-md navbar-item-link mb-1" rel="nofollow">Đăng ký</router-link>
              </li>
              <li>
                <router-link to="/register" class="w-full py-2 px-4 hover:bg-slate-200 block whitespace-no-wrap rounded-md navbar-item-link" rel="nofollow">Đăng nhập</router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>
<style scoped>
/* Thêm các kiểu CSS tùy chỉnh cho header */

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.header {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 1rem 0;
  
}

.header-content {
  /* Thêm các thuộc tính CSS tùy chỉnh cho nội dung header */
}

.logo {
  flex: 1; /* Logo chiếm phần lớn của header */
}

.menu {
  /* Thêm các thuộc tính CSS tùy chỉnh cho menu */
}

.user {
  /* Thêm các thuộc tính CSS tùy chỉnh cho phần người dùng */
}

/* Các điều chỉnh khác theo nhu cầu của bạn */
</style>
