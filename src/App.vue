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
/* fredericka-the-great-regular */
@font-face {
  font-family: 'Fredericka the Great';
  font-style: normal;
  font-weight: regular;
  src: url('//lib.baomitu.com/fonts/fredericka-the-great/fredericka-the-great-regular.eot');
  /* IE9 Compat Modes */
  src: local('Fredericka the Great'), local('Frederickathe Great-Normal'),
    url('//lib.baomitu.com/fonts/fredericka-the-great/fredericka-the-great-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */
      url('//lib.baomitu.com/fonts/fredericka-the-great/fredericka-the-great-regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('//lib.baomitu.com/fonts/fredericka-the-great/fredericka-the-great-regular.woff')
      format('woff'),
    /* Modern Browsers */
      url('//lib.baomitu.com/fonts/fredericka-the-great/fredericka-the-great-regular.ttf')
      format('truetype'),
    /* Safari, Android, iOS */
      url('//lib.baomitu.com/fonts/fredericka-the-great/fredericka-the-great-regular.svg#Frederickathe Great')
      format('svg');
  /* Legacy iOS */
}
#howdy {
  font-family: fredericka the great, cursive;
  font-weight: 500;
  color: rgb(92, 157, 243);
  letter-spacing: 1px;
}
</style>
