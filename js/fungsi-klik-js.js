var nama = [[],[],[],[],[],[],[],[],[],[]];
var makanan = [[],[],[],[],[],[],[],[],[],[]];
var harga_makanan = [[],[],[],[],[],[],[],[],[],[]];
var porsi_makanan = [[],[],[],[],[],[],[],[],[],[]];
var total_harga = [[],[],[],[],[],[],[],[],[],[]];
var list_meja = [[],[],[],[],[],[],[],[],[],[]];


function klikPilih(id_jumlah, id_dipilih, id_dipesan) {
	document.getElementById(id_jumlah).style.display = 'block';
	document.getElementById(id_dipesan).style.display = 'block';
	document.getElementById(id_dipilih).style.display = 'none';
}

function klikPesan(id_jumlah, id_dipilih, id_dipesan, id_makanan, id_harga) {
	var _nama = document.getElementById("nama_pembeli").innerHTML;
	var _nomor = document.getElementById("nomor_meja").innerHTML;
	var _jumlah = document.getElementById(id_jumlah);
	var _namaMakanan = document.getElementById(id_makanan).innerHTML;
	var _hargaMakanan = document.getElementById(id_harga).innerHTML;
	var _totalHarga = 0
	isErrorJumlah = false;

	if (_jumlah.value.length < 1) {alert("Mohon isi kolom jumlah!");isErrorJumlah=true;_jumlah.focus();}
	else {
		if (isNaN(_jumlah.value)){alert("Mohon isi kolom jumlah dengan Angka!");isErrorJumlah=true;_jumlah.focus();}
		}
	if (!isErrorJumlah){
		document.getElementById(id_jumlah).style.display = 'none';
		document.getElementById(id_dipesan).style.display = 'none';
		document.getElementById(id_dipilih).style.display = 'block';
		document.getElementById("tombol-kirim").style.display = 'block';
		
		/*proses penambahan data*/
		var text = "<table border=1 width=100%>";
		text+= "<tr><th width=60%>PESANAN</th><th width=10%>PORSI</th><th width=30%>HARGA</th></tr>";
		document.getElementById("tabel-pemesanan").innerHTML = text;
		nama[_nomor[5]][nama[_nomor[5]].length] = String(_nama);
		list_meja[_nomor[5]][nama[_nomor[5]].length] = String(_nomor);
		makanan[_nomor[5]][makanan[_nomor[5]].length] = document.getElementById(id_makanan).innerHTML;
		harga_makanan[_nomor[5]][harga_makanan[_nomor[5]].length] =  _jumlah.value  * document.getElementById(id_harga).innerHTML;
		porsi_makanan[_nomor[5]][porsi_makanan[_nomor[5]].length] = _jumlah.value;
		for (var i = 0; i < makanan[_nomor[5]].length; i++){
			text += "<tr><td>"+makanan[_nomor[5]][i]+"</td><td align=center>"+porsi_makanan[_nomor[5]][i]+"</td><td align=center>"+harga_makanan[_nomor[5]][i]+"</td></tr>";
		};
		text += "</table>";
		document.getElementById("tabel-pemesanan").innerHTML = text;

		/*kalau proses selesai, input jumlah dikosongi lagi*/
		document.getElementById(id_jumlah).value = "";

		for (var i = 0; i < harga_makanan[_nomor[5]].length; i++){
			_totalHarga += harga_makanan[_nomor[5]][i];
		}
		document.getElementById("total-harga").innerHTML = _totalHarga;
		
	}
	
	
}
function klikMenuDaftar(){
	document.getElementById("tampilan-untuk-meja").style.display = 'none';
	document.getElementById("tampilan-untuk-daftar").style.display = 'block';
	document.getElementById("content").style.width = "100%";
	document.getElementById("tampilan-untuk-pesan").style.display = 'none';
	document.getElementById("left-content").style.display = 'none';
	document.getElementById("nama_pembeli").innerHTML = "";

}
function klikMenuPesan() {
	document.getElementById("content").style.width = "80%";
	document.getElementById("tampilan-untuk-daftar").style.display = 'none';
	document.getElementById("tampilan-untuk-pesan").style.display = 'block';
	document.getElementById("left-content").style.display = 'block';
	document.getElementById("tampilan-untuk-meja").style.display = 'none';
}
function klikMenuMeja() {
	document.getElementById("tampilan-untuk-meja").style.display = 'block';
	document.getElementById("tampilan-untuk-daftar").style.display = 'none';
	document.getElementById("tampilan-untuk-pesan").style.display = 'none';
	document.getElementById("left-content").style.display = 'none';
	document.getElementById("content").style.width = "100%";

}
/*function klikMenuBayar() {
	document.getElementById("tampilan-untuk-meja").style.display = 'none';
	document.getElementById("tampilan-untuk-daftar").style.display = 'none';
	document.getElementById("tampilan-untuk-pesan").style.display = 'none';
	document.getElementById("left-content").style.display = 'none';
}*/
function klikMenuKiri(id_yg_tampil,id_yg_hilang){
	document.getElementById(id_yg_tampil).style.display = "block";
	document.getElementById(id_yg_hilang).style.display = "none";
}
function klikMenuSemua(){
	document.getElementById("tipe_makanan").style.display = "block";
	document.getElementById("tipe_minuman").style.display = "block";
}

