
	browse3dWarehouseJsonFiles ( location.hash );

	function browse3dWarehouseJsonFiles ( parameters ) {

//console.log( 'browse3dWarehouseJsonFiles', parameters, location.hash );

		if ( !scene || parameters.indexOf( '#new=true' ) > -1 ) {

			loadFileHTMLByURL( '#aaa#./templates/template-lights-shadows.html#displayInfo#' );

			callbackIframe = function() {

				callbackbrowse3dWarehouseJsonFiles ( parameters );

			};

		} else {

			callbackbrowse3dWarehouseJsonFiles ( parameters );

		}

	}


	callbackbrowse3dWarehouseJsonFiles = function( parameters ) {

console.log( 'callbackIframe', parameters, location.hash );

			loadFileJSON3ByURL( parameters );

			callbackIframe = callbackIframeDefault;

		}