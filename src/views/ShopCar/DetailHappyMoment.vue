<template>
  <div class="detail-happy-moment">
    <div class="detail-happy-moment__header">
      <TitleContent>{{
        $t("SHOP_CAR.HOME.CUSTOMER_FEEDBACK.DETAIL_TITLE")
      }}</TitleContent>
    </div>

    <b-card>
      <div class="detail-happy-moment__title">
        <h4>
          {{ HappyMoment.title }}
        </h4>
      </div>

      <div class="detail-happy-moment__writer">
        <span>
          {{ HappyMoment.writer }}
        </span>
      </div>

      <div class="detail-happy-moment__content">
        <p>{{ HappyMoment.content }}</p>
      </div>

      <div class="detail-happy-moment__images">
        <div
          class="item-image"
          v-for="image in HappyMoment.images"
          :key="image"
        >
          <b-img-lazy
            :src="`${domainImage}${image}`"
            :blank-src="require('@/assets/images/noimage.webp')"
            fluid
            thumbnail
            v-bind="{
              height: 350,
              width: 'auto',
            }"
          />
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { setLoading } from "@/utils/setLoading";
import { getDetailHappyMoment } from "@/api/modules/Home";
import TitleContent from "./components/TitleContent.vue";

export default {
  name: "DetailHappyMoment",
  components: {
    TitleContent,
  },
  data() {
    return {
      id: "",
      HappyMoment: {
        title: "",
        writer: "",
        content: "",
        images: [],
        primary_image: "",
      },
    };
  },
  computed: {
    domainImage() {
      return process.env.VUE_APP_URL_IMAGE;
    },
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      this.handleGetId();
      await this.handleGetDetailHappyMoment();
    },
    handleGetId() {
      this.id = this.$router.currentRoute.params.id || "";
    },
    async handleGetDetailHappyMoment() {
      try {
        setLoading(true);

        const BODY = {
          review_id: this.id,
        };

        const { status_code, data } = await getDetailHappyMoment(BODY);

        if (status_code === 200) {
          this.HappyMoment.id = data._id;
          this.HappyMoment.title = data.title;
          this.HappyMoment.writer = data.writer;
          this.HappyMoment.content = data.content;
          this.HappyMoment.images = data.images;
          this.HappyMoment.primary_image = data.primary_image;
        } else {
          this.HappyMoment = {
            title: "",
            writer: "",
            content: "",
            images: [],
            primary_image: "",
          };
        }

        setLoading(false);
      } catch (err) {
        this.HappyMoment = {
          title: "",
          writer: "",
          content: "",
          images: [],
          primary_image: "",
        };
        setLoading(false);
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";

.detail-happy-moment {
  margin-bottom: 10px;

  &__header {
    margin-bottom: 10px;
  }

  &__writer {
    color: $heather;
    font-style: italic;
  }

  &__content {
    margin-top: 20px;
  }

  &__images {
    .item-image {
      &:not(&:last-child) {
        margin-bottom: 10px;
      }

      text-align: center;

      img {
        height: 350px !important;
        width: auto;
      }
    }
  }
}
</style>
