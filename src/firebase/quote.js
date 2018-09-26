import firebase ,{ QuoteRef } from './index'
import store from '../store'

export function quote(){
	
			QuoteRef.orderByChild("quote_id").limitToLast(1).on("value", snap => {
                  	snap.forEach( childSnapShot => {
                  		 
                  		 store.commit('updatequote',childSnapShot.val().qoute_description)
                  	})
              });

}
