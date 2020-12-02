<template>
<div class="container-lg">
    <div class="table-responsive">
        <div class="table-wrapper">
        <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Employee <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <button type="button"  @click="addNewRow" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
  <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                       <th>isActive</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee,index) in getEmployeelist" :key="index">
                        <td>{{employee.name}}</td>
                        <td>{{employee.age}}</td>
                        <td>{{employee.email}}</td>
                        <td>{{employee.isActive}}</td>
                        <td>
                        <b-button  class="btn btn-info delete-btn" @click="deleteEmployee(employee)">Delete</b-button>
                        </td>
                    </tr>   
                                <tr v-if="showNewRow">
                        <td><input type="text" v-model="employeeobj.name" class="form-control"></td>
                        <td><input type="text" v-model="employeeobj.age" class="form-control"></td>
                        <td><input type="text" v-model="employeeobj.email" class="form-control"></td>
                     <td> <input type="checkbox" id="checkbox" v-model="employeeobj.isActive"></td>
                        <td>
                        <b-button  class="delete-btn" @click="addNewEmployee">Submit</b-button>
                        </td>
                    </tr>  
                </tbody>
            </table>
        </div>
        </div>
</div>
</template>
<script>
export default {
    name:'employeeList',
    data(){
        return {employeeobj:{
            name:'',
            age:'',
            email:'',
            isActive:false
        },
        showNewRow:false}

    },
    methods:{
              deleteEmployee(employee){
            this.$store.dispatch('Delete_Todo',employee)
        },
        addNewRow(){
this.showNewRow=true;
        },
        addNewEmployee(){
           if(this.employeeobj!=''){
           this.$store.dispatch('NEW_Employee',this.employeeobj);
              this.isActive=false;
           this.showNewRow=false;
           this.employeeobj={};
           


           }
       } 
    },
computed:{
    getEmployeelist(){
       return this.$store.getters.get_employees;
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
.table-wrapper {
    width: 700px;
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
</style>