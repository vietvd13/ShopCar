<template>
  <div class="form-car">
    <div class="form-car__title">
      <label for="">
        {{ $t("DASHBOARD.CAR.FORM.TITLE_CAR") }}
      </label>
      <b-form-input
        v-model="isForm.title"
        :placeholder="$t('DASHBOARD.CAR.FORM.PLACEHOLDER_TITLE_CAR')"
      />
    </div>

    <div class="form-car__images">
      <ImportImageCar
        :items="isForm.images"
        @import="handleImportImage"
        @remove="handleRemoveImage"
      />
    </div>

    <div class="form-car__basic-infor">
      <BasicInfor
        :oldForm="isForm"
        @isForm="handleGetIsForm"
        @otherCategories="handleGetOtherCategories"
        @otherFuelType="handleGetOtherFuelType"
        @otherColor="handleGetOtherColor"
        @otherGearBox="handleGetOtherGearBox"
        @otherCarType="handleGetOtherCarType"
      />
    </div>

    <div class="form-car__options">
      <ListOptionCar
        :exterior="isForm.exterior"
        :guts="isForm.guts"
        :safety="isForm.safety"
        :convenience="isForm.convenience"
        @add="handleAddOption"
        @remove="handleRemoveOption"
      />
    </div>

    <div class="form-car__performance-check">
      <PerformanceCheck
        :oldFile="isForm.performanceCheck"
        @file="handleGetPerformanceCheck"
      />
    </div>
  </div>
</template>

<script>
import ImportImageCar from "./ImportImageCar.vue";
import BasicInfor from "./BasicInfor.vue";
// import ListRatingForm from './ListRatingForm.vue';
import ListOptionCar from "./ListOptionCar.vue";
import PerformanceCheck from "./PerformanceCheck.vue";

export default {
  name: "FormCar",
  components: {
    ImportImageCar,
    BasicInfor,
    ListOptionCar,
    PerformanceCheck,
  },
  props: {
    oldForm: {
      type: Object,
      default: function () {
        return {
          title: "",

          images: [],

          price: null,
          categories: null,
          licensePlate: null,
          year: null,
          distanceDriven: null,
          fuelType: null,
          gearbox: null,
          cylynder: null,
          color: null,
          carType: null,
          seizure: null,
          mortgage: null,
          presentationNumber: null,
          storageLocation: null,
          contact: null,
          saller: null,
          employeeId: null,
          affiliatedCompany: null,
          businessAddress: null,
          parkingLocation: null,

          rating: null,

          otherCategories: "",
          otherFuelType: "",
          otherColor: "",
          otherGearBox: "",
          otherCarType: "",

          exterior: [],
          guts: [],
          safety: [],
          convenience: [],

          performanceCheck: {
            type: "old",
            url: "",
          },
        };
      },
    },
    listSelectRating: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      isForm: {
        title: "",

        images: [],

        price: null,
        categories: null,
        licensePlate: null,
        year: null,
        distanceDriven: null,
        fuelType: null,
        gearbox: null,
        cylynder: null,
        color: null,
        carType: null,
        seizure: null,
        mortgage: null,
        presentationNumber: null,
        storageLocation: null,
        contact: null,
        saller: null,
        employeeId: null,
        affiliatedCompany: null,
        businessAddress: null,
        parkingLocation: null,

        rating: [],

        otherCategories: "",
        otherFuelType: "",
        otherColor: "",
        otherGearBox: "",
        otherCarType: "",

        exterior: [],
        guts: [],
        safety: [],
        convenience: [],

        performanceCheck: {
          type: "old",
          url: "",
        },
      },
    };
  },
  watch: {
    oldForm: {
      handler: function () {
        this.isForm = this.oldForm;
      },
      deep: true,
    },
    isForm: {
      handler: function () {
        if (JSON.stringify(this.isForm) !== JSON.stringify(this.oldForm)) {
          this.$emit("form", this.isForm);
        }
      },
      deep: true,
    },
  },
  methods: {
    handleImportImage(file) {
      this.isForm.images.push(file);
    },
    handleRemoveImage(idx) {
      this.isForm.images.splice(idx, 1);
    },
    handleGetIsForm(isForm) {
      this.isForm = {
        ...this.isForm,
        ...isForm,
      };
    },
    handleGetOtherCategories(otherCategories) {
      this.isForm = {
        ...this.isForm,
        otherCategories,
      };
    },
    handleGetOtherFuelType(otherFuelType) {
      this.isForm = {
        ...this.isForm,
        otherFuelType,
      };
    },
    handleGetOtherColor(otherColor) {
      this.isForm = {
        ...this.isForm,
        other_color: otherColor,
      };
    },
    handleGetOtherGearBox(otherGearBox) {
      this.isForm = {
        ...this.isForm,
        otherGearBox,
      };
    },
    handleGetOtherCarType(otherCarType) {
      this.isForm = {
        ...this.isForm,
        otherCarType,
      };
    },
    handleAddOption(item) {
      this.isForm[item.type].push(item.value);
    },
    handleRemoveOption(item) {
      this.isForm[item.type].splice(item.index, 1);
    },
    handleGetPerformanceCheck(file) {
      this.isForm = {
        ...this.isForm,
        performanceCheck: file,
      };
    },
    handleChangeListRating(items) {
      this.isForm = {
        ...this.isForm,
        rating: items,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.form-car {
  &__title,
  &__images,
  &__options {
    margin-bottom: 10px;
  }
}
</style>
