<template>
  <div class="news-view">
    <div class="news-list-nav">
      <a class="disabled" v-on:click="switchDay(-1)">&lt;</a>
      <span>{{ this.$route.params.date | moment("dddd Do") }}</span>
      <a class="disabled" v-on:click="switchDay(1)">&gt;</a>
    </div>
    <transition :name="transition">
      <div class="news-list" :key="displayedPage" v-if="displayedPage > 0">
        <transition-group tag="ul" name="item">
          <item v-for="item in displayedItems" :key="item._id" :item="item">
          </item>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
// import { watchList } from "../api";
import Item from "../components/Item.vue";
import moment from "moment";

export default {
  name: "item-list",

  components: {
    Item
  },

  props: {
    type: String
  },

  data() {
    return {
      transition: "slide-right",
      displayedPage: Number(this.$route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems
    };
  },

  beforeMount() {
    if (this.$root._isMounted) {
      this.loadItems();
    }
  },

  watch: {
    $route(to, from) {
      console.log("$route");
      this.loadItems();
    }
  },

  methods: {
    loadItems() {
      this.$bar.start();
      this.$store.dispatch("FETCH_LIST_DATA", {}).then(() => {
        this.transition =
          from === -1 ? null : to > from ? "slide-left" : "slide-right";
        this.$bar.finish();
      });
    },
    switchDay(days) {
      const { params } = this.$store.state.route;
      const day = moment(params.date)
        .add(days, "d")
        .format("YYYY-MM-DD");
      this.$router.push({
        name: "sport-daily",
        params: { sport: params.sport, date: day }
      });
    }
  }
};
</script>

<style lang="stylus">
.news-view {
  padding-top: 45px;
}

.news-list-nav, .news-list {
  background-color: #fff;
  border-radius: 2px;
}

.news-list-nav {
  padding: 15px 30px;
  position: fixed;
  text-align: center;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 998;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  a {
    margin: 0 1em;
  }

  .disabled {
    color: #ccc;
  }
}

.news-list {
  position: absolute;
  margin: 30px 0;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
}

.slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

.item-move, .item-enter-active, .item-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.item-enter {
  opacity: 0;
  transform: translate(30px, 0);
}

.item-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(30px, 0);
}

@media (max-width: 600px) {
  .news-list {
    margin: 10px 0;
  }
}
</style>
