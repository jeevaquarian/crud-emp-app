import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        employees:[
            {name:'jeevesh',age:26,email:'jeevesh@gmail.com'},
            {name:'rishab',age:23,email:'rishab@gmail.com'},
            {name:'suman',age:25,email:'suman@gmail.com'},
            {name:'rajiv',age:27,email:'rajiv@gmail.com'}
        ]
    },
    getters:{
        get_employees(state){
            return state.employees
        }
    },
    mutations:{
        New_Employee(state,payload){
            state.employees.push({
                name:payload.name,
                age:payload.age,
                email:payload.email
            })
        },
        Delete_Employee(state,employee){
            var index=state.employees.indexOf(employee)
            state.employees.splice(index,1)
        }
    },
    actions:{
        NEW_Employee({commit},payload){
            commit('New_Employee',payload)
        },
        Delete_Todo({commit},employee){
            commit('Delete_Employee',employee)

        }

    }
})