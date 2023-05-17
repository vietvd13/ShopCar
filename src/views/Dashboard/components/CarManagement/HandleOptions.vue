<template>
  <div class="handle-option">
    <div class="new-option">
      <b-input-group>
        <b-form-input
          v-model="newOption"
          :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_OPTION')"
        />
        <b-input-group-append>
          <b-button class="btn-app" @click="onClickAdd()">
            <i class="fas fa-plus-circle" />
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
    <div class="list-option">
      <div class="item-option" v-for="(option, idx) in items" :key="idx">
        <div class="text-option">
          {{ option }}
        </div>
        <div class="btn-remove-option">
          <b-button variant="danger" size="sm" @click="onClickRemove(idx)">
            <i class="fas fa-trash" />
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HandleOption",
  props: {
    type: {
      type: String,
      default: "type",
    },
    items: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      newOption: "",
    };
  },
  methods: {
    onClickAdd() {
      if (this.newOption) {
        this.$emit("add", { type: this.type, value: this.newOption });
        this.newOption = "";
      }
    },
    onClickRemove(index) {
      if (index >= 0) {
        this.$emit("remove", { type: this.type, index });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.handle-option {
  .list-option {
    height: 200px;
    margin: 5px 0;
    overflow-y: scroll;
    border: 1px solid $porcelain;

    .item-option {
      padding: 5px;
      margin: 5px;
      border: 1px solid $porcelain;

      display: flex;

      .text-option {
        width: 100%;
        display: flex;
        align-items: center;
        margin-right: 5px;
      }

      .btn-remove-option {
        height: 100%;
      }
    }
  }
}
</style>
