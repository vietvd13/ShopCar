<template>
  <b-col>
    <b-row align-h="center">
      <b-col cols="12" xs="12" sm="12" md="5" lg="5" xl="3">
        <div class="title-content">
          <slot>
            Title
          </slot>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'TitleConent'
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.title-content {
  background-color: $main;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  color: $white;
  font-weight: bold;
  border-radius: 5px;
}
</style>