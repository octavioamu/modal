// Simple show/hide modal
  $("a[data-toggle]").on("click",function(e){

    var element = $("a[data-toggle]");
    var target = element.data('toggle');
    var effect = element.data('effect');

    var modal = $(".modal").data('modal',target);
    var overlay = $('<div class="overlay"></div>');

    $(overlay).prependTo('body');
    modal.toggleClass(effect).fadeIn(1000);
    $overlay.hide();
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

//   (function($){

//     $.fn.modal = function(prop){

//       var element = $("a[data-toggle]");
//       var target = element.data('toggle');
//       var effect = element.data('effect');
//       var options = $.extend({

//       },prop);

//       //Click event on element
//     return this.click(function(e){
//       add_overlay();
//       add_popup_box();
//       add_styles();

//       $('.modal').fadeIn();
//     });

//     /**
//       * Create the block page div
//       */
//      function add_overlay(){
//       var overlay = $('<div class="overlay"></div>');

//       $(overlay).prependTo('.modal');
//     }



//     }

//   })


// var modal = (function(){
//     var
//     method = {},
//     $overlay,
//     $modal,
//     $content,
//     $close;

//     // Append the HTML
//     $overlay = $('<div id="overlay"></div>');
//     $modal = $('<div id="modal"></div>');
//     $content = $('<div id="content"></div>');
//     $close = $('<a id="close" href="#">close</a>');

//     $modal.hide();
//     $overlay.hide();
//     $modal.append($content, $close);

// $(document).ready(function(){
//     $('body').append($overlay, $modal);
// });

//     // Center the modal in the viewport
//     method.center = function () {};

//     // Open the modal
//     method.open = function (settings) {};

//     // Close the modal
//     method.close = function () {};

//     return method;
// }());
