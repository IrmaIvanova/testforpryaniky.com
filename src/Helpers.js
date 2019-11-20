// можно назвать getIconPairArrayByName или в этом духе
// на примере 'fas fa-check-square',
export function extractIconPairArray(icon) {
    // тут берём наш icon в который прислали строку 'fas fa-check-square'
    // разделяем на массив ['fas', 'fa-check-square']
    // в parts[0] - 'fas'
    // в parts[1] - 'fa-check-square'
    const parts = icon.split(' '); // разбивает строку на массив, пробел - разделитель

    // сохраняем 'fas' в качестве префикса иконок
    const prefix = parts[0]; // берём 'fas'

    // тут берём наш parts[1] - 'fa-check-square'
    // и убираем первые три символа, точнее -
    // забираем всё, кроме первых трёх символов
    // можно было бы так написать:
    // const name = parts[1].substr(3)[1];
    // но число 3 - это тут какое-то магическое число (откуда взялось?).
    // Гораздо понятнее, когда ясно, откуда оно
    // вот тут мы указываем откуда начать через длину строки 'fa-',
    // то, сколько символов сначала отбросить
    const name = parts[1].substr('fa-'.length);

    // возвращаем подходящую пару из префикса и имени иконки
    // ['fas', 'check-square']
    // которую можно использовать передав в атрибут icon
    return [prefix, name];
}
