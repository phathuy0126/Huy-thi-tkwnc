function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) || {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save()
        },
        remove(key) {
            delete store[key];
            save()
        }
    }
    return storage;
}


function formatNumber(a, b, c, d) {
    var e = isNaN(b = Math.abs(b)) ? 2 : b;
    b = void 0 == c ? "," : c;
    d = void 0 == d ? "," : d;
    c = 0 > a ? "-" : "";
    var g = parseInt(a = Math.abs(+a || 0).toFixed(e)) + "",
    n = 3 < (n = g.length) ? n % 3 : 0;
    return c + (n ? g.substr(0, n) + d : "") + g.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + d) + (e ? b + Math.abs(a - g).toFixed(e).slice(2) : "")
}


const product = createStorage('product');
const productAddCart = createStorage('productAddCart');