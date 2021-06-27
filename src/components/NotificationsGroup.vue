<template>
  <transition-group name="fade" tag="div" class="notifications-wrapper">
    <Notification
        v-for="note in $store.getters.notifications"
        :data="note"
        :key="note.id"
    ></Notification>
  </transition-group>
</template>

<script>
import Notification from "@/components/Notification";
export default {
  name: "NotificationsGroup",
  components: {Notification}
}
</script>

<style scoped>
.notifications-wrapper {
  position: fixed;
  top: 50px;
  right: 20px;
  width: 400px;
  z-index: 300;
}
.fade-enter-active, .fade-leave-active {
  transition: transform .3s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(calc(100% + 20px));
}
.fade-move {
  transition: transform .3s;
}
</style>