<template>
    <div class="images col-12 col-lg-12 col-md-12 col-sm-12">
        <div v-for="(item, index) in imgGalleryMainArray" :key="item" class="flipCard col-3 col-lg-3 col-md-3 col-sm-3">
            <div class="flipCardInner">
                <div class="flipCardFront">
                    <img :src="item.image" alt="" />
                </div>
                <div class="flipCardBack">
                    <div class="infoCostumer">
                        <div class="blockInfo">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.role }}</p>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                    </div>
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
                    name: 'PETER ANDERSON',
                    role: 'Head Chef',
                    image: '../../public/img/h1-team-1a-700x700.jpg',
                },
                {
                    name: 'SHARON HAYES',
                    role: 'Executive Chef',
                    image: '../../public/img/h1-team-2a.jpg',
                },
                {
                    name: 'FRANK BAILEY',
                    role: 'Kitchen Porter',
                    image: '../../public/img/h1-team-4a.jpg',
                },
                {
                    name: 'CAROL SIMPSON',
                    role: 'Sous Chef',
                    image: '../../public/img/h1-team-3a.jpg',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.images {
    display: flex;
    margin-bottom: 10px;
    height: 50vh;

    .flipCard {

        .flipCardInner {
            //FLIPCARD INNER
            text-align: center;

            position: relative;
            width: 100%;
            text-align: center;
            transition: transform 1s;
            transform-style: preserve-3d;
            margin-bottom: 20px;

            &:hover {
                transform: rotateY(180deg);
            }

            .flipCardFront {
                backface-visibility: hidden;
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                }
            }

            .flipCardBack {
                border: 1px solid black;
                backface-visibility: hidden;
                position: absolute;
                color: white;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                //padding: 10px;
                transform: rotateY(180deg);
                text-align: left;
                overflow-y: auto;
                display: flex;
                justify-content: center;
                align-items: center;

                .infoCostumer {
                    background-color: #333333;
                    height: 80%;
                    width: 80%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .blockInfo {
                        height: 50%;
                        width: 50%;
                        text-align: center;

                        h3 {
                            font-weight: 700;
                            font-size: 20px;
                        }

                        p {
                            font-size: 16px;
                        }

                        i {
                            color: white;
                            margin: 0 5px;
                        }
                    }

                }
            }
        }


    }
}
</style>