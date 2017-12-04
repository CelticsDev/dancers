info = {
	fn : '',
	hometown : '',
	nickname : '',
	occupation : '',
	tenure : '',
	color : '',
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
				for (var property in info) {
					if (property !== 'funfacts'){
						info[property] = jQuery('textarea.' + property).val();;
					}
				}
				funfacts();
				var output = '<link rel="stylesheet" href="https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/css/dancer-bios.min.css"><div class="dancer-header col-md-8 col-sm-8 col-tiny-8 col-xs-12"><div class="dancer-header-inner">Dancer Profile: ' + info.fn + '</div></div><div class="dancer-headshot col-md-4 col-sm-4 col-tiny-4 col-xs-12"><a href="https://www.nba.com/celtics/dancers/galleries/2017-18-' + info.fn.toLowerCase() + '"><img src="https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/media/dancers-1718-' + info.fn.toLowerCase() + '-650x976.jpg"></a></div><div class="dancer-stylist col-md-8 col-sm-8 col-tiny-8 col-xs-12"><div class="dancer-stylist-inner">Hair Styling courtesy of G2O Spa + Salon</div></div><div class="dancer-bio-wrap col-md-8 col-sm-8 col-tiny-8 col-xs-12"><div class="dancer-bio"><h3>About ' + info.fn + ':</h3><ul><li>Hometown: ' + info.hometown + '</li><li>Nickname: ' + info.nickname + '</li><li>Occupation: ' + info.occupation + '</li><li>Tenure: ' + info.tenure + '</li></ul><h3>Favorite:</h3><ul><li>Color: ' + info.color + '</li><li>TV Show: ' + info.tvshow + '</li><li>Movie: ' + info.movie + '</li><li>App: ' + info.app + '</li><li>Food: ' + info.food + '</li><li>Celtics Player: ' + info.player + '</li></ul></div></div><div class="dancer-qa col-md-12 col-sm-12 col-tiny-12 col-xs-12"><h3>Fun Facts:</h3>' + info.funfacts + '</div>';
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