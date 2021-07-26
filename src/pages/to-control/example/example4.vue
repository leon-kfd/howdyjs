<template>
  <div class="wrapper">
    <div v-to-control="options" class="control"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ToControlDirective } from '../../../../packages/to-control';
export default defineComponent({
  directives: {
    'to-control': ToControlDirective
  },
  setup() {
    const arrowBase64 = 'url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3Mjc4NzU0NTQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzNjIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGZlZWRiYWNrLWljb25mb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LmVvdD8jaWVmaXgiKSBmb3JtYXQoImVtYmVkZGVkLW9wZW50eXBlIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LndvZmYyIikgZm9ybWF0KCJ3b2ZmMiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTAzMTE1OF8xdWhyOHJpMHBrNS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMDMxMTU4XzF1aHI4cmkwcGs1LnR0ZiIpIGZvcm1hdCgidHJ1ZXR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzEwMzExNThfMXVocjhyaTBwazUuc3ZnI2ljb25mb250IikgZm9ybWF0KCJzdmciKTsgfQo8L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTU0Ljc1MiAyMDIuNDEwNjY3YTM1Ljg0IDM1Ljg0IDAgMCAwIDAuMTI4IDUwLjEzMzMzM2wxNTUuMzA2NjY3IDE1Ni45NzA2NjcgMy41ODQgMy4xNTczMzNhMzQuNDMyIDM0LjQzMiAwIDAgMCA0NS43Mzg2NjYtMy4yODUzMzMgMzUuNjI2NjY3IDM1LjYyNjY2NyAwIDAgMC0wLjA4NTMzMy01MC4wOTA2NjdsLTE1NS4zMDY2NjctMTU3LjAxMzMzMy0zLjU0MTMzMy0zLjExNDY2N2EzNC41NiAzNC41NiAwIDAgMC00NS44MjQgMy4yNDI2Njd6IG0tMzk2LjIwMjY2NyAyNzQuNDMyQTM1LjI4NTMzMyAzNS4yODUzMzMgMCAwIDAgMTI4IDUxMmMwIDE5LjU0MTMzMyAxNS42NTg2NjcgMzUuNDEzMzMzIDM0LjkwMTMzMyAzNS40MTMzMzNoNjEzLjY3NDY2N2wtMjIxLjY5NiAyMjQuMDQyNjY3LTMuMTU3MzMzIDMuNjI2NjY3YTM1Ljg0IDM1Ljg0IDAgMCAwIDMuMDcyIDQ2LjUwNjY2NiAzNC41NiAzNC41NiAwIDAgMCA0OS4zMjI2NjYgMC4wODUzMzRsMjgxLjYtMjg0LjU4NjY2NyAzLjExNDY2Ny0zLjU4NGEzNS42NjkzMzMgMzUuNjY5MzMzIDAgMCAwIDQuNTIyNjY3LTM0Ljk4NjY2NyAzNC44NTg2NjcgMzQuODU4NjY3IDAgMCAwLTMyLjI1Ni0yMS45MzA2NjZIMTYyLjkwMTMzM2wtNC4zNTIgMC4yNTZ6IiBmaWxsPSIjMjAwRTMyIiBwLWlkPSI1MzYzIj48L3BhdGg+PC9zdmc+\')';
    return {
      options: {
        isAbsolute: true,
        arrowOptions: {
          padding: 0,
          size: 20,
          lineWidth: 0,
          background: `${arrowBase64} 0 0/20px 20px`
        }
      }
    };
  }
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 600px;
  border: 4px solid #262626;
  position: relative;
  padding: 10px;
  color: #889;
  background: #eaffe0;
}
.control {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 4px solid #dd9944;
  background: rgb(184, 202, 235);
  :deep {
    .to-control-arrow {
      transform: rotate(45deg);
      animation: bounce 2s ease-in-out 1s infinite;
      // 以下代码时使用伪类扩大箭头控制区域
      &:after {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
<style>
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(-12px, -12px, 0) rotate(45deg);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(-6px, -6px, 0) rotate(45deg);
  }

  90% {
    transform: translate3d(-1px, -1px, 0) rotate(45deg);
  }
}
</style>
