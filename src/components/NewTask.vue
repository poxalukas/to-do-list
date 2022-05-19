<template>
 <div class="new-task">
     <input v-model="name"  @keydown.enter="add" type="text"
     class="form-element" placeholder="Nova Tarefa?">
     <button class="form-element" @click="add">+</button>
 </div>
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    },
    methods:{
        add(){
            this.$emit('taskAdded',{name: this.name})
            this.name=''
        }
    }
};
</script>

<style>
 .new-task{
     margin: 35px;
 }

 .form-element{
     outline: none;
     font-size: 2rem;
     border: 1px solid #fff;
     padding: 5px 10px 8px;
     color: #FFF;

 }

input.form-element{
    width: 500px;
    background: #FFF2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right: none;
}

button.form-element{
    border-left: none;
    background: #2196F3;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
@media (max-width: 600px){
     .new-task{
     margin: 15px;
 }
  .form-element{
     font-size: 1.1rem;
  }
    input.form-element{
    width: 200px;
    height: 20px;
    background: #FFF2;
    font-size:1.2rem;
}



}
</style>
