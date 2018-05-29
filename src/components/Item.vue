<template>
  <li class="news-item">
    <!-- <span class="start">{{ item.start }}</span> -->
    <span>

      <span class="status">
        <!-- status: final -->
        <span v-if="item.scoreboard && !item.scoreboard.is_active && item.scoreboard.name === 'Final'">Final</span>
        <!-- status: in progress, inning or status (postponed, delayed) -->
        <span v-else-if="item.scoreboard && item.scoreboard.is_active">
          <span v-if="item.scoreboard.name ==='In-Progress'">
            {{item.scoreboard.inning_division}}&nbsp;{{item.scoreboard.inning}}
          </span>
          <span v-if="item.scoreboard.name ==='Delayed'">
            Delayed
          </span>
          <span v-if="item.scoreboard.name ==='Postponed'">
            Postponed
          </span>
        </span>
        <!-- status: upcoming -->
        <span v-else>{{ item.start | moment("h:mma") }}</span>
      </span>
    </span>
    <div class="teams">
      <p v-bind:class="{ winner: isAwayWinner }">{{ item.teams.away.location }} {{ item.teams.away.name }} {{ item.teams.away.score }}</p>
      <p v-bind:class="{ winner: isHomeWinner }">{{ item.teams.home.location }} {{ item.teams.home.name }} {{ item.teams.home.score }}</p>
    </div>
  </li>
</template>

<script>
import { timeAgo } from "../util/filters";

export default {
  name: "news-item",
  props: ["item"],
  computed: {
    // a computed getter
    isAwayWinner: function() {
      // console.log(this.item.teams.away.winner);
      return this.item.teams.away.winner;
    },
    isHomeWinner: function() {
      // console.log(this.item.teams.home.winner);
      return this.item.teams.home.winner;
    }
  }
  // methods: {
  //   isAwayWinner: function() {
  //     return this.item.teams.away.winner;
  //   },
  //   isHomeWinner: function() {
  //     return this.item.teams.home.winner;
  //   }
  // },
  // http://ssr.vuejs.org/en/caching.html#component-level-caching
  // serverCacheKey: ({ item: { id, __lastUpdated, time } }) => {
  //   return `${id}::${__lastUpdated}::${timeAgo(time)}`;
  // }
};
</script>

<style lang="stylus">
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;

  .status {
    float: right;
  }

  .teams {
    .winner {
      font-weight: bold;
    }
  }

  .score {
    color: #ff6600;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }

  .meta, .host {
    font-size: 0.85em;
    color: #828282;

    a {
      color: #828282;
      text-decoration: underline;

      &:hover {
        color: #ff6600;
      }
    }
  }
}
</style>
