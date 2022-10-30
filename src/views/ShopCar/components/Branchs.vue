<template>
  <b-card>
    <b-row>
      <b-col 
        v-for="(branch, idx) in ListBranch" 
        :key="idx" 
        cols="3" xs="3" sm="3" md="3" lg="1" xl="1"
      >
        <div class="card-branch">
          <div class="card-branch__logo">
            <b-img
              :src="branch.image"
              fluid
              alt="Logo"
            />
          </div>
          <div class="card-branch__branch-name">
            <span>{{ branch.text }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'BranchsHome',
  data() {
    return {
      ListBranch: [
        {
          value: 'MEC',
          image: 'https://mercedes-showroom.com/wp-content/uploads/2019/08/mec-logo-300x300.png',
          text: 'Mercedes',
        },
        {
          value: 'MEC',
          image: 'https://mercedes-showroom.com/wp-content/uploads/2019/08/mec-logo-300x300.png',
          text: 'Mercedes',
        },
        {
          value: 'MEC',
          image: 'https://mercedes-showroom.com/wp-content/uploads/2019/08/mec-logo-300x300.png',
          text: 'Mercedes',
        },
        {
          value: 'MEC',
          image: 'https://mercedes-showroom.com/wp-content/uploads/2019/08/mec-logo-300x300.png',
          text: 'Mercedes',
        },
        {
          value: 'MEC',
          image: 'https://mercedes-showroom.com/wp-content/uploads/2019/08/mec-logo-300x300.png',
          text: 'Mercedes',
        },
        {
          value: 'MEC',
          image: 'https://mercedes-showroom.com/wp-content/uploads/2019/08/mec-logo-300x300.png',
          text: 'Mercedes',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/variables';

.card-branch {
  text-align: center;
  margin: 5px 0;

  &__logo {
    img {
      height: 50px;
    }

    margin-bottom: 10px;
  }

  &__branch-name {
    span {
      font-size: 12px;
      color: $text;
      font-weight: bold;
    }
  }

  &:hover {
    cursor: pointer;

    span {
      color: $main;
    }
  }
}
</style>