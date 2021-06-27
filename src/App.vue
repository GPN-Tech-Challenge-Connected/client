<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <Menu></Menu>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>GPN</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <span class="white--text">&copy; 2021</span>
    </v-footer>

    <NotificationsGroup />
  </v-app>
</template>

<script>
import Menu from '@/components/Menu';
import NotificationsGroup from "@/components/NotificationsGroup";

export default {
  name: 'App',
  components: {Menu, NotificationsGroup},
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.v-data-footer__select {
  display: none !important;
}
.v-data-footer {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  justify-content: flex-end !important;
}
</style>
