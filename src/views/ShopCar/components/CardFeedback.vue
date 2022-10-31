<template>
  <div class="card-feedback">
    <div class="card-feedback__img">
      <b-img 
        :src="image" 
        fluid 
        alt="Customer Feedback Image" 
      />
    </div>

    <div class="card-feedback__desc">
      {{ feedback }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFeedback',
  props: {
    image: {
      type: String,
      required: true,
      default: '',
    },
    feedback: {
      type: String,
      required: true,
      default: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.card-feedback {
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &__img {
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  &__desc {
    width: 100%;
    min-height: 30px;
    padding: 10px;
    overflow: hidden;
    background-color: $white;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
  }

  margin-bottom: 10px;
}
</style>