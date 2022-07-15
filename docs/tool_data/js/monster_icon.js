let monsterData = null;
async function loadMonsterData() {
    if(monsterData === null) {
        // ...
    }
}

const generateTooltipId = (function() {
    let incrementingId = 0;
    return function() {
        ++incrementingId;
        return `tooltip-${incrementingId}`;
    };
}());

function generateMonsterIcon(monsterId) {
    const image_base = 'https://tinghan33704.github.io/tos_tool_data/img/monster/';
    //const image_base = '/tool_data/image/monster/';
    const tooltipId = generateTooltipId();
    return {
        'html': `<img src="${image_base}${monsterId}.png" alt="${monsterId}" data-tooltip-id="${tooltipId}" /><div class="mdc-tooltip" id="${tooltipId}" role="tooltip" aria-hidden="true"><div class="mdc-tooltip__surface mdc-tooltip__surface-animation">#${monsterId}</div></div>`,
        'tooltipId': tooltipId
    };
    // mdc.tooltip.MDCTooltip.attachTo(document.querySelector('div#'+result.tooltipId));
}
