const questions = [
	{
		id: 1,
		question: '&nbsp About Kelimesinin Anlamı Nedir?',
		options: [
			{id: 1, text: 'Anasayfa', correct: false,},
			{id: 2, text: 'Hakkında', correct: true,},
			{id: 3, text: 'Giriş', correct: false,},
			{id: 4, text: 'Eğitim', correct: false,},
		],
	},
	{
		id: 2,
		question:'&nbsp Access Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kapatmak', correct: false,},
			{id: 2, text: 'Hata', correct: false,},
			{id: 3, text: 'İzin', correct: false,},
			{id: 4, text: 'Erişim', correct: true,},
		],
	},
  {
		id: 3,
		question:'&nbsp Advanced Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'İlkel', correct: false,},
			{id: 2, text: 'Geliştirmek', correct: false,},
			{id: 3, text: 'Gelişmiş', correct: true,},
			{id: 4, text: 'Gelişmemiş', correct: false,},
		],
	},
  {
		id: 4,
		question:'&nbsp Adware Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Reklam İçermeyen Yazılım', correct: false,},
			{id: 2, text: 'Reklam', correct: false,},
			{id: 3, text: 'Reklamsız Site', correct: false,},
			{id: 4, text: 'Reklam İçeren Yazılım', correct: true,},
		],
	},
  {
		id: 5,
		question:'&nbsp Abort Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Başlatmak', correct: false,},
			{id: 2, text: 'Durdurmak', correct: true,},
			{id: 3, text: 'Yeniden Başlatmak', correct: false,},
			{id: 4, text: 'Yeniden Durdurmak', correct: false,},
		],
	},
  {
		id: 6,
		question:'&nbsp Administrators Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yönetim Kurulu', correct: false,},
			{id: 2, text: 'Şirket', correct: false,},
			{id: 3, text: 'Çalışanlar', correct: false,},
			{id: 4, text: 'Yöneticiler', correct: true,},
		],
	},
  {
		id: 7,
		question:'&nbsp Analytics Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Analiz Yapmamak', correct: false,},
			{id: 2, text: 'Analiz Araçları', correct: false,},
			{id: 3, text: 'Analizler', correct: true,},
			{id: 4, text: 'Araçlar', correct: false,},
		],
	},
  {
		id: 8,
		question:'&nbsp Anchor Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çapa', correct: true,},
			{id: 2, text: 'Meta', correct: false,},
			{id: 3, text: 'Bilmiyorum', correct: false,},
			{id: 4, text: 'Arkaplan', correct: false,},
		],
	},
  {
		id: 9,
		question:'&nbsp Install Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kaldırmak', correct: false,},
			{id: 2, text: 'İndirmek', correct: true,},
			{id: 3, text: 'Denemek', correct: false,},
			{id: 4, text: 'Sürüm', correct: false,},
		],
	},
  {
		id: 10,
		question:'&nbsp Application Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Oyun', correct: false,},
			{id: 2, text: 'Yazılım', correct: false,},
			{id: 3, text: 'Bilgisayar', correct: false,},
			{id: 4, text: 'Uygulama', correct: true,},
		],
	},
  {
		id: 11,
		question:'&nbsp API Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Bir Yazılımın Başka Bir Yazılımda Tanımlanmış İşlevlerini Kullanabilmesi İçin Oluşturulmuş Bir Tanım Bütünü', correct: false,},
			{id: 2, text: 'Bir Yazılımın Başka Bir Belgede Tanımlanmış İşlevlerini Kullanabilmesi İçin Oluşturulmuş Bir Tanım Bütünü', correct: false,},
			{id: 3, text: 'Bir Bilgisayarın Başka Bir Yazılımda Tanımlanmış İşlevlerini Kullanabilmesi İçin Oluşturulmuş Bir Tanım Bütünü', correct: false,},
			{id: 4, text: 'Bir Yazılımın Başka Bir Yerde Tanımlanmış İşlevlerini Kullanabilmesi İçin Oluşturulmuş Bir Tanım Bütünü', correct: true,},
		],
	},
  {
		id: 12,
		question:'&nbsp Archive Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Arşiv', correct: true,},
			{id: 2, text: 'Arşivsiz', correct: false,},
			{id: 3, text: 'Arşive İhtiyaç Duyan', correct: false,},
			{id: 4, text: 'Arşiv Yazılımı', correct: false,},
		],
	},
  {
		id: 13,
		question:'&nbsp Argument Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Değişken', correct: true,},
			{id: 2, text: 'Sabit', correct: false,},
			{id: 3, text: 'Bağlayıcı', correct: false,},
			{id: 4, text: 'Fonksiyon', correct: false,},
		],
	},
  {
		id: 14,
		question:'&nbsp Array Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Element', correct: false,},
			{id: 2, text: 'Dizi', correct: true,},
			{id: 3, text: 'Değişken', correct: false,},
			{id: 4, text: 'Sabit', correct: false,},
		],
	},
  {
		id: 15,
		question:'&nbsp Attribute Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Nicelik', correct: false,},
			{id: 2, text: 'Deneme', correct: false,},
			{id: 3, text: 'Sonuç', correct: false,},
			{id: 4, text: 'Nitelik', correct: true,},
		],
	},
  {
		id: 16,
		question:'&nbsp Ignore Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Var', correct: false,},
			{id: 2, text: 'Yok', correct: false,},
			{id: 3, text: 'Varsaymak', correct: false,},
			{id: 4, text: 'Yoksaymak', correct: true,},
		],
	},
  {
		id: 17,
		question:'&nbsp Autocomplete Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Otomatik Tamamlama', correct: true,},
			{id: 2, text: 'Otomasyon', correct: false,},
			{id: 3, text: 'Oto Tamamlayamama', correct: false,},
			{id: 4, text: 'Otomatik', correct: false,},
		],
	},
  {
		id: 18,
		question:'&nbsp Autocorrect Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Otomatik', correct: false,},
			{id: 2, text: 'Düzeltme', correct: false,},
			{id: 3, text: 'Otomatik Düzeltme', correct: true,},
			{id: 4, text: 'Düzeltememe', correct: false,},
		],
	},
  {
		id: 19,
		question:'&nbsp Autofill Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Otomatik Doldurma', correct: true,},
			{id: 2, text: 'Doldurma', correct: false,},
			{id: 3, text: 'Otomatik Düzeltme', correct: false,},
			{id: 4, text: 'Otomatik Doğrulama', correct: false,},
		],
	},
  {
		id: 20,
		question:'&nbsp Algorithm Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Deney', correct: false,},
			{id: 2, text: 'Algoritma', correct: true,},
			{id: 3, text: 'Parça', correct: false,},
			{id: 4, text: 'Bilgisayar', correct: false,},
		],
	},
	{
		id: 21,
		question:'&nbsp Back Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: 'Sola', correct: false,},
			{ id: 2, text: 'Sağa', correct: false,},
			{ id: 3, text: 'İleri', correct: false,},
			{ id: 4, text: 'Geri',correct: true,},
		],
	},
  {
		id: 22,
		question:'&nbsp Backup Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri', correct: false,},
			{id: 2, text: 'Depolama', correct: false,},
			{id: 3, text: 'Yedekleme', correct: true,},
			{id: 4, text: 'Depolamama', correct: false,},
		],
	},
  {
		id: 23,
		question:'&nbsp Brand New Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çok Eski', correct: false,},
			{id: 2, text: 'Eski', correct: false,},
			{id: 3, text: 'Yepyeni', correct: true,},
			{id: 4, text: 'Sadece Yeni', correct: false,},
		],
	},
  {
		id: 24,
		question:'&nbsp Branch Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çekmek', correct: false,},
			{id: 2, text: 'İtmek', correct: false,},
			{id: 3, text: 'Yaprak', correct: false,},
			{id: 4, text: 'Dal', correct: true,},
		],
	},
  {
		id: 25,
		question:'&nbsp Browser Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Deneme', correct: false,},
			{id: 2, text: 'Bilmiyorum', correct: false,},
			{id: 3, text: 'Eklenti', correct: false,},
			{id: 4, text: 'Tarayıcı', correct: true,},
		],
	},
  {
		id: 26,
		question:'&nbsp Bug Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Hata Ayıklama', correct: false,},
			{id: 2, text: 'Ayıklama', correct: false,},
			{id: 3, text: 'Hata', correct: true,},
			{id: 4, text: 'Çözüm', correct: false,},
		],
	},
  {
		id: 27,
		question:'&nbsp Body Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Gövde', correct: true,},
			{id: 2, text: 'Kafa', correct: false,},
			{id: 3, text: 'İskelet', correct: false,},
			{id: 4, text: 'Algoritma', correct: false,},
		],
	},
  {
		id: 28,
		question:'&nbsp Boolean Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Değeri Sadece 1 Ya Da 0 Olan', correct: true,},
			{id: 2, text: 'Değeri Sadece 1 Ya Da 2 Olan', correct: false,},
			{id: 3, text: 'Değeri Sadece 2 Ya Da 1 Olan', correct: false,},
			{id: 4, text: 'Değeri Sadece 2 Olan', correct: false,},
		],
	},
  {
		id: 29,
		question:'&nbsp Cables Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veriler', correct: false,},
			{id: 2, text: 'Girişler', correct: false,},
			{id: 3, text: 'Kablolar', correct: true,},
			{id: 4, text: 'Vericiler', correct: false,},
		],
	},
  {
		id: 30,
		question:'&nbsp Calculator Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Bilgisayar', correct: false,},
			{id: 2, text: 'Hesap Makinesi', correct: true,},
			{id: 3, text: 'Makine', correct: false,},
			{id: 4, text: 'Hesaplama', correct: false,},
		],
	},
	{
		id: 31,
		question:'&nbsp Cancel Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: 'Geri Alma', correct: false,},
			{ id: 2, text: 'İptal Etme', correct: true,},
			{ id: 3, text: 'İleri Alma', correct: false,},
			{ id: 4, text: 'Kabul Etme',correct: false,},
		],
	},
  {
		id: 32,
		question:'&nbsp Child Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Üst Öğe', correct: false,},
			{id: 2, text: 'Alt Öğe', correct: true,},
			{id: 3, text: 'Küçük Öğe', correct: false,},
			{id: 4, text: 'Büyük Öğe', correct: false,},
		],
	},
  {
		id: 33,
		question:'&nbsp Collaboration Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'İşbirliği', correct: true,},
			{id: 2, text: 'Birlik', correct: false,},
			{id: 3, text: 'İş', correct: false,},
			{id: 4, text: 'Güç', correct: false,},
		],
	},
  {
		id: 34,
		question:'&nbsp Cookie Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sütlaç', correct: false,},
			{id: 2, text: 'Baklava', correct: false,},
			{id: 3, text: 'Kurabiye', correct: false,},
			{id: 4, text: 'Çerez', correct: true,},
		],
	},
  {
		id: 35,
		question:'&nbsp Class Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'ID', correct: false,},
			{id: 2, text: 'Tag', correct: false,},
			{id: 3, text: 'Meta', correct: false,},
			{id: 4, text: 'Sınıf', correct: true,},
		],
	},
  {
		id: 36,
		question:'&nbsp Command Bar Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Komut', correct: false,},
			{id: 2, text: 'Komut Barı', correct: true,},
			{id: 3, text: 'Bar', correct: false,},
			{id: 4, text: 'Komutlar', correct: false,},
		],
	},
  {
		id: 37,
		question:'&nbsp Compress Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sıkıştırmak', correct: true,},
			{id: 2, text: 'Daraltmak', correct: false,},
			{id: 3, text: 'Geri Almak', correct: false,},
			{id: 4, text: 'İleri Almak', correct: false,},
		],
	},
  {
		id: 38,
		question:'&nbsp CMS(Content Managment System) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sistem', correct: false,},
			{id: 2, text: 'Bilgi Sistemi', correct: false,},
			{id: 3, text: 'Bilgi Yönetim', correct: false,},
			{id: 4, text: 'İçerik Yönetim Sistemi', correct: true,},
		],
	},
  {
		id: 39,
		question:'&nbsp Configuration Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Koşullandırma', correct: false,},
			{id: 2, text: 'Yapılandırma', correct: true,},
			{id: 3, text: 'Geri Alma', correct: false,},
			{id: 4, text: 'Silme', correct: false,},
		],
	},
  {
		id: 40,
		question:'&nbsp Confirmation Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Doğru', correct: false,},
			{id: 2, text: 'Doğrulamama', correct: false,},
			{id: 3, text: 'Doğrulama', correct: true,},
			{id: 4, text: 'Yanlış Cevap :)', correct: false,},
		],
	},
	{
		id: 41,
		question:'&nbsp Connectivity Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: 'Bağlanabilirlik', correct: true,},
			{ id: 2, text: 'Koşullandırılabilirlik', correct: false,},
			{ id: 3, text: 'Düzenlenebilirlik', correct: false,},
			{ id: 4, text: 'Sistemlendirilebilirlik',correct: false,},
		],
	},
  {
		id: 42,
		question:'&nbsp Constant Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Değişken', correct: false,},
			{id: 2, text: 'Döngü', correct: false,},
			{id: 3, text: 'Boşluk', correct: false,},
			{id: 4, text: 'Sabit', correct: true,},
		],
	},
  {
		id: 43,
		question:'&nbsp Concatenate Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ayırmak', correct: false,},
			{id: 2, text: 'Parçalamak', correct: false,},
			{id: 3, text: 'Parçalara Ayırmak', correct: false,},
			{id: 4, text: 'Birleştirmek', correct: true,},
		],
	},
  {
		id: 44,
		question:'&nbsp Copy Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yapıştırmak', correct: false,},
			{id: 2, text: 'Kopyalamak', correct: true,},
			{id: 3, text: 'Bölmek', correct: false,},
			{id: 4, text: 'Ayırmak', correct: false,},
		],
	},
  {
		id: 45,
		question:'&nbsp Corrupt Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Düzenlenebilir', correct: false,},
			{id: 2, text: 'Sağlam', correct: false,},
			{id: 3, text: 'Bozuk', correct: true,},
			{id: 4, text: 'Düzenlenemez', correct: false,},
		],
	},
  {
		id: 46,
		question:'&nbsp Crash Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Bozulmak', correct: false,},
			{id: 2, text: 'Hata Vermek', correct: false,},
			{id: 3, text: 'Çalışmamak', correct: false,},
			{id: 4, text: 'Çökmek', correct: true,},
		],
	},
  {
		id: 47,
		question:'&nbsp Crawl Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Arama Robotu', correct: true,},
			{id: 2, text: 'Arama Yapmak', correct: false,},
			{id: 3, text: 'Robot', correct: false,},
			{id: 4, text: 'Arama Yapamamak', correct: false,},
		],
	},
  {
		id: 48,
		question:'&nbsp Create Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Silmek', correct: false,},
			{id: 2, text: 'Bozmak', correct: false,},
			{id: 3, text: 'Düzenlemek', correct: false,},
			{id: 4, text: 'Oluşturmak', correct: true,},
		],
	},
  {
		id: 49,
		question:'&nbsp Cut Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ayırmak', correct: false,},
			{id: 2, text: 'Düzenlemek', correct: false,},
			{id: 3, text: 'Yapıştırmak', correct: false,},
			{id: 4, text: 'Kesmek', correct: true,},
		],
	},
  {
		id: 50,
		question:'&nbsp Cyber Security Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Siber Güvenlik', correct: true,},
			{id: 2, text: 'Güvenlik', correct: false,},
			{id: 3, text: 'Yazılım', correct: false,},
			{id: 4, text: 'Yazılımcı', correct: false,},
		],
	},
	{
		id: 51,
		question:'&nbsp Cloud Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: 'Bulut', correct: true,},
			{ id: 2, text: 'Sistem', correct: false,},
			{ id: 3, text: 'Bozuk Sistem', correct: false,},
			{ id: 4, text: 'Çalışan Sistem',correct: false,},
		],
	},
  {
		id: 52,
		question:'&nbsp CSS(Cascading Style Sheets) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Basamaklı Sayfa', correct: false,},
			{id: 2, text: 'Basamaklı Stil Sayfası', correct: true,},
			{id: 3, text: 'Stil Sayfası', correct: false,},
			{id: 4, text: 'Sadece Sayfa', correct: false,},
		],
	},
  {
		id: 53,
		question:'&nbsp Dashboard Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Tablo', correct: false,},
			{id: 2, text: 'Gösterge Tablosu', correct: true,},
			{id: 3, text: 'Panel Sistemini Çalıştırmak', correct: false,},
			{id: 4, text: 'Sistem', correct: false,},
		],
	},
  {
		id: 54,
		question:'&nbsp Database Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri', correct: false,},
			{id: 2, text: 'Veri Bilimi', correct: false,},
			{id: 3, text: 'Veri Tabanı', correct: true,},
			{id: 4, text: 'Taban', correct: false,},
		],
	},
  {
		id: 55,
		question:'&nbsp Data Processing Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri Koruması', correct: false,},
			{id: 2, text: 'Veri İşleme', correct: true,},
			{id: 3, text: 'Veri Kurtarma ', correct: false,},
			{id: 4, text: 'Veri Doğrulama', correct: false,},
		],
	},
  {
		id: 56,
		question:'&nbsp Data Validation Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri Koruması', correct: false,},
			{id: 2, text: 'Veri İşleme', correct: false,},
			{id: 3, text: 'Veri Kurtarma ', correct: false,},
			{id: 4, text: 'Veri Doğrulama', correct: true,},
		],
	},
  {
		id: 57,
		question:'&nbsp Data Mining Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri Koruması', correct: false,},
			{id: 2, text: 'Veri Madenciliği', correct: true,},
			{id: 3, text: 'Veri Kurtarma ', correct: false,},
			{id: 4, text: 'Veri Doğrulama', correct: false,},
		],
	},
  {
		id: 58,
		question:'&nbsp Debugging Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sorun', correct: false,},
			{id: 2, text: 'Süreç', correct: false,},
			{id: 3, text: 'Sorun Giderme Süreci', correct: true,},
			{id: 4, text: 'Hata', correct: false,},
		],
	},
  {
		id: 59,
		question:'&nbsp Deep Learning Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'ChatGPT', correct: false,},
			{id: 2, text: 'AI', correct: false,},
			{id: 3, text: 'Öğrenme', correct: false,},
			{id: 4, text: 'Derin Öğrenme', correct: true,},
		],
	},
  {
		id: 60,
		question:'&nbsp Default Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri', correct: false,},
			{id: 2, text: 'Otomasyon', correct: false,},
			{id: 3, text: 'Otomatik', correct: false,},
			{id: 4, text: 'Varsayılan', correct: true,},
		],
	},
	{
		id: 61,
		question:'&nbsp Delay Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: 'Erken', correct: false,},
			{ id: 2, text: 'Geç', correct: false,},
			{ id: 3, text: 'Gecikme', correct: true,},
			{ id: 4, text: 'Aşırı Trafik',correct: false,},
		],
	},
  {
		id: 62,
		question:'&nbsp Delete Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Silmek', correct: true,},
			{id: 2, text: 'Düzeltmek', correct: false,},
			{id: 3, text: 'Eklemek', correct: false,},
			{id: 4, text: 'Yapıştırmak', correct: false,},
		],
	},
  {
		id: 63,
		question:'&nbsp Demo Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Moderatör', correct: false,},
			{id: 2, text: 'Yayın', correct: false,},
			{id: 3, text: 'Yayınlamak', correct: false,},
			{id: 4, text: 'Tanıtım', correct: true,},
		],
	},
  {
		id: 64,
		question:'&nbsp Design Pattern Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Tasarımlar', correct: false,},
			{id: 2, text: 'Tasarım Desenleri', correct: true,},
			{id: 3, text: 'Desenler', correct: false,},
			{id: 4, text: 'Tasarım Koşulları', correct: false,},
		],
	},
  {
		id: 65,
		question:'&nbsp Development Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Geliştirme', correct: true,},
			{id: 2, text: 'Büyütme', correct: false,},
			{id: 3, text: 'Küçültme', correct: false,},
			{id: 4, text: 'Hata', correct: false,},
		],
	},
  {
		id: 66,
		question:'&nbsp Discard Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yapılana Ekle Yapmak', correct: false,},
			{id: 2, text: 'Yapılandan Vazgeçmek', correct: true,},
			{id: 3, text: 'Yapılanı Düzenlemek', correct: false,},
			{id: 4, text: 'Yapmak', correct: false,},
		],
	},
  {
		id: 67,
		question:'&nbsp Discontinue Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Durdurmak', correct: true,},
			{id: 2, text: 'Başlatmak', correct: false,},
			{id: 3, text: 'Devam Etmek', correct: false,},
			{id: 4, text: 'Bekletmek', correct: false,},
		],
	},
  {
		id: 68,
		question:'&nbsp Document Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Veri Bilimi', correct: false,},
			{id: 2, text: 'Yanlış Veri', correct: false,},
			{id: 3, text: 'Dökümantasyon', correct: false,},
			{id: 4, text: 'Belge', correct: true,},
		],
	},
  {
		id: 69,
		question:'&nbsp Documentation Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Dosya', correct: false,},
			{id: 2, text: 'Belge', correct: false,},
			{id: 3, text: 'Döküman', correct: false,},
			{id: 4, text: 'Dökümantasyon', correct: true,},
		],
	},
  {
		id: 70,
		question:'&nbsp Domain Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: true,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
	{
		id: 71,
		question:'&nbsp Due Date/Deadline Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: '3. soru a', correct: true,},
			{ id: 2, text: '3. soru b', correct: false,},
			{ id: 3, text: '3. soru c doğru', correct: false,},
			{ id: 4, text: '3. soru d',correct: false,},
		],
	},
  {
		id: 72,
		question:'&nbsp Drop-Down Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: true,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 73,
		question:'&nbsp Encapsulation Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: true,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 74,
		question:'&nbsp Embed Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: true,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 75,
		question:'&nbsp Enable Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
  {
		id: 76,
		question:'&nbsp Encryption Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
  {
		id: 77,
		question:'&nbsp Entry Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: true,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 78,
		question:'&nbsp Engineering Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: true,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 79,
		question:'&nbsp Error Code Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: true,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 80,
		question:'&nbsp Execute Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
	{
		id: 81,
		question:'&nbsp Exit Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: '3. soru a', correct: false,},
			{ id: 2, text: '3. soru b', correct: false,},
			{ id: 3, text: '3. soru c doğru', correct: true,},
			{ id: 4, text: '3. soru d',correct: false,},
		],
	},
  {
		id: 82,
		question:'&nbsp Expand Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: true,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 83,
		question:'&nbsp Export Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: true,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 84,
		question:'&nbsp Extract Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: true,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 85,
		question:'&nbsp Expert Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: true,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 86,
		question:'&nbsp Fail Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
  {
		id: 87,
		question:'&nbsp Fault Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
  {
		id: 88,
		question:'&nbsp Favicon Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: true,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 89,
		question:'&nbsp Feature Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: true,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 90,
		question:'&nbsp Fetch Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: true,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 91,
		question:'&nbsp Field Kelimesinin Anlamı Nedir?',
		options: [
			{ id: 1, text: '3. soru a', correct: false,},
			{ id: 2, text: '3. soru b', correct: false,},
			{ id: 3, text: '3. soru c doğru', correct: true,},
			{ id: 4, text: '3. soru d',correct: false,},
		],
	},
  {
		id: 92,
		question:'&nbsp File Extension Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: true,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 93,
		question:'&nbsp File Recovery Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: true,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 94,
		question:'&nbsp Fix Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: true,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 95,
		question:'&nbsp Frame Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
  {
		id: 96,
		question:'&nbsp Framework Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: false,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: true,},
		],
	},
  {
		id: 97,
		question:'&nbsp Front-End Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Geliştirici', correct: false,},
			{id: 2, text: 'Yazılımcı', correct: false,},
			{id: 3, text: 'Arayüz Geliştiricisi', correct: false,},
			{id: 4, text: 'Arayüz', correct: true,},
		],
	},
  {
		id: 98,
		question:'&nbsp Back-End Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ön Uç Geliştirici', correct: false,},
			{id: 2, text: 'Arka Uç Geliştirici', correct: false,},
			{id: 3, text: 'Arka Uç', correct: true,},
			{id: 4, text: 'Ön Uç', correct: false,},
		],
	},
  {
		id: 99,
		question:'&nbsp Full Backup Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yarı Yedekleme', correct: false,},
			{id: 2, text: 'Tam Yedekleme', correct: true,},
			{id: 3, text: 'Yedekleme', correct: false,},
			{id: 4, text: 'Yedek', correct: false,},
		],
	},
  {
		id: 100,
		question:'&nbsp Folder Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Dosya', correct: false,},
			{id: 2, text: 'Klasör', correct: true,},
			{id: 3, text: 'Belge', correct: false,},
			{id: 4, text: 'Döküman', correct: false,},
		],
	},
  {
		id: 101,
		question:'&nbsp Game Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Oy', correct: false,},
			{id: 2, text: 'Oyuncu', correct: false,},
			{id: 3, text: 'Oyun', correct: true,},
			{id: 4, text: 'Oynamak', correct: false,},
		],
	},
  {
		id: 102,
		question:'&nbsp Halt Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Geri Alma', correct: false,},
			{id: 2, text: 'İptal Etme', correct: false,},
			{id: 3, text: 'Yavaşlama', correct: false,},
			{id: 4, text: 'Durdurma', correct: true,},
		],
	},
  {
		id: 103,
		question:'&nbsp Hardware Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yazılım', correct: false,},
			{id: 2, text: 'Donanım', correct: true,},
			{id: 3, text: 'Donanma', correct: false,},
			{id: 4, text: 'TSK', correct: false,},
		],
	},
  {
		id: 104,
		question:'&nbsp Handler Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'İşleyici', correct: true,},
			{id: 2, text: 'İşlemek', correct: false,},
			{id: 3, text: 'İş Yapmak', correct: false,},
			{id: 4, text: 'Parçalamak', correct: false,},
		],
	},
  {
		id: 105,
		question:'&nbsp Highlight Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Cümlede Vurgu', correct: false,},
			{id: 2, text: 'Sözcükte Vurgu', correct: false,},
			{id: 3, text: 'Vurgulama', correct: true,},
			{id: 4, text: 'Vur Emri Vermek :)', correct: false,},
		],
	},
  {
		id: 106,
		question:'&nbsp Host Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sahte Makine', correct: false,},
			{id: 2, text: 'Yardımcı Makine', correct: false,},
			{id: 3, text: 'Ana Makine', correct: true,},
			{id: 4, text: 'Sadece Makine', correct: false,},
		],
	},
  {
		id: 107,
		question:'&nbsp Hosting Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Barındırmak', correct: true,},
			{id: 2, text: 'Barınak', correct: false,},
			{id: 3, text: 'Depolamak', correct: false,},
			{id: 4, text: 'Alan Adı', correct: false,},
		],
	},
  {
		id: 108,
		question:'&nbsp Hyperlink Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Meta Tag', correct: false,},
			{id: 2, text: 'Bağlantı', correct: true,},
			{id: 3, text: 'Arama Robotu', correct: false,},
			{id: 4, text: 'Arama', correct: false,},
		],
	},
  {
		id: 109,
		question:'&nbsp HTML(Hypertext Markup Language) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Metin İşaretleme Kural Dili', correct: false,},
			{id: 2, text: 'Metin İşaretleme Yazım Dili', correct: true,},
			{id: 3, text: 'Metin İşaretleme Vurgu Dili', correct: false,},
			{id: 4, text: 'Metin İşaretleme Bağlantılı Dil', correct: false,},
		],
	},
  {
		id: 110,
		question:'&nbsp Move Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Silmek', correct: false,},
			{id: 2, text: 'Eklemek', correct: false,},
			{id: 3, text: 'Taşımak', correct: true,},
			{id: 4, text: 'Toplamak', correct: false,},
		],
	},
  {
		id: 111,
		question:'&nbsp Monitor Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Fare', correct: false,},
			{id: 2, text: 'Kablo', correct: false,},
			{id: 3, text: 'Klavye', correct: false,},
			{id: 4, text: 'Ekran', correct: true,},
		],
	},
  {
		id: 112,
		question:'&nbsp Network Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ağ', correct: true,},
			{id: 2, text: 'Ağ Bağlantısı', correct: false,},
			{id: 3, text: 'Ağ Hatası', correct: false,},
			{id: 4, text: 'Olta Ağı', correct: false,},
		],
	},
  {
		id: 113,
		question:'&nbsp Network Security Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ağ Hasarı', correct: false,},
			{id: 2, text: 'Ağ Açığı', correct: false,},
			{id: 3, text: 'Ağ Bilimi', correct: false,},
			{id: 4, text: 'Ağ Güvenliği', correct: true,},
		],
	},
  {
		id: 114,
		question:'&nbsp Navigation Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Menü', correct: true,},
			{id: 2, text: 'Gövde', correct: false,},
			{id: 3, text: 'Bağlantı', correct: false,},
			{id: 4, text: 'Başlık', correct: false,},
		],
	},
  {
		id: 115,
		question:'&nbsp Null Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Dolu Karakter', correct: false,},
			{id: 2, text: 'Boş Karakter', correct: true,},
			{id: 3, text: 'Karaktersizlik', correct: false,},
			{id: 4, text: 'Karakter', correct: false,},
		],
	},
  {
		id: 116,
		question:'&nbsp Object Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Nesne Gövdesi', correct: false,},
			{id: 2, text: 'Nesne Tabanı', correct: false,},
			{id: 3, text: 'Nesne Tabanlı Programlama', correct: false,},
			{id: 4, text: 'Nesne', correct: true,},
		],
	},
  {
		id: 117,
		question:'&nbsp Object-Oriented Programming Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Nesne Yönelimli Programlama', correct: true,},
			{id: 2, text: 'Nesnesiz Programlama', correct: false,},
			{id: 3, text: 'Nesne', correct: false,},
			{id: 4, text: 'Obje', correct: false,},
		],
	},
  {
		id: 118,
		question:'&nbsp Optimize Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'İyileştirmek', correct: true,},
			{id: 2, text: 'Hasar Vermek', correct: false,},
			{id: 3, text: 'Kötüleştirmek', correct: false,},
			{id: 4, text: 'Stabilitize Etmek', correct: false,},
		],
	},
  {
		id: 119,
		question:'&nbsp Option Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Seçiciler', correct: false,},
			{id: 2, text: 'Seçici', correct: false,},
			{id: 3, text: 'Seçmek', correct: false,},
			{id: 4, text: 'Seçenek', correct: true,},
		],
	},
  {
		id: 120,
		question:'&nbsp Parent Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Alt Öğe', correct: false,},
			{id: 2, text: 'Üst Öğe', correct: true,},
			{id: 3, text: 'Öğe', correct: false,},
			{id: 4, text: 'Kodlama', correct: false,},
		],
	},
  {
		id: 121,
		question:'&nbsp Paste Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yapıştırmak', correct: true,},
			{id: 2, text: 'Kopyalamak', correct: false,},
			{id: 3, text: 'Gizlemek', correct: false,},
			{id: 4, text: 'Göstermek', correct: false,},
		],
	},
  {
		id: 122,
		question:'&nbsp Patch Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yara', correct: false,},
			{id: 2, text: 'O...', correct: false,},
			{id: 3, text: 'Yama', correct: true,},
			{id: 4, text: 'Bandaj', correct: false,},
		],
	},
  {
		id: 123,
		question:'&nbsp PDF (Portable Document Format) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Taşınamaz Belge Biçimi', correct: false,},
			{id: 2, text: 'Taşınabilir Belge Biçimi', correct: true,},
			{id: 3, text: 'Belge Biçimi', correct: false,},
			{id: 4, text: 'Belge', correct: false,},
		],
	},
  {
		id: 124,
		question:'&nbsp Piracy Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yayın', correct: false,},
			{id: 2, text: 'Korsan', correct: false,},
			{id: 3, text: 'Jack Sparrow', correct: false,},
			{id: 4, text: 'Korsan Yayıncılık', correct: true,},
		],
	},
  {
		id: 125,
		question:'&nbsp Preferences Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Tercihler', correct: true,},
			{id: 2, text: 'Ayarlar', correct: false,},
			{id: 3, text: 'Gizlilik', correct: false,},
			{id: 4, text: 'Çerez', correct: false,},
		],
	},
  {
		id: 126,
		question:'&nbsp Port Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sokbitki', correct: false,},
			{id: 2, text: 'Soket', correct: true,},
			{id: 3, text: 'Sök', correct: false,},
			{id: 4, text: 'Soğuk İçecek', correct: false,},
		],
	},
  {
		id: 127,
		question:'&nbsp Promotion Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Terfi', correct: true,},
			{id: 2, text: 'Müdür', correct: false,},
			{id: 3, text: 'Yazılımcı', correct: false,},
			{id: 4, text: 'Ödül', correct: false,},
		],
	},
  {
		id: 128,
		question:'&nbsp Publisher Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yapıcı', correct: false,},
			{id: 2, text: 'Yaymayın', correct: false,},
			{id: 3, text: 'Yayın', correct: false,},
			{id: 4, text: 'Yayıncı', correct: true,},
		],
	},
  {
		id: 129,
		question:'&nbsp Purge Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çıkar', correct: false,},
			{id: 2, text: 'Ekle', correct: false,},
			{id: 3, text: 'Temizle', correct: true,},
			{id: 4, text: 'Sil', correct: false,},
		],
	},
  {
		id: 130,
		question:'&nbsp Open-Source Software Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Açık Kaynak', correct: false,},
			{id: 2, text: 'Açık Kaynaklı Yazılım', correct: true,},
			{id: 3, text: 'Kapalı Kaynak', correct: false,},
			{id: 4, text: 'Allah Yolundaki Kaynak', correct: false,},
		],
	},
  {
		id: 131,
		question:'&nbsp Output Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Silmek', correct: false,},
			{id: 2, text: 'Çıkamadı', correct: false,},
			{id: 3, text: 'Girdi', correct: false,},
			{id: 4, text: 'Çıktı', correct: true,},
		],
	},
  {
		id: 132,
		question:'&nbsp Optimization Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Eklemek', correct: false,},
			{id: 2, text: 'Otomasyon', correct: false,},
			{id: 3, text: 'Optimizasyon', correct: true,},
			{id: 4, text: 'Otomatik', correct: false,},
		],
	},
  {
		id: 133,
		question:'&nbsp Quit Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çıkmak', correct: true,},
			{id: 2, text: 'Girmek', correct: false,},
			{id: 3, text: 'Silmek', correct: false,},
			{id: 4, text: 'Eklemek', correct: false,},
		],
	},
  {
		id: 134,
		question:'&nbsp Radio Button Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: '2. soru a', correct: false,},
			{id: 2, text: '2. soru b', correct: true,},
			{id: 3, text: '2. soru c', correct: false,},
			{id: 4, text: '2. soru d doğru', correct: false,},
		],
	},
  {
		id: 135,
		question:'&nbsp Readme Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Beni Dinle', correct: false,},
			{id: 2, text: 'Oku', correct: false,},
			{id: 3, text: 'Beni Oku', correct: true,},
			{id: 4, text: 'Yaz', correct: false,},
		],
	},
  {
		id: 136,
		question:'&nbsp Redirect Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yönlendirmek', correct: true,},
			{id: 2, text: 'Bağlantı', correct: false,},
			{id: 3, text: 'Link Vermek', correct: false,},
			{id: 4, text: 'Bağlantılı Link', correct: false,},
		],
	},
  {
		id: 137,
		question:'&nbsp Release Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Eksik', correct: false,},
			{id: 2, text: 'Magazin', correct: false,},
			{id: 3, text: 'Gündem', correct: false,},
			{id: 4, text: 'Yayınlamak', correct: true,},
		],
	},
  {
		id: 138,
		question:'&nbsp Reload Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yeniden Başlatmak', correct: false,},
			{id: 2, text: 'Yeniden Yüklemek', correct: true,},
			{id: 3, text: 'Yeniden Kapatmak', correct: false,},
			{id: 4, text: 'Açmak', correct: false,},
		],
	},
  {
		id: 139,
		question:'&nbsp Replace Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Karşılaştırmak', correct: false,},
			{id: 2, text: 'Değiştirmek', correct: true,},
			{id: 3, text: 'Çıkartmak', correct: false,},
			{id: 4, text: 'Eksiltmek', correct: false,},
		],
	},
  {
		id: 140,
		question:'&nbsp Retry Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Tekrar Denemek', correct: true,},
			{id: 2, text: 'Tekrar Oynamak', correct: false,},
			{id: 3, text: 'Tekrar Başlamak', correct: false,},
			{id: 4, text: 'Tekrar Etmek', correct: false,},
		],
	},
  {
		id: 141,
		question:'&nbsp Restore Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Eski Durumuna Getirmek', correct: true,},
			{id: 2, text: 'Kaydetmek', correct: false,},
			{id: 3, text: 'Yeni Duruma Getirmek', correct: false,},
			{id: 4, text: 'Değişikliklerden Vazgeçmek', correct: false,},
		],
	},
  {
		id: 142,
		question:'&nbsp Run Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çalıştırmaya Çalışmak', correct: false,},
			{id: 2, text: 'Çalıştırmamak', correct: false,},
			{id: 3, text: 'Çalıştırmak', correct: true,},
			{id: 4, text: 'Bu Şık Yanlış :)', correct: false,},
		],
	},
  {
		id: 143,
		question:'&nbsp Save Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kaydetmek', correct: true,},
			{id: 2, text: 'İptal Etmek', correct: false,},
			{id: 3, text: 'Yeniden Denemek', correct: false,},
			{id: 4, text: 'Başlatmak', correct: false,},
		],
	},
  {
		id: 144,
		question:'&nbsp Scroll Bar Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kaydırma Hatası', correct: false,},
			{id: 2, text: 'Kaydırmama', correct: false,},
			{id: 3, text: 'Kaydırma', correct: false,},
			{id: 4, text: 'Kaydırma Çubuğu', correct: true,},
		],
	},
  {
		id: 145,
		question:'&nbsp SEO(Search Engine Optimization) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Arama Motoru', correct: false,},
			{id: 2, text: 'Arama Motoru Optimizasyonu', correct: true,},
			{id: 3, text: 'Optimizasyon', correct: false,},
			{id: 4, text: 'Arama Motoru Otomasyonu', correct: false,},
		],
	},
  {
		id: 146,
		question:'&nbsp Security Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kaydetmek', correct: false,},
			{id: 2, text: 'Ayarlar', correct: false,},
			{id: 3, text: 'Güvenlik', correct: true,},
			{id: 4, text: 'Güvensizlik', correct: false,},
		],
	},
  {
		id: 147,
		question:'&nbsp Sidebar Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Başlık', correct: false,},
			{id: 2, text: 'Orta Sütun', correct: false,},
			{id: 3, text: 'Yan Sütun', correct: true,},
			{id: 4, text: 'PAragraf', correct: false,},
		],
	},
  {
		id: 148,
		question:'&nbsp Settings Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ayarlar', correct: true,},
			{id: 2, text: 'Anasayfa', correct: false,},
			{id: 3, text: 'Hakkımda', correct: false,},
			{id: 4, text: 'Ayarsızlıklar', correct: false,},
		],
	},
  {
		id: 149,
		question:'&nbsp Server Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Alıcı', correct: false,},
			{id: 2, text: 'İstemci', correct: false,},
			{id: 3, text: 'Sunucu', correct: true,},
			{id: 4, text: 'Göcerici', correct: false,},
		],
	},
  {
		id: 150,
		question:'&nbsp Setup Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kurulum', correct: true,},
			{id: 2, text: 'Buraya Kadar Geldiysen Seni Tebrik Ediyorum.', correct: false,},
			{id: 3, text: 'Doğru Cevap Kurulum Olan Şık.', correct: false,},
			{id: 4, text: 'Helal Olsun.', correct: false,},
		],
	},

  {
		id: 151,
		question:'&nbsp Skip Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Atlamamak', correct: false,},
			{id: 2, text: 'Atla', correct: true,},
			{id: 3, text: 'Kaç', correct: false,},
			{id: 4, text: 'Zıpla', correct: false,},
		],
	},
  {
		id: 152,
		question:'&nbsp Scanner Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sunucu', correct: false,},
			{id: 2, text: 'Tarayıcı', correct: true,},
			{id: 3, text: 'Alıcı', correct: false,},
			{id: 4, text: 'Gönderici', correct: false,},
		],
	},
  {
		id: 153,
		question:'&nbsp Software Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yazılım', correct: true,},
			{id: 2, text: 'Bilişim', correct: false,},
			{id: 3, text: 'Teknoloji', correct: false,},
			{id: 4, text: 'Yazmayalım', correct: false,},
		],
	},
  {
		id: 154,
		question:'&nbsp Software Test Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Test', correct: false,},
			{id: 2, text: 'Deneme', correct: false,},
			{id: 3, text: 'Kontrol', correct: false,},
			{id: 4, text: 'Yazılım Testi', correct: true,},
		],
	},
  {
		id: 155,
		question:'&nbsp Source Codes Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kod', correct: false,},
			{id: 2, text: 'Kaynak', correct: false,},
			{id: 3, text: 'Kaynak Kodlar', correct: true,},
			{id: 4, text: 'Hatalı Kod', correct: false,},
		],
	},
  {
		id: 156,
		question:'&nbsp Support Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Müşteri Hizmetleri', correct: false,},
			{id: 2, text: 'Eklemek', correct: false,},
			{id: 3, text: 'Destek', correct: true,},
			{id: 4, text: 'Çıkarmak', correct: false,},
		],
	},
  {
		id: 157,
		question:'&nbsp Split Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Birleştirmek', correct: false,},
			{id: 2, text: 'Bölmek', correct: true,},
			{id: 3, text: 'Almak', correct: false,},
			{id: 4, text: 'Bırakmak', correct: false,},
		],
	},
  {
		id: 158,
		question:'&nbsp Spyware Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Casus Yazılım', correct: true,},
			{id: 2, text: 'Yazılım', correct: false,},
			{id: 3, text: 'Korsan', correct: false,},
			{id: 4, text: 'Vikingler', correct: false,},
		],
	},
  {
		id: 159,
		question:'&nbsp Status Bar Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Durum Çubuğu', correct: true,},
			{id: 2, text: 'Durum', correct: false,},
			{id: 3, text: 'Kontrol', correct: false,},
			{id: 4, text: 'Çubuk', correct: false,},
		],
	},
  {
		id: 160,
		question:'&nbsp Stop Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'A1 İngilizce', correct: false,},
			{id: 2, text: 'Durdurmak', correct: true,},
			{id: 3, text: 'İngilizce Önemli', correct: false,},
			{id: 4, text: 'Bunu Bilemiyorsan İngilizce Çalış', correct: false,},
		],
	},
  {
		id: 161,
		question:'&nbsp Syntax Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kod', correct: false,},
			{id: 2, text: 'Yazılım', correct: false,},
			{id: 3, text: 'Programlama Dilinin Yapısı', correct: true,},
			{id: 4, text: 'Programlama', correct: false,},
		],
	},
  {
		id: 162,
		question:'&nbsp System Error Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Hata', correct: false,},
			{id: 2, text: 'Çökmek', correct: false,},
			{id: 3, text: 'Sistem Hatası', correct: true,},
			{id: 4, text: 'Güncellemek', correct: false,},
		],
	},
  {
		id: 163,
		question:'&nbsp System Software Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ekip', correct: false,},
			{id: 2, text: 'Kullanıcılar', correct: false,},
			{id: 3, text: 'Sistem Ayarları', correct: false,},
			{id: 4, text: 'Sistem Yazılımı', correct: true,},
		],
	},
  {
		id: 164,
		question:'&nbsp Stage Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Mikrafon', correct: false,},
			{id: 2, text: 'Sahne', correct: true,},
			{id: 3, text: 'Konuşmacı', correct: false,},
			{id: 4, text: 'Eğitimci', correct: false,},
		],
	},
  {
		id: 165,
		question:'&nbsp Tab Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sekme', correct: true,},
			{id: 2, text: 'İçerik', correct: false,},
			{id: 3, text: 'Güncelleme', correct: false,},
			{id: 4, text: 'Bilgisayar', correct: false,},
		],
	},
  // Burda Kaldık
  {
		id: 166,
		question:'&nbsp Target Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Hesap Makinesi', correct: false,},
			{id: 2, text: 'Sayaç', correct: false,},
			{id: 3, text: 'Bayrak', correct: false,},
			{id: 4, text: 'Hedef', correct: true,},
		],
	},
  {
		id: 167,
		question:'&nbsp Testing Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Deneme Yapma', correct: false,},
			{id: 2, text: 'Test Edilmeyen', correct: false,},
			{id: 3, text: 'Test Etme', correct: true,},
			{id: 4, text: 'Eski Testler', correct: false,},
		],
	},
  {
		id: 168,
		question:'&nbsp Template Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kutu', correct: false,},
			{id: 2, text: 'Şablon', correct: true,},
			{id: 3, text: 'Kalıp', correct: false,},
			{id: 4, text: 'İfade', correct: false,},
		],
	},
  {
		id: 169,
		question:'&nbsp Text-Only Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Salt Metin', correct: true,},
			{id: 2, text: 'Salt Okuma', correct: false,},
			{id: 3, text: 'Salt Dinleme', correct: false,},
			{id: 4, text: 'Salt Site', correct: false,},
		],
	},
  {
		id: 170,
		question:'&nbsp Timer Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Zamanlayıcı', correct: true,},
			{id: 2, text: 'Geri Sayım', correct: false,},
			{id: 3, text: 'Sayım', correct: false,},
			{id: 4, text: 'Sayım 2023', correct: false,},
		],
	},
  {
		id: 171,
		question:'&nbsp Toggle Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Paragraf', correct: false,},
			{id: 2, text: 'Gövde', correct: false,},
			{id: 3, text: 'Başlık', correct: false,},
			{id: 4, text: 'Açma/Kapama Butonu', correct: true,},
		],
	},
  {
		id: 172,
		question:'&nbsp Toolbar Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Araç', correct: false,},
			{id: 2, text: 'Araç Çubuğu', correct: true,},
			{id: 3, text: 'Motor', correct: false,},
			{id: 4, text: 'Motor Çubuğu', correct: false,},
		],
	},
  {
		id: 173,
		question:'&nbsp Localhost Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sunucu', correct: false,},
			{id: 2, text: 'Global Sunucu', correct: false,},
			{id: 3, text: 'Yerel Sunucu', correct: true,},
			{id: 4, text: 'Eksik Sunucu', correct: false,},
		],
	},
  {
		id: 174,
		question:'&nbsp Transition Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Geçiş', correct: true,},
			{id: 2, text: 'Seçim', correct: false,},
			{id: 3, text: 'Seçim 2023', correct: false,},
			{id: 4, text: 'Kader Seçimi', correct: false,},
		],
	},
  {
		id: 175,
		question:'&nbsp Translator Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çevirici', correct: true,},
			{id: 2, text: 'Çevir', correct: false,},
			{id: 3, text: 'Sağa Çevir', correct: false,},
			{id: 4, text: 'Google Çeviri', correct: false,},
		],
	},
  {
		id: 176,
		question:'&nbsp TTS (Text To Speech) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Görüntü Okuma', correct: false,},
			{id: 2, text: 'Ses Okuma', correct: false,},
			{id: 3, text: 'Metin Okuma', correct: true,},
			{id: 4, text: 'Görüntü İşleme', correct: false,},
		],
	},
  {
		id: 177,
		question:'&nbsp Undo Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'İleri Al', correct: false,},
			{id: 2, text: 'Geri Al', correct: true,},
			{id: 3, text: 'Geri Git', correct: false,},
			{id: 4, text: 'İleri Git', correct: false,},
		],
	},
  {
		id: 178,
		question:'&nbsp Unzip Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Çıkarmak', correct: false,},
			{id: 2, text: 'Sıkıştırılmış Dosyayı Sağa Çıkar', correct: false,},
			{id: 3, text: 'Sıkıştırılmış Dosya', correct: false,},
			{id: 4, text: 'Sıkıştırılmış Dosyayı Dışarı Çıkar', correct: true,},
		],
	},
  {
		id: 179,
		question:'&nbsp Upgrade Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Mühendislik', correct: false,},
			{id: 2, text: 'Oyun', correct: false,},
			{id: 3, text: 'Sürüm Yükselt', correct: true,},
			{id: 4, text: 'Güncelleme', correct: false,},
		],
	},
  {
		id: 180,
		question:'&nbsp Upload Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kes', correct: false,},
			{id: 2, text: 'Seç', correct: false,},
			{id: 3, text: 'Çıkar', correct: false,},
			{id: 4, text: 'Yükle', correct: true,},
		],
	},
    {
		id: 181,
		question:'&nbsp User Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Yönetici', correct: false,},
			{id: 2, text: 'Moderatör', correct: false,},
			{id: 3, text: 'Kullanıcı', correct: true,},
			{id: 4, text: 'Uygulama', correct: false,},
		],
	},
  {
		id: 182,
		question:'&nbsp Usability Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Kullanılabilirlik', correct: true,},
			{id: 2, text: 'JOKER', correct: false,},
			{id: 3, text: 'JOKER', correct: false,},
			{id: 4, text: 'JOKER', correct: false,},
		],
	},
  {
		id: 183,
		question:'&nbsp Url Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Bilgisayar', correct: false,},
			{id: 2, text: 'Virüs', correct: false,},
			{id: 3, text: 'Bileşke', correct: false,},
			{id: 4, text: 'Uzantı', correct: true,},
		],
	},
  {
		id: 184,
		question:'&nbsp Utility Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Program', correct: false,},
			{id: 2, text: 'Sistem', correct: false,},
			{id: 3, text: 'Ana Program', correct: false,},
			{id: 4, text: 'Yardımcı Program', correct: true,},
		],
	},
  {
		id: 185,
		question:'&nbsp Valid Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Doğrulama', correct: false,},
			{id: 2, text: 'Geçerli', correct: true,},
			{id: 3, text: 'Geçersiz', correct: false,},
			{id: 4, text: 'Kontrol', correct: false,},
		],
	},
  {
		id: 186,
		question:'&nbsp Validation Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Doğru', correct: false,},
			{id: 2, text: 'Doğrulama', correct: true,},
			{id: 3, text: 'Yanlışlama', correct: false,},
			{id: 4, text: 'Yanlış', correct: false,},
		],
	},
  {
		id: 187,
		question:'&nbsp Verbose Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ayrıntılı', correct: true,},
			{id: 2, text: 'Ayrıntısız', correct: false,},
			{id: 3, text: 'Ayırmak', correct: false,},
			{id: 4, text: 'Kelime Haznem Bitti :)', correct: false,},
		],
	},
  {
		id: 188,
		question:'&nbsp Version Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ağ', correct: false,},
			{id: 2, text: 'Makine', correct: false,},
			{id: 3, text: 'Versiyon', correct: true,},
			{id: 4, text: 'Sistem', correct: false,},
		],
	},
  {
		id: 189,
		question:'&nbsp Version Control Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Versiyon', correct: false,},
			{id: 2, text: 'Versiyon Sistemi', correct: false,},
			{id: 3, text: 'Sence De Cevap Belli Değil Mi? :)', correct: false,},
			{id: 4, text: 'Verisoyon Kontrol', correct: true,},
		],
	},
  {
		id: 190,
		question:'&nbsp View Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Görünmez', correct: false,},
			{id: 2, text: 'Çerez', correct: false,},
			{id: 3, text: 'Gizlilik', correct: false,},
			{id: 4, text: 'Görünüm', correct: true,},
		],
	},
  {
		id: 191,
		question:'&nbsp Virtual Machine Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sanal Makine', correct: true,},
			{id: 2, text: 'Makine', correct: false,},
			{id: 3, text: 'AI', correct: false,},
			{id: 4, text: 'Sanal', correct: false,},
		],
	},
  {
		id: 192,
		question:'&nbsp Virus Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Virüs', correct: true,},
			{id: 2, text: 'Antivirüs', correct: false,},
			{id: 3, text: 'E Bunu Da Bil Artık :)', correct: false,},
			{id: 4, text: 'Elenen Şık', correct: false,},
		],
	},
  {
		id: 193,
		question:'&nbsp Visible Page Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Görünebilirlik', correct: false,},
			{id: 2, text: 'Ekran', correct: false,},
			{id: 3, text: 'Görünür Ekran', correct: true,},
			{id: 4, text: 'Görünmez Ekran', correct: false,},
		],
	},
  {
		id: 194,
		question:'&nbsp VPN(Virtual Private Network) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sanal Ağ', correct: false,},
			{id: 2, text: 'Sanal Özel Ağ', correct: true,},
			{id: 3, text: 'Ağ', correct: false,},
			{id: 4, text: 'Sanal', correct: false,},
		],
	},
  {
		id: 195,
		question:'&nbsp Wizard Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'J.K Rowling', correct: false,},
			{id: 2, text: 'Harry Potter', correct: false,},
			{id: 3, text: 'Sihir', correct: false,},
			{id: 4, text: 'Sihirbaz', correct: true,},
		],
	},
  {
		id: 196,
		question:'&nbsp Word Count Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sayım', correct: false,},
			{id: 2, text: 'Sayım Yapmak', correct: false,},
			{id: 3, text: 'Sözcük', correct: false,},
			{id: 4, text: 'Sözcük Sayımı', correct: true,},
		],
	},
  {
		id: 197,
		question:'&nbsp Wrap Text Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Metni Düzenle', correct: false,},
			{id: 2, text: 'Metni Kaydır', correct: true,},
			{id: 3, text: 'Metin', correct: false,},
			{id: 4, text: 'Metni Sil', correct: false,},
		],
	},
  {
		id: 198,
		question:'&nbsp WYSIWYG (What You See Is What You Get) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Ne Görüyorsan Sonuç Olarak Onu Alırsın', correct: false,},
			{id: 2, text: 'Çalışıyorsa Dokunma', correct: false,},
			{id: 3, text: 'Gördüğünü Al', correct: false,},
			{id: 4, text: 'Görüyorsan Senindir', correct: true,},
		],
	},
  {
		id: 199,
		question:'&nbsp WAGMI(We All Gonna Make It) Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Hepimiz Başaracağız!', correct: true,},
			{id: 2, text: 'Hiçbirimiz Başaramayacağız!', correct: false,},
			{id: 3, text: 'Birlikte Başarırız', correct: false,},
			{id: 4, text: 'Başaramadık', correct: false,},
		],
	},
  {
		id: 200,
		question:'&nbsp ZIP Kelimesinin Anlamı Nedir?',
		options: [ 
			{id: 1, text: 'Sıkıştırılmış Dosya', correct: true,},
			{id: 2, text: 'Sıkıştırılmamış Dosya', correct: false,},
			{id: 3, text: 'Dosya', correct: false,},
			{id: 4, text: 'Klasör', correct: false,},
		],
	},
];




