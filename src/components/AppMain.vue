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

    <!--SCRAMBLE IMG-->
    <ScrambleImg />

    <!--CUSTOMER CARD-->
    <CostumerCard />
    <!--CLIENT TYPOLOGY-->
    <ClientTypology />

    <!--PIZZA IMAGES-->
    <div class="pizzaFlavour">
      <div class="pizzaDescription col-12 col-lg-12 col-md-12 col-sm-12">
        <h6>CHOOSE YOUR FLAVOUR</h6>
        <h2>THE BEST PIZZA MENU IN TOWN</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut blandit arcu in pretium molestie. Interdum et
          malesuada faes ac.</p>
      </div>
      <PizzaImg />
    </div>

    <!--PIZZA COMICS-->
    <PizzaComics />

    <!--RESERVATION-->
    <Reservation />

  </main>





</template>

<script>
import { store } from '../store';
import MainSlider from './MainSlider.vue';
import ImagesGalleryMain from './ImagesGalleryMain.vue';
import DescriptionMenu from './DescriptionMenu.vue';
import ScrambleImg from './ScrambleImg.vue';
import ClientTypology from './ClientTypology.vue';
import CostumerCard from './CostumerCard.vue';
import PizzaImg from './PizzaImg.vue';
import PizzaComics from './PizzaComics.vue';
import Reservation from './Reservation.vue';

export default {
  name: 'AppHeader',
  components: { MainSlider, ImagesGalleryMain, DescriptionMenu, ScrambleImg, CostumerCard, ClientTypology, PizzaImg, PizzaComics, Reservation },
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
    padding: 10px 0;
    height: 86vh;

    .image {
      //border: 1px solid grey;
      background-image: url('../../public/img/h1-img-4.jpg');
      height: 84vh;
      display: flex;
      align-items: center;
      justify-content: center;


      img {
        width: 50vh;
        height: 50vh;
      }
    }

    .description {
      height: 84vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .pizzaFlavour {
    //margin: 30px 0;
    height: 52vh;

    .pizzaDescription {
      width: 30%;
      margin: 0 auto;
      text-align: center;
      padding: 20px 0;

      h6 {
        margin-top: 20px;
        color: #333333;
        font-size: 12px;
        font-weight: 800;
      }

      h2 {
        font-size: 30px;
        font-weight: 600;
      }

      p {
        font-size: 16px;
        color: black;
      }
    }
  }
}
</style>
