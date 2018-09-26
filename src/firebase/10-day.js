import firebase ,{ catRef } from './index'
import store from '../store'

export function intro(){
	const arrayCategory = [];
			catRef.orderByKey().on("value", snap => {
                  	snap.forEach( childSnapshot => {
                  		 // key
						var key = childSnapshot.key
						// value, could be object
						var childData = childSnapshot.val()
						const arraySessionAllData = [];
           				const arraySubCategoryAllData = [];
            			const arrayBundleAllData = [];
            			
						if(childData.session_subcription_type == "Free" && key == '10 Day Intro Program' && childData.active == true)
						{	

							 arraySession = childSnapshot.val().Session ? childSnapshot.val().Session : [];

               				 Object.keys(arraySession).forEach((key) => {
               				 	
               				 })
						}	

                  	})
              });

}
