jQuery(window).bind('load', function(){
    if(jQuery('#indeed_top_ism').length){
        width = jQuery('#indeed_top_ism').width();
        position = jQuery('#indeed_top_ism').offset();
        top_d = position.top;
        left_d = position.left;
        right_d = position.left+parseInt(width);
    }
    if(jQuery('#indeed_bottom_ism').length){
        obj = jQuery('#indeed_bottom_ism').offset();
        bottom_d = obj.top;
    }
});

function ismDisplayInsidePost( id, wrapp, topBottom, topBottom_val, leftRight, leftRight_val ){
    jQuery(wrapp).css('width', width);
    jQuery(wrapp).css('top', top_d+'px');
    jQuery(wrapp).css('left', left_d+'px');
    if(topBottom=='top'){
        newval = parseInt(topBottom_val);
        jQuery(id).css('top', newval);
    }else{
        newval = parseInt(bottom_d) - parseInt(top_d) - parseInt(topBottom_val);
        jQuery(id).css('top', newval);
    }
    if(leftRight=='left'){
        jQuery(id).css('left', parseInt(leftRight_val));
    }else{
        jQuery(id).css('right', parseInt(leftRight_val));
    }
    jQuery(id).fadeIn(500);
}
function ism_return_current_date(){
	var timestamp = Math.round(+new Date()/1000);
	return timestamp;
}