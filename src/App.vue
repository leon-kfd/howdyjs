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
  width: 10px;
  height: 10px;
  background-color: transparent;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 6px;
  background: #bbb;
  background-clip: padding-box;
}
</style>
