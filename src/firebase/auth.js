import firebase from './index'


export function normalAuth (email,password) {
	 firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
          	alert("done");
          	//this.$router.push('/home')
          })
          .catch((error) => {
           	alert("error");
          });

}

export function logout(){
		 firebase.auth().signOut()
          .then((user) => {
          	alert("done");

          })
          .catch((error) => {
           	alert("error");
          });

}