function calcTip () {
    let billAmnt = $('#billAmount').val();
    let p = 0

    if ( $('#thirty').is(':checked') ) {
        p = $('#thirty').val()
    }
    if ( $('#twenty').is(':checked') ) {
        p = $('#twenty').val()
    }
    if ( $('#fifteen').is(':checked') ) {
        p = $('#fifteen').val()
    }
    if ( $('#ten').is(':checked') ) {
        p = $('#ten').val()
    }
    if ( $('#five').is(':checked') ) {
        p = $('#five').val()
    }

    let tip = billAmnt * p

    if( p == 0 ) {
        $('#tipAmountContainer').show();
        $('#tipAmountContainer > #tipAmount').removeClass().addClass('alert alert-primary').text('You did not select quality of service.' )    
    } else {
        $('#tipAmountContainer').show();
        $('#tipAmountContainer > #tipAmount').removeClass().addClass('alert alert-success').text('You should tip $' + tip.toFixed(2) )    
    }

}

function styleRadio(clicked) {
    console.log('checked')
    let all = $('input.radio')
    var t = $(clicked).next().text();

    $('input.radio').next().removeClass('btn-primary');
    all.removeClass('btn.primary');

    $(clicked).next().addClass('btn-primary');
    console.log(t)
}

function enterAmount() {
    $('#tipAmountContainer').show();
    $('#tipAmountContainer > #tipAmount').removeClass().addClass('alert alert-danger').text('Please enter your bill amount.')
}

$('input.radio').on('click', function() {
    styleRadio(this); 
});

//styleRadio()

$('#calcTip').on('click', function() {
    if( !$('#billAmount').val() ) {
        enterAmount()
        return;
    }
    calcTip();
    
});