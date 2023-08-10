<template>
  <div class="item-sort">
    <span>{{ $t(sortName) }}</span>
    <div class="option-sort">
      <div class="base-btn-sort sort-up" @click="handleClickSort(1)">
        <i class="far fa-arrow-up" />
      </div>
      <div class="base-btn-sort sort-down" @click="handleClickSort(-1)">
        <i class="far fa-arrow-down" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSort",
  props: {
    sortName: {
      type: String,
      required: true,
      default: "Sort Name",
    },
    keySort: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    handleClickSort(type) {
      const SORT = {
        sort: this.keySort,
        type,
      };

      this.$bus.emit("LIST_CAR_SORT_CLICK", SORT);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.item-sort {
  display: flex;
  font-size: 12px;
  margin-bottom: 10px;

  span {
    display: flex;
    align-items: center;
  }

  .option-sort {
    display: flex;
    margin: 0 5px;

    .base-btn-sort {
      padding: 5px 10px;

      border: 1px solid $silver-chalice;
      background-color: $white;
      font-weight: bold;

      &:hover {
        cursor: pointer;

        background-color: $international-orange;
        color: $white;
      }
    }

    .sort-up {
      border-right: transparent;

      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .sort-down {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>
