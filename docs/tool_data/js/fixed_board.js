function get_fixed_shape(args) {
    // 2 digits for one position
    // first digit: attribute | enchanted<<3
    // second digit: race

    // indexes:
    // 0 1 2 3 4 5
    // 6 7 ...
    // ...
    let nr, nc, board_repr;
    [nr, nc, board_repr] = args.split(' ');

    let board = Array.from({length: nr}, () => Array.from({length: nc}, () => 0));
    const rune_types = ['none', 'water', 'fire', 'earth', 'light', 'dark', 'heart', 'lock'];
    const rune_races = ['none', 'human', 'god', 'demon', 'dragon', 'beast', 'elf', 'machina'];
    for(let row=0; row<nr; ++row) for(let col=0; col<nc; ++col) {
        const type_n = parseInt(board_repr[2*(nc*row+col)], 16);
        const race_n = parseInt(board_repr[2*(nc*row+col)+1], 16);
        board[row][col] = {
            'type': rune_types[type_n&7] + (type_n>8?'_e':''),
            'race': rune_races[race_n]
        };
    }

    const image_base = '/tool_data/image/rune/';
    let board_html = '<table class="fixed_board">';
    for(let row=0; row<nr; ++row) {
        board_html += '<tr>';
        for(let col=0; col<nc; ++col) {
            board_html += `<td><img src="${image_base + board[row][col].type}.png" /><img src="${image_base + board[row][col].race}.png" /></td>`;
        }
        board_html += '</tr>';
    }
    board_html += '</table>';

    return board_html;
}

function get_fixed_board(board_repr) {
    // fixed 5r*6c
    return get_fixed_shape('5 6 ' + board_repr);
}

function get_fixed_position(pos_repr) {
    // fixed 5r*6c
    let board_repr = '';
    [...pos_repr].forEach((mark) => {
        if(mark == '1') board_repr += '70';
        else if(mark == '2') board_repr += 'f0';
        else board_repr += '00';
    });
    
    return get_fixed_shape('5 6 ' + board_repr);
}
