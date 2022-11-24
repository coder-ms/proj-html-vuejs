<template>
    <div class="containerx">
        <div class="sliderWrapper" @mouseover="stopScroll" @mouseleave="autoScrollJumbo()" :tabindex="0">

            <div class="prevButton">
                <p class="prevJumbo" @click="prevJumbo()">PREV</p>
            </div>
            <div class="jumboSlider">
                <div>
                    <h3>{{ HeaderSliderArray[prevNextJumbo].comment }}</h3>
                    <p>{{ HeaderSliderArray[prevNextJumbo].author }}</p>
                </div>
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
                //immagine di background scritta in scss, commenti scritti in array
                {
                    comment: '"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"',
                    author: 'WASHINGTON POST 2018'
                },
                {
                    comment: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro optio dolorem atque!',
                    author: 'WASHINGTON POST 2018'
                },
                {
                    comment: '"Lorem ipsum dolor. Porro optio dolorem atque! Tempora blanditiis ratione, corporis sint necessitatibus debitis iste"',
                    author: 'WASHINGTON POST 2018'
                },
                {
                    comment: '"Lorem ipsum dolor, molestiae ex culpa voluptatum architecto aspernatur deserunt neque numquam."',
                    author: 'WASHINGTON POST 2018'
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
    background-color: #f6f7f2;
    //border: 1px solid white;
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
            transform: rotate(90deg);
            margin: 3vh 0;

            .prevJumbo {
                color: #333333;
                font-weight: 600;
                width: 11vh;
                height: 11vh;
                border-radius: 50%;
                background: white;
                border: 1px solid #e4e4e4;
                font-size: 1.7vh;
                font-weight: 600;
                padding: 3vh;
                transform: translate(0%, 60%);
            }
        }

        .jumboSlider {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            background-image: url('../../public/img/h3-testimonials-bckgrnd.jpg');
            color: black;
            height: 50vh;

            div {
                width: 50vw;
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