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
                //immagine di background, scritte in array
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

    background-color: white;
    //border: 1px solid white;
    height: 625px;


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

            .prevJumbo {
                color: rgb(255, 102, 0);
                font-size: 12px;
                font-weight: 600;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: white;
                border: 1px solid grey;
                padding: 15px 20px;
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
                height: 575px;
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
                color: rgb(255, 102, 0);
                font-size: 12px;
                font-weight: 600;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background: white;
                border: 1px solid grey;
                color: rgb(255, 102, 0);
                font-size: 12px;
                font-weight: 600;
                padding: 15px 20px;
                transform: translate(0%, 60%);
            }
        }
    }

}
</style>