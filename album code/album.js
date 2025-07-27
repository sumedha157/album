new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/7.jpg",
          img2: "images/1.jpg",
          img3: "images/4.jpg",
          title: "NATURE",
          isOpen: false,
        },
        {
          img1: "images/16.jpg",
          img2: "images/5.jpg",
          img3: "images/31.jpg",
          title: "NATURE",
          isOpen: false,
        },
        {
          img1: "images/8.jpg",
          img2: "images/3.jpg",
          img3: "images/6.jpg",
          title: "NATURE",
          isOpen: false,
        },
        {
          img1: "images/15.jpg",
          img2: "images/13.jpg",
          img3: "images/19.jpg",
          title: "RANDOM",
          isOpen: false,
        },
        {
          img1: "images/30.jpg",
          img2: "images/11.jpg",
          img3: "images/9.jpg",
          title: "RANDOM",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
