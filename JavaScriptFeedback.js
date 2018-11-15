
$('form').submit(function (e) {
    let textInput = $('#textId');
    let colorInput = $('#colorId');
    let newRow = $('<tr>');
    let textCell = $('<td>');
    let colorCell = $('<td>');

    textCell.text(textInput.val());
    colorCell.text(colorInput.val());
    colorCell.css('background-color', colorInput.val());

    newRow.append(textCell);
    newRow.append(colorCell);
    $('tbody').append(newRow);

    e.preventDefault();
});