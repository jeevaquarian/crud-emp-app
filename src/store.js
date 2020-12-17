import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        filter:'all',
        employees:[
            {name:'jeevesh',age:26,email:'jeevesh@gmail.com',isActive:true},
            {name:'rishab',age:23,email:'rishab@gmail.com',isActive:false},
            {name:'suman',age:25,email:'suman@gmail.com',isActive:true},
            {name:'rajiv',age:27,email:'rajiv@gmail.com',isActive:false}
        ]
    },
    getters:{
        get_employees(state){
            return state.employees
        },
        get_filtered_list(state){
            if(state.filter==="all"){
                return state.employees;
            } 
            else if(state.filter==="active"){
                return state.employees.filter(employee=>employee.isActive);

            }
            else if(state.filter==="non-active"){
                return state.employees.filter(employee=>!employee.isActive);

            }
            return state.employees;
        }

    },
    mutations:{
        New_Employee(state,payload){
            state.employees.push({
                name:payload.name,
                age:payload.age,
                email:payload.email,
                isActive:payload.isActive
            })
        },
        Delete_Employee(state,employee){
            var index=state.employees.indexOf(employee)
            state.employees.splice(index,1)
        },
        New_Filter(state,filterval){
       state.filter=filterval;
        }
    },
    actions:{
        NEW_Employee({commit},payload){
            commit("New_Employee",payload)
        },
        Delete_Todo({commit},employee){
            commit("Delete_Employee",employee)

        },
        
        New_filter({commit},newfiltervalue){
            commit("New_Filter",newfiltervalue)

        },


    }
})