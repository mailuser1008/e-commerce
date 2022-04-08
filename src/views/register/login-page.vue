<template>
  <div style="width: 100%; height: 100%">
    <div
      style="
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        style="
          width: 350px;
          height: 350px;
          box-shadow: 0px 0px 15px -10px black;
          border-radius: 10px;
        "
        class="pa-5"
      >
        <div
          style="width: 100%; display: flex; justify-content: center"
          class="mb-5"
        >
          <span style="font-size: 30px; font-weight: bold">Kirish</span>
        </div>
        <div style="width: 100%; display: flex; justify-content: center">
          <v-form lazy-validation ref="form" style="width: 100%">
            <v-text-field
              v-model="form_data.username"
              :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              label="Username"
              outlined
              clearable
            />
            <v-text-field
              v-if="form_data.is_password"
              v-model="form_data.password"
              append-icon="mdi-eye-off"
              @click:append="form_data.is_password = !form_data.is_password"
              :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              label="Password"
              type="password"
              outlined
            />
            <v-text-field
              v-else
              v-model="form_data.password"
              append-icon="mdi-eye"
              @click:append="form_data.is_password = !form_data.is_password"
              :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              label="Password"
              outlined
            />
            <v-btn
              style="background: #3f87ff; color: #fff"
              block
              depressed
              height="55px"
            >
              kirish
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-page",

  data() {
    return {
      form_data: {
        is_password: true,
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="css"></style>
