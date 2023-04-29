<template>
    <div class="category-management">
        <div class="category-management__control text-right mb-2">
            <b-button 
                class="btn-app"
                @click="onClickOpenModal"
            >
                <i class="fas fa-plus-circle mr-2" />
                {{ $t('APP.BUTTON_ADD') }}
            </b-button>
        </div>

        <div class="category-management__table">
            <b-table
                :items="items"
                :fields="headerTable"
                bordered
                show-empty
                no-border-collapse
            >
                <template #cell(image)="image">
                    <b-img-lazy
                        thumbnail
                        fluid
                        :src="`${domainImage}${image.item.image}`"
                        :blank-src="require('@/assets/images/noimage.webp')"
                        :alt="image.item.category_name"
                        style="height: 100px; width: 100px;"
                    />
                </template>

                <template #cell(actions)="actions">
                    <b-button
                        variant="warning"
                        @click="onClickEdit(actions.item)"
                        class="mb-2"
                    >
                        {{ $t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_TEXT_EDIT') }}
                    </b-button>

                    <b-button 
                        variant="danger"
                        class="btn-danger"
                        @click="onClickDelete(actions.item._id)"
                    >
                        {{ $t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_TEXT_DELETE') }}
                    </b-button>
                </template>

                <template #empty>
                    <div class="text-center">
                        {{ $t('APP.TABLE_NO_DATA') }}
                    </div>
                </template>
            </b-table>
        </div>

        <b-modal
            v-model="isModal"
            :title="$t('ROUTER.CATEGORY_MANAGEMENT')"
            body-class="modal-body-category"
            footer-class="modal-footer-category"
            size="lg"
            scrollable
        >
            <template #default>
                <div class="mb-2">
                    <label for="input-category">
                        {{ $t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_CATEGORY') }}
                    </label>
                    <b-form-input 
                        id="input-category"
                        v-model="isForm.category_name"
                    />
                </div>

                <div class="mb-2">
                    <label>
                        {{ $t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.CATEGORY_DETAIL') }}
                    </label>
                    <CategoryTree
                        :items="isForm.category_detail"
                        @change="handleChangCategoryTree"
                    />
                </div>

                <div class="mb-2">
                    <label for="input-image">
                        {{ $t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_IMAGE') }}
                    </label>

                    <b-form-file
                        v-model="isForm.image"
                        :browse-text="$t('APP.IMPORT_IMAGE')"
                        :placeholder="$t('APP.IMPORT_IMAGE')"
                        :drop-placeholder="$t('APP.IMPORT_IMAGE')"
                        @input="handleChangeImportImage"
                    />
                </div>

                <div v-if="isForm.image_preview" class="text-center">
                    <b-img-lazy
                        thumbnail
                        fluid
                        :src="isForm.image_preview"
                        :blank-src="require('@/assets/images/noimage.webp')"
                        style="height: 100px; margin-top: 10px"
                    />
                </div>
            </template>

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
    </div>
</template>

<script>
import Toast from '@/toast';
import { setLoading } from '@/utils/setLoading';

import { postImages } from '@/api/modules/Upload';

import { 
    getListCategoriesManagement,
    postAddCategoriesManagement,
    postEditCategoriesManagement,
    postDeleteCategoriesManagement 
} from '@/api/modules/Dashboard';

import CategoryTree from '@/components/CategoryTree.vue';

export default {
    name: 'CategoryManagement',
    components: {
        CategoryTree,
    },
    computed: {
        domainImage() {
            return process.env.VUE_APP_URL_IMAGE;
        },
        headerTable() {
            return [
                { key: 'category_name', label: this.$t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_CATEGORY'), sortable: true, thClass: 'text-center th-category', tdClass: 'text-center base-td' },
                { key: 'image', label: this.$t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_IMAGE'), sortable: false, thClass: 'text-center th-image', tdClass: 'text-center base-td' },
                { key: 'actions', label: this.$t('DASHBOARD.CAR.CATEGORY_MANAGEMENT.TABLE_ACTIONS'), sortable: false, thClass: 'text-center th-actions', tdClass: 'text-center base-td' },
            ]
        }
    },
    data() {
        return {
            items: [],
            isAction: null,
            isModal: false,
            isForm: {
                category_name: '',
                image: null,
                image_preview: null,
                category_detail: [],
            }
        }
    },
    created () {
        this.initData();
    },
    methods: {
        async initData() {
            setLoading(true);

            await this.handleGetListCategory();

            setLoading(false);
        },
        handleChangCategoryTree(value) {
            if (Array.isArray(value)) {
                this.isForm.category_detail = value;
            } else {
                this.isForm.category_detail = [];
            }
        },
        async handleGetListCategory() {
            try {
                const { status_code, data } = await getListCategoriesManagement();

                if (status_code === 200) {
                    this.items = data;
                } else {
                    this.items = [];
                }

                setLoading(false);
            } catch (error) {
                this.items = [];
                console.log(error);
                setLoading(false);
            }
        },
        onClickOpenModal() {
            this.isAction = "CREATE";

            this.handleResetModal();
            this.isModal = true;
        },
        onClickCloseModal() {
            this.isModal = false;
        },
        handleResetModal() {
            const FORM = {
                category_name: '',
                image: null,
                image_preview: null
            };

            this.isForm = FORM;
        },
        onClickSaveModal() {
            if (this.isAction === "CREATE") {
                this.handleAddCategory();
            }

            if (this.isAction === "EDIT") {
                this.handleEditCategory();
            }
        },
        async handleAddCategory() {
            try {
                setLoading(true);
                
                const IMG_IMPORT = [{ url: this.isForm.image }];

                const images = await this.handleUploadImages(IMG_IMPORT);
                const _images = images.join('');

                const BODY = {
                    category_name: this.isForm.category_name,
                    images: _images,
                    category_detail: this.isForm.category_detail
                };

                const valid = this.validCategory(BODY);

                if (!valid.status) {
                    this.isModal = false;
                    setLoading(false);
                    Toast.warning(this.$t(`TOAST_MESSAGE.${valid.message}`));

                    return;
                }

                const { status_code } = await postAddCategoriesManagement(BODY);

                await this.handleGetListCategory();
                

                if (status_code === 200) {
                    Toast.success(this.$t('TOAST_MESSAGE.ADD_CATEGORY_SUCCESS'));
                } else {
                    Toast.warning(this.$t('TOAST_MESSAGE.ADD_CATEGORY_ERROR'));
                }

                this.isModal = false;

                setLoading(false);
            } catch (error) {
                console.log(error);
                this.isModal = false;
                setLoading(false);
            }
        },
        async handleEditCategory() {
            try {
                setLoading(true);

                let _images = this.isForm.image_preview;

                if (this.isForm.image) {
                    const IMG_IMPORT = [{ url: this.isForm.image }];

                    const images = await this.handleUploadImages(IMG_IMPORT);
                    _images = images.join('');
                }

                const BODY = {
                    category_name: this.isForm.category_name,
                    images: _images,
                    category_detail: this.isForm.category_detail
                };

                const valid = this.validCategory(BODY);

                if (!valid.status) {
                    this.isModal = false;
                    setLoading(false);
                    Toast.warning(this.$t(`TOAST_MESSAGE.${valid.message}`));

                    return;
                }

                const { status_code } = await postEditCategoriesManagement(BODY);

                await this.handleGetListCategory();

                if (status_code === 200) {
                    Toast.success(this.$t('TOAST_MESSAGE.EDIT_CATEGORY_SUCCESS'));
                } else {
                    Toast.warning(this.$t('TOAST_MESSAGE.EDIT_CATEGORY_SUCCESS'));
                }

                this.isModal = false;

                setLoading(false);
            } catch (error) {
                console.log(error);
                this.isModal = false;
                setLoading(false);
            }
        },
        validCategory(category) {
            if (!category) {
                return {
                    status: false,
                    message: "ERROR_CATEGORY_IS_EMPTY",
                };
            }

            if (!category.category_name) {
                return {
                    status: false,
                    message: "ERROR_CATEGORY_NAME_IS_EMPTY",
                };
            }

            if (!category.images) {
                return {
                    status: false,
                    message: "ERROR_CATEGORY_IMAGE_IS_EMPTY",
                };
            }

            return {
                status: true,
                message: "PASS",
            };
        },
        handleChangeImportImage() {
            this.isForm.image_preview = URL.createObjectURL(this.isForm.image);
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
        async onClickDelete(id) {
            try {
                setLoading(true);

                const BODY = {
                    category_id: id,
                }

                const { status_code } = await postDeleteCategoriesManagement(BODY);

                if (status_code === 200) {
                    Toast.success(this.$t('TOAST_MESSAGE.DELETE_CATEGORY_SUCCESS'));
                } else {
                    Toast.warning(this.$t('TOAST_MESSAGE.DELETE_CATEGORY_ERROR'));
                }

                await this.handleGetListCategory();

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        },
        onClickEdit(item) {
            this.isAction = "EDIT";

            this.handleAssignModel(item);

            this.isModal = true;
        },
        handleAssignModel(data) {
            const { category_name, image, category_detail } = data;

            this.isForm.category_name = category_name;
            this.isForm.image_preview = `${this.domainImage}${image}`;
            this.isForm.category_detail = category_detail;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.category-management {
    &__table {
        height: calc(100vh - 170px);
        overflow: auto;

        ::v-deep table {
        margin-bottom: 0;

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

                .th-actions {
                    width: 150px;
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
                }
            }
        }
        }
    }
}
</style>