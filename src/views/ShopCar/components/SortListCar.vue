<template>
  <div class="sort-list-car">
    <b-row>
      <b-col
        v-for="(sort, idx) in optionSort" 
        :key="idx"
        cols="6" 
        xs="6" 
        sm="6" 
        md="6" 
        lg="6"
        xl="3"
      >
        <ItemSort 
          :sort-name="sort.sortName" 
          :key-sort="sort.key"
        />
      </b-col>

      <b-col
        cols="6" 
        xs="6" 
        sm="6" 
        md="6" 
        lg="6"
        xl="3"
      >
        <span class="label-filter-per-page">{{ $t('SHOP_CAR.HOME.SORT_LIST_CAR.PER_PAGE') }}</span>
        <b-form-select 
          v-model="per_page" 
          size="sm"
          @change="onChangePerPage"
          class="filter-per-page"
        >
          <b-form-select-option
            v-for="(option, idx) in optionsPerpage"
            :key="idx"
            :value="option.value"
          >
            {{ $t(option.text) }}
          </b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ItemSort from './ItemSort.vue';

export default {
  name: 'SortListCar',
  components: {
    ItemSort,
  },
  data() {
    return {
      optionSort: [
        {
          sortName: 'SHOP_CAR.HOME.SORT_LIST_CAR.CAR_NAME',
          key: 'car_name'
        },
        {
          sortName: 'SHOP_CAR.HOME.SORT_LIST_CAR.PRICE',
          key: 'price'
        },
        {
          sortName: 'SHOP_CAR.HOME.SORT_LIST_CAR.YEAR_MANUFACTURE',
          key: 'year_manufacture'
        },
      ],

      per_page: 24,
      optionsPerpage: [
        {
          value: 8,
          text: 'SHOP_CAR.HOME.SORT_LIST_CAR.TEXT_PER_PAGE_8'
        },
        {
          value: 16,
          text: 'SHOP_CAR.HOME.SORT_LIST_CAR.TEXT_PER_PAGE_16'
        },
        {
          value: 24,
          text: 'SHOP_CAR.HOME.SORT_LIST_CAR.TEXT_PER_PAGE_24'
        },
        {
          value: 32,
          text: 'SHOP_CAR.HOME.SORT_LIST_CAR.TEXT_PER_PAGE_32'
        },
        {
          value: 40,
          text: 'SHOP_CAR.HOME.SORT_LIST_CAR.TEXT_PER_PAGE_40'
        },
      ]
    }
  },
  methods: {
    onChangePerPage(per_page) {
      this.$bus.emit('LIST_CAR_PER_PAGE_CHANGE', per_page);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables';

.sort-list-car {
  margin-top: 20px;
}

.filter-per-page {
  width: 110px;
}

.label-filter-per-page {
  font-size: 12px;
  margin-right: 5px;
}
</style>