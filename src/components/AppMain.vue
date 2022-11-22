<template>
  <main>
    <!--4 IMAGES-->
    <ImagesGalleryMain />

    <!--SLIDER MAIN-->
    <MainSlider />

    <!--IMG E DESCRIZIONE-->
    <div class="imageDescription col-12 col-lg-12 col-md-12 col-sm-12">
      <div class="image col-6 col-lg-6 col-md-6 col-sm-6">
        <img src="../../public/img/h1-img-7n.png" alt="Baffo">
      </div>
      <div class=" description col-6 col-lg-6 col-md-6 col-sm-6">

        <DescriptionMenu />

      </div>
    </div>
    <!--PIZZA IMAGES-->
    <div class="col-12 col-lg-12 col-md-12 col-sm-12">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, vel consequatur. Autem nemo voluptas aspernatur
      veniam distinctio doloribus ab, dolores obcaecati nesciunt, qui magnam corrupti. Facere porro iure dolorem ipsam.

      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repellendus veritatis architecto reprehenderit
      iste autem consequatur illo, voluptate nesciunt dolores consectetur qui distinctio dolor esse est delectus atque
      libero aliquid.

    </div>
    <div class="imagesPizza col-12 col-lg-12 col-md-12 col-sm-12">
      <div class="firstPizza">
        <img src="../../public/img/h3-product-img-3a-150x150.png" alt="Pizza">
      </div>
      <div class="pizzaSelect col-2 col-lg-2 col-md-2 col-sm-2">
        <img src="../../public/img/h3-product-img-3a-150x150.png" alt="Pizza">
      </div>
      <div class="pizzaSelect col-2 col-lg-2 col-md-2 col-sm-2">

        <img src="../../public/img/h3-product-img-3a-150x150.png" alt="Pizza">
        <a href="#">Sold</a>
      </div>
      <div class="pizzaSelect col-2 col-lg-2 col-md-2 col-sm-2">
        <img src="../../public/img/h3-product-img-3a-150x150.png" alt="Pizza">
      </div>
      <div class="pizzaSelect col-2 col-lg-2 col-md-2 col-sm-2">
        <img src="../../public/img/h3-product-img-3a-150x150.png" alt="Pizza">
      </div>
      <div class="lastPizza">
        <img src="../../public/img/h3-product-img-3a-150x150.png" alt="Pizza">
      </div>
    </div>
  </main>





</template>

<script>
import { store } from '../store';
import MainSlider from './MainSlider.vue';
import ImagesGalleryMain from './ImagesGalleryMain.vue';
import DescriptionMenu from './DescriptionMenu.vue';

export default {
  name: 'AppHeader',
  components: { MainSlider, ImagesGalleryMain, DescriptionMenu },
  data() {
    return {
      store
    }
  },

  methods: {

  },

  props: {

  }
}
</script>


<style lang="scss" scoped>
main {
  .imageDescription {
    display: flex;
    flex-wrap: wrap;

    .image {
      border: 1px solid grey;
      background-image: url('../../public/img/h1-img-4.jpg');
      height: 800px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 60%;
      }
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .imagesPizza {
    display: flex;
    flex-wrap: wrap;
    overflow-x: hidden;


    .pizzaSelect {
      border: 1px solid grey;
      display: flex;
      justify-content: center;
      margin: 0 40px;

      a {
        text-decoration: none;
        color: white;
        background-color: rgb(255, 102, 0);
        height: 40px;
        width: 40px;
        text-align: center;
        padding: 12px 0;
        border-radius: 50%;
        transform: translate(-250%);
        text-transform: uppercase;
        font-size: 12px;
      }

      img {
        margin: 0 auto;
      }
    }

    .firstPizza {
      border: 1px solid grey;
      transform: translate(-30%);
    }

    .lastPizza {
      border: 1px solid grey;
      transform: translate(30%);
    }
  }
}
</style>
