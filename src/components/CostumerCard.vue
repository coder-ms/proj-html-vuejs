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
                    image: '../../public/img/h1-team-1a-700x700.jpg',
                },
                {
                    image: '../../public/img/h1-team-2a.jpg',
                },
                {
                    image: '../../public/img/h1-team-4a.jpg',
                },
                {
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

    div {

        img {
            width: 100%;

        }
    }
}
</style>