/**
 * iConditional
 * @version   1.0.0
 * @author    Awtan5 <github.com/awran5>
 * @requires  jQuery 1.12+
 * @license   MIT
 * @copyright Copyright © 2018 Awran5. All rights reserved.
 * 
 */

(function( $ ) {
    'use strict';

    function CMB2Conditional(selector) {
        $('[data-conditional-name]').each( function() {
            var that        = $(this),
                condID      = that.data('conditional-name'),
                condValue   = that.data('conditional-value'),
                condRow     = that.closest(selector);

            // Set field name
            var fieldName = $('[name="' + condID + '"]');
            // Check if the value type is srting or array
            function checkValue(value) {
                if ( $.type(condValue) === 'string' ) {
                    // Value match
                    return value.val() === condValue;
                }

                else if( $.isArray( condValue ) ) {
                    // Value is in array
                    return $.inArray( value.val(), condValue ) !== -1;
                }
            }

            // Select field
            if( fieldName.is('select') ) {

                // Hide the row if the value doesn't match
                if( !checkValue( fieldName ) ) 
                    condRow.hide();
                
                // Check on change
                fieldName.on('change', function() {
                    if( checkValue( $(this) ) )
                        condRow.show();
                    else 
                        condRow.hide();
                });

            }
            // Radio field
            else if( fieldName.is('[type="radio"]') ) {
                
                // Hide the row if the value doesn't match and not checked
                if( !checkValue( fieldName ) || !fieldName.prop( "checked" ) ) 
                    condRow.hide();
                
                // Check on change
                fieldName.on('change', function() {
                    
                    if( checkValue( $(this) ) ) 
                        condRow.show();
                    else 
                        condRow.hide();
                });

            }
            // Checkbox field
            else if( fieldName.is('[type="checkbox"]') ) {

                // Hide the row if the value doesn't match and not checked
                if( !fieldName.prop( "checked" ) ) 
                    condRow.hide();

                // Check on change
                fieldName.on('change', function() {

                    if( $(this).prop( "checked" ) ) 
                        condRow.show();
                    else 
                        condRow.hide();
                });

            }
            
        });
    }

    // Trigger the funtion
    CMB2Conditional('.form-group');

})( jQuery );



