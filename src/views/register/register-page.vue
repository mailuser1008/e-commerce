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
          height: 440px;
          box-shadow: 0px 0px 15px -10px black;
          border-radius: 10px;
        "
        class="pa-5"
      >
        <div
          style="width: 100%; display: flex; justify-content: center"
          class="mb-5"
        >
          <span style="font-size: 30px; font-weight: bold"
            >Ro'yxatdan o'tish</span
          >
        </div>
        <div style="width: 100%; display: flex; justify-content: center">
          <v-form lazy-validation ref="form" style="width: 100%" v-model="form">
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
            <v-text-field
              v-if="form_data.is_confirm_password"
              v-model="form_data.confirm_password"
              append-icon="mdi-eye-off"
              @click:append="
                form_data.is_confirm_password = !form_data.is_confirm_password
              "
              :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              label="Password"
              type="password"
              outlined
            />
            <v-text-field
              v-else
              v-model="form_data.confirm_password"
              append-icon="mdi-eye"
              @click:append="
                form_data.is_confirm_password = !form_data.is_confirm_password
              "
              :rules="[(v) => !!v || 'Ushbu bo\'lim to\'ldirilishi shart!']"
              label="Password"
              outlined
            />
            <v-btn
              style="background: #3f87ff; color: #fff"
              block
              depressed
              height="55px"
              @click="sendForm()"
            >
              ro'yxatdan o'tish
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../axios";
export default {
  name: "register-page",

  data() {
    return {
      form: true,
      form_data: {
        is_confirm_password: true,
        is_password: true,
        username: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    async sendForm() {
      if (
        this.form &&
        this.form_data.username &&
        this.form_data.password &&
        this.form_data.confirm_password
      ) {
        if (this.form_data.password === this.form_data.confirm_password) {
          try {
            const response = await axios.post("auth/register", {
              username: this.form_data.username,
              password: this.form_data.password,
            });
            console.log(response);
          } catch (e) {
            this.$toast.error(
              e.response?.data?.message ||
                "Ro'yxatdan o'tishda xatolik yuz berdi!"
            );
          }
        } else {
          this.$toast.warning("Iltimos parolingizni tenkshiring!");
        }
      } else {
        this.$toast.warning("Iltimos ma'lumotlarni to'liq kiriting!");
      }
    },
  },
};
</script>

<style lang="css"></style>