const questionElement = document.getElementById('question'),
	answerButtons = document.getElementById('answer-buttons'),
	nextButton = document.getElementById('next-btn'),
	previousButton = document.getElementById('pre-btn'),
	finishButton = document.getElementById('finish-btn'),
	playAgainButton = document.getElementById('play-again-btn');
const continueButton = document.getElementById('continue-btn');


finishButton.addEventListener('click', handleFinishButton);

let currentQuestionIndex = 0;
let score = 0;

let answers = [];

function playAgain() {
	 // resetState();
    // startQuiz();
    location.reload();
	
     /*currentQuestionIndex = answers.length;
  if (currentQuestionIndex === questions.length) {
    currentQuestionIndex--; // Son soruya gelinmişse bir önceki soruya geri dön
  }
  showQuestion();
  togglePreviousButton();
  nextButton.style.display = "block";
  finishButton.style.display = "block";
  playAgainButton.style.display = "none";*/
}

function toggleButton(button, show) {
	show ? (button.style.display = 'block') : (button.style.display = 'none');
}

function handleFinishButton() {
    showScore();
    finishButton.style.display = 'none';
    previousButton.style.display = 'none';
    nextButton.style.display = 'none';
    playAgainButton.style.display = 'inline-block';
    continueButton.style.display = 'inline-block'; // Kaldığın Yerden Devam Et butonunu göster
}


