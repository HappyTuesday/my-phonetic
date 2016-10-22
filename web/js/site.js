var phonetic_map = {
    // 前元音
    'i:': { dj: 'i:', kk: 'i',  mp3: 'mp3/i-.mp3' },
    'I' : { dj: 'ɪ' , kk: 'ɪ',  mp3: 'mp3/I_.mp3' },
    'e' : { dj: 'e',  kk: 'ɛ',  mp3: 'mp3/e.mp3'  },
    'ae': { dj: 'æ',  kk: 'æ',  mp3: 'mp3/ae.mp3' },
    // 中元音
    'a' : { dj: 'ʌ',  kk: 'ʌ',  mp3: 'mp3/a.mp3'  },
    'E:': { dj: 'ɜ:', kk: 'ɜ',  mp3: 'mp3/E_-.mp3'},
    'E' : { dj: 'ə',  kk: 'ə',  mp3: 'mp3/E_.mp3' },
    // 后元音
    'u:': { dj: 'u:', kk: 'u',  mp3: 'mp3/u-.mp3' },
    'u' : { dj: 'ʊ',  kk: 'ʊ',  mp3: 'mp3/u.mp3'  },
    'o:': { dj: 'ɔ:', kk: 'ɔ',  mp3: 'mp3/o-.mp3' },
    'o' : { dj: 'ɒ',  kk: 'ɑ',  mp3: 'mp3/o.mp3'  },
    'a:': { dj: 'ɑ:', kk: 'ɑ',  mp3: 'mp3/a-.mp3' },
    // 开合双元音
    'ei': { dj: 'eɪ', kk: 'e',  mp3: 'mp3/ei.mp3' },
    'ai': { dj: 'aɪ', kk: 'aɪ', mp3: 'mp3/ai.mp3'},
    'oi': { dj: 'ɔɪ', kk: 'ɔɪ', mp3: 'mp3/oi.mp3'},
    'au': { dj: 'aʊ', kk: 'aʊ', mp3: 'mp3/au.mp3'},
    'O' : { dj: 'əʊ', kk: 'o',  mp3: 'mp3/O_.mp3'},
    // 集中双元音
    'ir': { dj: 'ɪə', kk: 'ɪr', mp3: 'mp3/ir.mp3'},
    'er': { dj: 'eə', kk: 'ɛr', mp3: 'mp3/er.mp3'},
    'ur': { dj: 'ʊə', kk: 'ʊr', mp3: 'mp3/ur.mp3'},
    // 爆破音
    'p' : { dj: 'p' , kk: 'p' , mp3: 'mp3/p.mp3' },
    'b' : { dj: 'b' , kk: 'b' , mp3: 'mp3/p.mp3' },
    't' : { dj: 't' , kk: 't' , mp3: 'mp3/t.mp3' },
    'd' : { dj: 'd' , kk: 'd' , mp3: 'mp3/d.mp3' },
    'k' : { dj: 'k' , kk: 'k' , mp3: 'mp3/k.mp3' },
    'g' : { dj: 'ɡ' , kk: 'ɡ' , mp3: 'mp3/g.mp3' },
    // 摩擦音
    'f' : { dj: 'f' , kk: 'f' , mp3: 'mp3/f.mp3' },
    'v' : { dj: 'v' , kk: 'v' , mp3: 'mp3/v.mp3' },
    's' : { dj: 's' , kk: 's' , mp3: 'mp3/s.mp3' },
    'z' : { dj: 'z' , kk: 'z' , mp3: 'mp3/z.mp3' },
    'ss': { dj: 'ʃ' , kk: 'ʃ' , mp3: 'mp3/ss.mp3'},
    'zz': { dj: 'ʒ' , kk: 'ʒ' , mp3: 'mp3/zz.mp3'},
    'S' : { dj: 'θ' , kk: 'θ' , mp3: 'mp3/S_.mp3'},
    'Z' : { dj: 'ð' , kk: 'ð' , mp3: 'mp3/Z_.mp3'},
    'h' : { dj: 'h' , kk: 'h' , mp3: 'mp3/h.mp3' },
    // 破擦音
    'q' : { dj: 'tʃ', kk: 'tʃ', mp3: 'mp3/q.mp3' },
    'j' : { dj: 'dʒ', kk: 'dʒ', mp3: 'mp3/j.mp3' },
    'tr': { dj: 'tr', kk: 'tr', mp3: 'mp3/tr.mp3'},
    'dr': { dj: 'dr', kk: 'dr', mp3: 'mp3/dr.mp3'},
    'ts': { dj: 'ts', kk: 'ts', mp3: 'mp3/ts.mp3'},
    'dz': { dj: 'dz', kk: 'dz', mp3: 'mp3/dz.mp3'},
    // 鼻音
    'm' : { dj: 'm' , kk: 'm' , mp3: 'mp3/m.mp3' },
    'n' : { dj: 'n' , kk: 'n' , mp3: 'mp3/n.mp3' },
    'ng': { dj: 'ŋ' , kk: 'ŋ' , mp3: 'mp3/ng.mp3'},
    'l' : { dj: 'l' , kk: 'l' , mp3: 'mp3/l.mp3' },
    'r' : { dj: 'r' , kk: 'r' , mp3: 'mp3/r.mp3' },
    'w' : { dj: 'w' , kk: 'w' , mp3: 'mp3/w.mp3' },
    'y' : { dj: 'j' , kk: 'j' , mp3: 'mp3/y.mp3' },
};

