<template>
    <div class="containerx col-12 col-lg-12 col-md-12 col-sm-12">
        <div class="rowOne col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="colOne col-1 col-lg-1 col-md-1 col-sm-1">

            </div>
            <div class="colTwo col-10 col-lg-10 col-md-10 col-sm-10">

            </div>
            <div class="colThree col-1 col-lg-1 col-md-1 col-sm-1">

            </div>
        </div>
        <div class="rowTwo col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="colOneBig col-1 col-lg-1 col-md-1 col-sm-1">

            </div>
            <div class="colTwoBig col-10 col-lg-10 col-md-10 col-sm-10">
                <div class="motto col-3 col-lg-3 col-md-3 col-sm-3">
                    <p>GO AHEAD AND BUILD YOUR OWN PIZZA, WE WON'T JUDGE!</p>
                </div>
            </div>
            <div class="colThreeBig col-1 col-lg-1 col-md-1 col-sm-1">

            </div>
        </div>
        <div class="rowThree col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="colOne col-1 col-lg-1 col-md-1 col-sm-1">

            </div>
            <div class="colTwo col-10 col-lg-10 col-md-10 col-sm-10">

            </div>
            <div class="colThree col-1 col-lg-1 col-md-1 col-sm-1">

            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'ScrambleImg',
    data() {
        return {

        }
    },

}
</script>


<style lang="scss" scoped>
.containerx {
    height: 64vh;
    margin: 10px 0;
    //overflow: hidden;

    .rowOne {
        display: flex;
        height: 16vh;

        .colOne {
            height: 16vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            // Stessa funzione di transform: translate(), ma per background-image
            background-position: bottom right;
        }

        .colTwo {
            height: 16vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: bottom;
            overflow: visible;
        }

        .colThree {
            height: 16vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: bottom left;
        }
    }

    .rowTwo {
        display: flex;
        height: 32vh;

        .colOneBig {
            height: 32vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: top right;
        }

        .colTwoBig {
            height: 32vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: center top -30px;
            overflow: visible;

            .motto {
                margin: 0 15%;
                display: flex;
                justify-content: center;
                overflow: visible;
                height: 40vh;
                transform: translate(6%, -9%);


                p {
                    font-size: 5vh;
                    color: white;
                    font-weight: 600;
                    line-height: 2;
                }
            }
        }


        .colThreeBig {
            height: 32vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: left -10px;
        }
    }

    .rowThree {
        display: flex;
        height: 16vh;

        .colOne {
            height: 16vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: bottom -330px right;
        }

        .colTwo {
            height: 16vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: top -600px center;
            overflow: visible;
        }

        .colThree {
            height: 16vh;
            background-image: url('../../public/img/h3-background-img.jpg');
            background-position: left bottom -340px;
        }
    }
}
</style>