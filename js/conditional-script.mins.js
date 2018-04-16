/**
 * conditionalScript
 * 
 * @author    Awran5 <github.com/awran5>
 * @version   1.0.0
 * @license   icensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * @copyright © 2018 Awran5. All rights reserved.
 * 
 */
function conditionalScript(e){document.querySelectorAll("[data-conditional-name]").forEach(function(c){var f=c.dataset.conditionalName,d=c.dataset.conditionalValue,b=e?c.closest(e):c.parentNode;document.querySelectorAll('[name="'+f+'"]').forEach(function(a){"select-one"===a.type?(d.includes(a.value)||(b.style.display="none"),a.addEventListener("change",function(a){d.includes(a.target.value)?b.style.display="block":b.style.display="none"})):"radio"===a.type?(d.includes(a.value)||(b.style.display="none"),
a.addEventListener("change",function(a){d.includes(a.target.value)?b.style.display="block":b.style.display="none"})):"checkbox"===a.type&&(a.checked||(b.style.display="none"),a.addEventListener("change",function(a){b.style.display=a.target.checked?"block":"none"}))})})}conditionalScript();