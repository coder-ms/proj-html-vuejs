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
                            <li>
                                <h4>{{ footerSectionOne[1].titleSectionOne }}</h4>
                            </li>
                            <li v-for="item in footerSectionOne[1].linkSectionOne">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="col-4 col-lg-4 col-md-4 col-sm-4">
                        <ul>
                            <li>
                                <h4>{{ footerSectionOne[2].titleSectionOne }}</h4>
                            </li>
                            <li v-for=" item in footerSectionOne[2].linkSectionOne">{{ item }}</li>
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
                    linkSectionOne: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']
                },
                {
                    titleSectionOne: 'shop',
                    linkSectionOne: ['Shop DC', 'Shop DC Collectibles']
                },
                {
                    titleSectionOne: 'WORKING HOURS',
                    linkSectionOne: ['Terms Of Use', 'Privacy policy (new)', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us']
                },
            ]
        }
    },

}
</script>


<style lang="scss" scoped>
footer {

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
            padding-top: 20px;

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