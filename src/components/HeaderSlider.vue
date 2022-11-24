<template>
    <div class="containerx">
        <div class="sliderWrapper" @mouseover="stopScroll" @mouseleave="autoScrollJumbo()" :tabindex="0">

            <div class="prevButton">
                <p class="prevJumbo" @click="prevJumbo()">PREV</p>
            </div>
            <div class="jumboSlider">
                <img :src="HeaderSliderArray[prevNextJumbo].image" alt="" />
            </div>

            <div class="nextButton">
                <p class="nextJumbo" @click="nextJumbo()">NEXT</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {

    name: 'HeaderSlider',
    data() {
        return {
            prevNextJumbo: 0,
            HeaderSliderArray: [
                {
                    image: '../../public/img/h3-rev-img-1.png',
                },
                {
                    image: '../../public/img/h3-rev-img-2.png',
                },
                {
                    image: '../../public/img/h3-rev-img-3.png',
                },
                {
                    image: '../../public/img/h3-rev-img-4.png',
                },
                {
                    image: '../../public/img/h3-rev-img-5.png',
                },
                {
                    image: '../../public/img/h3-rev-img-6.png',
                },

            ],
        }
    },
    props: {

    },
    methods: {
        // jumbo precedente
        prevJumbo() {
            this.prevNextJumbo--;
            if (this.prevNextJumbo < 0) {
                this.prevNextJumbo = this.HeaderSliderArray.length - 1;
            }
        },
        // jumbo successivo
        nextJumbo() {
            this.prevNextJumbo++;
            if (this.prevNextJumbo > this.HeaderSliderArray.length - 1) {
                this.prevNextJumbo = 0;
            }
        },
        // scroll con intervallo di 7000ms
        autoScrollJumbo() {

            this.autoscroll = setInterval(() => {
                this.nextJumbo();
            }, 2000)
        },
        //stop scroll
        stopScroll() {
            clearInterval(this.autoscroll);
        }
    },
    mounted() {
        this.autoScrollJumbo();
    }
}



</script>

<style lang="scss" scoped>
.containerx {
    background-color: black;
    height: 54vh;
    padding: 10px 0;


    .sliderWrapper {
        display: flex;
        justify-content: space-between;
        overflow-x: hidden;


        .prevButton {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 1000;
            transform: rotate(90deg); //translate(-20%, -80%);
            margin: 3vh 0;

            .prevJumbo {
                color: #333333;
                font-weight: 600;
                width: 11vh;
                height: 11vh;
                border-radius: 50%;
                background: white;
                //border: 1px solid grey;
                font-size: 1.7vh;
                font-weight: 600;
                padding: 3vh;
                transform: translate(0%, 60%);
            }
        }

        .jumboSlider {
            width: 100%;
            //border: 1px solid white;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                padding-top: 80px;
                height: 50vh;
            }
        }

        .nextButton {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 1000;
            transform: rotate(270deg); //translate(-20%, -80%);

            .nextJumbo {
                color: #333333;
                font-weight: 600;
                width: 11vh;
                height: 11vh;
                border-radius: 50%;
                background: white;
                border: 1px solid grey;
                font-size: 1.7vh;
                font-weight: 600;
                padding: 3vh;
                transform: translate(0%, 60%);
            }
        }
    }

}
</style>