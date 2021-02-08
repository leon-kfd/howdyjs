
/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory('/howdy-next/'),
  routes: [
  {
    "path": "/",
    "name": "home",
    "component": () => import("../views/home.vue")
  },
  {
    "path": "/animation-dialog",
    "name": "animation-dialog",
    "redirect": "/animation-dialog/readme",
    "component": () => import("../pages/animation-dialog/index.vue"),
    "children": [
      {
        "path": "/animation-dialog/readme",
        "name": "animation-dialog-readme",
        "component": () => import("../components/PageReadme.vue")
      },
      {
        "path": "/animation-dialog/example1",
        "name": "animation-dialog-example1",
        "component": () => import("../pages/animation-dialog/example/example1.vue")
      },
      {
        "path": "/animation-dialog/example2",
        "name": "animation-dialog-example2",
        "component": () => import("../pages/animation-dialog/example/example2.vue")
      },
      {
        "path": "/animation-dialog/example3",
        "name": "animation-dialog-example3",
        "component": () => import("../pages/animation-dialog/example/example3.vue")
      }
    ]
  },
  {
    "path": "/img-zoom",
    "name": "img-zoom",
    "redirect": "/img-zoom/readme",
    "component": () => import("../pages/img-zoom/index.vue"),
    "children": [
      {
        "path": "/img-zoom/readme",
        "name": "img-zoom-readme",
        "component": () => import("../components/PageReadme.vue")
      },
      {
        "path": "/img-zoom/example1",
        "name": "img-zoom-example1",
        "component": () => import("../pages/img-zoom/example/example1.vue")
      },
      {
        "path": "/img-zoom/example2",
        "name": "img-zoom-example2",
        "component": () => import("../pages/img-zoom/example/example2.vue")
      },
      {
        "path": "/img-zoom/example3",
        "name": "img-zoom-example3",
        "component": () => import("../pages/img-zoom/example/example3.vue")
      }
    ]
  },
  {
    "path": "/resize",
    "name": "resize",
    "redirect": "/resize/readme",
    "component": () => import("../pages/resize/index.vue"),
    "children": [
      {
        "path": "/resize/readme",
        "name": "resize-readme",
        "component": () => import("../components/PageReadme.vue")
      },
      {
        "path": "/resize/example1",
        "name": "resize-example1",
        "component": () => import("../pages/resize/example/example1.vue")
      },
      {
        "path": "/resize/example2",
        "name": "resize-example2",
        "component": () => import("../pages/resize/example/example2.vue")
      },
      {
        "path": "/resize/example3",
        "name": "resize-example3",
        "component": () => import("../pages/resize/example/example3.vue")
      },
      {
        "path": "/resize/example4",
        "name": "resize-example4",
        "component": () => import("../pages/resize/example/example4.vue")
      },
      {
        "path": "/resize/example5",
        "name": "resize-example5",
        "component": () => import("../pages/resize/example/example5.vue")
      }
    ]
  },
  {
    "path": "/scroll",
    "name": "scroll",
    "redirect": "/scroll/readme",
    "component": () => import("../pages/scroll/index.vue"),
    "children": [
      {
        "path": "/scroll/readme",
        "name": "scroll-readme",
        "component": () => import("../components/PageReadme.vue")
      },
      {
        "path": "/scroll/example1",
        "name": "scroll-example1",
        "component": () => import("../pages/scroll/example/example1.vue")
      },
      {
        "path": "/scroll/example2",
        "name": "scroll-example2",
        "component": () => import("../pages/scroll/example/example2.vue")
      },
      {
        "path": "/scroll/example3",
        "name": "scroll-example3",
        "component": () => import("../pages/scroll/example/example3.vue")
      },
      {
        "path": "/scroll/example4",
        "name": "scroll-example4",
        "component": () => import("../pages/scroll/example/example4.vue")
      },
      {
        "path": "/scroll/example5",
        "name": "scroll-example5",
        "component": () => import("../pages/scroll/example/example5.vue")
      }
    ]
  },
  {
    "path": "/size-observer",
    "name": "size-observer",
    "redirect": "/size-observer/readme",
    "component": () => import("../pages/size-observer/index.vue"),
    "children": [
      {
        "path": "/size-observer/readme",
        "name": "size-observer-readme",
        "component": () => import("../components/PageReadme.vue")
      },
      {
        "path": "/size-observer/example1",
        "name": "size-observer-example1",
        "component": () => import("../pages/size-observer/example/example1.vue")
      },
      {
        "path": "/size-observer/example2",
        "name": "size-observer-example2",
        "component": () => import("../pages/size-observer/example/example2.vue")
      }
    ]
  },
  {
    "path": "/to-drag",
    "name": "to-drag",
    "redirect": "/to-drag/readme",
    "component": () => import("../pages/to-drag/index.vue"),
    "children": [
      {
        "path": "/to-drag/readme",
        "name": "to-drag-readme",
        "component": () => import("../components/PageReadme.vue")
      },
      {
        "path": "/to-drag/example1",
        "name": "to-drag-example1",
        "component": () => import("../pages/to-drag/example/example1.vue")
      },
      {
        "path": "/to-drag/example2",
        "name": "to-drag-example2",
        "component": () => import("../pages/to-drag/example/example2.vue")
      },
      {
        "path": "/to-drag/example3",
        "name": "to-drag-example3",
        "component": () => import("../pages/to-drag/example/example3.vue")
      },
      {
        "path": "/to-drag/example4",
        "name": "to-drag-example4",
        "component": () => import("../pages/to-drag/example/example4.vue")
      },
      {
        "path": "/to-drag/example5",
        "name": "to-drag-example5",
        "component": () => import("../pages/to-drag/example/example5.vue")
      }
    ]
  }
]
});

export default router;
