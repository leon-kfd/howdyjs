<template>
  <div id="Home">
    <div class="wrapper">
      <h2 class="title">Entry</h2>
      <ul class="entry-list">
        <li class="entry-listitem"
            v-for="(item,index) in navList"
            :key="index">
          <router-link :to="{name: item.link}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      navList: [
        {
          name: 'Animation Dialog',
          link: 'animation-dialog'
        },
        {
          name: 'Resize Directive',
          link: 'resize-directive'
        },
        {
          name: 'Scroll Directive',
          link: 'scroll-directive'
        },
        {
          name: 'Mouse Menu Directive',
          link: 'mouse-menu-directive'
        },
        {
          name: 'Size Observer Directive',
          link: 'size-observer-directive'
        }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 756px;
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
}
h2.title {
  margin: 20px 0;
}
.entry-list {
  padding: 0 20px;
}
.entry-listitem {
  margin: 10px 0;
}
.entry-listitem a {
  color: #5b9df3;
  text-decoration: none;
}
.entry-listitem a:hover {
  text-decoration: underline;
}
</style>
