<template>
    <div class="containerx col-12 col-lg-12 col-md-12 col-sm-12">
        <div class="inputLabel col-12 col-lg-12 col-md-12 col-sm-12">

            <div class="infoInput col-2 col-lg-2 col-md-2 col-sm-2">
                <label class="visually-hidden" for="searchStatus"></label>
                <select class="form-select" id="searchStatus" v-model="store.search.status">
                    <option selected value="">Reservation for...</option>
                    <option :value="status" v-for="(status, index) in statusOptions" :key="index">{{ status }}</option>
                </select>

            </div>

            <div class="infoInput col-1 col-lg-1 col-md-1 col-sm-1">
                <p>FOR</p>
            </div>

            <div class="infoInput col-2 col-lg-2 col-md-2 col-sm-2">
                <label class="visually-hidden" for="charactername"></label>
                <!--v-model.trim="store.searchTitleVal"-->
                <input type="date" class="form-control" id="charactername" placeholder="Search name">
            </div>

            <div class="infoInput col-1 col-lg-1 col-md-1 col-sm-1">
                <p>AT</p>
            </div>

            <div class="infoInput col-2 col-lg-2 col-md-2 col-sm-2">
                <label class="visually-hidden" for="charactername"></label>
                <!--v-model.trim="store.searchTitleVal"-->
                <input type="time" class="form-control" id="charactername" placeholder="Search name">
            </div>

            <div class="infoInput col-1 col-lg-1 col-md-1 col-sm-1">

            </div>

            <div class="infoInput col-2 col-lg-2 col-md-2 col-sm-2">
                <button>BOOK A TABLE</button>
            </div>


        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {

    name: 'Reservation',
    data() {
        return {
            store,
            statusOptions: [
                '1 person',
                '2 people',
                '3 people',
                '4 people'
            ],
        }
    }

}
</script>


<style lang="scss" scoped>
.containerx {
    background-image: url('../../public/img/h3-background-img-3.jpg');
    height: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    overflow-x: hidden;

    .inputLabel {
        width: 80%;
        height: 80%;
        font-size: 20px;
        color: white;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;

        .infoInput {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            p {
                margin: 1vh 0;
                font-size: 20px;
                color: white;
                text-align: center;
            }

            button {
                width: 300px;
                height: 50px;
                color: white;
                font-size: 12px;
                font-weight: 700;
                border: none;
                background-color: #333333;

                &:hover {
                    color: #333333;
                    background-color: white;
                }
            }
        }
    }


}
</style>