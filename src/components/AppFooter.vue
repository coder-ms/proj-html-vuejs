<template>
    <footer>
        <div class="footerSec1 col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="sectionOne col-6 col-lg-6 col-md-6 col-sm-6">
                <div class="links col-6 col-lg-6 col-md-6 col-sm-6">
                    <div class="col-4 col-lg-4 col-md-4 col-sm-4">
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
                    <div class="col-4 col-lg-4 col-md-4 col-sm-4">
                        <ul>
                            <li>
                                <h4>{{ footerSectionOne[4].titleSectionOne }}</h4>
                            </li>
                            <li>
                                <h5>{{ footerSectionOne[4].titleSectionOne }}</h5>
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
                                <h5>{{ footerSectionOne[6].titleSectionOne }}</h5>
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
                                <h5> {{ item }}</h5>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4 col-lg-4 col-md-4 col-sm-4">
                        <p>THE DON PEPPE CREW FIRST AND FOREMOST VALUES AND AUTHENTIC, WELL BAKED SLICE OF PIZZA</p>

                        <img src="../../public/svg/svg-11.svg" alt="Baffo">
                    </div>
                </div>
                <div class="imageComic col-6 col-lg-6 col-md-6 col-sm-6">
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
                    titleSectionOne: 'MONDAY',
                    linkSectionOne: ['Kitchen Closed']
                },
                {
                    titleSectionOne: 'TUESDAY UNTIL FRIDAY',
                    linkSectionOne: ['9:00-22:00']
                },
                {
                    titleSectionOne: 'SATURDAY',
                    titleSectionTwo: 'ciao', //
                    linkSectionOne: ['Saturday 11am to Midnight']
                },
                {
                    titleSectionOne: 'SUNDAY',
                    linkSectionOne: ['9:00-22:00']
                },
                {
                    linkSectionOne: ['FOLLOW US: ']
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
            height: 100%;
            position: relative;
            overflow: hidden;
            width: 100%;
            margin: 0 auto;


            .links {
                background-color: black;
                display: flex;

                ul {
                    list-style: none;
                    color: grey;
                    font-size: 16px;
                    margin-right: 20px;

                    h4 {
                        font-size: 20px;
                        color: white;
                        text-transform: uppercase;
                        margin: 12px 0;
                    }

                    li {
                        padding: 2px 0;
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
            width: 100%;
        }
    }
}
</style>