 /*
  * This file is part of Foobar.
  *
  * Foobar is free software: you can redistribute it and/or modify
  * it under the terms of the GNU General Public License as published by
  * the Free Software Foundation, either version 3 of the License, or
  * (at your option) any later version.
  *
  * Foobar is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
  */


$( document ).on( "mobileinit", function() {
	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = '<i class="fa fa-pulse fa-spin fa-5x fa-fw margin-bottom"></i>';
});

$( document ).on( "pagecontainerbeforechange", function(event, ui) {
	$( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
});

$( document ).on( "pagecontainerchange", function(event, ui) {
	var toPage = $(ui.toPage).attr('id');
	var prevPage = $(ui.prevPage).attr('id');
	
	if (toPage === 'agenda-11' || toPage === 'agenda-12')
		$( '.ui-footer a[href="#agenda-10"]' ).addClass( "ui-btn-active" );
		
	$( 'a[href="#' + toPage + '"]' ).addClass( "ui-btn-active" );
	
	
	$.getJSON ('http://static.bigeyessolution.com/json/agenda-convergencebr-2016.json', function (data) {
		console.log(JSON.stringify(data));
	});
	
});

$(function() {
  $( "[data-role='navbar']" ).navbar();
  $( "[data-role='header'], [data-role='footer']" ).toolbar();  
});

function showLoading() {
	$.mobile.loading( "show", {
		text: "foo",
		textVisible: false,
		theme: "a",
		html: '<i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>'
	});
}

function hideLoading() {
	$.mobile.loading( "hide" );
}
