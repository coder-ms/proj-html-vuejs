<template>
    <header>
        <nav class="navBar col-12 col-lg-12 col-md-12 col-sm-12">
            <div class="pizzaMenu col-12 col-lg-12 col-md-12 col-sm-12">
                <div class="col-12 col-lg-12 col-md-12 col-sm-12">
                    <ul>
                        <li><a class="navbarBrand" href="#">ORDER ONLINE</a></li>
                    </ul>
                    <ul>
                        <li><a href="#home"><img src="../../public/svg/svg-0.svg" alt="Baffo">Home</a></li>
                        <li><a href="#home">Home</a></li>
                        <li><a href="">Pages</a></li>
                        <li><img src="../../public/img/h5-logo-divided-header.png" alt=""></li>
                        <li><a href="#event">Event</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#landing">Landing</a></li>
                    </ul>
                    <ul>
                        <li><a href="#cart"><img src="../../public/svg/svg-1.svg" alt="cart">Cart</a></li>
                        <li><a href="#search"><i class="fa-solid fa-magnifying-glass"></i> Search</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!--SLIDER-->
        <HeaderSlider />
    </header>


</template>

<script>
import { store } from '../store';
import HeaderSlider from './HeaderSlider.vue';

export default {
    name: 'AppHeader',
    components: { HeaderSlider },
    data() {
        return {
            store
        }
    },

    methods: {

    },

    props: {

    }
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 61vh;
    margin: 0 auto;
    overflow-x: hidden;
    //border: 1px solid green;

    .navBar {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 1000;

        //border: 1px solid yellow;

        .pizzaMenu {
            height: 9vh;
            padding: 10px;
            width: 70%;
            margin: 0 auto;


            div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;

                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    //width: calc(100% / 3);

                    li {
                        display: inline;
                        margin-left: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        text-transform: uppercase;
                        margin: 0 10px;

                        .navbarBrand {
                            &:first-child {
                                background-color: #333333;
                                padding: 10px;
                                font-weight: 800;

                                &:hover {
                                    color: #333333;
                                    background-color: white;
                                }

                                &:active {
                                    color: #333333;
                                    background-color: white;
                                }
                            }
                        }

                        a {
                            text-decoration: none;
                            color: white;

                            img {
                                width: 20px;
                                height: 10px;
                                margin-right: 5px;
                                filter: invert(1);
                            }

                            i {

                                height: 10px;
                            }
                        }

                        img {
                            height: 60px;
                        }
                    }
                }
            }
        }
    }
}
</style>
