
import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    search: {
        status: '',
        name: ''
    },
});