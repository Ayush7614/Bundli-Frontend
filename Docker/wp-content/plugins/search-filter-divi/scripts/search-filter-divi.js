// This script is loaded both on the frontend page and in the Visual Builder.

(function ( $ ) {
	"use strict";
	
	var removeDiviPaginationEvents = false;
	
	$(document).on("sf:init", ".searchandfilter", function(e, data){3
		
		var searchForm = {};
		searchForm = data.object;
		
		//check to see if there is a divi search form
		if(searchForm.display_result_method == "divi_post_module"){
			//check to see if there is a divi results module
			if($(data.targetSelector).length>0){
				//if yes, then its likely this page is a results page for S&F, so remove the DIVI events
				removeDiviPaginationEvents = true;
			}
		}
	});
  
	$(document).ready( function(){
		if(removeDiviPaginationEvents){
			//this is the only way to remove those events
			$( 'body' ).off( 'click', '.et_pb_ajax_pagination_container .wp-pagenavi a, .et_pb_ajax_pagination_container .pagination a');
		}
	});

	$(document).on("sf:ajaxfinish", ".searchandfilter", function(e, searchForm){
		if( (searchForm.object.display_result_method == "divi_post_module") || (searchForm.object.display_result_method == "post_type_archive") ){
			var $grids = $( searchForm.targetSelector + ' .et_pb_salvattore_content' );
			if( $grids.length > 0 ){
				salvattore['register_grid']($grids.get(0));
				salvattore['recreate_columns']($grids.get(0));
			}
		}
	});
  
}(jQuery));