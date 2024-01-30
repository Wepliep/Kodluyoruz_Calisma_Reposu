// -------------------------  1  --------------------------------  
//    *** Length Özelliği - Uzunluk Değerini Alma ***
//String veri tipindeki ifadenin uzunluğunu bulmak için
console.log("1. length");

let isim = "Erkan Çekiç";
console.log(isim.length);


// -------------------------  2  --------------------------------  
//    *** indexOf - Metin İçinde Arama Yapma ***
//Metnin içinde aramak istediğimiz değerin index numarasını bize verir.
console.log("2. indexOf");

let isim2 = "Erkan Çekiç";
console.log(isim2.indexOf("Çe"));

// -------------------------  3  --------------------------------  
//    *** lastIndexOf- Metin İçinde Arama Yapma ***
//indexOf ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür.
console.log("3. lastIndexOf");

let isim3 = "Erkan Çekiç";
console.log(isim3.lastIndexOf("an"));

// -------------------------  4  --------------------------------  
//    *** Search - Metin İçinde Arama Yapma ***
//indexOf ile aynı sonuçlara ulaşırız genel olarak "Regular Expressions" işlemleri için çok kullanılan bir metottur.
console.log("4. search");

let isim4 = "Erkan Çekiç";
console.log(isim4.search("iç"));

// -------------------------  5  --------------------------------  
//    *** Slice - Metninden Parça Almak ***
//Metin içinden almak istediğimiz yerlerin index numaralarını vererek metin içinde bulunan parçayı alabiliriz.
console.log("5. slice");

let isim5 = "Erkan Çekiç";
console.log(isim5.slice(5,9));
console.log(isim5.slice(5));

// -------------------------  6  --------------------------------  
//    *** Replace – Metin Bulma ve Değiştirme ***
//Aranan metni istediğimiz metin ile değiştirmemize olanak sağlar.
console.log("6. replace");

let isim6 = "Erkan Çekiç";
console.log(isim6.replace("Erkan","Hasan"));

// -------------------------  7  --------------------------------  
//    *** toUpperCase – Metin Harflerini Büyütme ***
//Metin içinde bulunan tüm karakterleri büyük harf yapmamıza olanak sağlar.
console.log("7. toUpperCase");

let isim7 = "Erkan Çekiç";
console.log(isim7.toUpperCase());

// -------------------------  8  --------------------------------  
//    *** toLowerCase – Metin Harflerini Küçültme ***
//Metin içinde bulunan tüm karakterleri küçük harf yapmamıza olanak sağlar.
console.log("8. toLowerCase");

let isim8 = "Erkan Çekiç";
console.log(isim8.toLowerCase());

// -------------------------  9  --------------------------------  
//    *** Concat - Metin Birleştirme ***
//Elimizde bulunan iki string türündeki veriyi birleştirmemize olanak sağlar.
console.log("9. concat");

let isim9 = "Erkan";
let soyad9 = "Çekiç";
console.log(isim9.concat(' ',soyad9));


// -------------------------  10  --------------------------------  
//    *** charAt- İndex Numarasına Göre Karakter Bulmak ***
//Belirtilen index numarasında yer alan karakteri verir.
console.log("10. charAt");

let isim10 = "Erkan Çekiç";
console.log(isim.charAt(2));

// -------------------------  11  --------------------------------  
//    *** charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma ***
//Belirtilen index numarasında yer alan karakterin Unicode değerini verir.
console.log(" charCodeAt");

let isim11 = "Erkan Çekiç";
console.log(isim11.charCodeAt(2));


// -------------------------  12  --------------------------------  
//    *** Split – Metni Diziye Çevirme ***
//Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.
console.log("12. split");

let isim12 = "Erkan Çekiç";
console.log(isim12.split(' '));



//Örnek İşlem
//e posta değerindeki service kısmını yazdıran bir işlem yap.
let E_MAIL="erkancekic_01@hotmail.com";

let EMailService =  E_MAIL.slice(E_MAIL.search("@")+1,E_MAIL.lastIndexOf("."));
console.log("E-Mail-Service: " + EMailService);





