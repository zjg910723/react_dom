import qs from 'qs';

class Util {
    constructor() {}
    goPath(path, obj) {
        var qsInfo = qs.stringify(obj);
        window.location.hash = `${path}?${qsInfo}`
    }

    searchStr() {
        var _regex = /\?(.+)/.exec(window.location.hash);
        return _regex ? _regex[1] : '';
    }

    fontInit(float) {

        document.documentElement.style.fontSize = document.documentElement.clientWidth / float + 'px';
        window.addEventListener('resize', function() {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / float + 'px';
        }, false)
    }

    extend(obj, newObj) {
        for (let i in obj) {
            newObj[i] = obj[i];
        }
        return newObj;
    }

    setQsInfo(object) {
        return qs.stringify(Object.assign(qs.parse(this.searchStr()), object ? object : {}))
    }

    checkReg(str) {
        var _reg = new RegExp('(?:' + str + '\\=)(\\w+)(?:;)');
        var value = _reg.exec(document.cookie);
        return value ? value[1] : '';
    }

}

export default new Util();