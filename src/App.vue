<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #eee;
}

::-webkit-scrollbar-track {
  background-color: #eee;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #bbb;
}
</style>
