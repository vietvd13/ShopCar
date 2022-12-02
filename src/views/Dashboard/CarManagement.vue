<template>
  <div class="car-management-page">
    <div class="car-management-page__filter">
      <FilterListCarDashboard 
        @filter="onClickApplyFilter"  
      />
    </div>

    <div class="car-management-page__control">
      <b-row>
        <b-col class="text-right">
          <b-button class="btn-app btn-add-new" @click="onClickCreate()">
            {{ $t('DASHBOARD.CAR.BUTTON_ADD_NEW') }}
          </b-button>

          <b-button class="btn-app btn-actions" @click="onClickActions()">
            {{ $t('DASHBOARD.CAR.BUTTON_ACTIONS') }}
          </b-button>
        </b-col>
      </b-row>
    </div>

    <div class="car-management-page__table">
      <b-table
        :items="items"
        :fields="headerTable"
        bordered
        show-empty
        no-local-sorting
        no-sort-reset
        no-border-collapse
        @sort-changed="handleSort"
      >
        <template #cell(delete_multiple)="delete_multiple">
          <b-form-checkbox
            :key="delete_multiple.item._id"
            :value="delete_multiple.item._id"
            :checked="handleTickRowTable(delete_multiple.item._id, selectRow)"
            :unchecked-value="delete_multiple.item._id"
            @change="onSelectDelete"
          />
        </template>

        <template #cell(created_at)="created_at">
          <span>{{ calNo(created_at) }}</span>
        </template>

        <template #cell(primary_image)="primary_image">
          <b-img-lazy
            thumbnail
            fluid
            :src="`${domainImage}${primary_image.item.primary_image}`"
            :blank-src="require('@/assets/images/noimage.webp')"
            :alt="items.car_name"
            class="avatar-collaborators"
          />
        </template>

        <template #cell(is_hotsale)="is_hotsale">
          <b-badge v-if="is_hotsale.item.is_hotsale === false" variant="secondary">
            {{ $t('DASHBOARD.CAR.TABLE_TEXT_NO_HOT_SALE') }}
          </b-badge>
          <b-badge v-if="is_hotsale.item.is_hotsale === true" variant="success">
            {{ $t('DASHBOARD.CAR.TABLE_TEXT_HOT_SALE') }}
          </b-badge>
        </template>

        <template #cell(actions)="actions">
          <div class="item-action">
            <b-button 
              variant="warning"
              class="btn-default"
              @click="onClickDetail(actions.item._id)"
            >
              {{ $t('DASHBOARD.CAR.TABLE_TEXT_DETAIL') }}
            </b-button>
          </div>

          <div class="item-action">
            <b-button 
              variant="warning"
              class="btn-default"
              @click="onClickEdit(actions.item._id)"
              v-if="actions.item.is_data_crawl === false"
            >
              {{ $t('DASHBOARD.CAR.TABLE_TEXT_EDIT') }}
            </b-button>
          </div>

          <div class="item-action">
            <b-button 
              variant="danger"
              class="btn-default"
              @click="onClickDelete(actions.item._id)"
            >
              {{ $t('DASHBOARD.CAR.TABLE_TEXT_DELETE') }}
            </b-button>
          </div>
        </template>

        <template #empty>
          <div class="text-center">
            {{ $t('APP.TABLE_NO_DATA') }}
          </div>
        </template>
      </b-table>
    </div>

    <div class="car-management-page__pagination">
      <b-row align-h="center">
        <b-col>
          <b-form-select 
            v-model="pagination.per_page" 
            size="sm"
            @change="onChangePerPage"
            class="select-per-page"
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
        <b-col>
          <b-pagination
            v-model="pagination.current_page"
            :total-rows="pagination.total"
            :per-page="pagination.per_page"
            align="right"
            pills
            size="sm"
          />
        </b-col>
      </b-row>
    </div>

    <b-modal 
      v-model="isModal.show"
      no-close-on-backdrop
      no-close-on-esc
      static
      scrollable
      body-class="modal-body-car"
      footer-class="modal-footer-car"
      :title="$t('DASHBOARD.CAR.FORM.TITLE_MODAL')"
      size="xl"
    >
      <FormCar
        :oldForm="isForm"
        @form="handleGetForm"      
      />

      <template #modal-footer>
        <b-row align-v="baseline">
          <b-col cols="6" class="text-center">
            <b-button 
              class="btn-default btn-cancel"
              @click="onClickCloseModal"
            >
              {{ $t('APP.CANCEL') }}
            </b-button>
          </b-col>

          <b-col cols="6" class="text-center">
            <b-button 
              class="btn-default btn-app"
              @click="onClickSaveModal"
            >
              {{ $t('APP.SAVE') }}
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>

    <b-modal
      v-model="isModalAction"
      no-close-on-backdrop
      no-close-on-esc
      static
      scrollable
      hide-footer
      body-class="modal-body-action"
      footer-class="modal-footer-action"
      :title="$t('DASHBOARD.CAR.TABLE_ACTIONS')"
    >
      <div class="item-action">
        <b-row>
          <b-col>
            <div class="content-action" @click="handleDeleteMany()">
              {{ $t('DASHBOARD.CAR.ACITON_DELETE') }}
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="item-action">
        <b-row>
          <b-col>
            <div class="content-action" @click="hanldeSetHotsale(true)">
              {{ $t('DASHBOARD.CAR.ACTION_ADD_HOT_SALE') }}
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="item-action">
        <b-row>
          <b-col>
            <div class="content-action" @click="hanldeSetHotsale(false)">
              {{ $t('DASHBOARD.CAR.ACTION_REMOVE_HOT_SALE') }}
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="item-action">
        <b-row>
          <b-col>
            <div class="content-action" @click="onClickSetPrice()">
              {{ $t('DASHBOARD.CAR.ACTION_ADD_PRICE') }}
            </div>
          </b-col>
        </b-row>
      </div>

    </b-modal>

    <b-modal
      v-model="isModalPrice"
      no-close-on-backdrop
      no-close-on-esc
      static
      scrollable
      body-class="modal-body-price"
      footer-class="modal-footer-price"
      :title="$t('DASHBOARD.CAR.ACTION_ADD_PRICE')"
    >
      <div class="item-form">
        <label for="select-type-update-price">{{ $t('DASHBOARD.CAR.TYPE_UPDATE') }}</label>
        <b-form-select id="select-type-update-price" v-model="isUpdatePrice.type">
          <b-form-select-option 
            v-for="typeUpdate in optionUpdatePrice"
            :key="typeUpdate.value"
            :value="typeUpdate.value"
          >
            {{ $t(typeUpdate.text) }}
          </b-form-select-option>
        </b-form-select>
      </div>

      <div class="item-form">
        <label for="input-value-update-price">{{ $t('DASHBOARD.CAR.VALUE_UPDATE') }}</label>
        <b-form-input
          id="input-value-update-price"
          v-model="isUpdatePrice.value" 
        />
      </div>

      <template #modal-footer>
        <b-row align-v="baseline">
          <b-col cols="6" class="text-center">
            <b-button 
              class="btn-default btn-cancel"
              @click="onClickCloseModalPrice"
            >
              {{ $t('APP.CANCEL') }}
            </b-button>
          </b-col>

          <b-col cols="6" class="text-center">
            <b-button 
              class="btn-default btn-app"
              @click="onClickSaveModalPrice"
            >
              {{ $t('APP.SAVE') }}
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { setLoading } from '@/utils/setLoading';
import { postListCar, postCreateCar, postGetDetailCar, postUpdateCar, postDeleteCar, postSetHotsaleCar, posetSetPirce } from '@/api/modules/Dashboard';
import { postImages, postFile } from '@/api/modules/Upload';
import FilterListCarDashboard from './components/FilterListCar.vue';
import FormCar from './components/CarManagement/Form.vue';
import { getArrValueOfArr, replaceValueWithIndex } from '@/utils/helper';
import Toast from '@/toast';
import { handleTickRowTable } from '@/utils/helper';
import CONSTANTS from '@/constants';

