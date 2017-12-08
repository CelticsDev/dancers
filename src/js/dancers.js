info = {
	fn : '',
	stylist: '',
	hometown : '',
	nickname : '',
	occupation : '',
	tenure : '',
	tvshow : '',
	movie : '',
	app : '',
	food : '',
	player : '',
	funfacts : ''
}

jQuery(document).ready(function() {
	jQuery('.btn').click(function(){
		switch(jQuery(this).attr('button-type')){
			case 'add':
				jQuery('.funfacts').append('<textarea class="q"></textarea><textarea class="a"></textarea>');
				break;
			case 'remove':
				jQuery('.funfacts textarea:last-child, .funfacts textarea:nth-last-child(2)').remove();
				break;
			case 'generate':
				for (var property in info){
					info[property] = '';
				}
				for (var property in info) {
					if (property !== 'funfacts'){
						info[property] = jQuery('textarea.' + property).val();;
					}
				}
				funfacts();
				var output = '@import "../html/min/_output.min.html"';
			    jQuery(".output").val(output);
				break;
			case 'clear':
				for (var property in info){
					info[property] = '';
				}
				jQuery('textarea').val('');
				break;
		}
	})
});

function funfacts(){
	for (var i=1; i < jQuery('.funfacts textarea').length; i+=2){
		info.funfacts += '<h4>' + jQuery('.funfacts textarea:nth-child(' + i + ')').val() + '</h4><blockquote>' + jQuery('.funfacts textarea:nth-child(' + (i + 1) +')').val() + '</blockquote>';
	}
	console.log(jQuery('.funfacts textarea.a').length)
}