function MasukPembeli() {
	var _nama = document.getElementById('nama-pembeli').value;
	var _banyakOrang = document.getElementById('banyak-orang').value;
	var isError = false;
	if (_nama.length < 1){
		alert("Mohon Masukan Nama Anda!");
		document.getElementById("nama-pembeli").focus();
		isError = true;}
	else {
		if (!CekNama()){
			alert("Nama harus huruf");
			document.getElementById("nama-pembeli").focus();
			isError=true;} 
		else {
			if (_banyakOrang.length < 1) {
				alert("Mohon isi kolom banyak orang!");
				document.getElementById("banyak-orang").focus();
				isError=true} 
			else {
				if (isNaN(_banyakOrang)){
					alert("Masukan banyak orang dengan Angka!");
					document.getElementById("banyak-orang").focus();
					isError = true;}
				}
			}
		}

	if (!isError){ 
		document.getElementById('nama_pembeli').innerHTML = _nama;
		
		document.getElementById("content").style.width = "80%";
		document.getElementById('tampilan-untuk-pesan').style.display = 'block';
		document.getElementById('left-content').style.display = 'block';
		document.getElementById('banyak-orang').value = "";
		document.getElementById('tampilan-untuk-meja').style.display = 'none';
		document.getElementById('tampilan-untuk-daftar').style.display = 'none';
		document.getElementById('button-menu-pesan').style.display = 'inline';
		document.getElementById('button-menu-daftar').style.display = 'none';
		document.getElementById("tombol-semua").style.display = "block";
		document.getElementById("tombol-makanan").style.display = "block";
		document.getElementById("tombol-minuman").style.display = "block";

		
		/*kalau proses selesai, input jumlah dikosongi lagi*/
		document.getElementById("nama-pembeli").value = "";

	}
} 
function cekvalue(a){
	re = /^[A-Za-z]{1,}$/;
	return re.test(a);
}
function CekNama(){
	var data = document.getElementById("nama-pembeli").value;
	if (!cekvalue(data)){
		return false;
	}else{
		return true;
	}

}
function klikMeja(meja){
	var _nomorMeja = document.getElementById(meja);
	var _namaPembeli = document.getElementById("nama-pembeli")


	if (_nomorMeja.style.color == "white"){
		var _persetujuanHijau = confirm("APAKAH ANDA MEMILIH "+_nomorMeja.innerHTML+" ?");
		if (_persetujuanHijau==true){
			_nomorMeja.style.color = "yellow";
			_nomorMeja.style.background = "red";

			document.getElementById('nomor_meja').innerHTML = _nomorMeja.innerHTML;
			document.getElementById("tampilan-untuk-daftar").style.display = 'block';
			document.getElementById("tampilan-untuk-meja").style.display = 'none';
			document.getElementById("button-menu-daftar").style.display = "inline";
			document.getElementById("button-menu-meja").style.display = "none";
		} 

	}else {
		var _persetujuanMerah = confirm("APAKAH ANDA MAU MEMBAYAR ?");
		if (_persetujuanMerah==true){
			_nomorMeja.style.color = "white";
			_nomorMeja.style.background = "green";


			document.getElementById('left-content').style.display = 'block';
			document.getElementById("tombol-bayar").style.display = 'block';
			document.getElementById("tombol-kirim").style.display = 'none';
			document.getElementById("button-menu-pesan").style.display = "inline";
			document.getElementById("tampilan-untuk-meja").style.display = 'none';
			document.getElementById("button-menu-meja").style.display = "none";
			document.getElementById("tombol-semua").style.display = "none";
			document.getElementById("tombol-makanan").style.display = "none";
			document.getElementById("tombol-minuman").style.display = "none";

			document.getElementById('nomor_meja').innerHTML = _nomorMeja.innerHTML;
			document.getElementById('nama_pembeli').innerHTML = nama[_nomorMeja.innerHTML[5]][0];
			var text = "<table border=1 width=100%>";
			text+= "<tr><th width=60%>PESANAN</th><th width=10%>PORSI</th><th width=30%>HARGA</th></tr>";
			document.getElementById("tabel-pemesanan").innerHTML = text;
			for (var i = 0; i < makanan[_nomorMeja.innerHTML[5]].length; i++){
				text += "<tr><td>"+makanan[_nomorMeja.innerHTML[5]][i]+"</td><td align=center>"+porsi_makanan[_nomorMeja.innerHTML[5]][i]+"</td><td align=center>"+harga_makanan[_nomorMeja.innerHTML[5]][i]+"</td></tr>";
			};
			text += "</table>";
			document.getElementById("tabel-pemesanan").innerHTML = text;
			var _totalHarga = 0
			for (var i = 0; i < harga_makanan[_nomorMeja.innerHTML[5]].length; i++){
				_totalHarga += harga_makanan[_nomorMeja.innerHTML[5]][i];
			}
			document.getElementById("total-harga").innerHTML = _totalHarga;
			}
		

	}
}

