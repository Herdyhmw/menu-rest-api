function allmenu(){
$.getJSON('data/pizza.json', function (data){
let menu = data.menu;
//untuk append ambil semua element yang akan di tambahkan,tapi ubah jadi string semua
$.each(menu, function(i, data){
	$('#daftarmenu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+ data.gambar +'"  class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><p class="card-text">Rp.'+ data.harga +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
	});
});
};
allmenu();



$('.nav-link').on('click', function(){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();
	$('h1').html(kategori);

	if(kategori == 'All menu'){
		
		$('#daftarmenu').html('');

		allmenu();
		return;
	}

$.getJSON('data/pizza.json', function(data){
let menu = data.menu;
let content ='';

$.each(menu, function(i, data){
	if(data.kategori == kategori.toLowerCase()){
		content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+ data.gambar +'"  class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><p class="card-text">Rp.'+ data.harga +'</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
	}

	$('#daftarmenu').html(content);
		});
	});


});