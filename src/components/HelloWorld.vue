<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
          >unit-jest</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import obtenerEmpleado from "@/helpers/procesarEmpleado";
import borrarEmpleado from '@/helpers/procesarEmpleado';
import insertarEmpleado from '@/helpers/procesarEmpleado';
import actualizarEmpleado from '@/helpers/procesarEmpleado';

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    async buscar(id) {
      await obtenerEmpleado(id)
    },
    async borrar(id){
      await borrarEmpleado(id); 
    },
    async insertar(body1){
      await insertarEmpleado(body1);
    },
    async actualizar(body1){
      await actualizarEmpleado(body1)
    },
  },
  mounted(){
    const empl = {
      'id' :10,
      'nombre': "Pepito", 
      'apellido' : "Pereira", 
      'fechaNacimiento': '1996-06-26T00:00:00',
      'salario' : 100

    }; const empl2 = {
      'id' :2,
      'nombre': "Pablo", 
      'apellido' : "Arrieta", 
      'fechaNacimiento': '1998-07-30T00:00:00',
      'salario' : 100
    }
    this.buscar(2);
    this.borrar(1); 
    this.insertar(empl); 
    this.actualizar(empl2)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