export default {
  name: 'CarManagement',
  components: {
    FilterListCarDashboard,
    FormCar
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
    headerTable() {
      return [
        { key: 'delete_multiple', label: '', thClass: 'th-col-check text-center', tdClass: 'td-col-check text-center' },
        { key: 'created_at', label: this.$t('DASHBOARD.CAR.TABLE_NO'), sortable: true, thClass: 'text-center td-no', tdClass: 'text-center base-td' },
        { key: 'primary_image', label: this.$t('DASHBOARD.CAR.TABLE_IMAGE'), thClass: 'text-center th-image', tdClass: 'text-center base-td' },
        { key: 'car_name', label: this.$t('DASHBOARD.CAR.TABLE_CAR_NAME'), sortable: true, thClass: 'text-center th-car-name', tdClass: 'text-center base-td' },
        { key: 'category', label: this.$t('DASHBOARD.CAR.TABLE_CAR_BRAND'), sortable: true, thClass: 'text-center th-car-brand', tdClass: 'text-center base-td' },
        { key: 'is_hotsale', label: this.$t('DASHBOARD.CAR.TABLE_HOT_SALE'), sortable: true, thClass: 'text-center th-hot-sale', tdClass: 'text-center base-td' },
        { key: 'actions', label: this.$t('DASHBOARD.CAR.TABLE_ACTIONS'), thClass: 'text-center th-actions', tdClass: 'text-center base-td' },
      ]
    },
    optionsPerpage() {
      return [
        {
          value: 10,
          text: 'APP.TEXT_PER_PAGE_10'
        },
        {
          value: 20,
          text: 'APP.TEXT_PER_PAGE_20'
        },
        {
          value: 40,
          text: 'APP.TEXT_PER_PAGE_40'
        },
        {
          value: 80,
          text: 'APP.TEXT_PER_PAGE_80'
        },
        {
          value: 100,
          text: 'APP.TEXT_PER_PAGE_100'
        },
      ]
    },
    isCurrentPage() {
      return this.pagination.current_page; 
    },
    optionUpdatePrice() {
      return CONSTANTS.VALUE.OPTION_UPDATE_PRICE;
    }
  },
  watch: {
    async isCurrentPage() {
      setLoading(true);

      await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);

      setLoading(false);
    }
  },
  data() {
    return {
      items: [],
      selectRow: [],
      pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
      },
      isSort: {
        field: '',
        type: '',
      },
      isModal: {
        show: false,
        type: '',
        id: null
      },
      isForm: {
        title: '',

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

        otherCategories: '',
        otherFuelType: '',
        otherColor: '',
        otherGearBox: '',
        otherCarType: '',

        exterior: [],
        guts: [],
        safety: [],
        convenience: [],

        performanceCheck: {
          type: '',
          url: ''
        }
      },
      isModalAction: false,
      isModalPrice: false,
      
      isUpdatePrice: {
        type: 'PRICE',
        value: null,
      }
    }
  },
  created () {
    this.initData();
  },
  methods: {
    handleTickRowTable,
    async initData() {
      setLoading(true);
      await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
      setLoading(false);
    },
    async onClickApplyFilter() {
      setLoading(true);
      await this.handleGetListCar(1, this.pagination.per_page);
      setLoading(false);
    },
    async handleGetListCar(page, limit) {
      try {
        const BODY = {
          page: page,
          limit: limit,
          sort: {

          },
          filter: {

          },
        }

        if (this.isSort.field) {
          BODY.sort = {
            [this.isSort.field]: this.isSort.type,
          }
        }

        const FILTER = this.$store.getters.isFilterDashboard;

        if (FILTER.search) {
          BODY.search = FILTER.search;
        }

        if (FILTER.from_year && FILTER.to_year) {
          BODY.filter.from_year = FILTER.from_year;
          BODY.filter.to_year = FILTER.to_year;
        }

        if (FILTER.price) {
          BODY.filter.from_price = parseInt(FILTER.price[0]);
          BODY.filter.to_price = parseInt(FILTER.price[1]);
        }

        if (FILTER.distance) {
          BODY.filter.from_distance = parseInt(FILTER.distance[0]);
          BODY.filter.to_distance = parseInt(FILTER.distance[1]);
        }

        if (FILTER.categories) {
          BODY.filter.category = FILTER.categories;
        }

        if (FILTER.fuel_type) {
          BODY.filter.fuel_type = FILTER.fuel_type;
        }

        if (FILTER.gear_box) {
          BODY.filter.gear_box = FILTER.gear_box;
        }

        if (FILTER.color) {
          BODY.filter.color = FILTER.color;
        }

        if ([true, false].includes(FILTER.is_hotsale)) {
          BODY.filter.is_hotsale = FILTER.is_hotsale;
        }

        if ([true, false].includes(FILTER.is_data_crawl)) {
          BODY.filter.is_data_crawl = FILTER.is_data_crawl;
        }

        const { status_code, data, pagination } = await postListCar(BODY);

        if (status_code === 200) {
          this.items = data;
          this.pagination.current_page = pagination.current_page;
          this.pagination.per_page = pagination.per_page;
          this.pagination.total = pagination.total;
        } else {
          this.items = [];
          this.pagination.current_page = 1;
          this.pagination.per_page = 10;
          this.pagination.total = 0;
        }
      } catch (err) {
        this.items = [];
        this.pagination.current_page = 1;
        this.pagination.per_page = 10;
        this.pagination.total = 0;
        console.log(err);
      }
    },
    onSelectDelete(id) {
      if (this.selectRow.includes(id)) {
        const idx = this.selectRow.findIndex((row) => row === id);

        if (idx >= 0) {
          this.selectRow.splice(idx, 1);
        }
      } else {
        this.selectRow.push(id);
      }
    },
    onClickCreate() {
      this.handleResetForm();
      this.isModal.type = 'CREATE';
      this.isModal.show = true;
    },
    async handleGetDetailCar(id) {
      try {
        const BODY = {
          car_id: id
        }

        const { status_code, data } = await postGetDetailCar(BODY);

        if (status_code === 200) {
          return data;
        }

        return null;
      } catch (error) {
        console.log(error);

        return null;
      }
    },
    handleSetForm(data) {
      const lenImage = data.images.length;
      let idxImage = 0;

      const listImage = [];

      while (idxImage < lenImage) {
        listImage.push({
          type_import: 'old',
          url: data.images[idxImage]
        });

        idxImage++;
      }

      const PERFORMANCE_CHECK = {
        type: 'old',
        url: data.performance_check
      }

      this.isForm = {
        title: data.car_name,

        images: listImage,

        price: data.price,
        categories: data.category,
        licensePlate: data.license_plate,
        year: data.year_manufacture,
        distanceDriven: data.distance_driven,
        fuelType: data.fuel_type,
        gearbox: data.gearbox,
        cylynder: data.cylinder_capacity,
        color: data.color,
        carType: data.car_type,
        seizure: data.seizure,
        mortgage: data.mortgage,
        presentationNumber: data.presentation_number,
        storageLocation: data.storage_location,
        contact: data.phone_contact,
        saller: data.seller_name,
        employeeId: data.employee_number,
        affiliatedCompany: data.affiliated_company,
        businessAddress: data.business_address,
        parkingLocation: data.parking_location,

        otherCategories: '',
        otherFuelType: '',
        otherColor: '',
        otherGearBox: '',
        otherCarType: '',

        exterior: data.exterior,
        guts: data.guts,
        safety: data.safety,
        convenience: data.convenience,

        performanceCheck: PERFORMANCE_CHECK
      }
    },
    onClickDetail(id) {
      if (id) {
        let route = this.$router.resolve({ name: 'DetailCar', params: { id }});

        window.open(route.href);
      }
    },
    async onClickEdit(id) {
      try {
        this.handleResetForm();
        this.isModal.id = id;
        const CAR = await this.handleGetDetailCar(id);

        if (CAR) {
          this.isModal.type = 'EDIT';
          this.isModal.show = true;

          this.handleSetForm(CAR);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async onClickDelete(id) {
      await this.handleDeleteOne(id);
    },
    async onChangePerPage() {
      setLoading(true);
      await this.handleGetListCar(1, this.pagination.per_page);
      setLoading(false);
    },
    async handleSort(ctx) {
      this.isSort.field = ctx.sortBy;
      this.isSort.type = ctx.sortDesc === false ? 1 : -1;

      setLoading(true);
      await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
      setLoading(false);
    },
    handleGetForm(form) {
      this.isForm = form;
    },
    handleResetForm() {
      this.isForm = {
        title: '',

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

        otherCategories: '',
        otherFuelType: '',
        otherColor: '',
        otherGearBox: '',
        otherCarType: '',

        exterior: [],
        guts: [],
        safety: [],
        convenience: [],

        performanceCheck: {
          type: '',
          url: ''
        }
      }
    },
    onClickCloseModal() {
      this.isModal.show = false;
      this.handleResetForm();
    },
    async onClickSaveModal() {
      try {
        if (this.isModal.type === 'CREATE') {
          await this.handleCreateCar();
        }

        if (this.isModal.type === 'EDIT') {
          await this.handleUpdateCar();
        }
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    },
    async handleCreateCar() {
      try {
        setLoading(true);

        const BODY = await this.handleInitObjectCar();

        const { status_code } = await postCreateCar(BODY);

        if (status_code === 200) {
          this.onClickCloseModal();
          await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
          Toast.success(this.$t('TOAST_MESSAGE.CREATE_CAR_SUCCESS'));
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    },
    async handleUpdateCar() {
      try {
        setLoading(true);

        const BODY = await this.handleInitObjectCar();
        BODY.car_id = this.isModal.id;

        const { status_code } = await postUpdateCar(BODY);

        if (status_code === 200) {
          this.onClickCloseModal();
          await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
          Toast.success(this.$t('TOAST_MESSAGE.UPDATE_CAR_SUCCESS'));
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    },
    async handleInitObjectCar() {
      const GET_UPDATE_IMAGE = this.handleGetListIdxImport(this.isForm.images);
      let LIST_NEW_IMAGE = [];
      
      if (GET_UPDATE_IMAGE.new_images.length > 0) {
        const IMAGES = await this.handleUploadImages(GET_UPDATE_IMAGE.new_images);
        LIST_NEW_IMAGE = replaceValueWithIndex(GET_UPDATE_IMAGE.origin_images, IMAGES, GET_UPDATE_IMAGE.new_idx_images);
      } else {
        LIST_NEW_IMAGE = getArrValueOfArr(this.isForm.images, 'url');
      }

      const PRIMARY_IMAGE = this.handleGetPrimaryImage(LIST_NEW_IMAGE);

      const PERFORMANCE_CHECK = await this.handleUploadPerformanceCheck();

      const NEW_CAR = {
        car_name: this.isForm.title,
        price: parseInt(this.isForm.price),
        license_plate: this.isForm.licensePlate,
        year_manufacture: parseInt(this.isForm.year),
        distance_driven: parseInt(this.isForm.distanceDriven),
        fuel_type: this.handleInitOther(this.isForm.fuelType, this.isForm.otherFuelType),
        cylinder_capacity: this.isForm.cylynder,
        color: this.handleInitOther(this.isForm.color, this.isForm.otherColor),
        gearbox: this.handleInitOther(this.isForm.gearbox, this.isForm.otherGearBox),
        category: this.handleInitOther(this.isForm.categories, this.isForm.otherCategories),
        performance_check: PERFORMANCE_CHECK,
        primary_image: PRIMARY_IMAGE,
        phone_contact: this.isForm.contact,
        images: LIST_NEW_IMAGE,
        car_type: this.handleInitOther(this.isForm.carType, this.isForm.otherCarType),
        seizure: this.isForm.seizure,
        mortgage: this.isForm.mortgage,
        presentation_number: this.isForm.presentationNumber,
        storage_location: this.isForm.storageLocation,
        exterior: this.isForm.exterior,
        guts: this.isForm.guts,
        safety: this.isForm.safety,
        convenience: this.isForm.convenience,
        seller_name: this.isForm.saller,
        employee_number: this.isForm.employeeId,
        affiliated_company: this.isForm.affiliatedCompany,
        business_address: this.isForm.businessAddress,
        parking_location: this.isForm.parkingLocation,
      }

      return NEW_CAR;
    },
    handleInitOther(value, other) {
      return value !== -1 ? value : other;
    },
    handleGetListIdxImport(images) {
      const len = images.length;
      let idx = 0;

      const result = [];
      const result_idx = [];

      while (idx < len) {
        if (images[idx].type_import === 'new') {
          result.push(images[idx]);
          result_idx.push(idx);
        }

        idx++;
      }

      return {
        origin_images: images,
        new_images: result,
        new_idx_images: result_idx
      };
    },
    handleGetPrimaryImage(images) {
      if (Array.isArray(images)) {
        if (images.length > 0) {
          return images[0];
        }
      }

      return null;
    },
    async handleUploadImages(images) {
      try {
        const { status_code, data } = await postImages(images);

        if (status_code === 200) {
          return data;
        }

        return [];
      } catch (err) {
        console.log(err);

        return [];
      }
    },
    async handleUploadPerformanceCheck() {
      if (this.isForm.performanceCheck) {
        if (this.isForm.performanceCheck.type === 'new') {
          try {
            const FILE = this.isForm.performanceCheck.url;

            const { status_code, data } = await postFile(FILE);

            if (status_code === 200) {
              return data.image;
            }

            return '';
          } catch (err) {
            console.log(err);

            return '';
          }
        }

        return this.isForm.performanceCheck.url;
      }
    },
    async handleDeleteOne(id) {
      setLoading(true);
      await this.handleDeleteCar([id]);
      setLoading(false);
    },
    async handleDeleteMany() {
      setLoading(true);
      this.isModalAction = false;
      await this.handleDeleteCar(this.selectRow);
      this.selectRow = [];
      setLoading(false);
    },
    async handleDeleteCar(items) {
      try {
        const BODY = {
          ids: items,
        }

        const { status_code } = await postDeleteCar(BODY);

        if (status_code === 200) {
          await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
          Toast.success(this.$t('TOAST_MESSAGE.DELETE_CAR_SUCCESS'));
        }
      } catch (error) {
        console.log(error);
      }
    },
    async hanldeSetHotsale(status = true) {
      try {
        setLoading(true);
        this.isModalAction = false;

        const BODY = {
          ids: this.selectRow,
          is_hotsale: status
        }

        const { status_code } = await postSetHotsaleCar(BODY);

        if (status_code === 200) {
          await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);
          Toast.success(this.$t('TOAST_MESSAGE.SET_HOTSALE_CAR_SUCCESS'));
        }

        this.selectRow = [];

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    onClickActions() {
      this.isModalAction = true;
    },
    onClickSetPrice() {
      this.isModalAction = false;
      this.isModalPrice = true;
    },
    handleResetModalPrice() {
      this.isUpdatePrice = {
        type: 'PRICE',
        value: null,
      }
    },
    onClickCloseModalPrice() {
      this.isModalPrice = false;
      this.handleResetModalPrice();
    },
    async onClickSaveModalPrice() {
      try {
        setLoading(true);

        const BODY = {
          ids: this.selectRow,
          type: this.isUpdatePrice.type,
          price: this.isUpdatePrice.value ? parseInt(this.isUpdatePrice.value) : 0,
        };

        const { status_code } = await posetSetPirce(BODY);

        this.isModalPrice = false;
        this.handleResetModalPrice();

        if (status_code === 200) {
          Toast.success(this.$t('TOAST_MESSAGE.SET_PRICE_CAR_SUCCESS'));
        }

        this.selectRow = [];

        await this.handleGetListCar(this.pagination.current_page, this.pagination.per_page);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    calNo(item) {
      return ((this.pagination.current_page - 1) * this.pagination.per_page) + (item.index + 1);
    },
    handleAddTypeImage(images) {
      return images.map((image) => {
        return {
          url: image,
          type_import: 'old'
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.car-management-page {
  &__filter,
  &__control {
    margin-bottom: 10px;
  }

  &__pagination {
    margin-top: 10px;
  }

  &__control {
    .btn-add-new {
      margin-right: 10px;
    }
  }

  &__table {
    height: calc(100vh - 285px);
    overflow: auto;
    
    ::v-deep table {
      thead {
        tr {
          position: sticky;
          top: 0;
          z-index: 2;

          th {
            text-align: center;
            vertical-align: middle;

            background-color: $mine-shaft;
            color: $white;
          }
        }
      }

      tbody {
        tr {
          td {
            text-align: center;
            vertical-align: middle;
            align-items: center;
            background-color: $white;

            .item-contact {
              margin: 10px 0;

              a {
                font-weight: bold;
              }
            }

            .item-action {
              margin: 10px 0;
            }

            .avatar-collaborators {
              width: 4cm;
            }
          }
        }
      }
    }
  }
}

.item-action {
  margin-bottom: 10px;

  .content-action {
    background-color: $international-orange;
    text-align: center;
    color: $white;
    padding: 15px 0;
    font-weight: 600;

    cursor: pointer;
  }
}

.item-form {
  margin-bottom: 10px;
}
</style>