<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="{ name: `${category ? 'category-category' : 'tag-tag'}`, params: { category: item.to, tag: item.to }, query: { title: item.title }}"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      hide-on-scroll
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon v-if="drawer" @click.stop="category = !category">
        <v-icon v-if="category">mdi-view-module</v-icon>
        <v-icon v-else>mdi-tag</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <nuxt-link to="/">
        <v-toolbar-title v-text="title" />
      </nuxt-link>
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  fetch({ store }) {
    return axios.get('https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/').then((res) => {
        const categories = res.data.posts.map(element => {
        });
        store.commit('categories', categories)
    }).catch((error) => {
        console.log(error)
    })
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      category: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'truecaller'
    }
  },
  computed: {
    items() {
      if (this.category) {
        let availableCategories = [];
        let availableTags = [];
        this.$store.state.posts.forEach(({categories}) => {
          Object.keys(categories).forEach(category => {
            if (!availableCategories.includes(category)) {
              availableCategories.push(category);
            }
          })
        });

        return availableCategories.map(category => {
          return {
            icon: '',
            title: category,
            to: '/category/'+category.replace(/\s+/g, '-').toLowerCase(),
          }
        });
      } else {
        let availableTags = [];
        this.$store.state.posts.forEach(({tags}) => {
          Object.keys(tags).forEach(tag => {
            if (!availableTags.includes(tag)) {
              availableTags.push(tag);
            }
          })
        });

        return availableTags.map(tag => {
          return {
            icon: '',
            title: tag,
            to: '/tag/'+tag.replace(/\s+/g, '-').toLowerCase(),
          }
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .nuxt-link-active {
    text-decoration: none;
  }
</style>
