<template>
  <b-row>
    <b-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
      <b-carousel
        :interval="4000"
        controls
        indicators
        background="#F1F1F1"
        img-width="1024"
        img-height="360"
        style="margin-bottom: 10px;"
      >
        <b-carousel-slide
          img-src="https://di-uploads-pod16.dealerinspire.com/rednolandinfiniti/uploads/2021/06/21TDI_IBBw019banner-1024x360.jpg"
        />
        <b-carousel-slide
          img-src="https://blog.certifiedautoplex.com/wp-content/uploads/2021/02/certified-2017-SUPERBOWL-AMG-HERO-D_o-1038x365-1-1024x360.jpg"
        />
        <b-carousel-slide
          img-src="https://di-uploads-development.dealerinspire.com/alfaromeoofcincinnati/uploads/2018/02/2018-Giulia-3-1024x360.jpg"
        />
        <b-carousel-slide
          img-src="https://di-uploads-pod6.dealerinspire.com/bmwofjackson/uploads/2022/04/BMW-X7-A0258559-R1-7998x4498-HZ-16by9-1024x360.jpg"
        />
      </b-carousel>
    </b-col>

    <b-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
      <b-row>
        <b-col>
          <b-carousel
            background="#F1F1F1"
            img-width="1024"
            img-height="360"
            style="margin-bottom: 10px;"
          >
            <b-carousel-slide
              img-src="https://jct.bsdev.co.uk/wp-content/uploads/2020/03/vw-arteon-1024x360.jpg"
            />
          </b-carousel>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-carousel
            background="#F1F1F1"
            img-width="1024"
            img-height="360"
            style="margin-bottom: 10px;"
          >
            <b-carousel-slide
              img-src="https://live.dealer-asset.co/images/ie1039/siteassets/CABCommercialCentre.jpg?s=1024"
            />
          </b-carousel>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'CarouselHome'
}
</script>