function handlePreviousButton() {
    currentQuestionIndex--;
    showQuestion();
    togglePreviousButton();
  
    nextButton.style.display = 'block';
  
    const currentQuestionId = questions[currentQuestionIndex].id;
    const answer = answers.find((answer) => answer.questionId === currentQuestionId);
    if (answer) {
      const selectedBtn = document.getElementById(answer.optionId);
      if (answer.isCorrect) {
        selectedBtn.classList.add('correct');
      } else {
        selectedBtn.classList.add('incorrect');
        const correctBtn = document.querySelector(`[data-correct="true"]`);
        correctBtn.classList.add('correct');
      }
    }
	let statusBar = document.getElementById('status-bar');
	statusBar.innerHTML = currentQuestionIndex + 1 + '/' + questions.length;
      // Disable answer buttons to prevent changing the answer
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  })

  }

function togglePreviousButton() {
	if (currentQuestionIndex === 0 || questions.length == currentQuestionIndex) {
		previousButton.style.display = 'none';
	} else {
		previousButton.style.display = 'inline-block';
	}
	
}

function startQuiz() {
	toggleButton(finishButton, true);
	toggleButton(playAgainButton, false);
	toggleButton(nextButton, false);
	toggleButton(previousButton, false);
	currentQuestionIndex = 0;
	score = 0;
    isAnswered = false;
	showQuestion();
	let statusBar = document.getElementById('status-bar');
	statusBar.innerHTML = '1/' + questions.length;
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    let questionId = currentQuestion.id;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.question;
  
    currentQuestion.options.forEach((answer) => {
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.id = questionId + '_' + answer.id;
      button.classList.add('btn');
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
    });
  
    togglePreviousButton();
  
    if (currentQuestionIndex === questions.length - 1) {
      nextButton.innerHTML = 'Sonucu Göster';
    } else {
      nextButton.innerHTML = 'Sonraki Soru';
    }
	
	let statusBar = document.getElementById('status-bar');
	statusBar.innerHTML = questionNo + '/' + questions.length;
  }

