<template>
    <div class="containerx col-12 col-lg-12 col-md-12 col-sm-12">
        <div class="imageDescription col-6 col-lg-6 col-md-6 col-sm-6">
            <div class="col-6 col-lg-6 col-md-6 col-sm-6">
                <div>
                    <h6>MADE WITH LOVE</h6>
                    <h2>DELISH PIZZA DEALS</h2>
                </div>

                <div v-for="(item, index) in MenuArray" :key="item"
                    class="descriptionx col-8 col-lg-8 col-md-8 col-sm-8">
                    <div class="col-2 col-lg-2 col-md-2 col-sm-2">
                        <h3>{{ item.day }}</h3>
                        <h4>{{ item.month }}</h4>
                    </div>
                    <div class="col-10 col-lg-10 col-md-10 col-sm-10">
                        <h3>{{ item.description }}</h3>
                        <p><i class="fa-solid fa-location-dot"></i>{{ item.month }}</p>
                    </div>
                    <!--
                    <h2>SPECIALS*</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesent ut.</h5>
                    <div v-for="(item, index) in MenuArray" :key="item">
                        <h3>{{ item.dollar }} <span> {{ item.combo }} </span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui.</p>
                    </div>
                    -->
                </div>
            </div>
        </div>
        <div class="imageComic col-6 col-lg-6 col-md-6 col-sm-6">
            <img src="../../public/img/h3-img-5a.jpg" alt="Baffo">
        </div>
    </div>




</template>

<script>
export default {

    name: 'PizzaComics',
    data() {
        return {
            MenuArray: [
                {
                    day: '02',
                    month: 'NOV',
                    description: 'TRADITIONAL NEAPOLITAN PIES IN KYOTO PIZZA MERCATO',
                    address: 'combo piccolo',
                },
                {
                    day: '03',
                    month: 'NOV',
                    description: 'TERRAZZA PATIO DINING SPACE OPENING THIS WEEKEND',
                    address: '',
                },
                {
                    day: '05',
                    month: 'NOV',
                    description: 'SIENNA PRIVATE DINING ROOM WITH STEPHANE BRUNN',
                    address: 'combo piccolo',
                },
            ],
        }
    },

}
</script>


<style lang="scss" scoped>
.containerx {
    display: flex;
    // overflow: hidden;


    .imageDescription {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        border: 1px solid white;

        div {


            h3 {
                color: white;
                font-size: 30px;
                font-weight: 700;
            }

            h4 {
                color: rgb(209, 1, 1);
                font-size: 12px;
            }

            .descriptionx {
                border-bottom: 1px dashed gold;
                width: 100%;
                display: flex;

                h3 {
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                }

                p {
                    color: rgb(209, 1, 1);
                    font-size: 12px;
                }
            }
        }

    }

    .imageComic {
        img {
            width: 100%;
        }
    }
}
</style>