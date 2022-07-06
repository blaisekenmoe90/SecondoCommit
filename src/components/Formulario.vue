<template>
<form v-on:submit.prevent="submit">
<div class="row">

<div>
  <label>Name</label>
  <input v-model.trim ="$v.name.$model" type="text" placeholder="Name">
  <div></div>
</div>
<div>
  <label>Prename</label>
  <input v-model.trim ="$v.prename.$model"  type="text" placeholder="Prename">
  <div></div>
</div>
<div >
  <select v-model.trim ="$v.country.$model" class="selected">selezionare
  <option>Scelgli</option>
  <option ></option>
  </select>
</div>
<div>
  <label>Email</label>
  <input v-model.trim ="$v.$email.$model" type="text" placeholder="Email@gmail.com">
  <div></div>
</div>
<div>
  <label>Password</label>
  <input  v-model.trim ="$v.Name.$model" type="password" placeholder="Password">

  <div></div>
</div>
<div>
  <button>Iscriviti</button>
</div>

</div>
</form>
</template>

<script>
import  { required }  from '.vuelidate/lib/validators'

export default {
  name: 'Formulario',
  data: function (){
     return {
      name:'',
      prename:'',
      email:'',
      country:'',
      password:'',
 
  }
  },
  validations:{
    name:{required},
    prename:{required},
    email:{required,email},
    country:{required},
    password:{required}

  },
  methods:{
    submit:function(){
      this.$v.$touch();
      if(this.$v.$pendding || this.$v.$error) return;
    }

  }


}
</script>

<style>
input{
  width:25%;
  height: 30px;
  border-radius: 10px;
  
}
.selected {
  width: 50px;
  height: 40px;
}
button{
  width: 10%;
  height: 35px;
  color: blue;
  border-radius: 10px;
}
</style>
