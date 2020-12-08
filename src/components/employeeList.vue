<template>
<div class="container-lg">
    <div class="table-responsive">
        <div class="table-wrapper">
        <div class="table-title">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="filter-btn">
             <b-button-group> 
  <b-button pill :class="{selected:filter==='all'}" @click="changeFilter('all')">All</b-button>
  <b-button pill  :class="{selected:filter==='active'}"  @click="changeFilter('active')" >Active</b-button>
  <b-button pill  :class="{selected:filter==='non-active'}" @click="changeFilter('non-active')" >Non-Active</b-button>
  </b-button-group>
                        </div>
                    </div>
                    <div class="col-sm-4 btn-add">
                        <button type="button"  @click="addNewRow" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table>
                <tr><td><form @submit.prevent="addNewEmployee" novalidate="true">
  <table class="table table-bordered">
                <thead>
                    <tr>
                        <th v-for="(emp,index) in Employeee" :key="index">{{emp}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee,index) in get_filtered_employees" :key="index">
                        <td>{{employee.name}}</td>
                        <td>{{employee.age}}</td>
                        <td>{{employee.email}}</td>
                        <td>{{employee.isActive}}</td>
                        <td>
                        <b-button  class="btn btn-info delete-btn" title="delete" @click="deleteEmployee(employee)"><i class="material-icons">&#xE872;</i></b-button>
                        </td>
                    </tr>   
                                <tr v-if="showNewRow">
                        <td><input type="text" v-model="employeeobj.name" class="form-control"></td>
                        <td><input type="number" v-model="employeeobj.age" class="form-control"></td>
                        <td><input  type="email" v-model="employeeobj.email" class="form-control"></td>
                     <td> <input type="checkbox" id="checkbox" v-model="employeeobj.isActive"></td>
                        <td>
                        <b-button  type="submit" title="Add" class="delete-btn"><i class="material-icons">&#xE03B;</i></b-button>
                        </td>
                    </tr>  
                </tbody>
            </table>
             </form></td></tr>
             </table>
        </div>
        </div>
</div>
</template>
<script>
import {employeeconst} from '../constants/employee'
export default {
    name:'employeeList',
    data(){
        return {employeeobj:{
            name:'',
            age:'',
            email:'',
            isActive:false
        },
        showNewRow:false,
        Employeee:employeeconst}

    },
    methods:{
              deleteEmployee(employee){
            this.$store.dispatch('Delete_Todo',employee)
        },
        addNewRow(){
this.showNewRow=true;
        },
        changeFilter(value){
            this.$store.dispatch('New_filter',value)

        },
    
        addNewEmployee(){
           if(this.employeeobj!='' && this.employeeobj.name!='' && this.employeeobj.age!='' && this.employeeobj.email!='' ){
               if(!this.employeeobj.isActive){
                   this.employeeobj.isActive=false;
               }
           this.$store.dispatch('NEW_Employee',this.employeeobj);
           this.showNewRow=false;
           this.employeeobj={};


           }
       } 
    },
computed:{
    getEmployeelist(){
       return this.$store.getters.get_employees;
    },
    get_filtered_employees(){
        return this.$store.getters.get_filtered_list;
    },
    filter(){
        return this.$store.state.filter;
    }

}
}
</script>
<style scoped>
body {
    color: #404E67;
    background: #F5F7FA;
    font-family: 'Open Sans', sans-serif;
}
thead{
        background-color: aquamarine;
}
tbody{
        background-color: aliceblue;
}
.table-wrapper {
    width: 80%;
    margin: 30px auto;
    background: #fff;
    padding: 20px;	
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {
    padding-bottom: 10px;
    margin: 0 0 10px;
}
.table-title h2 {
    margin: 6px 0 0;
    font-size: 22px;
}
.table-title .add-new{
    float: right;
    height: 30px;
    font-weight: bold;
    font-size: 12px;
    text-shadow: none;
    min-width: 100px;
    border-radius: 50px;
    line-height: 13px;
}
.delete-btn{
 float: right;
    height: 30px;
    font-weight: bold;
    font-size: 12px;
    text-shadow: none;
    min-width: 30px;
    border-radius: 50px;
    line-height: 13px;
}
.table-title .add-new i {
    margin-right: 4px;
}
table.table {
    table-layout: fixed;
}
table.table tr th, table.table tr td {
    border-color: #e9e9e9;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}
table.table th:last-child {
    width: 100px;
}
table.table td a {
    cursor: pointer;
    display: inline-block;
    margin: 0 5px;
    min-width: 24px;
}    
table.table td a.add {
    color: #27C46B;
}
table.table td a.edit {
    color: #FFC107;
}
table.table td a.delete {
    color: #E34724;
}
table.table td i {
    font-size: 19px;
}
table.table td a.add i {
    font-size: 24px;
    margin-right: -1px;
    position: relative;
    top: 3px;
}    
table.table .form-control {
    height: 32px;
    line-height: 32px;
    box-shadow: none;
    border-radius: 2px;
}
table.table .form-control.error {
    border-color: #f50000;
}
table.table td .add {
    display: none;
}
.filter-btn{
   position: fixed;
}
.selected {
     background-color: black;
}

</style>