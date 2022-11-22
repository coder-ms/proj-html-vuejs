<template>
    <div class="col-6 col-lg-6 col-md-6 col-sm-6">
        <h2>SPECIALS*</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesent ut.</h5>
        <div v-for="(item, index) in MenuArray" :key="item">
            <h3>{{ item.dollar }} <span> {{ item.combo }} </span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui.</p>
        </div>
    </div>
</template>

<script>
export default {

    name: 'DescriptionMenu',
    data() {
        return {
            MenuArray: [
                {
                    dollar: '$10',
                    combo: 'combo piccolo',
                },
                {
                    dollar: '$20',
                    combo: 'combo medio',
                },
                {
                    dollar: '$30',
                    combo: 'combo grande',
                },
            ],
        }
    },

}
</script>


<style lang="scss" scoped>
h2 {
    font-size: 30px;
    font-weight: 700;
}

h5 {
    font-size: 18px;
}

h3 {
    color: rgb(209, 1, 1);
    font-size: 25px;
    font-weight: 600;
    margin: 20px 0;

    span {
        color: black;
        font-size: 25px;
        font-weight: 600;
        text-transform: uppercase;
    }
}

p {
    color: grey;
    padding-left: 53px;
    font-size: 16px;
}
</style>