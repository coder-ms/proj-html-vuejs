<template>
    <div>
        <div class="clientsTypology col-12 col-lg-12 col-md-12 col-sm-12">
            <div v-for="(item, index) in clientTypologyArray" :key="item">
                <img :src="item.imageClient" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClientsTypology',
    data() {
        return {
            clientTypologyArray: [
                {
                    imageClient: '../../public/img/h1-clients-img-4.png',
                },
                {
                    imageClient: '../../public/img/h1-clients-img-3.png',
                },
                {
                    imageClient: '../../public/img/h1-clients-img-1.png',
                },
                {
                    imageClient: '../../public/img/h1-clients-img-2.png',
                },
                {
                    imageClient: '../../public/img/h1-clients-img-5.png',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
div {
    height: 250px;
    background-color: rgb(247, 237, 225);
    display: flex;
    align-items: center;

    .clientsTypology {
        width: 60%;
        margin: 0 auto;

        div {
            img {
                width: 100%;
            }
        }
    }
}
</style>