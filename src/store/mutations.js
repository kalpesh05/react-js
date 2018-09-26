
export default {

  updateUser (state,user) {

    return state.user = user
    
  },

  updatequote (state,quote) {
    return state.quote = quote
  },

  updateCategoryName(state,category){
  	return state.CategoryName = category
  },

  updateCategoryDescription(state, CategoryDescription){
  	return state.CategoryDescription = CategoryDescription
  },

  updateSesssions(state, session) {
  	return state.Sesssions = session
  },

  updateBundles(state, bundle) {
  	return state.bundle = bundle
  },

  updateSubcategorys(state, Subcategorys) {
  	return state.Subcategorys = Subcategorys
  },

  updateAllCategoryData(state, AllCategoryData) {
  	return state.AllCategoryData = AllCategoryData
  }


}