<template>
    <div class="images col-12 col-lg-12 col-md-12 col-sm-12">
        <div v-for="(item, index) in imgGalleryMainArray" :key="item" class="col-3 col-lg-3 col-md-3 col-sm-3">
            <img :src="item.image" alt="" />
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
                    image: '../../public/img/h3-img-1.jpg',
                },
                {
                    image: '../../public/img/h3-img-2.jpg',
                },
                {
                    image: '../../public/img/h3-img-3.jpg',
                },
                {
                    image: '../../public/img/h3-img-4.jpg',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.images {
    display: flex;
    height: 36vh;

    div {
        padding: 10px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>