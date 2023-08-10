<template>
  <div class="category-tree">
    <template v-if="categoryTree.length">
      <!-- Model Name -->
      <div
        class="category-tree__model-name mb-2"
        v-for="(modelName, idxModelName) in categoryTree"
        :key="`model-name-${idxModelName + 1}`"
      >
        <b-input-group>
          <b-input-group-prepend>
            <b-input-group-text>
              {{ $t("SHOP_CAR.HOME.FILTER.MODEL") }}
            </b-input-group-text>
            <b-button variant="danger" @click="handleDeleteModel(idxModelName)">
              <i class="fas fa-trash" />
            </b-button>

            <b-button variant="success" @click="handleAddModel(idxModelName)">
              <i class="fas fa-plus-square" />
            </b-button>
          </b-input-group-prepend>

          <b-form-input v-model="modelName.model_name" />

          <b-input-group-append>
            <b-button
              variant="secondary"
              @click="handleAddDetailModel(idxModelName)"
            >
              <i class="fas fa-plus-circle" />
            </b-button>
          </b-input-group-append>
        </b-input-group>

        <!-- Model Detail -->
        <div
          class="category-tree__model-detail mt-2 mb-2 ml-4"
          v-for="(modelDetail, idxModelDetail) in modelName.model_detail"
          :key="`model-detail-${idxModelDetail + 1}`"
        >
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text>
                {{ $t("SHOP_CAR.HOME.FILTER.DETAIL_CAR") }}
              </b-input-group-text>
              <b-button
                variant="danger"
                @click="handleDeleteModelDetail(idxModelName, idxModelDetail)"
              >
                <i class="fas fa-trash" />
              </b-button>

              <b-button
                variant="success"
                @click="handleAddDetailModel(idxModelName, idxModelDetail)"
              >
                <i class="fas fa-plus-square" />
              </b-button>
            </b-input-group-prepend>

            <b-form-input v-model="modelDetail.detail_name" />

            <b-input-group-append>
              <b-button
                variant="secondary"
                @click="handleAddRating(idxModelName, idxModelDetail)"
              >
                <i class="fas fa-plus-circle" />
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <!-- Rating -->
          <div
            class="category-tree__rating mt-2 mb-2 ml-4"
            v-for="(rating, idxRating) in modelDetail.rating"
            :key="`rating-${idxRating + 1}`"
          >
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text>
                  {{ $t("SHOP_CAR.HOME.FILTER.RATING") }}
                </b-input-group-text>
                <b-button
                  variant="danger"
                  @click="
                    handleDeleteRating(idxModelName, idxModelDetail, idxRating)
                  "
                >
                  <i class="fas fa-trash" />
                </b-button>

                <b-button
                  variant="success"
                  @click="handleAddRating(idxModelName, idxModelDetail)"
                >
                  <i class="fas fa-plus-square" />
                </b-button>
              </b-input-group-prepend>

              <b-form-input v-model="modelDetail.rating[idxRating]" />
            </b-input-group>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <b-button class="btn-app" @click="handleAddModel">
        <i class="fas fa-plus-circle mr-2" />
        {{ $t("APP.BUTTON_ADD") }}
      </b-button>
    </template>
  </div>
</template>

<script>
export default {
  name: "CategoryTree",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      },
      validator: (value) => {
        return Array.isArray(value);
      },
    },
  },
  data() {
    return {
      categoryTree: [],
    };
  },
  watch: {
    categoryTree() {
      this.$emit("change", this.categoryTree);
    },
  },
  created() {
    this.categoryTree = JSON.parse(JSON.stringify(this.items));
  },
  methods: {
    handleAddModel(indexAdd = null) {
      const newModelName = {
        model_name: "",
        model_detail: [],
      };

      if (indexAdd !== null && indexAdd >= 0) {
        this.categoryTree = this.addItemIntoIndexArr(
          this.categoryTree,
          indexAdd,
          newModelName
        );
      } else {
        this.categoryTree.push(newModelName);
      }
    },
    handleDeleteModel(indexModel) {
      if (indexModel >= 0 && indexModel <= this.categoryTree.length) {
        this.categoryTree.splice(indexModel, 1);
      }
    },

    handleAddDetailModel(indexModel, indexAdd = null) {
      const newDetailModel = {
        detail_name: "",
        rating: [],
      };

      if ((indexAdd !== null) & (indexAdd >= 0)) {
        this.categoryTree[indexModel].model_detail = this.addItemIntoIndexArr(
          this.categoryTree[indexModel].model_detail,
          indexAdd,
          newDetailModel
        );
      } else {
        this.categoryTree[indexModel].model_detail.push(newDetailModel);
      }
    },
    handleDeleteModelDetail(indexModel, indexModelDetail) {
      if (
        indexModel >= 0 &&
        indexModel <= this.categoryTree.length &&
        indexModelDetail >= 0 &&
        this.categoryTree[indexModel].model_detail.length
      ) {
        this.categoryTree[indexModel].model_detail.splice(indexModelDetail, 1);
      }
    },

    handleAddRating(indexModel, indexModelDetail) {
      const newRating = "";

      if (
        !this.categoryTree[indexModel].model_detail[indexModelDetail].rating
      ) {
        this.categoryTree[indexModel].model_detail[indexModelDetail].rating =
          [];
      }

      this.categoryTree[indexModel].model_detail[indexModelDetail].rating.push(
        newRating
      );
    },
    handleDeleteRating(indexModel, indexModelDetail, indexRating) {
      if (
        indexModel >= 0 &&
        indexModel <= this.categoryTree.length &&
        indexModelDetail >= 0 &&
        indexModelDetail <= this.categoryTree[indexModel].model_detail.length &&
        indexRating >= 0 &&
        indexRating <=
          this.categoryTree[indexModel].model_detail[indexModelDetail].rating
            .length
      ) {
        this.categoryTree[indexModel].model_detail[
          indexModelDetail
        ].rating.splice(indexRating, 1);
      }
    },

    addItemIntoIndexArr(arr, idx, item) {
      if (Array.isArray(arr) && idx > 0) {
        arr.splice(idx + 1, 0, item);

        return arr;
      }

      if (Array.isArray(arr) && idx === 0) {
        arr = [...arr, item];

        return arr;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.category-tree {
}
</style>