function kirimPesanan(){
	var persetujuanPesan = confirm("Apakah sudah selesai memesan ?");

	if (persetujuanPesan==true){
		document.getElementById("tampilan-untuk-meja").style.display = 'block';
		document.getElementById("button-menu-meja").style.display = 'inline';
		document.getElementById("button-menu-pesan").style.display = 'none';
		document.getElementById("tampilan-untuk-daftar").style.display = 'none';
		document.getElementById("tampilan-untuk-pesan").style.display = 'none';
		document.getElementById("left-content").style.display = 'none';
		document.getElementById("content").style.width = "100%";
		document.getElementById("nama_pembeli").innerHTML = "";
		document.getElementById("nomor_meja").innerHTML = "";
		document.getElementById("tabel-pemesanan").innerHTML = "";
		document.getElementById("total-harga").innerHTML = "";
		alert("SUKSES MEMESAN");
	}
	
}

function bayarPesanan(){
	var persetujuanBayar = confirm("Apakah anda ingin membayar ?");
	var _nomorMejaTampil = document.getElementById("nomor_meja").innerHTML;

	if (persetujuanBayar==true) {
		nama[_nomorMejaTampil[5]] = [];
		list_meja[_nomorMejaTampil[5]] = [];
		makanan[_nomorMejaTampil[5]] = [];
		harga_makanan[_nomorMejaTampil[5]] = [];
		total_harga[_nomorMejaTampil[5]] = [];
		porsi_makanan[_nomorMejaTampil[5]] = [];

		document.getElementById("tampilan-untuk-meja").style.display = 'block';
		document.getElementById("button-menu-meja").style.display = 'inline';
		document.getElementById("tampilan-untuk-daftar").style.display = 'none';
		document.getElementById("button-menu-pesan").style.display = 'none';
		document.getElementById("tampilan-untuk-pesan").style.display = 'none';
		document.getElementById("left-content").style.display = 'none';
		document.getElementById("content").style.width = "100%";
		document.getElementById("nama_pembeli").innerHTML = "";
		document.getElementById("nomor_meja").innerHTML = "";
		document.getElementById("tabel-pemesanan").innerHTML = "";
		document.getElementById("total-harga").innerHTML = "";
		document.getElementById('tombol-bayar').style.display = 'none';

		alert("SUKSES MEMBAYAR");
	}
}