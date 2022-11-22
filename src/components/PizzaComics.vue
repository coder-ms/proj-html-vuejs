<template>
    <div class="containerx col-12 col-lg-12 col-md-12 col-sm-12">
        <div class="imageDescription col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="col-6 col-lg-6 col-md-6 col-sm-6">
                <div class="descriptionx col-6 col-lg-6 col-md-6 col-sm-6">
                    <div></div>
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
            <div class="imageComic col-6 col-lg-6 col-md-6 col-sm-6">
                <img src="../../public/img/h3-img-5a.jpg" alt="Baffo">
            </div>
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
                    dollar: '$10',
                    combo: 'combo piccolo',
                },
                {
                    dollar: '$20',
                    combo: 'combo medio',
                },
                {
                    dollar: '$30',
                    combo: 'combo grande',
                },
            ],
        }
    },

}
</script>


<style lang="scss" scoped>
.containerx {
    display: flex;


    .imageDescription {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;

        div {
            .descriptionx {
                background-color: white;
                border: 1px solid grey;
                width: 60%;
                margin: 0 auto;


                h2 {
                    font-size: 30px;
                    font-weight: 700;
                }

                h5 {
                    font-size: 18px;
                }

                h3 {
                    color: rgb(209, 1, 1);
                    font-size: 25px;
                    font-weight: 600;
                    margin: 20px 0;

                    span {
                        color: black;
                        font-size: 25px;
                        font-weight: 600;
                        text-transform: uppercase;
                    }
                }

                p {
                    color: grey;
                    padding-left: 53px;
                    font-size: 16px;
                }
            }
        }

        .imageComic {
            img {
                width: 100%;
            }
        }

    }
}
</style>