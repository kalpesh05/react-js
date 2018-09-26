<template>
  <div id="app">
       <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
crossorigin="anonymous">
    <app-dashheader v-if="seen"></app-dashheader>
    <app-header v-else></app-header>
    <hr>
     <router-view></router-view>
     <app-footer></app-footer>
  </div>
</template>

<script>
import store from './store'

import firebase, {
    userRef
} from './firebase/index'
export default {
  name: 'app',
   firebase: {
    users: userRef
  },
  props: ['USERS'],
  data () {
    return {
      seen: false,
      user: '',
    }
  },
  methods:{
    updateSeen(val){
        this.seen = val;
    }
  },
  updated(){
    console.log('updated')
    console.log(this.$route)

        firebase.auth().onAuthStateChanged((user) => {
        

          if(user){

             this.updateSeen(true)
              var uid = firebase.auth().currentUser.uid;

              userRef.child(uid).on("value", snap => {
                  this.user = snap.val().email
                    var data = snap.val();
                  store.commit('updateUser', data)
              });
              
          }else{
             this.updateSeen(false)
              store.commit('updateUser', null)
          } 
        }) 
console.log(this.$store.state.user.first_name);
  },
  mounted() {
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
             this.updateSeen(true)
          }else{
             this.updateSeen(false)
          } 
        }) 
    console.log('mounted')
      console.log(this.seen)
  },
  beforeEnter: (to, from, next) => {
            console.log(to.path)
            conosle.log(54555);
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
             this.updateSeen(true)
          }else{
             this.updateSeen(false)
          }   
     })
  }
}
</script>

<style lang="scss">
  @import './assets/css/formvalid.css';
</style>
