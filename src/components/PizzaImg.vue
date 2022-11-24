<template>
    <div class="containerx pizzaScroll col-12 col-lg-12 col-md-12 col-sm-12">

        <div v-for="(item, index) in imgGalleryMainArray" :key="item"
            class="imagesPizza col-2 col-lg-2 col-md-2 col-sm-2">
            <div class="pizzaBlock" v-if="item.pizzaQuantity == true">
                <div class="soldContainer">
                    <a class="sold" href="#sold">SOLD</a>
                </div>

                <div class="pizza">
                    <img :src="item.imagePizza" alt="" />
                    <h5>{{ item.pizzaTypology }}</h5>
                    <span v-if="item.originalPrice" class="originalPrice">{{ item.originalPrice }}&nbsp;</span>
                    <span class="currentPrice">{{ item.pizzaPrice }}</span>
                </div>
            </div>
            <div class="pizzaBlock" v-else>
                <div class="soldContainerx">

                </div>
                <div class="pizza">
                    <img :src="item.imagePizza" alt="" />
                    <h5>{{ item.pizzaTypology }}</h5>
                    <span v-if="item.originalPrice" class="originalPrice">{{ item.originalPrice }}&nbsp;</span>
                    <span class="currentPrice">{{ item.pizzaPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImagesGalleryMain',
    data() {
        return {
            imgGalleryMainArray: [
                {
                    imagePizza: '../../public/img/h3-product-img-1a-100x100.png',
                    pizzaTypology: 'BISMARK',
                    originalPrice: '$35.00',
                    pizzaPrice: '$30.00',
                    pizzaQuantity: false,
                },
                {
                    imagePizza: '../../public/img/h3-product-img-2a-150x150.png',
                    pizzaTypology: 'FIORI DI ZUCCA',
                    pizzaPrice: '$7.00-$50.00',
                    pizzaQuantity: false,
                },
                {
                    imagePizza: '../../public/img/h3-product-img-3a-150x150.png',
                    pizzaTypology: 'VALDOSTANA',
                    pizzaPrice: '$55.00',
                    pizzaQuantity: true, //'sold',
                },
                {
                    imagePizza: '../../public/img/h3-product-img-4a-150x150.png',
                    pizzaTypology: 'PIZZA TARTUFATA',
                    pizzaPrice: '$45.00',
                    pizzaQuantity: false,
                },
                {
                    imagePizza: '../../public/img/h3-product-img-5a-150x150.png',
                    pizzaTypology: 'FRANCESCANA',
                    pizzaPrice: '$25.00',
                    pizzaQuantity: false,
                },
                {
                    imagePizza: '../../public/img/h3-product-img-6a-100x100.png',
                    pizzaTypology: 'CAMPAGNOLA',
                    pizzaPrice: '$50.00-$95.00 ',
                    pizzaQuantity: false,
                },
            ],
        }
    },
}
</script>


<style lang="scss" scoped>
.containerx {
    display: flex;
    height: 31.5vh;
    overflow-y: hidden;

    .imagesPizza {
        margin: 0 30px auto;
        height: 32vh;
        //position: absolute;

        .pizzaBlock {
            .soldContainer {
                background-color: #333333;
                height: 5vh;
                width: 5vh;
                border-radius: 50%;
                transform: translate(420%, 100%) rotate(-22.5deg);
                display: flex;
                justify-content: center;
                align-items: center;
                text-transform: uppercase;
                font-size: 1.25vh;
                font-weight: 600;

                .sold {
                    text-decoration: none;
                    color: white;
                }
            }

            .soldContainerx {
                background-color: transparent;
                height: 5vh;
                width: 5vh;
            }

            .pizza {
                text-align: center;

                img {
                    margin: 10px 25%;
                    height: 15vh;
                    width: 15vh;
                }


                h5 {
                    color: rgb(179, 116, 0);
                    font-size: 1.6vh;
                    font-weight: 600;
                }

                .originalPrice {
                    color: lightgrey;
                    font-size: 1.4vh;
                    text-decoration: line-through;
                }

                .currentPrice {
                    color: #333333;
                    font-size: 1.4vh;
                    font-weight: 600;
                }
            }
        }

    }
}


.pizzaScroll::-webkit-scrollbar {
    width: 2vh;
    height: 1.5vh;
}

.pizzaScroll::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e4e4e4;
}

.pizzaScroll::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
    transition: 0.5s;

    &:hover {
        background: #d5b14c;
        transition: 0.5s;
    }
}
</style>