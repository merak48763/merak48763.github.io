function get_fixed_board(board_rep) {
    // representation of board_rep:
    // every 2 hex numbers represent one position
    // first digit: attribute | enchanted<<3
    // second digit: race
    // 0 is empty
    let board = Array.from({length: 5}, (v, k) => Array.from({length: 6}, (v, k) => 0));
    const rune_types = ['none', 'water', 'fire', 'earth', 'light', 'dark', 'heart'];
    const rune_races = ['none', 'human', 'god', 'demon', 'dragon', 'beast', 'elf', 'machina'];
    for(let row=0; row<5; ++row) for(let col=0; col<6; ++col) {
        const type_n = parseInt(board_rep[2*(6*row+col)], 16);
        const race_n = parseInt(board_rep[2*(6*row+col)+1], 16);
        board[row][col] = {
            //'type': rune_types[type_n&7] + (type_n>8?'_e':''),
            'type': rune_types[type_n&7] + (type_n>8?'_enc':''),
            'race': rune_races[race_n]
        };
    }

    //const image_base = '/tool_data/image/rune/';
    const image_base = 'https://tinghan33704.github.io/tos_tool_data/img/rune/';
    let board_html = '<table class="fixed_board">';
    for(let row=0; row<5; ++row) {
        board_html += '<tr>';
        for(let col=0; col<6; ++col) {
            board_html += `<td><img src="${image_base + board[row][col].type}.png" /><img src="${image_base + board[row][col].race}.png" /></td>`;
        }
        board_html += '</tr>';
    }
    board_html += '</table>';

    return board_html;
}
