// // customer feedback testom
$(document).ready(function() {
    $(".testimonial .indicators li").click(function() {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
    });
    $(".testimonial .tabs li").click(function() {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass('active');
        targetElement.not($(this)).removeClass('active');
    });
});
$(document).ready(function() {
    $(".slider .swiper-pagination span").each(function(i) {
        $(this).text(i + 1).prepend("0");
    });
});



// Select all tabs for menu
$('.nav-tabs a').click(function() {
    $(this).tab('show');
})

// Select tab by name
$('.nav-tabs a[href="#home"]').tab('show')

// Select first tab
$('.nav-tabs a:first').tab('show')

// Select last tab
$('.nav-tabs a:last').tab('show')

// Select fourth tab (zero-based)
$('.nav-tabs li:eq(3) a').tab('show')


// for order menu tab
var countre = 1;

function add_more_field() {
    countre += 1
    html = ' <div class="row" id="roworder' + countre + '"><div class="col-sm-6 col-lg-6"><div class="form-group"><label class="form-label" for="name">Product Name</label><input type="text" name="productname ' + countre + '"class="form-control" /></div></div>\
    <div class="col-sm-6 col-lg-6"><div class="form-group"><label class="form-label" for="name">Quantity</label><input type="number" name="productqun ' + countre + '" class="form-control" id=""></div></div></div>'
    var form = document.getElementById('ordeer-form')
    form.innerHTML += html
}