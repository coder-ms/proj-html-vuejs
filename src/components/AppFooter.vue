<template>
    <footer>
        <div class="footerSec1 col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="sectionOne col-12 col-lg-12 col-md-12 col-sm-12">
                <div class="links col-7 col-lg-7 col-md-7 col-sm-7">
                    <div class="topFooter col-4 col-lg-4 col-md-4 col-sm-4">
                        <!--<div v-for="(item, index) in MenuArray" :key="item"-->
                        <ul>
                            <li>
                                <h4>{{ footerSectionOne[0].titleSectionOne }}</h4>
                            </li>
                            <li v-for="item in footerSectionOne[0].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li v-for="item in footerSectionOne[1].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li v-for="item in footerSectionOne[2].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li v-for="item in footerSectionOne[3].linkSectionOne">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="topFooter col-4 col-lg-4 col-md-4 col-sm-4">
                        <ul>
                            <li>
                                <h4>{{ footerSectionOne[4].titleSectionOne }}</h4>
                            </li>
                            <li>
                                <h5>{{ footerSectionOne[4].titleSectionTwo }}</h5>
                            </li>
                            <li v-for=" item in footerSectionOne[4].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li>
                                <h5>{{ footerSectionOne[5].titleSectionOne }}</h5>
                            </li>
                            <li v-for=" item in footerSectionOne[5].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li>
                                <h5>{{ footerSectionOne[6].titleSectionOne }} <span>*</span></h5>
                            </li>
                            <li v-for=" item in footerSectionOne[6].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li>
                                <h5>{{ footerSectionOne[7].titleSectionOne }}</h5>
                            </li>
                            <li v-for=" item in footerSectionOne[7].linkSectionOne">{{ item }}</li>
                        </ul>
                        <ul>
                            <li v-for=" item in footerSectionOne[8].linkSectionOne">
                                <h5>
                                    {{ item }}
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </h5>

                            </li>
                        </ul>
                    </div>
                    <div class="topFooter col-4 col-lg-4 col-md-4 col-sm-4">
                        <p>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AND AUTHENTIC, WELL BAKED SLICE OF PIZZA</p>

                    </div>
                    <div class="bottomFooter col-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="createdBy col-10 col-lg-10 col-md-10 col-sm-10">
                            <ul>
                                <li>
                                    <h5>{{ footerSectionOne[9].titleSectionOne }}</h5>
                                </li>
                                <li v-for=" item in footerSectionOne[9].linkSectionOne">{{ item }}
                                    <i class="fa-solid fa-heart"></i>
                                    <span>by</span>
                                    <span class="nameBrandFooter">Qode Interactive</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bollinoDocg col-2 col-lg-2 col-md-2 col-sm-2">
                            <img :src="footerSectionOne[10].titleSectionOne" alt="Baffo">
                        </div>

                    </div>
                </div>
                <div class="imageComic col-5 col-lg-5 col-md-5 col-sm-5">
                    <img src="../../public/img/footer-img-1.jpg" alt="Baffo">
                </div>
            </div>

        </div>
    </footer>

</template>

<script>
export default {

    name: 'AppFooter',
    data() {
        return {
            footerSectionOne: [
                {
                    titleSectionOne: 'FIND OUR RESTAURANTS',
                    linkSectionOne: ['1614 E. Bell Rd #104', 'Salerno, AZ 85022', '(602)867-1010']
                },
                {
                    linkSectionOne: ['204 Piazza E. Pizzatta Tommaso', 'Sorrento, AZ 85022', '(358)867-1010']
                },
                {
                    linkSectionOne: ['Vale Puglia 54', 'Torre3 del greco, AZ 85022', '(359)867-1010']
                },
                {
                    linkSectionOne: ['Corso Itali AA', 'Naples, AZ 85022', '(909)867-1010']
                },
                {
                    titleSectionOne: 'WORKING HOURS',
                    titleSectionTwo: 'MONDAY',
                    linkSectionOne: ['Kitchen Closed']
                },
                {
                    titleSectionOne: 'TUESDAY UNTIL FRIDAY',
                    linkSectionOne: ['9:00-22:00']
                },
                {
                    titleSectionOne: 'SATURDAY',
                    linkSectionOne: ['Saturday 11am to Midnight']
                },
                {
                    titleSectionOne: 'SUNDAY',
                    linkSectionOne: ['9:00-22:00']
                },
                {
                    linkSectionOne: ['FOLLOW US: ']
                },
                {
                    linkSectionOne: ['Created with ']
                },
                {
                    titleSectionOne: '../../public/svg/svg-11.svg',
                },
            ]
        }
    },

}
</script>


<style lang="scss" scoped>
footer {
    margin-top: 10px;

    .footerSec1 {
        display: flex;

        .sectionOne {
            display: flex;
            justify-content: space-between;
            height: 69vh;
            position: relative;
            overflow: hidden;
            width: 100%;
            margin: 0 auto;


            .links {
                background-color: black;
                display: flex;
                flex-wrap: wrap;

                .topFooter {
                    height: 75%;
                    padding: 10px 0;

                    ul {
                        list-style: none;
                        color: grey;
                        font-size: 16px;
                        margin-right: 20px;

                        h4 {
                            font-size: 20px;
                            color: rgb(179, 116, 0);
                            text-transform: uppercase;
                            margin: 12px 0;
                            font-weight: 700;
                        }

                        li {
                            padding: 2px 0;

                            h5 {
                                color: rgb(179, 116, 0);
                                font-weight: 700;
                                font-size: 18px;

                                span {
                                    color: #333333;
                                }
                            }

                            i {
                                color: white;
                                margin-right: 5px;
                            }
                        }
                    }

                }

                .bottomFooter {
                    height: 25%;
                    color: rgb(179, 116, 0);
                    font-weight: 700;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .createdBy {
                        height: 100%;
                        display: flex;
                        align-items: center;

                        ul {
                            list-style: none;

                            i {
                                color: rgb(179, 116, 0);
                                margin-right: 5px;
                            }

                            span {
                                color: rgb(179, 116, 0);
                            }

                            .nameBrandFooter {
                                color: rgb(1, 46, 1);
                                margin-left: 5px;
                            }
                        }
                    }


                    .bollinoDocg {
                        height: 100%;
                    }

                }

                p {
                    margin: 30% 0;
                    font-size: 24px;
                    font-weight: 700;
                }

                img {
                    margin-top: 70%;
                    margin-left: 50%;
                    //filter: blur(100%);
                    height: 10%;
                    width: 40%;
                }
            }
        }
    }

    .imageComic {
        img {
            width: 50vw;
        }
    }
}
</style>