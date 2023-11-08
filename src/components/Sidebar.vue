<template>
  <div class="side-bar">
    <v-navigation-drawer class="side-bar" v-model="drawer" app>
      <div class="text-center">
        <h2 class="white--text">PMCS</h2>
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          link
          :to="link.to" 
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        { icon: "mdi-microsoft-windows", text: "Dashboard", to: "/" },
        { icon: "mdi-account", text: "Profile", to: "/profile" },
        { icon: "mdi-clipboard-list-outline", text: "Projects", to: "/Projects" },
        { icon: "mdi-card-account-details-outline", text: "Tasks", to: "/tasks" },
        { icon: "mdi-cog", text: "Teams", to: "/teams" },
      ],
    };
  },
};
</script>

<style scoped>
.side-bar {
  color: lightgreen;
}
</style>