function resetState() {
	nextButton.style.display = 'none';
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === 'true';
	const questionId = questions[currentQuestionIndex].id;
  
	if (!answers.find((answer) => answer.questionId === questionId)) {
	  if (isCorrect) {
		selectedBtn.classList.add('correct');
		score++;
		playCorrectSound();
	  } else {
		selectedBtn.classList.add('incorrect');
		const correctBtn = document.querySelector(`[data-correct="true"]`);
		correctBtn.classList.add('correct');
		playIncorrectSound();
	  }
	  answers.push({
		questionId: questionId,
		optionId: selectedBtn.id,
		isCorrect: isCorrect,
	  });
	}
  
	Array.from(answerButtons.children).forEach((button) => {
	  button.disabled = true;
	});
  
	nextButton.style.display = 'block';
  }

  function playCorrectSound() {
	const correctSound = document.getElementById('correct-sound');
	correctSound.play();
  }
  
  function playIncorrectSound() {
	const incorrectSound = document.getElementById('incorrect-sound');
	incorrectSound.play();
  }

  // Kaldığın Yerden Devam Et
  function handleContinueButton() {
	
    if (answers.length === questions.length) {
        // Kullanıcı tüm soruları çözmüşse
        showScore();
        continueButton.disabled = true; // Kaldığın Yerden Devam Et butonunu inaktif et
        toggleButton(finishButton, false); // Testi Bitir butonunu gizle
		window.alert("Test Bitti. Yeniden Oynayabilirsin!");
    } else {
        toggleButton(finishButton, true); // Testi Bitir butonunu göster

        if (currentQuestionIndex < questions.length - 1 && answers.length > currentQuestionIndex) {
            currentQuestionIndex++;
        } else if (currentQuestionIndex === questions.length - 1 && answers.length === currentQuestionIndex + 1) {
            currentQuestionIndex = 1;
        }

        showQuestion();
        togglePreviousButton();

        if (currentQuestionIndex === questions.length - 1) {
            toggleButton(finishButton, true); // Son soruda ise Testi Bitir butonunu göster
        }
		
        toggleButton(playAgainButton, false);
        toggleButton(continueButton, false); // Kaldığın Yerden Devam Et, Yeniden Oyna ve Testi Bitir butonlarını gizle

        const currentQuestionId = questions[currentQuestionIndex].id;
        const answer = answers.find((answer) => answer.questionId === currentQuestionId);

        if (answer) {
            const selectedBtn = document.getElementById(answer.optionId);
            selectedBtn.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
        }
    }

    // Son soruyu çözmüşse Kaldığın Yerden Devam Et butonunu inaktif et
    if (answers.length === questions.length) {
        continueButton.disabled = true;
    }
}

