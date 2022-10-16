$( document ).ready(function() {
	if($( "#facet-search-results" ).width() < 850) {
			//$( "#search-callout" ).insertBefore( $( ".css-8r6t6j-Results" ) );
            $( "#search-callout2" ).css({"width":"100%","float":"none"});
			$( "#facet-search-results" ).css({"width":"100%","float":"none"});
			$( "#search-callout2" ).show();			
    } else {
			$( "#search-callout2" ).show();			
    }
	
});

