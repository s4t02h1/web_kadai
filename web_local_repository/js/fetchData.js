function fetchData(items) {
		
    // 商品名：商品の画像ファイル名
    var IMGS = {
        'Bella Toes'    : 'images/s1.jpg',
        'Chikku Loafers': 'images/s2.jpg',
        '(SRV) Sneakers': 'images/s3.jpg',
        'Shuberry Heels': 'images/s4.jpg',
        'Red Bellies'   : 'images/s5.jpg',
        'Catwalk Flats' : 'images/s6.jpg',
        'Running Shoes' : 'images/s7.jpg',
        'Sukun Casuals' : 'images/s8.jpg',
        'Bank Sneakers' : 'images/s9.jpg'
    };

    var data = [];
    var i;
    //TODO 課題１：itemsから個々の商品の必要な情報を取り出し、配列dataに追加する
    if (items) {
        for (i = 0; i < items.length; i++) {
            // 情報の取出し
            var item = {
                
                name : items[i]._data.shoe_item,
                img : IMGS[items[i]._data.shoe_item],
                price : items[i]._data.amount,
                quantity : items[i]._data.quantity
            }
            data.push(item);
            // itemをdataに追加
        }
    }
    return data;
}