continueButton.addEventListener('click', handleContinueButton);

// SKoru Göster
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Skorun ${questions.length} Soru Üzerinden: ${score}!`;
    toggleButton(playAgainButton, true);
    toggleButton(nextButton, false);
    toggleButton(finishButton, false);
    toggleButton(previousButton, false);
    toggleButton(continueButton, true); // Kaldığın Yerden Devam Et butonunu gizle

	const resultElement = document.getElementById('result');
  resultElement.innerHTML = ''; // Önceki sonuçları temizle

  const wrongAnswers = answers.filter((answer) => !answer.isCorrect);
  if (wrongAnswers.length > 0) {
    const resultHeading = document.createElement('h3');
    resultHeading.innerText = 'Yanlış Cevapladığınız Sorular:';
	resultHeading.classList.add('wrong-answers-title');
    resultElement.appendChild(resultHeading);

    const resultList = document.createElement('ul');
    wrongAnswers.forEach((answer) => {
		const question = questions.find((question) => question.id === answer.questionId);
		const listItem = document.createElement('li');
		const questionText = document.createElement('span');
		const correctAnswerText = document.createElement('span');
	  
		questionText.innerHTML = question.question;
		correctAnswerText.innerHTML = `Doğru Cevap: ${question.options.find((option) => option.correct).text}`;
		correctAnswerText.classList.add('correct-answer');
	  
		// "&nbsp;" ifadesini doğrudan kaldırmak için replace işlemi yapın
		questionText.innerHTML = questionText.innerHTML.replace(/&nbsp;/g, '');
	  
		listItem.appendChild(questionText);
		listItem.appendChild(correctAnswerText);
		resultList.appendChild(listItem);
		resultList.appendChild(document.createElement('br'));
	  });
    resultElement.appendChild(resultList);
  } else {
    const noWrongAnswers = document.createElement('p');
    noWrongAnswers.innerText = 'Yanlış cevapladığınız soru bulunmamaktadır.';
    resultElement.appendChild(noWrongAnswers);
  }
}

function handleNextButton() {
	
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      const currentQuestionId = questions[currentQuestionIndex].id;
      const answer = answers.find((answer) => answer.questionId === currentQuestionId);
      if (answer) {
        const selectedBtn = document.getElementById(answer.optionId);
        selectedBtn.classList.add(answer.isCorrect ? 'correct' : 'incorrect');
      }
      nextButton.style.display = 'block';
    } else {
      showScore();
    }
	let statusBar = document.getElementById('status-bar');
  statusBar.innerHTML = currentQuestionIndex + 1 + '/' + questions.length;
  }

nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});

function hideResultContainer() {
    const resultContainer = document.getElementById('result');
    resultContainer.style.display = 'none';
}

startQuiz();
