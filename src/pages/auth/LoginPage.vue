<template>
  <div class="login w-full max-w-xs p-4 m-auto ">
    <h3 class="text-lg text-center font-bold uppercase">Đăng nhập</h3>
    <div class="form-control w-full max-w-xs mb-2">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="form-control w-full max-w-xs mb-2">
      <label class="label">
        <span class="label-text">Mật khẩu</span>
      </label>
      <input type="password" placeholder="Mật khẩu" class="input input-bordered w-full max-w-xs" />
    </div>
    <div class="form-control w-full max-w-xs mb-2">
      <label class="label cursor-pointer">
        <span class="label-text">Ghi nhớ</span>
        <input type="checkbox" :checked="true" class="checkbox checkbox-primary" />
      </label>
    </div>
    <div class="form-control w-full max-w-xs mt-3">
      <button class="btn btn-primary">Đăng nhập</button>
    </div>
  </div>
</template>

<style scoped>
.login {}
</style>
