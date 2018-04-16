/**
 * ConditionalES
 * @version   1.0.0
 * @author    Awtan5 <github.com/awran5>
 * @requires  Any modern browsers
 * @license   MIT
 * @copyright Copyright © 2018 Awran5. All rights reserved.
 * 
 */
"use strict"

function CMB2Conditional(selector) {
    document.querySelectorAll('[data-conditional-name]').forEach( (element) => {
        const condID = element.dataset.conditionalName,
        condValue    = element.dataset.conditionalValue,
        condRow      = element.closest(selector);

        // Check if the data-value has comma ", " if so return array otherwise, return the original values
        // function valueParse(value) {
        //     return !!value && value.includes(',') ? value.split(', ') : value.split(' ');
        // }

        // Check if value is matching
        function valueMatch(value) {
            return condValue.includes(value);
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
            console.log(valueMatch( event.target.value ));
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
