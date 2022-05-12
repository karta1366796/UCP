<template>
  <div
    class="surface-0 bg-cover bg-no-repeat bg-center h-screen w-full"
    style="background-image: url('./layout/images/login-bg.jpg')"
  >
    <div class="flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
      <div class="grid align-items-center justify-content-center p-2 lg:p-0" style="min-width: 70%">
        <div class="col-12 xl:col-6">
          <div class="h-full w-full">
            <div class="text-center">
              <img alt="Image" src="layout/images/logo.svg" />
              <br />
              <br />
              <div class="text-white text-4xl font-medium">WELCOME!</div>
            </div>
          </div>
        </div>

        <div class="col-12 xl:col-6">
          <div
            class="h-full w-full px-4"
            style="border-radius: 8px; background-image: url('./layout/images/login-input-bg.svg')"
          >
            <div class="text-center py-7">
              <div class="text-white text-3xl font-medium">Universe Cloud Platform</div>
            </div>

            <div class="w-full md:w-10 mx-auto">
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText class="p-inputtext-lg" placeholder="Username" />
              </div>
              <br />
              <br />
              <span class="p-input-icon-left">
                <i class="pi pi-eye" />
                <InputText v-model="value3" class="p-inputtext-lg" placeholder="Search" type="text" />
              </span>
              <br />
              <br />
              <span class="p-input-icon-left">
                <i class="pi pi-globe" />
                <InputText v-model="value3" class="p-inputtext-lg" placeholder="Search" type="text" />
              </span>
              <br />
              <br />
              <span class="p-input-icon-left">
                <i class="pi pi-sign-out" />
                <InputText v-model="value3" class="p-inputtext-lg" placeholder="Search" type="text" />
              </span>
              <br />
              <br />
              <Button class="w-full p-3 text-xl" label="登入"></Button>
              <br />
              <br />
              <div class="text-right">
                <a class="text-white font-medium cursor-pointer">忘記密碼?</a>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      email: '',
      password: '',
      checked: false
    };
  }
  // computed: {
  //   logoColor() {
  //     if (this.$appState.darkTheme) return 'white';
  //     return 'dark';
  //   }
  // }
});
</script>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
