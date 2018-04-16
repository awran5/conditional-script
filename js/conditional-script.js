/**
 * conditionalScript
 * simple native JavaScript ES6 script lets you conditionally show/hide Form/DOM element
 * @author    Awran5 <github.com/awran5>
 * @version   1.0.0
 * @license   icensed under MIT (https://github.com/awran5/conditional-script/blob/master/LICENSE)
 * @copyright © 2018 Awran5. All rights reserved.
 * 
 */

( () => {

    "use strict"

    // select by data attribute 
    document.querySelectorAll('[data-conditional-name]').forEach( (element) => {
        const condName  = element.dataset.conditionalName,
        condValue       = element.dataset.conditionalValue,
        condParent      = element.parentNode;

        // Check if value is matching
        function valueMatch(value) {
            return condValue.includes(value);
        }

        // Select the field by name and loob through
        document.querySelectorAll('[name="' + condName + '"]').forEach( (field) => {

            // Select field
            if( "select-one" === field.type ) {

                // Hide the row if the value doesn't match
                if( !valueMatch( field.value ) ) 
                    condParent.style.display = 'none';
                
                // Check on change
                field.addEventListener('change', (event) => {

                    ( valueMatch( event.target.value ) ) ? condParent.style.display = 'block' : condParent.style.display = 'none';
                });
            }

            // Radio field
            else if( "radio" === field.type ) {

                // Hide the row if the value doesn't match and not checked
                if( !valueMatch( field.value )  ) 
                    condParent.style.display = 'none';

                // Check on change
                field.addEventListener('change', (event) => {          

                    ( valueMatch( event.target.value ) ) ? condParent.style.display = 'block' : condParent.style.display = 'none';
                });

            }

            // Checkbox field
            else if( "checkbox" === field.type ) {    

                // Hide the row if the value doesn't match and not checked
                if( !field.checked ) 
                    condParent.style.display = 'none';

                // Check on change
                field.addEventListener('change', (event) => {

                    ( event.target.checked ) ? condParent.style.display = 'block' : condParent.style.display = 'none';
                });
            }

        });
        
    });

})();

