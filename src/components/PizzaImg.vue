<template>
    <div class="containerx pizzaScroll col-12 col-lg-12 col-md-12 col-sm-12">
        <div v-for="(item, index) in imgGalleryMainArray" :key="item"
            class="imagesPizza col-2 col-lg-2 col-md-2 col-sm-2">

            <div>
                <img :src="item.imagePizza" alt="" />
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
                },
                {
                    imagePizza: '../../public/img/h3-product-img-5a-150x150.png',
                },
                {
                    imagePizza: '../../public/img/h3-product-img-5a-150x150.png',
                },
                {
                    imagePizza: '../../public/img/h3-product-img-5a-150x150.png',
                },
                {
                    imagePizza: '../../public/img/h3-product-img-5a-150x150.png',
                },
                {
                    imagePizza: '../../public/img/h3-product-img-6a-100x100.png',
                },
            ],
        }
    },
}
</script>


<style lang="scss" scoped>
.containerx {
    display: flex;
    height: 300px;
    overflow-y: hidden;

    .imagesPizza {
        background-color: beige;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 30px;

        img {
            width: 150px;
        }

        .pizzaSelect {
            border: 1px solid grey;
            display: flex;
            justify-content: center;
            margin: 0 44px;

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

.pizzaScroll::-webkit-scrollbar {
    width: 5px;
    height: 10px;
}

.pizzaScroll::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e4e4e4;
}

.pizzaScroll::-webkit-scrollbar-thumb {
    background: #212121;
    border-radius: 10px;
    transition: 0.5s;

    &:hover {
        background: #d5b14c;
        transition: 0.5s;
    }
}
</style>