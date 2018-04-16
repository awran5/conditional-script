/**
 * ConditionalES
 * @version   1.0.0
 * @author    Awtan5 <github.com/awran5>
 * @requires  Any modern browsers
 * @license   MIT
 * @copyright Copyright © 2018 Awran5. All rights reserved.
 * 
 */
"use strict "

function CMB2Conditional(selector) {
    document.querySelectorAll('[data-conditional-name]').forEach( (element) => {
        const condID = element.dataset.conditionalName,
        condValue    = element.dataset.conditionalValue,
        condRow      = element.closest(selector);

        // Check if the data-value has comma ", " if so return array otherwise, return the original values
        function valueParse(value) {
            return !!value && value.includes(',') ? value.split(', ') : value;
        }

        // Check if the value type is srting or array and set condition for matching
        function valueMatch(value) {
            if ( typeof( valueParse(condValue) ) === 'string' ) {
                // Value match
                return value === valueParse(condValue);
            }

            else if( Array.isArray( valueParse(condValue) ) ) {
                // Value is in array
                return valueParse(condValue).indexOf( value ) > -1;
            }
        }

        // Select the field by name and loob through
        document.querySelectorAll('[name="' + condID + '"]').forEach( (field) => {

            // Select field
            if( field.type === "select-one" ) {

                // Hide the row if the value doesn't match
                if( !valueMatch( field.value ) ) 
                    condRow.style.display = 'none';
                
                // Check on change
                field.addEventListener('change', (event) => {
                    if( valueMatch( event.target.value ) )
                        condRow.style.display = 'block';
                    else 
                        condRow.style.display = 'none';
                });
            }

            // Radio field
            else if( field.type === "radio" ) {

                // Hide the row if the value doesn't match and not checked
                if( !valueMatch( field.value ) && !field.checked ) 
                    condRow.style.display = 'none';

                // Check on change
                field.addEventListener('change', (event) => {          
            
                    if( valueMatch( event.target.value ) ) 
                        condRow.style.display = 'block';
                    else 
                        condRow.style.display = 'none';
                });

            }

            // Checkbox field
            else if( field.type === "checkbox" ) {    

                // Hide the row if the value doesn't match and not checked
                if( !field.checked ) 
                    condRow.style.display = 'none';

                // Check on change
                field.addEventListener('change', (event) => {

                    if( event.target.checked ) 
                        condRow.style.display = 'block';
                    else 
                        condRow.style.display = 'none';
                });
            }

        });
        
    });
}

// Trigger the funtion
CMB2Conditional('.form-group');