var phonetic_context = {
    last_key: null,
    last_key_appended: true,
    current_line: [],
    lines: [],
    phonetic_lang: 'dj'
}

function update_current_line(){
    $('#input').val(phonetic_context.current_line.join(''));
}

function append_current_line(){
    $('#lines').append('<li>' + phonetic_context.current_line.join('') + '</li>');
}

function play_single_phonetic(phonetic_key){
    mp3_player.src = phonetic_map[phonetic_key].mp3;
    mp3_player.play();
}

function commit_last_key(){
    if(!phonetic_context.last_key_appended){
        console.warn("last typed key is invalid: %s", phonetic_context.last_key);
    }
    phonetic_context.last_key = null;
    phonetic_context.last_key_appended = true;
    update_current_line();
}

function submit_line(){
    commit_last_key();
    phonetic_context.lines += phonetic_context.current_line;
    append_current_line();
    phonetic_context.current_line = [];
    update_current_line();
}

function append_normal_key(key){
    commit_last_key();
    phonetic_context.current_line.push(key);
    update_current_line();
}

function backspace(){
    if(phonetic_context.last_key_appended){
        phonetic_context.current_line.pop();
        update_current_line();
    }else{
        phonetic_context.last_key = null;
        phonetic_context.last_key_appended = true;
    }
}

function append_phonetic(phonetic_key, is_replace){
    var index = phonetic_context.current_line.length - (is_replace && phonetic_context.last_key_appended ? 1 : 0);
    phonetic_context.current_line[index] = phonetic_map[phonetic_key][phonetic_context.phonetic_lang];
    phonetic_context.last_key_appended = true;
    if(is_replace){
        phonetic_context.last_key = null;
    }else{
        phonetic_context.last_key = phonetic_key;
    }
    update_current_line();
    play_single_phonetic(phonetic_key);
}

$('#input').keypress(function(e){
    if(e.key == 'Enter'){
        submit_line();
    }else if(e.key == ' '){
        append_normal_key(e.key);
    }else if(phonetic_context.last_key != null){
        if(phonetic_map[phonetic_context.last_key + e.key]){
            append_phonetic(phonetic_context.last_key + e.key, true);
        }else{
            commit_last_key();
            if(phonetic_map[e.key]){
                append_phonetic(e.key, false);
            }else{
                phonetic_context.last_key = e.key;
                phonetic_context.last_key_appended = false;
            }
        }
    }else if(phonetic_map[e.key]){
        append_phonetic(e.key, false);
    }else{
        phonetic_context.last_key = e.key;
        phonetic_context.last_key_appended = false;
    }
    return false;
}).keydown(function(e){
    if(e.key == 'Backspace'){
        backspace();
    }
})